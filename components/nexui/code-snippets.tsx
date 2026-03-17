"use client"

import { useState } from "react"
import { Check, Copy } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const snippets = [
  {
    title: "Sign In",
    filename: "sign-in.tsx",
    code: `"use client"

import { useState } from "react"
import { Eye, EyeOff, ArrowRight, Github } from "lucide-react"

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-sm">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Sign in to your account to continue.</p>
      </div>

      <button
        type="button"
        className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium h-11 transition-colors"
      >
        <Github size={16} aria-hidden="true" />
        Continue with GitHub
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-foreground/80 uppercase tracking-wider">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-xs font-medium text-foreground/80 uppercase tracking-wider">
              Password
            </label>
            <a href="#" className="text-xs text-primary hover:text-primary/80 transition-colors">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••"
              required
              className="h-11 w-full rounded-xl border border-border bg-secondary px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all mt-1"
        >
          {loading ? (
            <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
          ) : (
            <>Sign in <ArrowRight size={15} aria-hidden="true" /></>
          )}
        </button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <a href="/sign-up" className="text-primary font-medium hover:text-primary/80 transition-colors">
          Sign up
        </a>
      </p>
    </div>
  )
}`,
  },
  {
    title: "Sign Up",
    filename: "sign-up.tsx",
    code: `"use client"

import { useState } from "react"
import { Eye, EyeOff, ArrowRight, Github, Check } from "lucide-react"

const passwordRules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /[0-9]/.test(v) },
]

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="flex flex-col gap-7 w-full max-w-sm">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">Join NexUI and start building beautiful interfaces.</p>
      </div>

      <button
        type="button"
        className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium h-11 transition-colors"
      >
        <Github size={16} aria-hidden="true" />
        Sign up with GitHub
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="first-name" className="text-xs font-medium text-foreground/80 uppercase tracking-wider">
              First name
            </label>
            <input
              id="first-name"
              type="text"
              autoComplete="given-name"
              placeholder="Jane"
              required
              className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="last-name" className="text-xs font-medium text-foreground/80 uppercase tracking-wider">
              Last name
            </label>
            <input
              id="last-name"
              type="text"
              autoComplete="family-name"
              placeholder="Doe"
              required
              className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-foreground/80 uppercase tracking-wider">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-xs font-medium text-foreground/80 uppercase tracking-wider">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-11 w-full rounded-xl border border-border bg-secondary px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
            </button>
          </div>
          {password.length > 0 && (
            <ul className="flex flex-col gap-1 mt-1">
              {passwordRules.map((rule) => {
                const pass = rule.test(password)
                return (
                  <li key={rule.label} className={\`flex items-center gap-1.5 text-xs transition-colors \${pass ? "text-emerald-400" : "text-muted-foreground"}\`}>
                    <Check size={11} aria-hidden="true" className={pass ? "opacity-100" : "opacity-30"} />
                    {rule.label}
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all mt-1"
        >
          {loading ? (
            <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
          ) : (
            <>Sign up <ArrowRight size={15} aria-hidden="true" /></>
          )}
        </button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <a href="/sign-in" className="text-primary font-medium hover:text-primary/80 transition-colors">
          Sign in
        </a>
      </p>
    </div>
  )
}`,
  },
  {
    title: "Create Account",
    filename: "create-account.tsx",
    code: `"use client"

import { useState } from "react"
import { ArrowRight, Github, Building2, User, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

const accountTypes = [
  { id: "personal", label: "Personal", description: "For individual developers", icon: User },
  { id: "team", label: "Team", description: "For small teams & startups", icon: Building2 },
  { id: "enterprise", label: "Enterprise", description: "For large organisations", icon: Code2 },
]

export function CreateAccount() {
  const [accountType, setAccountType] = useState("personal")
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<1 | 2>(1)

  return (
    <div className="flex flex-col gap-7 w-full max-w-sm">
      {/* Step indicator */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
          {[1, 2].map((s) => (
            <div key={s} className={cn("h-1 rounded-full flex-1 transition-all duration-300", s <= step ? "bg-primary" : "bg-border")} />
          ))}
        </div>
        <p className="text-xs text-muted-foreground font-mono">Step {step} of 2</p>
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">
          {step === 1 ? "Choose account type" : "Your details"}
        </h1>
      </div>

      {step === 1 ? (
        <form onSubmit={(e) => { e.preventDefault(); setStep(2) }} className="flex flex-col gap-4">
          <fieldset className="flex flex-col gap-3">
            <legend className="sr-only">Account type</legend>
            {accountTypes.map(({ id, label, description, icon: Icon }) => (
              <label
                key={id}
                htmlFor={\`type-\${id}\`}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all",
                  accountType === id ? "border-primary/60 bg-primary/10" : "border-border bg-secondary hover:border-border/80"
                )}
              >
                <input id={\`type-\${id}\`} type="radio" name="account-type" value={id} checked={accountType === id} onChange={() => setAccountType(id)} className="sr-only" />
                <div className={cn("size-10 rounded-lg flex items-center justify-center shrink-0", accountType === id ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground")}>
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
                </div>
                <div className={cn("ml-auto size-4 rounded-full border-2 transition-colors shrink-0", accountType === id ? "border-primary bg-primary" : "border-border bg-transparent")} />
              </label>
            ))}
          </fieldset>
          <button type="submit" className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all">
            Continue <ArrowRight size={15} aria-hidden="true" />
          </button>
          <button type="button" className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium h-11 transition-colors">
            <Github size={16} aria-hidden="true" />
            Continue with GitHub instead
          </button>
        </form>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => setLoading(false), 1500) }} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="username" className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Username</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm select-none">@</span>
              <input id="username" type="text" placeholder="yourhandle" required className="h-11 w-full rounded-xl border border-border bg-secondary pl-8 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Password</label>
            <input id="password" type="password" placeholder="••••••••" required className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
          </div>
          <div className="flex gap-3 mt-1">
            <button type="button" onClick={() => setStep(1)} className="flex items-center justify-center h-11 flex-1 rounded-xl border border-border bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">Back</button>
            <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 h-11 flex-1 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all">
              {loading ? <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" /> : <>Create account <ArrowRight size={15} aria-hidden="true" /></>}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}`,
  },
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
