"use client"

import { useState } from "react"
import { ArrowUpRight, Eye, EyeOff, Github, Check, ArrowRight, User, Building2, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

// ---- Mini component previews ----

function ButtonPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <button className="text-xs px-4 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
        Default
      </button>
      <button className="text-xs px-4 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium">
        Secondary
      </button>
      <button className="text-xs px-4 py-1.5 rounded-md border border-border text-foreground hover:bg-secondary transition-colors font-medium">
        Outline
      </button>
      <button className="text-xs px-4 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors font-medium">
        Ghost
      </button>
    </div>
  )
}

function BadgePreview() {
  const badges = [
    { label: "Default", cls: "bg-primary text-primary-foreground" },
    { label: "Secondary", cls: "bg-secondary text-secondary-foreground" },
    { label: "Outline", cls: "border border-border text-foreground" },
    { label: "Destructive", cls: "bg-destructive/15 text-destructive border border-destructive/20" },
  ]
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((b) => (
        <span key={b.label} className={cn("text-xs px-2.5 py-0.5 rounded-full font-medium", b.cls)}>
          {b.label}
        </span>
      ))}
    </div>
  )
}

function InputPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition"
      />
      <input
        type="text"
        placeholder="Disabled input"
        disabled
        className="w-full text-xs px-3 py-2 rounded-md border border-border bg-muted text-muted-foreground cursor-not-allowed"
      />
    </div>
  )
}

function CardPreview() {
  return (
    <div className="rounded-xl border border-border bg-card p-4 w-full max-w-xs">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Alex Chen</p>
          <p className="text-xs text-muted-foreground">Product Designer</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        &quot;NexUI components saved us weeks of work. Clean and easy to customize.&quot;
      </p>
    </div>
  )
}

function AlertPreview() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/10 p-3">
        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
        <div>
          <p className="text-xs font-semibold text-foreground">New release</p>
          <p className="text-xs text-muted-foreground">NexUI v1.0 is now available.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-3">
        <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
        <div>
          <p className="text-xs font-semibold text-foreground">Error</p>
          <p className="text-xs text-muted-foreground">Something went wrong. Please retry.</p>
        </div>
      </div>
    </div>
  )
}

function AvatarPreview() {
  const colors = ["bg-primary", "bg-[oklch(0.7_0.15_160)]", "bg-[oklch(0.65_0.22_300)]", "bg-[oklch(0.75_0.18_85)]"]
  const initials = ["AC", "BJ", "CK", "DL"]
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {colors.map((c, i) => (
          <span key={i} className={cn("w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-primary-foreground", c)}>
            {initials[i]}
          </span>
        ))}
        {/* stacked */}
        <div className="flex ml-2">
          {colors.map((c, i) => (
            <span
              key={i}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-primary-foreground border-2 border-background",
                c,
                i > 0 ? "-ml-2" : ""
              )}
            >
              {initials[i]}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToastPreview() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <div className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[oklch(0.7_0.15_160)]" />
          <span className="text-xs text-foreground font-medium">Saved successfully</span>
        </div>
        <button className="text-xs text-muted-foreground hover:text-foreground">Undo</button>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-destructive" />
          <span className="text-xs text-foreground font-medium">Upload failed</span>
        </div>
        <button className="text-xs text-muted-foreground hover:text-foreground">Retry</button>
      </div>
    </div>
  )
}

