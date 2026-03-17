"use client"

import { useState } from "react"
import { Check, Copy, Package, List, Zap, SlidersHorizontal } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"
import { PackageManagerBlock } from "@/components/nexui/package-manager-block"

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

const COMMANDS = [
  {
    id: "init",
    icon: Zap,
    label: "init",
    title: "nexui init",
    description:
      "Scaffolds nexui.config.ts, writes the cn utility to lib/utils.ts, and injects CSS variables into globals.css. Run once per project.",
    command: "npx nexui@latest init",
    output: [
      "  Detecting project type...",
      "  Framework: Next.js (App Router)",
      "",
      "  Writing nexui.config.ts",
      "  Writing lib/utils.ts",
      "  Updating app/globals.css",
      "",
      "  NexUI initialized. Run 'nexui add' to add components.",
    ],
  },
  {
    id: "add",
    icon: Package,
    label: "add",
    title: "nexui add [component]",
    description:
      "Copies a single component file into your components/ui directory. The file is yours immediately — edit, rename, or delete it freely.",
    command: "npx nexui@latest add button",
    output: [
      "  Resolving button...",
      "  Writing components/ui/button.tsx",
      "",
      "  button added.",
      "  Import: @/components/ui/button",
    ],
  },
  {
    id: "add-many",
    icon: Package,
    label: "add (multiple)",
    title: "nexui add [...components]",
    description:
      "Add several components in one command by listing their names separated by spaces. Dependencies shared between components are written only once.",
    command: "npx nexui@latest add button badge input card dialog",
    output: [
      "  Resolving 5 components...",
      "  Writing components/ui/button.tsx",
      "  Writing components/ui/badge.tsx",
      "  Writing components/ui/input.tsx",
      "  Writing components/ui/card.tsx",
      "  Writing components/ui/dialog.tsx",
      "",
      "  5 components added.",
    ],
  },
  {
    id: "list",
    icon: List,
    label: "list",
    title: "nexui list",
    description:
      "Prints all available components with their categories so you know exactly what you can add to your project.",
    command: "npx nexui@latest list",
    output: [
      "  Available components (nexui@latest):",
      "",
      "  Forms     button  input  select  checkbox  radio",
      "            slider  switch  textarea  combobox",
      "",
      "  Display   card  badge  avatar  separator  skeleton",
      "            tooltip  popover  alert  callout",
      "",
      "  Overlay   dialog  sheet  drawer  dropdown  command",
      "",
      "  Data      table  data-table  pagination  tabs",
      "",
      "  Blocks    auth-panel  chat  view-switcher  chart",
    ],
  },
  {
    id: "config",
    icon: SlidersHorizontal,
    label: "config",
    title: "nexui.config.ts",
    description:
      "The config file controls where component files are written, which utility file to use, the default style variant, and TypeScript preference.",
    command: "npx nexui@latest init --yes",
    output: [
      "  Using defaults:",
      "  outputDir  → components/ui",
      "  utils      → lib/utils.ts",
      "  style      → minimal",
      "  typescript → true",
      "",
      "  nexui.config.ts written.",
    ],
  },
]

const CONFIG_EXAMPLE = `// nexui.config.ts
import type { NexUIConfig } from "nexui"

export default {
  // Directory where component files are written
  outputDir: "components/ui",

  // Path to your cn() utility
  utils: "lib/utils.ts",

  // Component style variant: "minimal" | "rounded" | "sharp"
  style: "minimal",

  // Write TypeScript (.tsx) or JavaScript (.jsx)
  typescript: true,
} satisfies NexUIConfig`

export function CLI() {
  const [active, setActive] = useState(0)

  return (
    <section id="cli" className="py-14 sm:py-24 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">CLI</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground text-balance">
            One command away.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
            The NexUI CLI initializes your project and pulls any component
            straight into your codebase. No registries, no runtime, no wrappers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left: command picker + config */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              {COMMANDS.map((cmd, i) => {
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
                        size={13}
                        aria-hidden="true"
                        className={cn(active === i ? "text-primary" : "text-muted-foreground")}
                      />
                    <div className="min-w-0 overflow-hidden">
                        <p className="text-sm font-medium font-mono truncate">{cmd.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 leading-relaxed">
                          {cmd.description}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Config file preview */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Config file
              </p>
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/60">
                  <span className="text-xs text-muted-foreground font-mono">nexui.config.ts</span>
                  <CopyButton value={CONFIG_EXAMPLE} />
                </div>
                <pre className="p-4 bg-[var(--code-bg)] text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
                  <code>{CONFIG_EXAMPLE}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Right: terminal output + extras */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-base font-semibold text-foreground font-mono">
                {COMMANDS[active].title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {COMMANDS[active].description}
              </p>
            </div>

            <PackageManagerBlock
              command={COMMANDS[active].command}
              output={COMMANDS[active].output}
            />

            {/* Interactive picker tip */}
            <div className="rounded-lg border border-border bg-secondary/40 px-4 py-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Tip — </span>
                Run{" "}
                <code className="text-primary font-mono bg-primary/10 px-1 py-0.5 rounded text-xs">
                  npx nexui@latest add
                </code>{" "}
                with no arguments to open an interactive component picker in your terminal.
              </p>
            </div>

            {/* Comparison */}
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="px-4 py-2.5 border-b border-border bg-background/60 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  CLI vs manual copy-paste
                </p>
              </div>
              <div className="divide-y divide-border">
                {[
                  { label: "Add a component",   cli: "npx nexui add button",    manual: "Copy button.tsx from nexui.dev" },
                  { label: "Init project",       cli: "npx nexui init",          manual: "Create utils + CSS vars manually" },
                  { label: "Code ownership",     cli: "Full — file is yours",    manual: "Full — file is yours" },
                  { label: "Dependency install", cli: "Auto (peer deps only)",   manual: "Manual" },
                  { label: "Works offline",      cli: "After first fetch",       manual: "Always" },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col sm:grid sm:grid-cols-[1fr_1fr_1fr] text-xs">
                    <span className="px-4 pt-3 pb-1 sm:py-3 text-muted-foreground font-medium">{row.label}</span>
                    <span className="px-4 pb-1 sm:py-3 text-primary font-mono sm:border-x sm:border-border">{row.cli}</span>
                    <span className="px-4 pb-3 sm:py-3 text-muted-foreground hidden sm:block">{row.manual}</span>
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
