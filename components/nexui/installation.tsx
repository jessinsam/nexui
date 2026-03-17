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

const steps = [
  {
    step: "01",
    title: "Initialize your project",
    description: "Start with a new Next.js or Vite project, or use an existing one.",
    command: "npx create-next-app@latest my-app --typescript --tailwind",
    language: "bash",
    usePackageManager: true,
  },
  {
    step: "02",
    title: "Copy a component",
    description: "Browse the library, find a component you want, and copy its code directly into your project. No package, no install command — the file is yours from the start.",
    command: "npx nexui@latest add button",
    language: "bash",
    usePackageManager: true,
  },
  {
    step: "03",
    title: "Use it",
    description: "Import the component and use it anywhere in your app. It's plain TypeScript and Tailwind — rename it, restyle it, delete what you don't need.",
    command: `import { Button } from "@/components/nexui/button"

export default function Page() {
  return (
    <div className="flex gap-2">
      <Button>Get started</Button>
      <Button variant="secondary">Learn more</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  )
}`,
    language: "tsx",
    usePackageManager: false,
  },
]

export function Installation() {
  const [active, setActive] = useState(0)

  return (
    <section id="installation" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Installation</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Up and running in seconds.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
            No package to install. No version conflicts. No Radix. No shadcn wrappers. Copy the component file into your project and it just works.
          </p>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Steps sidebar */}
          <div className="flex flex-col gap-1">
            {steps.map((s, i) => (
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
                  <span
                    className={cn(
                      "text-xs font-mono font-semibold",
                      active === i ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {s.step}
                  </span>
                  <span className="text-sm font-medium">{s.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Step detail */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{steps[active].title}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{steps[active].description}</p>
            </div>
            {steps[active].usePackageManager ? (
              <PackageManagerBlock command={steps[active].command} />
            ) : (
              <CodeBlock code={steps[active].command} language={steps[active].language} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

