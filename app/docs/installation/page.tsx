"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Copy, ArrowRight } from "@/components/nexui/icons"
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
      aria-label="Copy"
      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
    >
      {copied ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
      {copied ? "Copied" : "Copy"}
    </button>
  )
}

function CodeBlock({ code, language = "bash", filename }: { code: string; language?: string; filename?: string }) {
  return (
    <div className="rounded-lg border border-border overflow-hidden text-sm font-mono">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-[var(--code-bg)]">
        <span className="text-xs text-muted-foreground">{filename ?? language}</span>
        <CopyButton value={code} />
      </div>
      <pre className="p-4 overflow-x-auto bg-[var(--code-bg)] leading-relaxed">
        <code className="text-foreground">{code}</code>
      </pre>
    </div>
  )
}

const utilsCode = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

const buttonCode = `"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Variant = "default" | "secondary" | "outline" | "ghost" | "destructive"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: "sm" | "md" | "lg"
}

export function Button({
  variant = "default",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "disabled:pointer-events-none disabled:opacity-50",
        {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          outline: "border border-border bg-transparent hover:bg-secondary",
          ghost: "hover:bg-secondary hover:text-foreground",
          destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        }[variant],
        { sm: "h-8 px-3 text-xs", md: "h-9 px-4 text-sm", lg: "h-11 px-6 text-base" }[size],
        className
      )}
      {...props}
    />
  )
}`

const usageCode = `import { Button } from "@/components/nexui/button"

export default function Page() {
  return (
    <div className="flex items-center gap-3">
      <Button>Get started</Button>
      <Button variant="outline">Learn more</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  )
}`

const steps = [
  {
    id: "framework",
    step: "01",
    title: "Create your project",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Start with a new Next.js project. NexUI works with any React framework that supports Tailwind CSS v4.
        </p>
        <PackageManagerBlock command="npx create-next-app@latest my-app --typescript --tailwind --app" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Or use an existing project — skip to step 2.
        </p>
      </div>
    ),
  },
  {
    id: "utils",
    step: "02",
    title: "Add the utils helper",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Install <code className="text-primary font-mono bg-primary/10 px-1 py-0.5 rounded text-xs">clsx</code> and{" "}
          <code className="text-primary font-mono bg-primary/10 px-1 py-0.5 rounded text-xs">tailwind-merge</code> — the only two helper packages NexUI uses.
        </p>
        <div className="rounded-lg border border-border overflow-hidden font-mono text-sm">
          <div className="px-4 py-2 border-b border-border bg-[var(--code-bg)] text-xs text-muted-foreground">bash</div>
          <div className="flex flex-col gap-0.5 px-4 py-3 bg-[var(--code-bg)]">
            {[
              { pm: "npm",  cmd: "npm install clsx tailwind-merge" },
              { pm: "pnpm", cmd: "pnpm add clsx tailwind-merge" },
              { pm: "yarn", cmd: "yarn add clsx tailwind-merge" },
              { pm: "bun",  cmd: "bun add clsx tailwind-merge" },
            ].map(({ pm, cmd }) => (
              <div key={pm} className="flex items-center gap-3">
                <span className="text-muted-foreground text-xs w-8 shrink-0">{pm}</span>
                <code className="text-foreground text-xs">{cmd}</code>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Then create <code className="text-xs font-mono text-foreground">lib/utils.ts</code>:
        </p>
        <CodeBlock code={utilsCode} filename="lib/utils.ts" language="ts" />
      </div>
    ),
  },
  {
    id: "component",
    step: "03",
    title: "Copy a component",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Browse the <Link href="/components" className="text-primary hover:underline">component library</Link>, find a component you want, click{" "}
          <strong className="text-foreground font-medium">Code</strong>, and copy the source into your project. No CLI required.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For example, create <code className="text-xs font-mono text-foreground">components/nexui/button.tsx</code>:
        </p>
        <CodeBlock code={buttonCode} filename="components/nexui/button.tsx" language="tsx" />
        <div className="rounded-lg border border-border bg-secondary/40 px-4 py-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Tip — </span>
            You can also use the CLI to add components automatically:{" "}
            <code className="text-primary font-mono bg-primary/10 px-1 py-0.5 rounded text-xs">npx nexui@latest add button</code>.{" "}
            See the <Link href="/docs/cli" className="text-primary hover:underline">CLI docs</Link>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "use",
    step: "04",
    title: "Use it in your app",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Import the component and use it anywhere. It is plain TypeScript and Tailwind — rename it, restyle it, delete what you do not need.
        </p>
        <CodeBlock code={usageCode} filename="app/page.tsx" language="tsx" />
        <div className="flex flex-wrap gap-2 mt-1">
          <button className="inline-flex items-center justify-center rounded-md font-medium text-sm h-9 px-4 bg-primary text-primary-foreground">
            Get started
          </button>
          <button className="inline-flex items-center justify-center rounded-md font-medium text-sm h-9 px-4 border border-border bg-transparent hover:bg-secondary transition-colors">
            Learn more
          </button>
          <button className="inline-flex items-center justify-center rounded-md font-medium text-sm h-9 px-4 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            Cancel
          </button>
        </div>
      </div>
    ),
  },
]

export default function InstallationPage() {
  const [active, setActive] = useState(0)

  return (
    <article className="max-w-3xl">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Getting started</p>
        <h1 className="text-3xl font-semibold text-foreground mb-4">Installation</h1>
        <p className="text-muted-foreground leading-relaxed text-base">
          NexUI has no npm package. You copy components directly into your project so you own every line. The only setup is one helper function and Tailwind CSS.
        </p>
      </div>

      <hr className="border-border mb-10" />

      {/* Requirements */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">Requirements</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="grid grid-cols-[1fr_auto] text-xs divide-y divide-border">
            {[
              { dep: "React", ver: "18 or 19" },
              { dep: "Tailwind CSS", ver: "v4" },
              { dep: "TypeScript", ver: "5+ (optional but recommended)" },
              { dep: "clsx + tailwind-merge", ver: "any recent version" },
            ].map(({ dep, ver }) => (
              <div key={dep} className="contents">
                <span className="px-4 py-3 font-mono text-foreground">{dep}</span>
                <span className="px-4 py-3 text-muted-foreground border-l border-border">{ver}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-6">Step by step</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Step nav */}
          <div className="flex md:flex-col gap-1 md:w-52 shrink-0">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`text-left px-3 py-2.5 rounded-lg border text-sm transition-all ${
                  active === i
                    ? "border-primary/40 bg-primary/10 text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <span className={`text-xs font-mono mr-2 ${active === i ? "text-primary" : "text-muted-foreground"}`}>{s.step}</span>
                {s.title}
              </button>
            ))}
          </div>
          {/* Step content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-foreground mb-4">{steps[active].title}</h3>
            {steps[active].content}
          </div>
        </div>
      </section>

      {/* Next */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">What next?</h2>
        <div className="flex flex-col gap-2">
          {[
            { label: "CLI", href: "/docs/cli", desc: "Automate adding components with the NexUI CLI." },
            { label: "Theming", href: "/docs/theming", desc: "Customise colours, fonts, and radius tokens." },
            { label: "Browse components", href: "/components", desc: "See all 50+ components with live previews and code." },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between px-4 py-3 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{link.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
              </div>
              <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