function TabPreview() {
  const [tab, setTab] = useState(0)
  const tabs = ["Overview", "Analytics", "Settings"]
  return (
    <div className="w-full">
      <div className="flex border-b border-border">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={cn(
              "px-4 py-2 text-xs font-medium transition-colors border-b-2 -mb-px",
              tab === i
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="pt-4 text-xs text-muted-foreground">
        {tab === 0 && "Overview content goes here."}
        {tab === 1 && "Analytics data and charts."}
        {tab === 2 && "Settings and preferences."}
      </div>
    </div>
  )
}

// ---- Auth previews ----

function SignInPreview() {
  const [showPw, setShowPw] = useState(false)
  return (
    <div className="w-full max-w-xs flex flex-col gap-3 text-left">
      <div className="flex flex-col gap-0.5 mb-1">
        <p className="text-sm font-semibold text-foreground">Welcome back</p>
        <p className="text-xs text-muted-foreground">Sign in to your account</p>
      </div>
      <button className="flex items-center justify-center gap-2 w-full h-9 rounded-lg border border-border bg-secondary text-xs font-medium text-foreground hover:bg-secondary/80 transition-colors">
        <Github size={13} aria-hidden="true" />
        Continue with GitHub
      </button>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] text-muted-foreground">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="you@example.com"
          readOnly
          className="h-9 w-full rounded-lg border border-border bg-secondary px-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <div className="relative">
          <input
            type={showPw ? "text" : "password"}
            placeholder="••••••••"
            readOnly
            className="h-9 w-full rounded-lg border border-border bg-secondary px-3 pr-9 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPw((v) => !v)}
            aria-label="Toggle password"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            {showPw ? <EyeOff size={12} aria-hidden="true" /> : <Eye size={12} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <button className="flex items-center justify-center gap-1.5 h-9 w-full rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all">
        Sign in <ArrowRight size={12} aria-hidden="true" />
      </button>
    </div>
  )
}

function SignUpPreview() {
  const [password, setPassword] = useState("")
  const rules = [
    { label: "8+ chars", ok: password.length >= 8 },
    { label: "Uppercase", ok: /[A-Z]/.test(password) },
    { label: "Number", ok: /[0-9]/.test(password) },
  ]
  return (
    <div className="w-full max-w-xs flex flex-col gap-3 text-left">
      <div className="flex flex-col gap-0.5 mb-1">
        <p className="text-sm font-semibold text-foreground">Create an account</p>
        <p className="text-xs text-muted-foreground">Join NexUI today</p>
      </div>
      <button className="flex items-center justify-center gap-2 w-full h-9 rounded-lg border border-border bg-secondary text-xs font-medium text-foreground hover:bg-secondary/80 transition-colors">
        <Github size={13} aria-hidden="true" />
        Sign up with GitHub
      </button>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] text-muted-foreground">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input placeholder="First" readOnly className="h-9 rounded-lg border border-border bg-secondary px-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none" />
        <input placeholder="Last" readOnly className="h-9 rounded-lg border border-border bg-secondary px-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none" />
      </div>
      <input type="email" placeholder="you@example.com" readOnly className="h-9 w-full rounded-lg border border-border bg-secondary px-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none" />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-9 w-full rounded-lg border border-border bg-secondary px-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
      {password.length > 0 && (
        <div className="flex gap-3">
          {rules.map((r) => (
            <span key={r.label} className={cn("flex items-center gap-1 text-[10px]", r.ok ? "text-emerald-400" : "text-muted-foreground")}>
              <Check size={9} aria-hidden="true" className={r.ok ? "opacity-100" : "opacity-30"} />
              {r.label}
            </span>
          ))}
        </div>
      )}
      <button className="flex items-center justify-center gap-1.5 h-9 w-full rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all">
        Sign up <ArrowRight size={12} aria-hidden="true" />
      </button>
    </div>
  )
}

function CreateAccountPreview() {
  const [selected, setSelected] = useState("personal")
  const types = [
    { id: "personal", label: "Personal", icon: User },
    { id: "team", label: "Team", icon: Building2 },
    { id: "enterprise", label: "Enterprise", icon: Code2 },
  ]
  return (
    <div className="w-full max-w-xs flex flex-col gap-3 text-left">
      <div className="flex flex-col gap-0.5 mb-1">
        <div className="flex gap-1.5 mb-2">
          <div className="h-1 rounded-full flex-1 bg-primary" />
          <div className="h-1 rounded-full flex-1 bg-border" />
        </div>
        <p className="text-sm font-semibold text-foreground">Choose account type</p>
        <p className="text-xs text-muted-foreground">Select the plan that fits you</p>
      </div>
      <div className="flex flex-col gap-2">
        {types.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setSelected(id)}
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl border text-left transition-all w-full",
              selected === id ? "border-primary/60 bg-primary/10" : "border-border bg-secondary hover:border-border/80"
            )}
          >
            <div className={cn("size-7 rounded-lg flex items-center justify-center shrink-0", selected === id ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground")}>
              <Icon size={14} aria-hidden="true" />
            </div>
            <span className="text-xs font-medium text-foreground">{label}</span>
            <div className={cn("ml-auto size-3.5 rounded-full border-2 shrink-0", selected === id ? "border-primary bg-primary" : "border-border")} />
          </button>
        ))}
      </div>
      <button className="flex items-center justify-center gap-1.5 h-9 w-full rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all mt-1">
        Continue <ArrowRight size={12} aria-hidden="true" />
      </button>
    </div>
  )
}

