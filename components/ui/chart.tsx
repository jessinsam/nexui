'use client'

/**
 * NexUI — Custom Chart Wrapper
 * Pure Recharts. No Radix. No shadcn. Zero external UI deps.
 */

import * as React from 'react'
import * as RechartsPrimitive from 'recharts'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
  }
}

type ChartContextValue = { config: ChartConfig }

const ChartContext = React.createContext<ChartContextValue | null>(null)

function useChart() {
  const ctx = React.useContext(ChartContext)
  if (!ctx) throw new Error('useChart must be used within a ChartContainer')
  return ctx
}

// ─── ChartContainer ───────────────────────────────────────────────────────────

export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  config: ChartConfig
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children']
}) {
  const uid = React.useId()
  const chartId = `chart-${id ?? uid.replace(/:/g, '')}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn('flex aspect-video w-full justify-center text-xs', className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

// ─── ChartStyle — injects CSS color vars ─────────────────────────────────────

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const entries = Object.entries(config).filter(([, v]) => v.color)
  if (!entries.length) return null

  const vars = entries
    .map(([key, v]) => `  --color-${key}: ${v.color};`)
    .join('\n')

  return (
    <style
      // biome-ignore lint/security/noDangerouslySetInnerHtml: chart CSS vars
      dangerouslySetInnerHTML={{ __html: `[data-chart=${id}] {\n${vars}\n}` }}
    />
  )
}

// ─── ChartTooltip ─────────────────────────────────────────────────────────────

export const ChartTooltip = RechartsPrimitive.Tooltip

export function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  hideLabel = false,
  hideIndicator = false,
  formatter,
  labelFormatter,
  nameKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.HTMLAttributes<HTMLDivElement> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!active || !payload?.length) return null

  return (
    <div
      className={cn(
        'rounded-xl border border-border/60 bg-card/95 backdrop-blur-sm px-3 py-2 shadow-2xl shadow-black/40 text-xs',
        className,
      )}
    >
      {!hideLabel && label != null && (
        <p className="font-semibold text-foreground mb-1.5">
          {labelFormatter ? labelFormatter(label, payload) : String(label)}
        </p>
      )}
      <div className="flex flex-col gap-1">
        {payload.map((item, i) => {
          const key = String(nameKey ?? item.name ?? item.dataKey ?? 'value')
          const cfg = config[key]
          const color = cfg?.color ?? (item as any).color ?? (item as any).fill
          const displayName = cfg?.label ?? item.name

          return (
            <div key={i} className="flex items-center gap-2">
              {!hideIndicator && (
                <span
                  className="size-2 shrink-0 rounded-sm"
                  style={{ background: color }}
                />
              )}
              <span className="text-muted-foreground flex-1">{displayName}</span>
              <span className="font-medium text-foreground tabular-nums font-mono">
                {formatter
                  ? formatter(item.value as any, key, item, i, payload)
                  : typeof item.value === 'number'
                  ? item.value.toLocaleString()
                  : String(item.value)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── ChartLegend ─────────────────────────────────────────────────────────────

export const ChartLegend = RechartsPrimitive.Legend

export function ChartLegendContent({
  payload,
  className,
  nameKey,
}: React.HTMLAttributes<HTMLDivElement> &
  Pick<RechartsPrimitive.LegendProps, 'payload'> & {
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!payload?.length) return null

  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-4 pt-3', className)}>
      {payload.map((item, i) => {
        const key = String(nameKey ?? item.dataKey ?? 'value')
        const cfg = config[key]
        const color = cfg?.color ?? item.color
        const label = cfg?.label ?? item.value

        return (
          <div key={i} className="flex items-center gap-1.5">
            {cfg?.icon ? (
              <cfg.icon />
            ) : (
              <span className="size-2 shrink-0 rounded-sm" style={{ background: color }} />
            )}
            <span className="text-[10px] text-muted-foreground">{label}</span>
          </div>
        )
      })}
    </div>
  )
}

// ─── ChartStyle re-export ─────────────────────────────────────────────────────
export { ChartStyle }
