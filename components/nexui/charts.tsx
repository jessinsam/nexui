"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"

/** Renders nothing on the server; only mounts on the client after hydration.
 *  Prevents any SVG coordinate mismatch between SSR and client. */
function useMounted() {
  const [mounted, setMounted] = React.useState(false)
  useEffect(() => { setMounted(true) }, [])
  return mounted
}

// ─── Shared types ──────────────────────────────────────────────────────────────

export interface ChartTooltipData {
  label: string
  items: { name: string; value: string | number; color: string }[]
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────

function Tooltip({ x, y, data }: { x: number; y: number; data: ChartTooltipData }) {
  return (
    <div
      className="pointer-events-none absolute z-50 rounded-lg border border-border/60 bg-card px-3 py-2 shadow-xl text-xs"
      style={{ left: x, top: y, transform: "translate(-50%, -110%)", minWidth: 120 }}
    >
      <p className="font-semibold text-foreground mb-1">{data.label}</p>
      {data.items.map((it) => (
        <div key={it.name} className="flex items-center gap-1.5 text-muted-foreground">
          <span className="size-2 rounded-sm shrink-0" style={{ background: it.color }} />
          <span className="flex-1">{it.name}</span>
          <span className="font-semibold text-foreground tabular-nums">{it.value}</span>
        </div>
      ))}
    </div>
  )
}

// ─── Legend ───────────────────────────────────────────────────────────────────

export function ChartLegend({ items }: { items: { color: string; label: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-3 px-1">
      {items.map((it) => (
        <div key={it.label} className="flex items-center gap-1.5">
          <span className="size-2 rounded-sm shrink-0" style={{ background: it.color }} />
          <span className="text-xs text-muted-foreground">{it.label}</span>
        </div>
      ))}
    </div>
  )
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function nice(v: number): string {
  if (Math.abs(v) >= 1000) return `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}k`
  return String(v)
}

/** Round a raw max value up to a "nice" ceiling that is evenly divisible by
 *  TICK_COUNT-1 (4), so every tick is a whole integer with no floating-point
 *  rounding differences between SSR and client. */
const TICK_COUNT = 5
function niceMax(rawMax: number): number {
  if (rawMax <= 0) return 4           // divisible by 4, safe default
  const mag = Math.pow(10, Math.floor(Math.log10(rawMax)))
  const step = mag >= 5 ? mag : mag * (rawMax / mag <= 2 ? 1 : rawMax / mag <= 5 ? 2 : 5)
  const ceil = Math.ceil(rawMax / step) * step
  // Round up further until evenly divisible by (TICK_COUNT - 1) = 4
  const div = TICK_COUNT - 1
  return Math.ceil(ceil / div) * div
}

/** Generate exactly TICK_COUNT evenly-spaced integer ticks from 0 to max. */
function makeTicks(max: number): number[] {
  const div = TICK_COUNT - 1
  return Array.from({ length: TICK_COUNT }, (_, i) => (max / div) * i)
}

function mono(points: [number, number][]): string {
  if (points.length < 2) return ""
  const d: string[] = []
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i]
    if (i === 0) {
      d.push(`M ${x} ${y}`)
    } else {
      const [px, py] = points[i - 1]
      const cx = (px + x) / 2
      d.push(`C ${cx} ${py} ${cx} ${y} ${x} ${y}`)
    }
  }
  return d.join(" ")
}

// ─── Area Chart ───────────────────────────────────────────────────────────────

export interface AreaSeries {
  key: string
  label: string
  color: string
}

export interface AreaChartProps {
  data: Record<string, number | string>[]
  xKey: string
  series: AreaSeries[]
  stacked?: boolean
  yFormatter?: (v: number) => string
  className?: string
  height?: number
}

export function AreaChart({ data, xKey, series, stacked = false, yFormatter = nice, className, height = 224 }: AreaChartProps) {
  const mounted = useMounted()
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: ChartTooltipData } | null>(null)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const PAD = { t: 12, r: 8, b: 28, l: 44 }
  const W = 600
  const H = height - PAD.t - PAD.b - 8

