"use client"

import { useState } from "react"
import { Check, Copy } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"
import { PackageManagerBlock } from "@/components/nexui/package-manager-block"

function CopyButton({ value }: { value: string }) {
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
      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
    >
      {copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
      {copied ? "Copied" : "Copy"}
    </button>
  )
}

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/60">
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
        <CopyButton value={code} />
      </div>
      <pre className="p-4 overflow-x-auto bg-[var(--code-bg)] text-sm font-mono leading-relaxed">
        <code className="text-foreground">{code}</code>
      </pre>
    </div>
  )
}

const STEPS = [
  {
    step: "01",
    title: "Create your project",
    description:
      "Start with a Next.js or Vite project. NexUI works with any React framework — no special setup required beyond Tailwind CSS.",
    code: "npx create-next-app@latest my-app --typescript --tailwind --eslint",
    language: "bash",
    usePackageManager: true,
    output: [
      "  Creating a new Next.js app in ./my-app",
      "  Installing dependencies...",
      "",
      "  Success! Created my-app",
    ],
    note: "Already have a project? Skip straight to step 2.",
  },
  {
    step: "02",
    title: "Initialize NexUI",
    description:
      "Run nexui init once. It writes a nexui.config.ts, adds the cn utility to lib/utils.ts, and injects the required CSS variables into your globals.css.",
    code: "npx @jessin/nexui@latest init",
    language: "bash",
    usePackageManager: true,
    output: [
      "  Detecting project...",
      "  Writing nexui.config.ts",
      "  Writing lib/utils.ts",
      "  Updating styles/globals.css",
      "",
      "  Done. NexUI is ready.",
    ],
    note: null,
  },
  {
    step: "03",
    title: "Add components",
    description:
      "Pick any component from the library and add it to your project. The file is copied directly into components/ui — it belongs to you from that moment on.",
    code: "npx @jessin/nexui@latest add button",
    language: "bash",
    usePackageManager: true,
    output: [
      "  Resolving button...",
      "  Writing components/ui/button.tsx",
      "",
      "  Added button.",
      "  Import from @/components/ui/button",
    ],
    note: null,
  },
  {
    step: "04",
    title: "Use it",
    description:
      "Import the component and drop it anywhere in your app. It is plain TypeScript and Tailwind — rename, restyle, or delete whatever you do not need.",
    code: `import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex items-center gap-3">
      <Button>Get started</Button>
      <Button variant="outline">Learn more</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  )
}`,
    language: "tsx",
    usePackageManager: false,
    output: [],
    note: "No version to pin. No peer dependency conflicts. The code is just yours.",
  },
]

const FRAMEWORKS = [
  { name: "Next.js",        status: "Supported",     note: "App Router + Pages Router" },
  { name: "Vite + React",   status: "Supported",     note: "Works out of the box" },
  { name: "Remix",          status: "Supported",     note: "Use with Tailwind preset" },
  { name: "Astro",          status: "Supported",     note: "React islands" },
  { name: "React Router v7",status: "Supported",     note: "Framework mode" },
  { name: "TanStack Start", status: "Experimental",  note: "Community tested" },
]

export function Installation() {
  const [active, setActive] = useState(0)

  return (
    <section id="installation" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Installation
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Up and running in minutes.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed text-sm sm:text-base">
            Inspired by the shadcn/ui copy-paste model — no package to install,
            no version conflicts. Initialize once, then add exactly the components
            you need.
          </p>
        </div>

        {/* Mobile: horizontal step tabs; Desktop: sidebar + content */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-[260px_1fr] md:gap-8 md:items-start">
          {/* Step navigation — horizontal scroll on mobile, vertical list on desktop */}
          <div className="flex flex-col gap-1">
            {/* Mobile tab strip */}
            <div className="flex md:hidden gap-1 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
              {STEPS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm font-medium whitespace-nowrap shrink-0 transition-all",
                    active === i
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <span className={cn("text-xs font-mono font-semibold", active === i ? "text-primary" : "text-muted-foreground")}>
                    {s.step}
                  </span>
                  {s.title}
                </button>
              ))}
            </div>

            {/* Desktop sidebar list */}
            <div className="hidden md:flex flex-col gap-1">
              {STEPS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "text-left px-4 py-3 rounded-lg border transition-all",
                    active === i
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn("text-xs font-mono font-semibold tabular-nums", active === i ? "text-primary" : "text-muted-foreground")}>
                      {s.step}
                    </span>
                    <span className="text-sm font-medium">{s.title}</span>
                  </div>
                </button>
              ))}

              {/* Framework support table — desktop only */}
              <div className="mt-6 rounded-lg border border-border overflow-hidden">
                <div className="px-4 py-2.5 border-b border-border bg-background/60">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Framework support
                  </p>
                </div>
                <div className="divide-y divide-border">
                  {FRAMEWORKS.map((f) => (
                    <div key={f.name} className="flex items-center justify-between px-4 py-2.5">
                      <div>
                        <p className="text-xs font-medium text-foreground">{f.name}</p>
                        <p className="text-[10px] text-muted-foreground">{f.note}</p>
                      </div>
                      <span
                        className={cn(
                          "text-[10px] font-medium px-2 py-0.5 rounded-full",
                          f.status === "Supported"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        )}
                      >
                        {f.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step detail */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {STEPS[active].step}. {STEPS[active].title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {STEPS[active].description}
              </p>
            </div>

            {STEPS[active].usePackageManager ? (
              <PackageManagerBlock
                command={STEPS[active].code}
                output={STEPS[active].output}
              />
            ) : (
              <CodeBlock code={STEPS[active].code} language={STEPS[active].language} />
            )}

            {STEPS[active].note && (
              <div className="rounded-lg border border-border bg-secondary/40 px-4 py-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Note — </span>
                  {STEPS[active].note}
                </p>
              </div>
            )}

            {/* Quick reference */}
            {active === 2 && (
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="px-4 py-2.5 border-b border-border bg-background/60">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Common add commands
                  </p>
                </div>
                <div className="divide-y divide-border font-mono text-xs">
                  {[
                    "npx @jessin/nexui@latest add button",
                    "npx @jessin/nexui@latest add card badge input",
                    "npx @jessin/nexui@latest add dialog sheet",
                    "npx @jessin/nexui@latest add data-table",
                    "npx @jessin/nexui@latest add auth-panel",
                  ].map((cmd) => (
                    <div key={cmd} className="flex items-center justify-between px-4 py-2.5 gap-4">
                      <span className="text-muted-foreground">{cmd}</span>
                      <CopyButton value={cmd} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