// ---- Category filter ----

const categories = ["All", "Auth", "Inputs", "Display", "Feedback", "Navigation"]

const components: {
  name: string
  description: string
  category: string
  href?: string
  preview: React.ReactNode
}[] = [
  {
    name: "Sign In",
    description: "Email + password login with GitHub OAuth and show/hide password toggle.",
    category: "Auth",
    href: "/sign-in",
    preview: <SignInPreview />,
  },
  {
    name: "Sign Up",
    description: "Registration form with name fields, email, and live password strength hints.",
    category: "Auth",
    href: "/sign-up",
    preview: <SignUpPreview />,
  },
  {
    name: "Create Account",
    description: "Two-step flow: account type picker then profile details.",
    category: "Auth",
    href: "/create-account",
    preview: <CreateAccountPreview />,
  },
  {
    name: "Button",
    description: "Trigger actions with multiple variants and sizes.",
    category: "Inputs",
    preview: <ButtonPreview />,
  },
  {
    name: "Badge",
    description: "Small status indicators and labels.",
    category: "Display",
    preview: <BadgePreview />,
  },
  {
    name: "Input",
    description: "Text fields for capturing user input.",
    category: "Inputs",
    preview: <InputPreview />,
  },
  {
    name: "Card",
    description: "Container for grouping related content.",
    category: "Display",
    preview: <CardPreview />,
  },
  {
    name: "Alert",
    description: "Communicate important messages inline.",
    category: "Feedback",
    preview: <AlertPreview />,
  },
  {
    name: "Avatar",
    description: "User profile pictures with fallback initials.",
    category: "Display",
    preview: <AvatarPreview />,
  },
  {
    name: "Toast",
    description: "Temporary notifications at the edge of the screen.",
    category: "Feedback",
    preview: <ToastPreview />,
  },
  {
    name: "Tabs",
    description: "Segmented navigation between related views.",
    category: "Navigation",
    preview: <TabPreview />,
  },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All" ? components : components.filter((c) => c.category === activeCategory)

  return (
    <section id="components" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Components</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Everything you need.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
            40+ components ready to copy into your project. Each one is accessible, responsive, and built with Tailwind CSS.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={cn(
                "text-xs px-3.5 py-1.5 rounded-full border font-medium transition-colors",
                activeCategory === c
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((comp) => (
            <div
              key={comp.name}
              className="group rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Preview area */}
              <div className="flex-1 min-h-[140px] flex items-center justify-center p-6 bg-background/40">
                {comp.preview}
              </div>
              {/* Info */}
              <div className="px-4 py-3 border-t border-border">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-sm font-semibold text-foreground">{comp.name}</span>
                  <div className="flex items-center gap-2">
                    {comp.href && (
                      <a
                        href={comp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${comp.name} page`}
                        className="text-xs text-primary hover:text-primary/80 flex items-center gap-0.5 transition-colors"
                      >
                        View <ArrowUpRight size={11} aria-hidden="true" />
                      </a>
                    )}
                    <span className="text-xs text-muted-foreground">{comp.category}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{comp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          And many more — dialogs, dropdowns, tables, calendars, data pickers, and more coming soon.
        </p>
      </div>
    </section>
  )
}