  const numericData = data.map((row) => {
    const out: Record<string, number> = {}
    series.forEach((s) => { out[s.key] = Number(row[s.key]) || 0 })
    return out
  })

  const stackedTotals = stacked ? numericData.map((row) => series.reduce((s, sr) => s + row[sr.key], 0)) : []
  const rawMaxY = stacked
    ? Math.max(...stackedTotals, 1)
    : Math.max(...series.flatMap((s) => numericData.map((r) => r[s.key])), 1)
  const maxY = niceMax(rawMaxY)

  const yTicks = makeTicks(maxY)
  const xScale = (i: number) => PAD.l + (i / (data.length - 1)) * W
  const yScale = (v: number) => PAD.t + H - (v / maxY) * H

  const getPoints = (seriesIdx: number): [number, number][] => {
    return numericData.map((row, i) => {
      let val = row[series[seriesIdx].key]
      if (stacked) {
        for (let j = 0; j < seriesIdx; j++) val += row[series[j].key]
      }
      return [xScale(i), yScale(val)]
    })
  }

  const getAreaPath = (seriesIdx: number): string => {
    const pts = getPoints(seriesIdx)
    const bottom = stacked && seriesIdx > 0
      ? getPoints(seriesIdx - 1).reverse()
      : data.map((_, i) => [xScale(i), yScale(0)] as [number, number])
    const path = mono(pts)
    const baseX = bottom.map(([x, y]) => `L ${x} ${y}`).join(" ")
    return `${path} ${baseX} Z`
  }

