"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

const snippets = [
  {
    title: "Button",
    filename: "button.tsx",
    code: `import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive"
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
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        size === "sm" && "text-xs px-3 py-1.5",
        size === "md" && "text-sm px-4 py-2",
        size === "lg" && "text-base px-6 py-3",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "outline" && "border border-border hover:bg-secondary",
        variant === "ghost" && "hover:bg-secondary text-muted-foreground hover:text-foreground",
        variant === "destructive" && "bg-destructive/15 text-destructive hover:bg-destructive/25",
        className
      )}
      {...props}
    />
  )
}`,
  },
  {
    title: "Badge",
    filename: "badge.tsx",
    code: `import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline" | "destructive"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        variant === "outline" && "border border-border text-foreground",
        variant === "destructive" && "bg-destructive/15 text-destructive border border-destructive/20",
        className
      )}
    >
      {children}
    </span>
  )
}`,
  },
  {
    title: "Input",
    filename: "input.tsx",
    code: `import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground",
          "placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-1 focus:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus:ring-destructive",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}`,
  },
  {
    title: "Card",
    filename: "card.tsx",
    code: `import { cn } from "@/lib/utils"

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-xl border border-border bg-card text-card-foreground", className)}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold text-foreground", className)} {...props} />
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 pb-6", className)} {...props} />
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center px-6 pb-6 pt-0 gap-3", className)} {...props} />
  )
}`,
  },
]

export function CodeSnippets() {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(snippets[active].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="docs" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Code</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Copy. Paste. Ship.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
            Every component is a single file. No abstractions, no magic — just clean TypeScript you can read and modify.
          </p>
        </div>

        <div className="rounded-xl border border-border overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-border bg-background/50 scrollbar-none">
            {snippets.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 text-xs font-medium shrink-0 border-b-2 transition-colors",
                  active === i
                    ? "border-primary text-foreground bg-[var(--code-bg)]"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <span className="font-mono">{s.filename}</span>
              </button>
            ))}
          </div>

          {/* Code area */}
          <div className="relative">
            <button
              onClick={copy}
              aria-label="Copy code"
              className="absolute top-3 right-3 z-10 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground bg-background/80 backdrop-blur-sm border border-border rounded-md px-2.5 py-1.5 transition-colors"
            >
              {copied ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
              {copied ? "Copied!" : "Copy"}
            </button>
            <pre className="overflow-x-auto p-6 bg-[var(--code-bg)] text-sm font-mono leading-relaxed text-muted-foreground max-h-[480px] overflow-y-auto">
              <code>{snippets[active].code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
