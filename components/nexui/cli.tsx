"use client"

import { useState } from "react"
import { Check, Copy, Terminal, Package, List, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

function CopyButton({ value, className }: { value: string; className?: string }) {
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
      className={cn(
        "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0",
        className
      )}
    >
      {copied ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
      {copied ? "Copied" : "Copy"}
    </button>
  )
}

function TerminalBlock({ command, output }: { command: string; output?: string[] }) {
  return (
    <div className="rounded-lg border border-border overflow-hidden font-mono text-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/60">
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-muted-foreground" aria-hidden="true" />
          <span className="text-xs text-muted-foreground">terminal</span>
        </div>
        <CopyButton value={command} />
      </div>
      <div className="p-4 bg-[var(--code-bg)] leading-relaxed">
        <div className="flex items-start gap-3">
          <span className="text-primary select-none mt-px">$</span>
          <span className="text-foreground">{command}</span>
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

const commands = [
  {
    id: "init",
    icon: Zap,
    label: "Initialize",
    title: "nexui init",
    description:
      "Scaffolds a nexui.config.ts, installs the utils helper, and sets up CSS variables in your project. Run this once.",
    command: "npx nexui@latest init",
    output: [
      "  Detecting project...",
      "  Writing nexui.config.ts",
      "  Adding CSS variables to globals.css",
      "  Installing dependencies...",
      "",
      "  Done. Your project is ready.",
    ],
  },
  {
    id: "add",
    icon: Package,
    label: "Add component",
    title: "nexui add [component]",
    description:
      "Downloads a single component directly into your components/ui folder. The file is yours — edit it freely.",
    command: "npx nexui@latest add button",
    output: [
      "  Resolving button...",
      "  Writing components/ui/button.tsx",
      "  Writing lib/utils.ts",
      "",
      "  Added button. Import from @/components/ui/button.",
    ],
  },
  {
    id: "add-multiple",
    icon: Package,
    label: "Add multiple",
    title: "nexui add [component...]",
    description:
      "Add several components at once by listing their names separated by spaces.",
    command: "npx nexui@latest add button badge input card dialog",
    output: [
      "  Resolving 5 components...",
      "  Writing components/ui/button.tsx",
      "  Writing components/ui/badge.tsx",
      "  Writing components/ui/input.tsx",
      "  Writing components/ui/card.tsx",
      "  Writing components/ui/dialog.tsx",
      "",
      "  Added 5 components.",
    ],
  },
  {
    id: "list",
    icon: List,
    label: "List components",
    title: "nexui list",
    description:
      "Prints all available components so you know exactly what you can add.",
    command: "npx nexui@latest list",
    output: [
      "  Available components:",
      "",
      "  accordion      alert         avatar",
      "  badge          button        card",
      "  checkbox       combobox      command",
      "  dialog         dropdown      input",
      "  popover        select        separator",
      "  sheet          skeleton      slider",
      "  switch         table         tabs",
      "  textarea       toast         tooltip",
    ],
  },
]

const configExample = `// nexui.config.ts
import type { NexUIConfig } from "nexui"

export default {
  outputDir: "components/ui",
  utils: "lib/utils.ts",
  style: "minimal",          // "minimal" | "rounded" | "sharp"
  typescript: true,
} satisfies NexUIConfig`

export function CLI() {
  const [active, setActive] = useState(0)

  return (
    <section id="cli" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">CLI</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            One command away.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
            Use the NexUI CLI to initialize your project and pull any component straight into your codebase — no copy-paste required.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          {/* Left: command picker */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              {commands.map((cmd, i) => {
                const Icon = cmd.icon
                return (
                  <button
                    key={cmd.id}
                    onClick={() => setActive(i)}
                    className={cn(
                      "text-left px-4 py-3.5 rounded-lg border transition-all",
                      active === i
                        ? "border-primary/40 bg-primary/10 text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={14}
                        aria-hidden="true"
                        className={cn(active === i ? "text-primary" : "text-muted-foreground")}
                      />
                      <div>
                        <p className="text-sm font-medium font-mono">{cmd.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-1">
                          {cmd.description}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Config preview */}
            <div>
              <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-widest">
                Config file
              </p>
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/60">
                  <span className="text-xs text-muted-foreground font-mono">nexui.config.ts</span>
                  <CopyButton value={configExample} />
                </div>
                <pre className="p-4 bg-[var(--code-bg)] text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
                  <code>{configExample}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Right: terminal output */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-base font-semibold text-foreground font-mono">
                {commands[active].title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {commands[active].description}
              </p>
            </div>

            <TerminalBlock
              command={commands[active].command}
              output={commands[active].output}
            />

            {/* Quick tip */}
            <div className="rounded-lg border border-border bg-secondary/40 px-4 py-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Tip — </span>
                You can also run{" "}
                <code className="text-primary font-mono bg-primary/10 px-1 py-0.5 rounded text-xs">
                  npx nexui@latest add
                </code>{" "}
                with no arguments and the CLI will show an interactive picker.
              </p>
            </div>

            {/* Comparison table */}
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="px-4 py-3 border-b border-border bg-background/60">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                  CLI vs Manual
                </p>
              </div>
              <div className="divide-y divide-border">
                {[
                  { label: "Add a component", cli: "npx nexui add button", manual: "Copy button.tsx" },
                  { label: "Init project", cli: "npx nexui init", manual: "Set up manually" },
                  { label: "Code ownership", cli: "Full — file is yours", manual: "Full — file is yours" },
                  { label: "Works offline", cli: "After first fetch", manual: "Always" },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-[1fr_1fr_1fr] text-xs">
                    <span className="px-4 py-3 text-muted-foreground">{row.label}</span>
                    <span className="px-4 py-3 text-primary font-mono border-x border-border">{row.cli}</span>
                    <span className="px-4 py-3 text-muted-foreground">{row.manual}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
