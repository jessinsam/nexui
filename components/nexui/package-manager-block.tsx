"use client"

import { useState } from "react"
import { Check, Copy, Terminal } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn", "bun"] as const
type PackageManager = (typeof PACKAGE_MANAGERS)[number]

/**
 * Given a canonical `npx` command, rewrite it for the chosen package manager.
 * e.g. "npx @jessin/nexui@latest add button" →
 *   pnpm  "pnpm dlx @jessin/nexui@latest add button"
 *   npm   "npx @jessin/nexui@latest add button"
 *   yarn  "yarn dlx @jessin/nexui@latest add button"
 *   bun   "bunx @jessin/nexui@latest add button"
 */
function rewrite(command: string, pm: PackageManager): string {
  // Handle "npx create-next-app…" style commands too
  const npxMatch = command.match(/^npx\s+(.+)$/)
  if (!npxMatch) return command
  const rest = npxMatch[1]
  switch (pm) {
    case "pnpm":
      return `pnpm dlx ${rest}`
    case "npm":
      return `npx ${rest}`
    case "yarn":
      return `yarn dlx ${rest}`
    case "bun":
      return `bunx ${rest}`
  }
}

function CopyIconButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      aria-label="Copy to clipboard"
      className="flex items-center justify-center w-7 h-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shrink-0"
    >
      {copied ? (
        <Check size={13} aria-hidden="true" />
      ) : (
        <Copy size={13} aria-hidden="true" />
      )}
    </button>
  )
}

interface PackageManagerBlockProps {
  /** A canonical `npx …` command that will be rewritten per package manager */
  command: string
  /** Optional terminal output lines shown below the command */
  output?: string[]
  className?: string
}

export function PackageManagerBlock({
  command,
  output,
  className,
}: PackageManagerBlockProps) {
  const [active, setActive] = useState<PackageManager>("pnpm")
  const rewritten = rewrite(command, active)

  return (
    <div className={cn("rounded-lg border border-border overflow-hidden font-mono text-sm", className)}>
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-border bg-[var(--code-bg)] px-3 py-1.5 gap-2">
        <div className="flex items-center gap-1">
          {/* Terminal icon chip */}
          <div className="flex items-center justify-center w-7 h-7 rounded-md bg-secondary/60 shrink-0">
            <Terminal size={12} className="text-muted-foreground" aria-hidden="true" />
          </div>

          {/* PM tabs */}
          <div className="flex items-center">
            {PACKAGE_MANAGERS.map((pm) => (
              <button
                key={pm}
                onClick={() => setActive(pm)}
                className={cn(
                  "px-3 py-1 text-xs rounded-md transition-colors",
                  active === pm
                    ? "bg-foreground text-background font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {pm}
              </button>
            ))}
          </div>
        </div>

        <CopyIconButton value={rewritten} />
      </div>

      {/* Command line */}
      <div className="px-4 py-3.5 bg-[var(--code-bg)]">
        <div className="flex items-start gap-3 leading-relaxed">
          <span className="text-muted-foreground select-none">$</span>
          <span className="text-foreground break-all">{rewritten}</span>
        </div>

        {output && output.length > 0 && (
          <div className="mt-2 flex flex-col gap-0.5">
            {output.map((line, i) => (
              <span key={i} className="text-muted-foreground pl-6 block">
                {line}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