  const handleMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    const svgW = rect.width - PAD.l - PAD.r
    const rawX = e.clientX - rect.left - PAD.l
    const idx = Math.min(Math.max(Math.round((rawX / svgW) * (data.length - 1)), 0), data.length - 1)
    setHoverIdx(idx)
    const screenX = PAD.l + (idx / (data.length - 1)) * svgW
    const clientX = rect.left + screenX
    setTooltip({
      x: clientX - rect.left,
      y: PAD.t + 8,
      data: {
        label: String(data[idx][xKey]),
        items: series.map((s) => ({ name: s.label, value: yFormatter(numericData[idx][s.key]), color: s.color })),
      },
    })
  }, [data, series, xKey, yFormatter, PAD.l, PAD.r, PAD.t, numericData])

  if (!mounted) return <div className={cn("relative w-full select-none", className)} style={{ height }} />
  return (
    <div className={cn("relative w-full select-none", className)} style={{ height }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W + PAD.l + PAD.r} ${H + PAD.t + PAD.b}`}
        preserveAspectRatio="none"
        className="w-full h-full"
        onMouseMove={handleMove}
        onMouseLeave={() => { setTooltip(null); setHoverIdx(null) }}
      >
        <defs>
          {series.map((s, i) => (
            <linearGradient key={s.key} id={`area-grad-${s.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity={0.35} />
              <stop offset="100%" stopColor={s.color} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>

        {/* Grid lines */}
        {yTicks.map((v) => (
          <g key={`ytick-${v}`}>
            <line x1={PAD.l} x2={W + PAD.l} y1={yScale(v)} y2={yScale(v)} stroke="currentColor" strokeOpacity={0.08} strokeWidth={1} />
            <text x={PAD.l - 6} y={yScale(v)} textAnchor="end" dominantBaseline="middle" fontSize={10} fill="currentColor" fillOpacity={0.4}>{yFormatter(v)}</text>
          </g>
        ))}

        {/* X axis labels */}
        {data.map((row, i) => (
          <text key={`xlabel-${i}`} x={xScale(i)} y={H + PAD.t + 16} textAnchor="middle" fontSize={10} fill="currentColor" fillOpacity={0.4}>{String(row[xKey])}</text>
        ))}

        {/* Areas (back to front) */}
        {[...series].reverse().map((s, ri) => {
          const i = series.length - 1 - ri
          return (
            <path key={s.key} d={getAreaPath(i)} fill={`url(#area-grad-${s.key})`} stroke="none" />
          )
        })}

        {/* Lines */}
        {series.map((s, i) => (
          <path key={s.key} d={mono(getPoints(i))} fill="none" stroke={s.color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Hover line */}
        {hoverIdx !== null && (
          <>
            <line
              x1={xScale(hoverIdx)} x2={xScale(hoverIdx)}
              y1={PAD.t} y2={H + PAD.t}
              stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} strokeDasharray="4 3"
            />
            {series.map((s, si) => {
              const [cx, cy] = getPoints(si)[hoverIdx]
              return <circle key={s.key} cx={cx} cy={cy} r={4} fill={s.color} stroke="var(--background)" strokeWidth={2} />
            })}
          </>
        )}
      </svg>
      {tooltip && <Tooltip x={tooltip.x} y={tooltip.y} data={tooltip.data} />}
    </div>
  )
}

// ─── Bar Chart ────────────────────────────────────────────────────────────────

export interface BarSeries {
  key: string
  label: string
  color: string
}

export interface BarChartProps {
  data: Record<string, number | string>[]
  xKey: string
  series: BarSeries[]
  stacked?: boolean
  horizontal?: boolean
  yFormatter?: (v: number) => string
  className?: string
  height?: number
  /** Gap between bars in pixels (unused in current layout but accepted for API compat) */
  barGap?: number
}

export function BarChart({ data, xKey, series, stacked = false, horizontal = false, yFormatter = nice, className, height = 224 }: BarChartProps) {
  const mounted = useMounted()
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: ChartTooltipData } | null>(null)
  const [hoverGroup, setHoverGroup] = useState<number | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const PAD = { t: 12, r: 8, b: 28, l: horizontal ? 48 : 44 }
  const W = 600
  const H = height - PAD.t - PAD.b - 8

  const numericData = data.map((row) => {
    const out: Record<string, number> = {}
    series.forEach((s) => { out[s.key] = Number(row[s.key]) || 0 })
    return out
  })

  const stackedTotals = stacked ? numericData.map((row) => series.reduce((s, sr) => s + row[sr.key], 0)) : []
  const rawMaxVal = stacked
    ? Math.max(...stackedTotals, 1)
    : Math.max(...series.flatMap((s) => numericData.map((r) => r[s.key])), 1)
  const maxVal = niceMax(rawMaxVal)

  const yTicks = makeTicks(maxVal)
  const groupW = W / data.length
  const barW = stacked ? groupW * 0.5 : (groupW * 0.7) / series.length
  const gap = stacked ? 0 : groupW * 0.7 / series.length

  const xScale = horizontal
    ? (v: number) => PAD.l + (v / maxVal) * W
    : (i: number) => PAD.l + i * groupW + groupW * 0.15
  const yScale = horizontal
    ? (i: number) => PAD.t + i * groupW + groupW * 0.15
    : (v: number) => PAD.t + H - (v / maxVal) * H

  const handleHover = (e: React.MouseEvent<SVGRectElement>, idx: number) => {
    if (!svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    setHoverGroup(idx)
    setTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 8,
      data: {
        label: String(data[idx][xKey]),
        items: series.map((s) => ({ name: s.label, value: yFormatter(numericData[idx][s.key]), color: s.color })),
      },
    })
  }

  if (!mounted) return <div className={cn("relative w-full select-none", className)} style={{ height }} />
  return (
    <div className={cn("relative w-full select-none", className)} style={{ height }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W + PAD.l + PAD.r} ${H + PAD.t + PAD.b}`}
        preserveAspectRatio="none"
        className="w-full h-full"
        onMouseLeave={() => { setTooltip(null); setHoverGroup(null) }}
      >
        {/* Grid */}
        {yTicks.map((v) => {
          if (horizontal) {
            const x = xScale(v)
            return (
              <g key={`htick-${v}`}>
                <line x1={x} x2={x} y1={PAD.t} y2={H + PAD.t} stroke="currentColor" strokeOpacity={0.08} strokeWidth={1} />
                <text x={x} y={H + PAD.t + 16} textAnchor="middle" fontSize={10} fill="currentColor" fillOpacity={0.4}>{yFormatter(v)}</text>
              </g>
            )
          }
          return (
            <g key={`vtick-${v}`}>
              <line x1={PAD.l} x2={W + PAD.l} y1={yScale(v)} y2={yScale(v)} stroke="currentColor" strokeOpacity={0.08} strokeWidth={1} />
              <text x={PAD.l - 6} y={yScale(v)} textAnchor="end" dominantBaseline="middle" fontSize={10} fill="currentColor" fillOpacity={0.4}>{yFormatter(v)}</text>
            </g>
          )
        })}

        {/* X / Y labels */}
        {data.map((row, i) => {
          if (horizontal) {
            const y = PAD.t + i * groupW + groupW / 2
            return <text key={`hlabel-${i}`} x={PAD.l - 6} y={y} textAnchor="end" dominantBaseline="middle" fontSize={10} fill="currentColor" fillOpacity={0.4}>{String(row[xKey])}</text>
          }
          return <text key={`vlabel-${i}`} x={PAD.l + i * groupW + groupW / 2} y={H + PAD.t + 16} textAnchor="middle" fontSize={10} fill="currentColor" fillOpacity={0.4}>{String(row[xKey])}</text>
        })}

        {/* Bars */}
        {data.map((row, gi) => (
          <g key={gi} opacity={hoverGroup === null || hoverGroup === gi ? 1 : 0.4} style={{ transition: "opacity 0.15s" }}>
            {stacked ? (() => {
              let acc = 0
              return series.map((s) => {
                const val = numericData[gi][s.key]
                let rect: React.ReactNode
                if (horizontal) {
                  const x = xScale(acc)
                  const w = (val / maxVal) * W
                  const y = PAD.t + gi * groupW + groupW * 0.25
                  rect = <rect key={s.key} x={x} y={y} width={w} height={groupW * 0.5} fill={s.color} rx={val > 0 ? 2 : 0} />
                } else {
                  const barH = (val / maxVal) * H
                  const x = PAD.l + gi * groupW + groupW * 0.25
                  const y = yScale(acc + val)
                  rect = <rect key={s.key} x={x} y={y} width={groupW * 0.5} height={barH} fill={s.color} rx={2} />
                }
                acc += val
                return rect
              })
            })() : series.map((s, si) => {
              if (horizontal) {
                const val = numericData[gi][s.key]
                const w = (val / maxVal) * W
                const subGroupH = (groupW * 0.7) / series.length
                const y = PAD.t + gi * groupW + groupW * 0.15 + si * subGroupH
                return <rect key={s.key} x={PAD.l} y={y} width={w} height={subGroupH * 0.85} fill={s.color} rx={2} />
              }
              const val = numericData[gi][s.key]
              const barH = (val / maxVal) * H
              const subGroupX = PAD.l + gi * groupW + groupW * 0.15 + si * (groupW * 0.7 / series.length)
              const bw = (groupW * 0.7 / series.length) * 0.85
              return <rect key={s.key} x={subGroupX} y={yScale(val)} width={bw} height={barH} fill={s.color} rx={2} />
            })}
            {/* Invisible hit area */}
            {horizontal
              ? <rect x={PAD.l} y={PAD.t + gi * groupW} width={W} height={groupW} fill="transparent" onMouseMove={(e) => handleHover(e, gi)} />
              : <rect x={PAD.l + gi * groupW} y={PAD.t} width={groupW} height={H} fill="transparent" onMouseMove={(e) => handleHover(e, gi)} />
            }
          </g>
        ))}
      </svg>
      {tooltip && <Tooltip x={tooltip.x} y={tooltip.y} data={tooltip.data} />}
    </div>
  )
}

// ─── Line Chart ──────────────────────────────────────────────────────���────────

export interface LineSeries {
  key: string
  label: string
  color: string
}

export interface LineChartProps {
  data: Record<string, number | string>[]
  xKey: string
  series: LineSeries[]
  referenceLine?: { value: number; label: string }
  yFormatter?: (v: number) => string
  className?: string
  height?: number
  /** Render as step-after line instead of smooth curve */
  step?: boolean
}

export function LineChart({ data, xKey, series, referenceLine, yFormatter = nice, className, height = 224, step = false }: LineChartProps) {
  const mounted = useMounted()
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: ChartTooltipData } | null>(null)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const PAD = { t: 12, r: 8, b: 28, l: 44 }
  const W = 600
  const H = height - PAD.t - PAD.b - 8

  const numericData = data.map((row) => {
    const out: Record<string, number> = {}
    series.forEach((s) => { out[s.key] = Number(row[s.key]) || 0 })
    return out
  })

  const allVals = series.flatMap((s) => numericData.map((r) => r[s.key]))
  const rawMaxY = Math.max(...allVals, referenceLine?.value ?? 0, 1)
  const maxY = niceMax(rawMaxY)
  const yTicks = makeTicks(maxY)

  const xScale = (i: number) => PAD.l + (i / (data.length - 1)) * W
  const yScale = (v: number) => PAD.t + H - (v / maxY) * H

  const getPoints = (s: LineSeries): [number, number][] =>
    numericData.map((row, i) => [xScale(i), yScale(row[s.key])])

  const pathForSeries = (s: LineSeries): string => {
    const pts = getPoints(s)
    if (step) {
      return pts.map(([x, y], i) => i === 0 ? `M ${x} ${y}` : `H ${x} V ${y}`).join(" ")
    }
    return mono(pts)
  }

  const handleMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    const svgW = rect.width - PAD.l - PAD.r
    const rawX = e.clientX - rect.left - PAD.l
    const idx = Math.min(Math.max(Math.round((rawX / svgW) * (data.length - 1)), 0), data.length - 1)
    setHoverIdx(idx)
    setTooltip({
      x: e.clientX - rect.left,
      y: PAD.t + 8,
      data: {
        label: String(data[idx][xKey]),
        items: series.map((s) => ({ name: s.label, value: yFormatter(numericData[idx][s.key]), color: s.color })),
      },
    })
  }, [data, series, xKey, yFormatter, PAD.l, PAD.r, PAD.t, numericData])

  if (!mounted) return <div className={cn("relative w-full select-none", className)} style={{ height }} />
  return (
    <div className={cn("relative w-full select-none", className)} style={{ height }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W + PAD.l + PAD.r} ${H + PAD.t + PAD.b}`}
        preserveAspectRatio="none"
        className="w-full h-full"
        onMouseMove={handleMove}
        onMouseLeave={() => { setTooltip(null); setHoverIdx(null) }}
      >
        {/* Grid */}
        {yTicks.map((v) => (
          <g key={`ytick-${v}`}>
            <line x1={PAD.l} x2={W + PAD.l} y1={yScale(v)} y2={yScale(v)} stroke="currentColor" strokeOpacity={0.08} strokeWidth={1} />
            <text x={PAD.l - 6} y={yScale(v)} textAnchor="end" dominantBaseline="middle" fontSize={10} fill="currentColor" fillOpacity={0.4}>{yFormatter(v)}</text>
          </g>
        ))}
        {data.map((row, i) => (
          <text key={`xlabel-${i}`} x={xScale(i)} y={H + PAD.t + 16} textAnchor="middle" fontSize={10} fill="currentColor" fillOpacity={0.4}>{String(row[xKey])}</text>
        ))}

        {/* Reference line */}
        {referenceLine && (
          <>
            <line x1={PAD.l} x2={W + PAD.l} y1={yScale(referenceLine.value)} y2={yScale(referenceLine.value)} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} strokeDasharray="5 4" />
            <text x={W + PAD.l + 4} y={yScale(referenceLine.value)} dominantBaseline="middle" fontSize={9} fill="currentColor" fillOpacity={0.5}>{referenceLine.label}</text>
          </>
        )}

        {/* Lines */}
        {series.map((s) => (
          <path key={s.key} d={pathForSeries(s)} fill="none" stroke={s.color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Hover */}
        {hoverIdx !== null && (
          <>
            <line x1={xScale(hoverIdx)} x2={xScale(hoverIdx)} y1={PAD.t} y2={H + PAD.t} stroke="currentColor" strokeOpacity={0.15} strokeWidth={1} strokeDasharray="4 3" />
            {series.map((s) => {
              const [cx, cy] = getPoints(s)[hoverIdx]
              return <circle key={s.key} cx={cx} cy={cy} r={4} fill={s.color} stroke="var(--background)" strokeWidth={2} />
            })}
          </>
        )}
      </svg>
      {tooltip && <Tooltip x={tooltip.x} y={tooltip.y} data={tooltip.data} />}
    </div>
  )
}

// ─── Pie / Donut Chart ────────────────────────────────────────────────────────

export interface PieSlice {
  name: string
  value: number
  color: string
}

export interface PieChartProps {
  data: PieSlice[]
  donut?: boolean
  size?: number
  className?: string
}

export function PieChart({ data, donut = false, size = 200, className }: PieChartProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: ChartTooltipData } | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const cx = size / 2
  const cy = size / 2
  const R = size * 0.4
  const r = donut ? R * 0.62 : 0
  const total = data.reduce((s, d) => s + d.value, 0)

  let angle = -Math.PI / 2
  const slices = data.map((d) => {
    const start = angle
    const sweep = (d.value / total) * 2 * Math.PI
    angle += sweep
    const mid = start + sweep / 2
    return { ...d, start, sweep, mid }
  })

  const arc = (startA: number, sweepA: number, expand = 0): string => {
    const outerR = R + expand
    const x1 = cx + outerR * Math.cos(startA)
    const y1 = cy + outerR * Math.sin(startA)
    const x2 = cx + outerR * Math.cos(startA + sweepA)
    const y2 = cy + outerR * Math.sin(startA + sweepA)
    const innerR = r + (donut ? 0 : 0)
    const ix1 = cx + innerR * Math.cos(startA + sweepA)
    const iy1 = cy + innerR * Math.sin(startA + sweepA)
    const ix2 = cx + innerR * Math.cos(startA)
    const iy2 = cy + innerR * Math.sin(startA)
    const large = sweepA > Math.PI ? 1 : 0
    if (donut) {
      return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${large} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${large} 0 ${ix2} ${iy2} Z`
    }
    return `M ${cx} ${cy} L ${x1} ${y1} A ${outerR} ${outerR} 0 ${large} 1 ${x2} ${y2} Z`
  }

  const handleHover = (e: React.MouseEvent<SVGPathElement>, i: number) => {
    if (!svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    setActiveIdx(i)
    setTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 8,
      data: {
        label: data[i].name,
        items: [{ name: data[i].name, value: `${data[i].value}%`, color: data[i].color }],
      },
    })
  }

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        onMouseLeave={() => { setActiveIdx(null); setTooltip(null) }}
      >
        {slices.map((s, i) => {
          const active = activeIdx === i
          const expand = active ? 4 : 0
          const dx = active ? Math.cos(s.mid) * 4 : 0
          const dy = active ? Math.sin(s.mid) * 4 : 0
          return (
            <path
              key={s.name}
              d={arc(s.start, s.sweep, 0)}
              fill={s.color}
              opacity={activeIdx === null || activeIdx === i ? 1 : 0.5}
              transform={`translate(${dx} ${dy})`}
              style={{ transition: "all 0.15s", cursor: "pointer", outline: "none" }}
              onMouseMove={(e) => handleHover(e, i)}
            />
          )
        })}
        {donut && (
          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontSize={20} fontWeight={700}>
            {total}%
          </text>
        )}
      </svg>
      {tooltip && <Tooltip x={tooltip.x} y={tooltip.y} data={tooltip.data} />}
    </div>
  )
}

// ─── Radar Chart ──────────────────────────────────────────────────────────────

export interface RadarSeries {
  key: string
  label: string
  color: string
  fillOpacity?: number
}

export interface RadarChartProps {
  data: Record<string, string | number>[]
  labelKey: string
  series: RadarSeries[]
  domain?: [number, number]
  size?: number
  className?: string
}

export function RadarChart({ data, labelKey, series, domain = [0, 100], size = 280, className }: RadarChartProps) {
  const mounted = useMounted()
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: ChartTooltipData } | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const cx = size / 2
  const cy = size / 2
  const R = size * 0.35
  const n = data.length
  const rings = [0.25, 0.5, 0.75, 1]

  const angleOf = (i: number) => (i / n) * 2 * Math.PI - Math.PI / 2
  const coord = (i: number, frac: number): [number, number] => [
    cx + R * frac * Math.cos(angleOf(i)),
    cy + R * frac * Math.sin(angleOf(i)),
  ]

  const scale = (v: number) => (Number(v) - domain[0]) / (domain[1] - domain[0])

  const polygonPoints = (key: string): string =>
    data.map((row, i) => coord(i, scale(row[key])).join(",")).join(" ")

  const spokePts = data.map((_, i) => coord(i, 1))

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg ref={svgRef} viewBox={`0 0 ${size} ${size}`} width={size} height={size}
        onMouseLeave={() => setTooltip(null)}>
        {/* Rings */}
        {rings.map((r) => (
          <polygon
            key={r}
            points={data.map((_, i) => coord(i, r).join(",")).join(" ")}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.1}
            strokeWidth={1}
          />
        ))}

        {/* Spokes */}
        {spokePts.map(([x, y], i) => (
          <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="currentColor" strokeOpacity={0.1} strokeWidth={1} />
        ))}

        {/* Series */}
        {[...series].reverse().map((s) => (
          <polygon
            key={s.key}
            points={polygonPoints(s.key)}
            fill={s.color}
            fillOpacity={s.fillOpacity ?? 0.2}
            stroke={s.color}
            strokeWidth={1.5}
            style={{ transition: "opacity 0.15s" }}
          />
        ))}

        {/* Labels */}
        {data.map((row, i) => {
          const [x, y] = coord(i, 1.18)
          return (
            <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize={10} fill="currentColor" fillOpacity={0.6}>
              {String(row[labelKey])}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

// ─── Radial Progress (replaces RadialBarChart) ────────────────────────────────

export interface RadialItem {
  name: string
  value: number
  color: string
}

export interface RadialProgressProps {
  data: RadialItem[]
  size?: number
  className?: string
}

export function RadialProgress({ data, size = 200, className }: RadialProgressProps) {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: ChartTooltipData } | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const cx = size / 2
  const cy = size / 2
  const trackW = 8
  const gap = 5
  const maxR = size * 0.44

  const handleHover = (e: React.MouseEvent, i: number) => {
    if (!svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    setTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 8,
      data: { label: data[i].name, items: [{ name: data[i].name, value: `${data[i].value}%`, color: data[i].color }] },
    })
  }

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg ref={svgRef} viewBox={`0 0 ${size} ${size}`} width={size} height={size}
        onMouseLeave={() => setTooltip(null)}>
        {data.map((d, i) => {
          const r = maxR - i * (trackW + gap)
          const circumference = 2 * Math.PI * r
          const progress = (d.value / 100) * circumference
          return (
            <g key={d.name}
              onMouseMove={(e) => handleHover(e, i)}
              style={{ cursor: "pointer" }}>
              <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={trackW} />
              <circle
                cx={cx} cy={cy} r={r}
                fill="none"
                stroke={d.color}
                strokeWidth={trackW}
                strokeLinecap="round"
                strokeDasharray={`${progress} ${circumference}`}
                transform={`rotate(-90 ${cx} ${cy})`}
                style={{ transition: "stroke-dasharray 0.4s ease" }}
              />
            </g>
          )
        })}
      </svg>
      {tooltip && <Tooltip x={tooltip.x} y={tooltip.y} data={tooltip.data} />}
    </div>
  )
}
