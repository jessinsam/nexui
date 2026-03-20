"use client"


import React, { useState } from "react"
import { Eye, EyeOff, Github, Check, ArrowRight, User, Building2, Code2, ChevronLeft, ChevronRight, Clock, CalendarDays, X, ChevronDown, Search, Globe, Layers, Zap, Server, Sun, Moon, SlidersHorizontal, Mic, Command, Filter, LayoutGrid, List, Columns, Table, GripVertical, ArrowUpDown, ArrowUp, ArrowDown, Tag, Star, MoreHorizontal, Circle, CheckCircle2, AlertCircle, PauseCircle, Kanban, Plus, TrendingUp, MessageSquare, Send, Smile, ThumbsUp, ThumbsDown, Upload, MapPin, Phone, Mail, AlertTriangle, Loader2, ChevronUp, Paperclip, FileText, ImageIcon, StopCircle, Volume2, Bot, Sparkles, RotateCcw, Copy, MicOff, Hash, AtSign, Heart, Play, Pause, ArrowLeft, Quote, ExternalLink } from "@/components/nexui/icons"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChartLegend, AreaChart, BarChart, LineChart, PieChart, RadarChart, RadialProgress } from "@/components/nexui/charts"

// ─── Compact previews (non-auth) ──────────────────────────────────────────────

function IOSButtonPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <button className="w-full h-[50px] rounded-[14px] bg-primary text-white text-[17px] font-semibold tracking-[-0.4px] transition-opacity active:opacity-70">
        Continue
      </button>
      <button className="w-full h-[50px] rounded-[14px] bg-secondary text-foreground text-[17px] font-semibold tracking-[-0.4px] border border-border transition-opacity active:opacity-70">
        Cancel
      </button>
      <button className="w-full h-[50px] rounded-[14px] bg-transparent text-primary text-[17px] font-semibold tracking-[-0.4px] transition-opacity active:opacity-70">
        Learn more
      </button>
      <button className="w-full h-[50px] rounded-[14px] bg-destructive/15 text-destructive text-[17px] font-semibold tracking-[-0.4px] border border-destructive/20 transition-opacity active:opacity-70">
        Delete
      </button>
    </div>
  )
}

function AndroidButtonPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <button className="w-full h-12 rounded-full bg-primary text-white text-sm font-medium tracking-[0.1px] shadow-sm transition-all active:shadow-none active:scale-[0.98]">
        Filled
      </button>
      <button className="w-full h-12 rounded-full bg-secondary text-foreground text-sm font-medium tracking-[0.1px] border border-border transition-all active:scale-[0.98]">
        Tonal
      </button>
      <button className="w-full h-12 rounded-full bg-transparent text-primary text-sm font-medium tracking-[0.1px] border border-primary/60 transition-all active:scale-[0.98]">
        Outlined
      </button>
      <button className="w-full h-12 rounded-full bg-transparent text-primary text-sm font-medium tracking-[0.1px] transition-all active:scale-[0.98]">
        Text
      </button>
    </div>
  )
}

function ButtonPreview() {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <button className="text-xs px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">Default</button>
      <button className="text-xs px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 transition-colors font-medium">Secondary</button>
      <button className="text-xs px-4 py-1.5 rounded-full border border-border bg-transparent text-foreground hover:bg-secondary transition-colors font-medium">Outline</button>
      <button className="text-xs px-4 py-1.5 rounded-full bg-destructive/15 text-destructive border border-destructive/40 hover:bg-destructive/25 transition-colors font-medium">Destructive</button>
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
        <span key={b.label} className={cn("text-xs px-2.5 py-0.5 rounded-full font-medium", b.cls)}>{b.label}</span>
      ))}
    </div>
  )
}

function InputPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <input type="text" placeholder="Enter your email" className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition" />
      <input type="text" placeholder="Disabled input" disabled className="w-full text-xs px-3 py-2 rounded-md border border-border bg-muted text-muted-foreground cursor-not-allowed" />
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
      <p className="text-xs text-muted-foreground leading-relaxed">&quot;NexUI components saved us weeks of work.&quot;</p>
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
  const items = [
    { initials: "AC", cls: "bg-primary" },
    { initials: "BJ", cls: "bg-[oklch(0.7_0.15_160)]" },
    { initials: "CK", cls: "bg-[oklch(0.72_0.17_200)]" },
    { initials: "DL", cls: "bg-[oklch(0.75_0.18_85)]" },
  ]
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {items.map((a, i) => (
          <span key={i} className={cn("w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-primary-foreground", a.cls)}>{a.initials}</span>
        ))}
      </div>
      <div className="flex">
        {items.map((a, i) => (
          <span key={i} className={cn("w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-primary-foreground border-2 border-background", a.cls, i > 0 ? "-ml-2" : "")}>{a.initials}</span>
        ))}
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
          <button key={t} onClick={() => setTab(i)} className={cn("px-4 py-2 text-xs font-medium transition-colors border-b-2 -mb-px", tab === i ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")}>{t}</button>
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

function CheckboxPreview() {
  const [checked, setChecked] = useState([true, false, true])
  const labels = ["Accept terms", "Subscribe to updates", "Enable notifications"]
  return (
    <div className="flex flex-col gap-2.5">
      {labels.map((label, i) => (
        <label key={label} className="flex items-center gap-2.5 cursor-pointer">
          <button
            role="checkbox"
            aria-checked={checked[i]}
            onClick={() => setChecked((p) => p.map((v, j) => (j === i ? !v : v)))}
            className={cn("w-4 h-4 rounded flex items-center justify-center border transition-colors shrink-0", checked[i] ? "bg-primary border-primary" : "border-border bg-secondary")}
          >
            {checked[i] && <Check size={10} className="text-primary-foreground" aria-hidden="true" />}
          </button>
          <span className="text-xs text-foreground">{label}</span>
        </label>
      ))}
    </div>
  )
}

function SelectPreview() {
  const [val, setVal] = useState("Next.js")
  return (
    <div className="w-full max-w-xs">
      <select value={val} onChange={(e) => setVal(e.target.value)} className="h-9 w-full rounded-lg border border-border bg-secondary px-3 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
        {["Next.js", "Remix", "Astro", "SvelteKit"].map((f) => <option key={f}>{f}</option>)}
      </select>
    </div>
  )
}

function TextareaPreview() {
  return (
    <textarea placeholder="Write something..." rows={3} className="w-full max-w-xs rounded-lg border border-border bg-secondary px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none" />
  )
}

function ProgressPreview() {
  const bars = [30, 65, 90]
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      {bars.map((v) => (
        <div key={v} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-[10px] text-muted-foreground">Progress</span>
            <span className="text-[10px] text-foreground font-medium">{v}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${v}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function SwitchPreview() {
  const [states, setStates] = useState([true, false, true])
  const labels = ["Dark mode", "Notifications", "Analytics"]
  return (
    <div className="flex flex-col gap-3">
      {labels.map((label, i) => (
        <label key={label} className="flex items-center justify-between gap-8 cursor-pointer">
          <span className="text-xs text-foreground">{label}</span>
          <button
            role="switch"
            aria-checked={states[i]}
            onClick={() => setStates((p) => p.map((v, j) => (j === i ? !v : v)))}
            className={cn("w-9 h-5 rounded-full relative transition-colors shrink-0", states[i] ? "bg-primary" : "bg-secondary border border-border")}
          >
            <span className={cn("absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all", states[i] ? "left-[18px]" : "left-0.5")} />
          </button>
        </label>
      ))}
    </div>
  )
}

// ─── Full-size auth previews ───────────────────────────────────────────────────

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full min-h-[520px] rounded-xl overflow-hidden border border-border">
      {/* Form side */}
      <div className="flex-1 flex flex-col justify-center items-center px-10 py-12 bg-background">
        {children}
      </div>
      {/* Image side */}
      <div className="hidden lg:block w-[42%] relative">
        <Image
          src="/auth-panel.jpg"
          alt="Auth panel illustration"
          fill
          className="object-cover object-top"
          sizes="400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-white text-base font-semibold leading-snug drop-shadow-md">
            &ldquo;The best components library we&apos;ve ever used.&rdquo;
          </p>
          <p className="mt-2 text-sm text-white/60 drop-shadow-md">&mdash; Alex Chen, Product Designer</p>
        </div>
      </div>
    </div>
  )
}

export function SignInFull() {
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <AuthLayout>
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground tracking-tight">Welcome back</h2>
          <p className="mt-1 text-sm text-muted-foreground">Sign in to your account to continue.</p>
        </div>
        <button className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium h-11 transition-colors">
          <Github size={16} aria-hidden="true" /> Continue with GitHub
        </button>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Email</label>
            <input type="email" placeholder="you@example.com" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Password</label>
              <a href="#" className="text-xs text-primary hover:text-primary/80">Forgot password?</a>
            </div>
            <div className="relative">
              <input type={showPw ? "text" : "password"} placeholder="••••••••" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
              <button type="button" onClick={() => setShowPw(v => !v)} aria-label="Toggle password" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPw ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
              </button>
            </div>
          </div>
          <button
            onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500) }}
            disabled={loading}
            className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all mt-1"
          >
            {loading ? <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" /> : <>Sign in <ArrowRight size={15} aria-hidden="true" /></>}
          </button>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a href="/sign-up" className="text-primary font-medium hover:text-primary/80">Sign up</a>
        </p>
      </div>
    </AuthLayout>
  )
}

function SignUpFull() {
  const [showPw, setShowPw] = useState(false)
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const rules = [
    { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
    { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
    { label: "One number", test: (v: string) => /[0-9]/.test(v) },
  ]
  return (
    <AuthLayout>
      <div className="w-full max-w-sm flex flex-col gap-5">
        <div>
          <h2 className="text-2xl font-semibold text-foreground tracking-tight">Create an account</h2>
          <p className="mt-1 text-sm text-muted-foreground">Join NexUI and start building.</p>
        </div>
        <button className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium h-11 transition-colors">
          <Github size={16} aria-hidden="true" /> Sign up with GitHub
        </button>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground/80 uppercase tracking-wider">First name</label>
              <input placeholder="Jane" className="h-11 rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Last name</label>
              <input placeholder="Doe" className="h-11 rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Email</label>
            <input type="email" placeholder="you@example.com" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Password</label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="h-11 w-full rounded-xl border border-border bg-secondary px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button type="button" onClick={() => setShowPw(v => !v)} aria-label="Toggle password" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPw ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
              </button>
            </div>
            {password.length > 0 && (
              <ul className="flex flex-col gap-1 mt-1">
                {rules.map(r => {
                  const ok = r.test(password)
                  return (
                    <li key={r.label} className={cn("flex items-center gap-1.5 text-xs transition-colors", ok ? "text-emerald-400" : "text-muted-foreground")}>
                      <Check size={11} aria-hidden="true" className={ok ? "opacity-100" : "opacity-30"} />
                      {r.label}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <button
            onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500) }}
            disabled={loading}
            className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all"
          >
            {loading ? <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" /> : <>Sign up <ArrowRight size={15} aria-hidden="true" /></>}
          </button>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="/sign-in" className="text-primary font-medium hover:text-primary/80">Sign in</a>
        </p>
      </div>
    </AuthLayout>
  )
}

function CreateAccountFull() {
  const [selected, setSelected] = useState("personal")
  const [step, setStep] = useState<1 | 2>(1)
  const [loading, setLoading] = useState(false)
  const types = [
    { id: "personal", label: "Personal", description: "For individual developers", icon: User },
    { id: "team", label: "Team", description: "For small teams & startups", icon: Building2 },
    { id: "enterprise", label: "Enterprise", description: "For large organisations", icon: Code2 },
  ]
  return (
    <AuthLayout>
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            {[1, 2].map(s => (
              <div key={s} className={cn("h-1 rounded-full flex-1 transition-all duration-300", s <= step ? "bg-primary" : "bg-border")} />
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-mono mb-1">Step {step} of 2</p>
          <h2 className="text-2xl font-semibold text-foreground tracking-tight">
            {step === 1 ? "Choose account type" : "Your details"}
          </h2>
        </div>
        {step === 1 ? (
          <>
            <div className="flex flex-col gap-3">
              {types.map(({ id, label, description, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelected(id)}
                  className={cn("flex items-center gap-4 p-4 rounded-xl border text-left transition-all w-full", selected === id ? "border-primary/60 bg-primary/10" : "border-border bg-secondary hover:border-primary/30")}
                >
                  <div className={cn("size-10 rounded-lg flex items-center justify-center shrink-0", selected === id ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground")}>
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
                  </div>
                  <div className={cn("ml-auto size-4 rounded-full border-2 shrink-0 transition-colors", selected === id ? "border-primary bg-primary" : "border-border")} />
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <button onClick={() => setStep(2)} className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all">
                Continue <ArrowRight size={15} aria-hidden="true" />
              </button>
              <button className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium h-11 transition-colors">
                <Github size={16} aria-hidden="true" /> Continue with GitHub
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Username</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm select-none">@</span>
                <input placeholder="yourhandle" className="h-11 w-full rounded-xl border border-border bg-secondary pl-8 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Email</label>
              <input type="email" placeholder="you@example.com" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Password</label>
              <input type="password" placeholder="••••••••" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="flex gap-3 mt-1">
              <button onClick={() => setStep(1)} className="flex items-center justify-center h-11 flex-1 rounded-xl border border-border bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">Back</button>
              <button
                onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500) }}
                disabled={loading}
                className="flex items-center justify-center gap-2 h-11 flex-1 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all"
              >
                {loading ? <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" /> : <>Create account <ArrowRight size={14} aria-hidden="true" /></>}
              </button>
            </div>
          </div>
        )}
      </div>
    </AuthLayout>
  )
}

// ─── Calendar helpers ─────────────────���───────────────────────────────────────

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getDays(year: number, month: number) {
  const first = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()
  return { first, total }
}

function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function isBetween(d: Date, start: Date | null, end: Date | null) {
  if (!start || !end) return false
  return d > start && d < end
}

// ─── 1. Basic Calendar ────────────────────────────────────────────────────────

function CalendarBasic() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState<Date | null>(today)
  const { first, total } = getDays(year, month)

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  return (
    <div className="w-full max-w-xs rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prev} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground" aria-label="Previous month">
          <ChevronLeft size={15} aria-hidden="true" />
        </button>
        <span className="text-sm font-semibold text-foreground">{MONTHS[month]} {year}</span>
        <button onClick={next} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground" aria-label="Next month">
          <ChevronRight size={15} aria-hidden="true" />
        </button>
      </div>
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => <span key={d} className="text-[10px] font-medium text-muted-foreground text-center py-1">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {Array.from({ length: first }).map((_, i) => <span key={`e${i}`} />)}
        {Array.from({ length: total }).map((_, i) => {
          const day = i + 1
          const date = new Date(year, month, day)
          const isToday = isSameDay(date, today)
          const isSel = isSameDay(date, selected)
          return (
            <button
              key={day}
              onClick={() => setSelected(date)}
              className={cn(
                "size-8 mx-auto flex items-center justify-center rounded-lg text-xs transition-all",
                isSel ? "bg-primary text-primary-foreground font-semibold" :
                isToday ? "border border-primary text-primary font-semibold" :
                "text-foreground hover:bg-secondary"
              )}
            >
              {day}
            </button>
          )
        })}
      </div>
      {selected && (
        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">Selected: <span className="text-foreground font-medium">{selected.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span></p>
        </div>
      )}
    </div>
  )
}

// ─── 2. Range Picker ─────────────────────────────────────────────────────────

function CalendarRange() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [start, setStart] = useState<Date | null>(new Date(today.getFullYear(), today.getMonth(), 8))
  const [end, setEnd] = useState<Date | null>(new Date(today.getFullYear(), today.getMonth(), 18))
  const [hovered, setHovered] = useState<Date | null>(null)
  const { first, total } = getDays(year, month)

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  function handleClick(date: Date) {
    if (!start || (start && end)) { setStart(date); setEnd(null) }
    else { if (date < start) { setEnd(start); setStart(date) } else setEnd(date) }
  }

  const rangeEnd = end ?? hovered

  return (
    <div className="w-full max-w-xs rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prev} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors text-muted-foreground" aria-label="Previous month">
          <ChevronLeft size={15} aria-hidden="true" />
        </button>
        <span className="text-sm font-semibold text-foreground">{MONTHS[month]} {year}</span>
        <button onClick={next} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors text-muted-foreground" aria-label="Next month">
          <ChevronRight size={15} aria-hidden="true" />
        </button>
      </div>
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => <span key={d} className="text-[10px] font-medium text-muted-foreground text-center py-1">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-y-0.5">
        {Array.from({ length: first }).map((_, i) => <span key={`e${i}`} />)}
        {Array.from({ length: total }).map((_, i) => {
          const day = i + 1
          const date = new Date(year, month, day)
          const isStart = isSameDay(date, start)
          const isEnd = isSameDay(date, end)
          const inRange = start && rangeEnd && isBetween(date, start < rangeEnd ? start : rangeEnd, start < rangeEnd ? rangeEnd : start)
          return (
            <button
              key={day}
              onClick={() => handleClick(date)}
              onMouseEnter={() => !end && setHovered(date)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "size-8 mx-auto flex items-center justify-center text-xs transition-all relative",
                isStart || isEnd ? "bg-primary text-primary-foreground font-semibold rounded-lg z-10" :
                inRange ? "bg-primary/15 text-foreground rounded-none" :
                "text-foreground hover:bg-secondary rounded-lg"
              )}
            >
              {day}
            </button>
          )
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-border flex gap-3">
        <div className="flex-1 rounded-lg bg-secondary px-3 py-2">
          <p className="text-[10px] text-muted-foreground mb-0.5">From</p>
          <p className="text-xs text-foreground font-medium">{start ? start.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—"}</p>
        </div>
        <div className="flex-1 rounded-lg bg-secondary px-3 py-2">
          <p className="text-[10px] text-muted-foreground mb-0.5">To</p>
          <p className="text-xs text-foreground font-medium">{end ? end.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—"}</p>
        </div>
      </div>
    </div>
  )
}

// ─── 3. Calendar With Events ──────────────────────────────────────────────��───

const SAMPLE_EVENTS: Record<number, { label: string; color: string }[]> = {
  3: [{ label: "Team standup", color: "bg-primary" }],
  7: [{ label: "Design review", color: "bg-[oklch(0.7_0.15_160)]" }],
  12: [{ label: "Product launch", color: "bg-[oklch(0.65_0.22_300)]" }, { label: "All-hands", color: "bg-primary" }],
  18: [{ label: "1:1 with Alex", color: "bg-[oklch(0.75_0.18_85)]" }],
  22: [{ label: "Sprint planning", color: "bg-primary" }],
  27: [{ label: "Offsite", color: "bg-[oklch(0.6_0.19_30)]" }],
}

function CalendarWithEvents() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState<Date | null>(null)
  const { first, total } = getDays(year, month)

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  const selectedEvents = selected ? (SAMPLE_EVENTS[selected.getDate()] ?? []) : []

  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card overflow-hidden">
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prev} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors text-muted-foreground" aria-label="Previous month">
            <ChevronLeft size={15} aria-hidden="true" />
          </button>
          <span className="text-sm font-semibold text-foreground">{MONTHS[month]} {year}</span>
          <button onClick={next} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors text-muted-foreground" aria-label="Next month">
            <ChevronRight size={15} aria-hidden="true" />
          </button>
        </div>
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map(d => <span key={d} className="text-[10px] font-medium text-muted-foreground text-center py-1">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {Array.from({ length: first }).map((_, i) => <span key={`e${i}`} />)}
          {Array.from({ length: total }).map((_, i) => {
            const day = i + 1
            const date = new Date(year, month, day)
            const isToday = isSameDay(date, today)
            const isSel = isSameDay(date, selected)
            const events = SAMPLE_EVENTS[day] ?? []
            return (
              <button
                key={day}
                onClick={() => setSelected(isSel ? null : date)}
                className={cn(
                  "flex flex-col items-center gap-0.5 py-1 rounded-lg transition-all",
                  isSel ? "bg-primary/10" : "hover:bg-secondary"
                )}
              >
                <span className={cn(
                  "size-6 flex items-center justify-center rounded-full text-xs",
                  isSel ? "bg-primary text-primary-foreground font-semibold" :
                  isToday ? "border border-primary text-primary font-semibold" :
                  "text-foreground"
                )}>{day}</span>
                <div className="flex gap-0.5">
                  {events.slice(0, 2).map((e, ei) => (
                    <span key={ei} className={cn("w-1 h-1 rounded-full", e.color)} />
                  ))}
                </div>
              </button>
            )
          })}
        </div>
      </div>
      {selected && (
        <div className="border-t border-border px-5 py-3">
          <p className="text-xs font-medium text-foreground mb-2">{selected.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
          {selectedEvents.length === 0 ? (
            <p className="text-xs text-muted-foreground">No events</p>
          ) : (
            <div className="flex flex-col gap-1.5">
              {selectedEvents.map((e, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={cn("w-2 h-2 rounded-full shrink-0", e.color)} />
                  <span className="text-xs text-foreground">{e.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── 4. Mini Inline Calendar ──────────────────────────────────────────────────

function CalendarMini() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState<Date | null>(today)
  const { first, total } = getDays(year, month)

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
      <div className="w-64 rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center justify-between mb-3">
          <button onClick={prev} className="size-6 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground" aria-label="Previous month">
            <ChevronLeft size={13} aria-hidden="true" />
          </button>
          <span className="text-xs font-semibold text-foreground">{MONTHS[month].slice(0, 3)} {year}</span>
          <button onClick={next} className="size-6 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground" aria-label="Next month">
            <ChevronRight size={13} aria-hidden="true" />
          </button>
        </div>
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map(d => <span key={d} className="text-[9px] font-medium text-muted-foreground text-center">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-y-0.5">
          {Array.from({ length: first }).map((_, i) => <span key={`e${i}`} />)}
          {Array.from({ length: total }).map((_, i) => {
            const day = i + 1
            const date = new Date(year, month, day)
            const isToday = isSameDay(date, today)
            const isSel = isSameDay(date, selected)
            return (
              <button
                key={day}
                onClick={() => setSelected(date)}
                className={cn(
                  "size-7 mx-auto flex items-center justify-center rounded-md text-[10px] transition-all",
                  isSel ? "bg-primary text-primary-foreground font-bold" :
                  isToday ? "border border-primary/60 text-primary" :
                  "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {day}
              </button>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:pt-1">
        <p className="text-xs font-medium text-foreground">Upcoming</p>
        {[
          { day: 12, label: "Product launch", time: "2:00 PM", color: "bg-[oklch(0.65_0.22_300)]" },
          { day: 18, label: "1:1 with Alex", time: "10:30 AM", color: "bg-[oklch(0.75_0.18_85)]" },
          { day: 22, label: "Sprint planning", time: "9:00 AM", color: "bg-primary" },
        ].map(e => (
          <div key={e.day} className="flex items-center gap-3 rounded-xl border border-border bg-secondary px-3 py-2.5">
            <span className={cn("w-2 h-2 rounded-full shrink-0", e.color)} />
            <div>
              <p className="text-xs font-medium text-foreground">{e.label}</p>
              <p className="text-[10px] text-muted-foreground">{MONTHS[month].slice(0, 3)} {e.day} &middot; {e.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── 5. Date + Time Picker ────────────────────────────────────────────────────

function CalendarTimePicker() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState<Date | null>(today)
  const [hour, setHour] = useState(10)
  const [minute, setMinute] = useState(30)
  const [ampm, setAmpm] = useState<"AM" | "PM">("AM")
  const { first, total } = getDays(year, month)

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full max-w-xl">
      <div className="flex-1 rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prev} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Previous month">
            <ChevronLeft size={15} aria-hidden="true" />
          </button>
          <span className="text-sm font-semibold text-foreground">{MONTHS[month]} {year}</span>
          <button onClick={next} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Next month">
            <ChevronRight size={15} aria-hidden="true" />
          </button>
        </div>
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(d => <span key={d} className="text-[10px] font-medium text-muted-foreground text-center py-1">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {Array.from({ length: first }).map((_, i) => <span key={`e${i}`} />)}
          {Array.from({ length: total }).map((_, i) => {
            const day = i + 1
            const date = new Date(year, month, day)
            const isToday = isSameDay(date, today)
            const isSel = isSameDay(date, selected)
            return (
              <button
                key={day}
                onClick={() => setSelected(date)}
                className={cn(
                  "size-8 mx-auto flex items-center justify-center rounded-lg text-xs transition-all",
                  isSel ? "bg-primary text-primary-foreground font-semibold" :
                  isToday ? "border border-primary text-primary" :
                  "text-foreground hover:bg-secondary"
                )}
              >{day}</button>
            )
          })}
        </div>
      </div>
      <div className="lg:w-44 rounded-2xl border border-border bg-card p-5 flex flex-col gap-5">
        <div className="flex items-center gap-2 text-xs font-medium text-foreground">
          <Clock size={13} className="text-primary" aria-hidden="true" />
          Select time
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1 flex-1">
            <button onClick={() => setHour(h => h === 12 ? 1 : h + 1)} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Increase hour"><ChevronRight size={13} className="rotate-[-90deg]" aria-hidden="true" /></button>
            <span className="text-lg font-semibold text-foreground w-8 text-center">{String(hour).padStart(2, "0")}</span>
            <button onClick={() => setHour(h => h === 1 ? 12 : h - 1)} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Decrease hour"><ChevronLeft size={13} className="rotate-[-90deg]" aria-hidden="true" /></button>
          </div>
          <span className="text-lg font-bold text-muted-foreground mb-0.5">:</span>
          <div className="flex flex-col items-center gap-1 flex-1">
            <button onClick={() => setMinute(m => m === 55 ? 0 : m + 5)} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Increase minute"><ChevronRight size={13} className="rotate-[-90deg]" aria-hidden="true" /></button>
            <span className="text-lg font-semibold text-foreground w-8 text-center">{String(minute).padStart(2, "0")}</span>
            <button onClick={() => setMinute(m => m === 0 ? 55 : m - 5)} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Decrease minute"><ChevronLeft size={13} className="rotate-[-90deg]" aria-hidden="true" /></button>
          </div>
        </div>
        <div className="flex rounded-lg border border-border overflow-hidden">
          {(["AM", "PM"] as const).map(p => (
            <button
              key={p}
              onClick={() => setAmpm(p)}
              className={cn("flex-1 text-xs py-1.5 transition-colors font-medium", ampm === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")}
            >{p}</button>
          ))}
        </div>
        {selected && (
          <div className="mt-auto rounded-xl bg-secondary px-3 py-2.5">
            <p className="text-[10px] text-muted-foreground mb-0.5">Scheduled</p>
            <p className="text-xs font-semibold text-foreground">{selected.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
            <p className="text-xs text-primary font-medium">{String(hour).padStart(2, "0")}:{String(minute).padStart(2, "0")} {ampm}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── 6. Booking / Availability Calendar ─────────────────────────────────────���������

const SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]
const BOOKED = new Set(["10:00 AM", "2:00 PM"])

function CalendarBooking() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState<Date | null>(today)
  const [slot, setSlot] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const { first, total } = getDays(year, month)

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full max-w-2xl">
      <div className="flex-1 rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prev} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Previous month">
            <ChevronLeft size={15} aria-hidden="true" />
          </button>
          <span className="text-sm font-semibold text-foreground">{MONTHS[month]} {year}</span>
          <button onClick={next} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Next month">
            <ChevronRight size={15} aria-hidden="true" />
          </button>
        </div>
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(d => <span key={d} className="text-[10px] font-medium text-muted-foreground text-center py-1">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {Array.from({ length: first }).map((_, i) => <span key={`e${i}`} />)}
          {Array.from({ length: total }).map((_, i) => {
            const day = i + 1
            const date = new Date(year, month, day)
            const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
            const isToday = isSameDay(date, today)
            const isSel = isSameDay(date, selected)
            return (
              <button
                key={day}
                onClick={() => { if (!isPast) { setSelected(date); setSlot(null); setConfirmed(false) } }}
                disabled={isPast}
                className={cn(
                  "size-8 mx-auto flex items-center justify-center rounded-lg text-xs transition-all",
                  isPast ? "text-muted-foreground/30 cursor-not-allowed" :
                  isSel ? "bg-primary text-primary-foreground font-semibold" :
                  isToday ? "border border-primary text-primary" :
                  "text-foreground hover:bg-secondary"
                )}
              >{day}</button>
            )
          })}
        </div>
      </div>

      <div className="lg:w-56 rounded-2xl border border-border bg-card p-5 flex flex-col gap-4">
        <div>
          <p className="text-xs font-semibold text-foreground flex items-center gap-1.5">
            <CalendarDays size={13} className="text-primary" aria-hidden="true" />
            {selected ? selected.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }) : "Pick a date"}
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Available time slots</p>
        </div>
        {confirmed ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center">
            <div className="size-10 rounded-full bg-[oklch(0.7_0.15_160)]/20 flex items-center justify-center">
              <Check size={18} className="text-[oklch(0.7_0.15_160)]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Booked!</p>
              <p className="text-xs text-muted-foreground mt-0.5">{slot} on {selected?.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
            </div>
            <button onClick={() => { setSlot(null); setConfirmed(false) }} className="text-xs text-primary hover:text-primary/80 flex items-center gap-1"><X size={11} aria-hidden="true" /> Cancel booking</button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-1.5 flex-1">
              {SLOTS.map(s => {
                const isBooked = BOOKED.has(s)
                const isSel = slot === s
                return (
                  <button
                    key={s}
                    onClick={() => !isBooked && setSlot(isSel ? null : s)}
                    disabled={isBooked}
                    className={cn(
                      "w-full rounded-lg px-3 py-2 text-xs font-medium transition-all text-left",
                      isBooked ? "bg-secondary/50 text-muted-foreground/40 cursor-not-allowed line-through" :
                      isSel ? "bg-primary text-primary-foreground" :
                      "bg-secondary text-foreground hover:bg-secondary/80 hover:border-primary/30 border border-transparent"
                    )}
                  >{s}{isBooked && <span className="ml-2 text-[10px] no-underline">(taken)</span>}</button>
                )
              })}
            </div>
            <button
              onClick={() => slot && setConfirmed(true)}
              disabled={!slot}
              className="w-full h-9 rounded-xl bg-primary text-primary-foreground text-xs font-semibold disabled:opacity-40 hover:bg-primary/90 transition-all"
            >Confirm booking</button>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Dropdown components ──────────────────────────────────────────────────────

// 1. Basic Dropdown — matches the reference screenshot exactly
function DropdownBasic() {
  const options = ["Next.js", "Remix", "Astro", "SvelteKit"]
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("Next.js")

  return (
    <div style={{ minHeight: open ? 240 : 56 }} className="relative w-72 transition-all duration-200">
      {/* Trigger */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center justify-between pl-4 pr-5 py-3 rounded-xl bg-secondary border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
      >
        {selected}
        <ChevronDown size={15} aria-hidden="true" className={cn("text-muted-foreground transition-transform duration-200 shrink-0", open && "rotate-180")} />
      </button>

      {/* Open list */}
      {open && (
        <ul
          role="listbox"
          className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-card shadow-xl overflow-hidden py-1"
        >
          {options.map(opt => {
            const isSel = selected === opt
            return (
              <li key={opt} role="option" aria-selected={isSel}>
                <button
                  onClick={() => { setSelected(opt); setOpen(false) }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 mx-1 rounded-lg text-sm transition-colors",
                    isSel
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-foreground hover:bg-secondary"
                  )}
                  style={{ width: "calc(100% - 8px)" }}
                >
                  <Check
                    size={14}
                    aria-hidden="true"
                    className={cn("shrink-0", isSel ? "opacity-100" : "opacity-0")}
                  />
                  {opt}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

// 2. Searchable Dropdown
function DropdownSearch() {
  const options = ["TypeScript", "JavaScript", "Python", "Rust", "Go", "Swift", "Kotlin", "C++"]
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const filtered = options.filter(o => o.toLowerCase().includes(query.toLowerCase()))

  return (
    <div style={{ minHeight: open ? 300 : 56 }} className="relative w-72 transition-all duration-200">
      <button
        onClick={() => { setOpen(o => !o); setQuery("") }}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center justify-between pl-4 pr-5 py-3 rounded-xl bg-secondary border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
      >
        <span className={selected ? "text-foreground" : "text-muted-foreground"}>{selected ?? "Select language..."}</span>
        <ChevronDown size={15} aria-hidden="true" className={cn("text-muted-foreground transition-transform duration-200 shrink-0", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-card shadow-xl overflow-hidden">
          <div className="p-2 border-b border-border">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary">
              <Search size={13} aria-hidden="true" className="text-muted-foreground shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>
          </div>
          <ul role="listbox" className="max-h-48 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-xs text-muted-foreground text-center">No results</li>
            ) : filtered.map(opt => {
              const isSel = selected === opt
              return (
                <li key={opt} role="option" aria-selected={isSel}>
                  <button
                    onClick={() => { setSelected(opt); setOpen(false) }}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 mx-1 rounded-lg text-sm transition-colors",
                      isSel ? "bg-primary text-primary-foreground font-medium" : "text-foreground hover:bg-secondary"
                    )}
                    style={{ width: "calc(100% - 8px)" }}
                  >
                    <Check size={14} aria-hidden="true" className={cn("shrink-0", isSel ? "opacity-100" : "opacity-0")} />
                    {opt}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

// 3. Multi-select Dropdown
function DropdownMulti() {
  const options = ["UI Design", "Frontend", "Backend", "DevOps", "Mobile", "Data Science"]
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>(["UI Design", "Frontend"])

  function toggle(opt: string) {
    setSelected(s => s.includes(opt) ? s.filter(x => x !== opt) : [...s, opt])
  }

  return (
    <div style={{ minHeight: open ? 320 : 56 }} className="relative w-72 transition-all duration-200">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(o => !o)}
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-multiselectable="true"
        className="w-full flex items-center justify-between gap-2 pl-4 pr-5 py-3 rounded-xl bg-secondary border border-border text-sm hover:border-primary/40 transition-colors min-h-[46px] cursor-pointer select-none"
      >
        <div className="flex flex-wrap gap-1.5 flex-1">
          {selected.length === 0 ? (
            <span className="text-muted-foreground text-sm">Select skills...</span>
          ) : selected.map(s => (
            <span key={s} className="inline-flex items-center gap-1 rounded-md bg-primary/15 text-primary text-xs font-medium px-2 py-0.5">
              {s}
              <button
                onClick={e => { e.stopPropagation(); toggle(s) }}
                aria-label={`Remove ${s}`}
                className="hover:text-primary/60 transition-colors"
              >
                <X size={10} aria-hidden="true" />
              </button>
            </span>
          ))}
        </div>
        <ChevronDown size={15} aria-hidden="true" className={cn("text-muted-foreground transition-transform duration-200 shrink-0", open && "rotate-180")} />
      </div>
      {open && (
        <ul role="listbox" className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-card shadow-lg overflow-hidden py-1">
          {options.map(opt => {
            const isSel = selected.includes(opt)
            return (
              <li key={opt} role="option" aria-selected={isSel}>
                <button
                  onClick={() => toggle(opt)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-secondary"
                >
                  <span className={cn(
                    "size-4 rounded flex items-center justify-center border shrink-0 transition-colors",
                    isSel ? "bg-primary border-primary" : "border-border"
                  )}>
                    {isSel && <Check size={10} aria-hidden="true" className="text-primary-foreground" />}
                  </span>
                  <span className={isSel ? "text-foreground font-medium" : "text-muted-foreground"}>{opt}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

// 4. Dropdown with icons
const FRAMEWORK_OPTIONS = [
  { label: "Next.js", desc: "React framework", icon: Globe },
  { label: "Nuxt", desc: "Vue framework", icon: Layers },
  { label: "SvelteKit", desc: "Svelte framework", icon: Zap },
  { label: "Astro", desc: "Content-first", icon: Server },
]

function DropdownWithIcons() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(FRAMEWORK_OPTIONS[0])

  return (
    <div style={{ minHeight: open ? 280 : 56 }} className="relative w-72 transition-all duration-200">
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 pl-4 pr-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/40 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <selected.icon size={13} aria-hidden="true" className="text-primary" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-foreground leading-none">{selected.label}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{selected.desc}</p>
          </div>
        </div>
        <ChevronDown size={15} aria-hidden="true" className={cn("text-muted-foreground transition-transform duration-200 shrink-0", open && "rotate-180")} />
      </button>
      {open && (
        <ul role="listbox" className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-card shadow-xl overflow-hidden py-1">
          {FRAMEWORK_OPTIONS.map(opt => {
            const isSel = selected.label === opt.label
            return (
              <li key={opt.label} role="option" aria-selected={isSel}>
                <button
                  onClick={() => { setSelected(opt); setOpen(false) }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 mx-1 rounded-lg transition-colors",
                    isSel ? "bg-primary" : "hover:bg-secondary"
                  )}
                  style={{ width: "calc(100% - 8px)" }}
                >
                  <div className={cn("size-7 rounded-lg flex items-center justify-center shrink-0", isSel ? "bg-white/10" : "bg-secondary")}>
                    <opt.icon size={13} aria-hidden="true" className={isSel ? "text-primary-foreground" : "text-muted-foreground"} />
                  </div>
                  <div className="text-left flex-1">
                    <p className={cn("text-sm leading-none", isSel ? "text-primary-foreground font-medium" : "text-foreground")}>{opt.label}</p>
                    <p className={cn("text-[11px] mt-0.5", isSel ? "text-primary-foreground/70" : "text-muted-foreground")}>{opt.desc}</p>
                  </div>
                  <Check size={13} aria-hidden="true" className={cn("shrink-0", isSel ? "text-primary-foreground opacity-100" : "opacity-0")} />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

// ─── Search Bar components ────────────────────────────────────────────────────

function SearchBarBasic() {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl border bg-secondary transition-all duration-200 w-full max-w-md",
      focused ? "border-primary ring-2 ring-primary/20" : "border-border"
    )}>
      <Search size={15} aria-hidden="true" className={cn("shrink-0 transition-colors", focused ? "text-primary" : "text-muted-foreground")} />
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search anything..."
        aria-label="Search"
        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
      />
      {value && (
        <button onClick={() => setValue("")} aria-label="Clear" className="text-muted-foreground hover:text-foreground transition-colors">
          <X size={13} aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

function SearchBarCommand() {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl border bg-secondary transition-all duration-300 w-full max-w-md",
      focused ? "border-primary ring-2 ring-primary/20" : "border-border"
    )}>
      <Command size={14} aria-hidden="true" className={cn("shrink-0 transition-colors duration-200", focused ? "text-primary" : "text-muted-foreground")} />
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Type a command..."
        aria-label="Command search"
        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
      />
      <div className="flex items-center gap-1 shrink-0">
        <kbd className="hidden sm:flex items-center justify-center h-5 px-1.5 rounded border border-border bg-card text-[10px] font-mono text-muted-foreground">⌘</kbd>
        <kbd className="hidden sm:flex items-center justify-center h-5 px-1.5 rounded border border-border bg-card text-[10px] font-mono text-muted-foreground">K</kbd>
      </div>
    </div>
  )
}

function SearchBarWithSuggestions() {
  const suggestions = ["Next.js App Router", "Tailwind CSS v4", "React Server Components", "TypeScript 5.4", "Vercel Edge Functions"]
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  const filtered = value.trim() ? suggestions.filter(s => s.toLowerCase().includes(value.toLowerCase())) : suggestions

  return (
    <div className="relative w-full max-w-md">
      <div className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl border bg-secondary transition-all duration-200",
        focused ? "border-primary ring-2 ring-primary/20" : "border-border"
      )}>
        <Search size={15} aria-hidden="true" className={cn("shrink-0 transition-colors", focused ? "text-primary" : "text-muted-foreground")} />
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search docs..."
          aria-label="Search docs"
          aria-autocomplete="list"
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
        />
        {value && (
          <button onClick={() => setValue("")} aria-label="Clear" className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={13} aria-hidden="true" />
          </button>
        )}
      </div>
      {focused && filtered.length > 0 && (
        <ul role="listbox" className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-card shadow-xl overflow-hidden py-1">
          {filtered.map(s => (
            <li key={s} role="option">
              <button
                onMouseDown={() => { setValue(s); setFocused(false) }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors text-left"
              >
                <Search size={12} aria-hidden="true" className="text-muted-foreground shrink-0" />
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function SearchBarWithFilters() {
  const filters = ["All", "Docs", "Blog", "API"]
  const [value, setValue] = useState("")
  const [active, setActive] = useState("All")
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <div className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl border bg-secondary transition-all duration-200",
        focused ? "border-primary ring-2 ring-primary/20" : "border-border"
      )}>
        <Search size={15} aria-hidden="true" className={cn("shrink-0 transition-colors", focused ? "text-primary" : "text-muted-foreground")} />
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={`Search ${active === "All" ? "everything" : active}...`}
          aria-label="Filtered search"
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
        />
        <Filter size={13} aria-hidden="true" className="text-muted-foreground shrink-0" />
      </div>
      <div className="flex items-center gap-2" role="group" aria-label="Filter options">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150",
              active === f ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
            )}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Toggle components ────────────────────────────────────────────────────────

function ToggleDarkLight() {
  const [dark, setDark] = useState(true)
  return (
    <button
      onClick={() => setDark(d => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className={cn(
        "relative w-16 h-8 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        dark ? "bg-primary border-primary" : "bg-secondary border-border"
      )}
    >
      <span className={cn(
        "absolute top-1 size-6 rounded-full flex items-center justify-center shadow-sm transition-all duration-300",
        dark ? "translate-x-8 bg-white" : "translate-x-1 bg-foreground"
      )}>
        {dark
          ? <Moon size={12} aria-hidden="true" className="text-primary" />
          : <Sun size={12} aria-hidden="true" className="text-background" />
        }
      </span>
    </button>
  )
}

function ToggleGroup() {
  const [selected, setSelected] = useState<"system" | "light" | "dark">("dark")
  return (
    <div className="flex items-center gap-1 p-1 rounded-xl bg-secondary border border-border" role="group" aria-label="Theme selection">
      {(["light", "system", "dark"] as const).map(mode => (
        <button
          key={mode}
          onClick={() => setSelected(mode)}
          aria-pressed={selected === mode}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 capitalize",
            selected === mode ? "bg-card text-foreground shadow-sm border border-border" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {mode === "light" && <Sun size={12} aria-hidden="true" />}
          {mode === "system" && <SlidersHorizontal size={12} aria-hidden="true" />}
          {mode === "dark" && <Moon size={12} aria-hidden="true" />}
          {mode}
        </button>
      ))}
    </div>
  )
}

function SwitchRow({ label, defaultOn }: { label: string; defaultOn: boolean }) {
  const [checked, setChecked] = useState(defaultOn)
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-secondary border border-border">
      <span className="text-sm text-foreground">{label}</span>
      <button
        onClick={() => setChecked(c => !c)}
        role="switch"
        aria-checked={checked}
        aria-label={"Toggle " + label}
        className={cn(
          "relative w-11 h-6 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0",
          checked ? "bg-primary" : "bg-muted border border-border"
        )}
      >
        <span className={cn(
          "absolute top-[3px] left-[3px] size-[18px] rounded-full bg-white shadow-sm transition-transform duration-200",
          checked ? "translate-x-[20px]" : "translate-x-0"
        )} />
      </button>
    </div>
  )
}

function TogglePill() {
  const [on, setOn] = useState(false)
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Simple pill toggle */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground w-16 text-right">{on ? "Enabled" : "Disabled"}</span>
        <button
          onClick={() => setOn(o => !o)}
          aria-checked={on}
          role="switch"
          aria-label="Toggle feature"
          className={cn(
            "relative w-11 h-6 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            on ? "bg-primary" : "bg-secondary border border-border"
          )}
        >
          <span className={cn(
            "absolute top-[3px] left-[3px] size-[18px] rounded-full bg-white shadow-sm transition-transform duration-200",
            on ? "translate-x-[20px]" : "translate-x-0"
          )} />
        </button>
      </div>
      {/* With label group */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <SwitchRow label="Notifications" defaultOn={true} />
        <SwitchRow label="Auto-save" defaultOn={true} />
        <SwitchRow label="Analytics" defaultOn={false} />
      </div>
    </div>
  )
}

// ─── Color Palette components ─────────────────────────────────────────────────

const PALETTES = [
  {
    name: "Ocean",
    colors: ["#0f172a","#1e3a5f","#1d4ed8","#3b82f6","#93c5fd","#e0f2fe"],
  },
  {
    name: "Sunset",
    colors: ["#1c0a00","#7c2d12","#ea580c","#f97316","#fbbf24","#fef3c7"],
  },
  {
    name: "Forest",
    colors: ["#052e16","#14532d","#16a34a","#4ade80","#86efac","#dcfce7"],
  },
  {
    name: "Violet",
    colors: ["#0f0a1e","#3b0764","#7c3aed","#a78bfa","#c4b5fd","#f5f3ff"],
  },
]

function ColorPaletteShowcase() {
  const [copied, setCopied] = useState<string | null>(null)

  function copy(hex: string) {
    navigator.clipboard.writeText(hex)
    setCopied(hex)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      {PALETTES.map(palette => (
        <div key={palette.name} className="flex flex-col gap-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{palette.name}</span>
          <div className="flex rounded-xl overflow-hidden border border-border">
            {palette.colors.map(hex => (
              <button
                key={hex}
                onClick={() => copy(hex)}
                title={hex}
                aria-label={`Copy ${hex}`}
                className="flex-1 h-12 relative group transition-all hover:flex-[2] duration-300"
                style={{ backgroundColor: hex }}
              >
                <span className={cn(
                  "absolute inset-0 flex items-center justify-center text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-150",
                  parseInt(hex.slice(1), 16) > 0xaaaaaa ? "text-black/70" : "text-white/80"
                )}>
                  {copied === hex ? "✓" : hex}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const THEME_TOKENS = [
  { label: "Background",  light: "#ffffff", dark: "#09090b" },
  { label: "Foreground",  light: "#09090b", dark: "#fafafa" },
  { label: "Primary",     light: "#1d4ed8", dark: "#3b82f6" },
  { label: "Secondary",   light: "#f1f5f9", dark: "#1e293b" },
  { label: "Muted",       light: "#94a3b8", dark: "#64748b" },
  { label: "Border",      light: "#e2e8f0", dark: "#1e293b" },
  { label: "Accent",      light: "#f97316", dark: "#f97316" },
  { label: "Destructive", light: "#ef4444", dark: "#ef4444" },
]

function ColorTokensGrid() {
  const [mode, setMode] = useState<"dark" | "light">("dark")
  const [copied, setCopied] = useState<string | null>(null)

  function copy(hex: string) {
    navigator.clipboard.writeText(hex)
    setCopied(hex)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      {/* Mode toggle */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground">Preview mode:</span>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary border border-border">
          {(["dark","light"] as const).map(m => (
            <button key={m} onClick={() => setMode(m)}
              className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 capitalize",
                mode === m ? "bg-card text-foreground border border-border" : "text-muted-foreground hover:text-foreground"
              )}>
              {m === "dark" ? <Moon size={11} aria-hidden="true" /> : <Sun size={11} aria-hidden="true" />}
              {m}
            </button>
          ))}
        </div>
      </div>
      {/* Token grid */}
      <div className="grid grid-cols-4 gap-2">
        {THEME_TOKENS.map(token => {
          const hex = mode === "dark" ? token.dark : token.light
          return (
            <button
              key={token.label}
              onClick={() => copy(hex)}
              title={`${token.label}: ${hex}`}
              aria-label={`Copy ${token.label} color ${hex}`}
              className="flex flex-col gap-2 p-3 rounded-xl border border-border bg-secondary hover:border-primary/40 transition-all duration-150 group"
            >
              <div
                className="w-full h-8 rounded-lg border border-white/5 shadow-inner transition-transform duration-150 group-hover:scale-95"
                style={{ backgroundColor: hex }}
              />
              <div className="text-left">
                <p className="text-[11px] font-medium text-foreground leading-none">{token.label}</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-0.5">
                  {copied === hex ? "Copied!" : hex}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Data Views shared data ───────────────────────────────────────────────────

type Priority = "Low" | "Medium" | "High"
type Status = "Todo" | "In Progress" | "In Review" | "Done"

interface Task {
  id: number
  title: string
  status: Status
  priority: Priority
  tag: string
  assignee: string
  date: string
  starred: boolean
}

const INITIAL_TASKS: Task[] = [
  { id: 1, title: "Design system tokens", status: "Done", priority: "High", tag: "Design", assignee: "AK", date: "Mar 10", starred: true },
  { id: 2, title: "Implement auth flow", status: "In Progress", priority: "High", tag: "Dev", assignee: "JS", date: "Mar 12", starred: false },
  { id: 3, title: "Write API docs", status: "Todo", priority: "Medium", tag: "Docs", assignee: "ML", date: "Mar 15", starred: false },
  { id: 4, title: "Fix mobile layout", status: "In Review", priority: "Medium", tag: "Dev", assignee: "AK", date: "Mar 13", starred: true },
  { id: 5, title: "Onboarding emails", status: "Todo", priority: "Low", tag: "Marketing", assignee: "NP", date: "Mar 18", starred: false },
  { id: 6, title: "Performance audit", status: "In Progress", priority: "High", tag: "Dev", assignee: "JS", date: "Mar 11", starred: false },
  { id: 7, title: "User research interviews", status: "Done", priority: "Medium", tag: "Research", assignee: "ML", date: "Mar 9", starred: true },
  { id: 8, title: "Dashboard analytics", status: "In Review", priority: "Low", tag: "Dev", assignee: "NP", date: "Mar 14", starred: false },
]

const STATUS_CONFIG: Record<Status, { color: string; icon: React.ReactNode }> = {
  "Todo":        { color: "text-muted-foreground", icon: <Circle size={12} /> },
  "In Progress": { color: "text-blue-400",         icon: <PauseCircle size={12} /> },
  "In Review":   { color: "text-yellow-400",        icon: <AlertCircle size={12} /> },
  "Done":        { color: "text-green-400",         icon: <CheckCircle2 size={12} /> },
}

const PRIORITY_CONFIG: Record<Priority, { dot: string }> = {
  "Low":    { dot: "bg-muted-foreground" },
  "Medium": { dot: "bg-yellow-400" },
  "High":   { dot: "bg-red-400" },
}

const AVATAR_COLORS: Record<string, string> = {
  AK: "bg-violet-500", JS: "bg-blue-500", ML: "bg-emerald-500", NP: "bg-orange-500",
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span className={cn("inline-flex items-center justify-center size-6 rounded-full text-[10px] font-bold text-white shrink-0", AVATAR_COLORS[initials] ?? "bg-primary")}>
      {initials}
    </span>
  )
}

function PriorityBadge({ p }: { p: Priority }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <span className={cn("size-1.5 rounded-full shrink-0", PRIORITY_CONFIG[p].dot)} />
      {p}
    </span>
  )
}

function StatusBadge({ s }: { s: Status }) {
  const { color, icon } = STATUS_CONFIG[s]
  return (
    <span className={cn("inline-flex items-center gap-1 text-xs font-medium", color)}>
      {icon}{s}
    </span>
  )
}

// ─── Custom mini-dropdown (replaces native <select>) ──────────────────────────

function MiniSelect<T extends string>({
  value, onChange, options, label,
}: {
  value: T
  onChange: (v: T) => void
  options: { value: T; label: string }[]
  label: string
}) {
  const [open, setOpen] = useState(false)
  const current = options.find(o => o.value === value)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-label={label}
        aria-expanded={open}
        className="flex items-center gap-1.5 pl-3 pr-2 py-2 rounded-lg bg-secondary border border-border text-xs text-foreground hover:border-primary/40 transition-colors whitespace-nowrap"
      >
        {current?.label ?? value}
        <ChevronDown size={11} className={cn("text-muted-foreground transition-transform duration-150 shrink-0", open && "rotate-180")} />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute z-50 mt-1 min-w-full rounded-xl border border-border bg-card shadow-xl py-1 overflow-hidden"
        >
          {options.map(opt => {
            const sel = opt.value === value
            return (
              <li key={opt.value} role="option" aria-selected={sel}>
                <button
                  onClick={() => { onChange(opt.value); setOpen(false) }}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 mx-1 rounded-lg text-xs transition-colors w-[calc(100%-8px)]",
                    sel ? "bg-primary text-primary-foreground font-medium" : "text-foreground hover:bg-secondary"
                  )}
                >
                  <Check size={11} className={cn("shrink-0", sel ? "opacity-100" : "opacity-0")} />
                  {opt.label}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

// ─── Filter + Sort toolbar (shared) ───────────────────────────────────────────

type SortKey = "title" | "priority" | "date" | "status"
type SortDir = "asc" | "desc"

const PRIORITY_ORDER: Record<Priority, number> = { High: 0, Medium: 1, Low: 2 }
const STATUS_ORDER: Record<Status, number> = { "In Progress": 0, "In Review": 1, "Todo": 2, "Done": 3 }

function useFilterSort(initial: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initial)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<Status | "All">("All")
  const [priorityFilter, setPriorityFilter] = useState<Priority | "All">("All")
  const [sortKey, setSortKey] = useState<SortKey>("date")
  const [sortDir, setSortDir] = useState<SortDir>("asc")

  const filtered = tasks
    .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
    .filter(t => statusFilter === "All" || t.status === statusFilter)
    .filter(t => priorityFilter === "All" || t.priority === priorityFilter)
    .sort((a, b) => {
      let cmp = 0
      if (sortKey === "title") cmp = a.title.localeCompare(b.title)
      else if (sortKey === "priority") cmp = PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
      else if (sortKey === "date") cmp = a.date.localeCompare(b.date)
      else if (sortKey === "status") cmp = STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
      return sortDir === "asc" ? cmp : -cmp
    })

  return { tasks, setTasks, search, setSearch, statusFilter, setStatusFilter, priorityFilter, setPriorityFilter, sortKey, setSortKey, sortDir, setSortDir, filtered }
}

const STATUS_OPTIONS: { value: Status | "All"; label: string }[] = [
  { value: "All", label: "All Status" },
  { value: "Todo", label: "Todo" },
  { value: "In Progress", label: "In Progress" },
  { value: "In Review", label: "In Review" },
  { value: "Done", label: "Done" },
]
const PRIORITY_OPTIONS: { value: Priority | "All"; label: string }[] = [
  { value: "All", label: "All Priority" },
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
]
const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "date", label: "Date" },
  { value: "title", label: "Title" },
  { value: "priority", label: "Priority" },
  { value: "status", label: "Status" },
]

function Toolbar(state: ReturnType<typeof useFilterSort>) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary border border-border flex-1 min-w-[140px]">
        <Search size={13} className="text-muted-foreground shrink-0" />
        <input
          value={state.search} onChange={e => state.setSearch(e.target.value)}
          placeholder="Filter tasks..." aria-label="Filter tasks"
          className="bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none w-full"
        />
        {state.search && (
          <button onClick={() => state.setSearch("")} aria-label="Clear search">
            <X size={11} className="text-muted-foreground hover:text-foreground" />
          </button>
        )}
      </div>
      <MiniSelect<Status | "All">
        value={state.statusFilter}
        onChange={state.setStatusFilter}
        options={STATUS_OPTIONS}
        label="Filter by status"
      />
      <MiniSelect<Priority | "All">
        value={state.priorityFilter}
        onChange={state.setPriorityFilter}
        options={PRIORITY_OPTIONS}
        label="Filter by priority"
      />
      <MiniSelect<SortKey>
        value={state.sortKey}
        onChange={state.setSortKey}
        options={SORT_OPTIONS}
        label="Sort by"
      />
      <button
        onClick={() => state.setSortDir(d => d === "asc" ? "desc" : "asc")}
        aria-label={state.sortDir === "asc" ? "Sort descending" : "Sort ascending"}
        className="p-2 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
      >
        {state.sortDir === "asc" ? <ArrowUp size={13} /> : <ArrowDown size={13} />}
      </button>
    </div>
  )
}

// ─── View: Kanban (with drag-and-drop between columns) ────────────────────────

const KANBAN_COLS: Status[] = ["Todo", "In Progress", "In Review", "Done"]

function ViewKanban() {
  const state = useFilterSort(INITIAL_TASKS)
  const [dragId, setDragId] = useState<number | null>(null)
  const [overCol, setOverCol] = useState<Status | null>(null)

  function onDragStart(id: number) {
    setDragId(id)
  }

  function onDrop(col: Status) {
    if (dragId === null) return
    state.setTasks(prev => prev.map(t => t.id === dragId ? { ...t, status: col } : t))
    setDragId(null)
    setOverCol(null)
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <Toolbar {...state} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {KANBAN_COLS.map(col => {
          const colTasks = state.filtered.filter(t => t.status === col)
          const { color, icon } = STATUS_CONFIG[col]
          const isOver = overCol === col
          return (
            <div
              key={col}
              onDragOver={e => { e.preventDefault(); setOverCol(col) }}
              onDragLeave={() => setOverCol(null)}
              onDrop={() => onDrop(col)}
              className={cn(
                "flex flex-col gap-2 rounded-xl p-2 transition-colors duration-150 min-h-[120px]",
                isOver ? "bg-primary/5 ring-1 ring-primary/30" : "bg-transparent"
              )}
            >
              <div className="flex items-center justify-between px-1">
                <span className={cn("flex items-center gap-1.5 text-xs font-semibold", color)}>
                  {icon} {col}
                </span>
                <span className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded-full border border-border">{colTasks.length}</span>
              </div>
              <div className="flex flex-col gap-2">
                {colTasks.map(t => (
                  <div
                    key={t.id}
                    draggable
                    onDragStart={() => onDragStart(t.id)}
                    onDragEnd={() => { setDragId(null); setOverCol(null) }}
                    className={cn(
                      "p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-150 cursor-grab active:cursor-grabbing select-none",
                      dragId === t.id && "opacity-40 scale-95"
                    )}
                  >
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <p className="text-xs font-medium text-foreground leading-snug">{t.title}</p>
                      <Star size={11} className={cn("shrink-0 mt-0.5", t.starred ? "text-yellow-400 fill-yellow-400" : "text-border")} />
                    </div>
                    <div className="flex items-center justify-between">
                      <PriorityBadge p={t.priority} />
                      <Avatar initials={t.assignee} />
                    </div>
                    <span className="mt-2 inline-block text-[10px] font-medium px-1.5 py-0.5 rounded bg-secondary border border-border text-muted-foreground">{t.tag}</span>
                  </div>
                ))}
                {isOver && dragId !== null && (
                  <div className="h-14 rounded-xl border-2 border-dashed border-primary/40 bg-primary/5" />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── View: Board (horizontal swimlanes, drag to reorder within lane) ──────────

function ViewBoard() {
  const state = useFilterSort(INITIAL_TASKS)
  const [dragId, setDragId] = useState<number | null>(null)
  const [overId, setOverId] = useState<number | null>(null)

  function onDrop(targetId: number) {
    if (dragId === null || dragId === targetId) return
    state.setTasks(prev => {
      const arr = [...prev]
      const fromIdx = arr.findIndex(t => t.id === dragId)
      const toIdx   = arr.findIndex(t => t.id === targetId)
      if (fromIdx < 0 || toIdx < 0) return prev
      const [item] = arr.splice(fromIdx, 1)
      arr.splice(toIdx, 0, item)
      return arr
    })
    setDragId(null)
    setOverId(null)
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <Toolbar {...state} />
      <div className="flex flex-col gap-3">
        {KANBAN_COLS.map(col => {
          const colTasks = state.filtered.filter(t => t.status === col)
          const { color, icon } = STATUS_CONFIG[col]
          if (colTasks.length === 0) return null
          return (
            <div key={col} className="rounded-xl border border-border bg-card overflow-hidden">
              <div className={cn("flex items-center gap-2 px-4 py-2.5 border-b border-border", color)}>
                {icon}
                <span className="text-xs font-semibold">{col}</span>
                <span className="ml-auto text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded-full border border-border">{colTasks.length}</span>
              </div>
              <div className="flex gap-3 p-3 overflow-x-auto">
                {colTasks.map(t => (
                  <div
                    key={t.id}
                    draggable
                    onDragStart={() => setDragId(t.id)}
                    onDragEnd={() => { setDragId(null); setOverId(null) }}
                    onDragOver={e => { e.preventDefault(); setOverId(t.id) }}
                    onDrop={() => onDrop(t.id)}
                    className={cn(
                      "flex-shrink-0 w-52 p-3 rounded-lg border border-border bg-secondary transition-all duration-150 cursor-grab active:cursor-grabbing select-none",
                      dragId === t.id && "opacity-40 scale-95",
                      overId === t.id && dragId !== t.id && "ring-1 ring-primary/50 border-primary/40"
                    )}
                  >
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <p className="text-xs font-medium text-foreground leading-snug">{t.title}</p>
                      <Star size={11} className={cn("shrink-0 mt-0.5", t.starred ? "text-yellow-400 fill-yellow-400" : "text-border")} />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <PriorityBadge p={t.priority} />
                      <Avatar initials={t.assignee} />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-card border border-border text-muted-foreground">{t.tag}</span>
                      <span className="text-[10px] text-muted-foreground">{t.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── View: Cards grid ─────────────────────────────────────────────────────────

function ViewCards() {
  const state = useFilterSort(INITIAL_TASKS)
  return (
    <div className="flex flex-col gap-4 w-full">
      <Toolbar {...state} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {state.filtered.map(t => (
          <div key={t.id} className="flex flex-col gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-150 cursor-default">
            <div className="flex items-start justify-between">
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-secondary border border-border text-muted-foreground">{t.tag}</span>
              <Star size={12} className={cn(t.starred ? "text-yellow-400 fill-yellow-400" : "text-border")} />
            </div>
            <p className="text-sm font-medium text-foreground leading-snug">{t.title}</p>
            <div className="mt-auto flex flex-col gap-2">
              <StatusBadge s={t.status} />
              <div className="flex items-center justify-between">
                <PriorityBadge p={t.priority} />
                <Avatar initials={t.assignee} />
              </div>
              <span className="text-[10px] text-muted-foreground">{t.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── View: List (drag to reorder) ─────────────────────────────────────────────

function ViewList() {
  const state = useFilterSort(INITIAL_TASKS)
  const [dragId, setDragId] = useState<number | null>(null)
  const [overId, setOverId] = useState<number | null>(null)

  function onDrop(targetId: number) {
    if (dragId === null || dragId === targetId) return
    state.setTasks(prev => {
      const arr = [...prev]
      const fromIdx = arr.findIndex(t => t.id === dragId)
      const toIdx   = arr.findIndex(t => t.id === targetId)
      if (fromIdx < 0 || toIdx < 0) return prev
      const [item] = arr.splice(fromIdx, 1)
      arr.splice(toIdx, 0, item)
      return arr
    })
    setDragId(null)
    setOverId(null)
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <Toolbar {...state} />
      <div className="flex flex-col rounded-xl border border-border overflow-hidden">
        {state.filtered.map((t, i) => (
          <div
            key={t.id}
            draggable
            onDragStart={() => setDragId(t.id)}
            onDragEnd={() => { setDragId(null); setOverId(null) }}
            onDragOver={e => { e.preventDefault(); setOverId(t.id) }}
            onDrop={() => onDrop(t.id)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 transition-all duration-100 cursor-grab active:cursor-grabbing select-none",
              i < state.filtered.length - 1 && "border-b border-border",
              dragId === t.id && "opacity-40",
              overId === t.id && dragId !== t.id && "bg-primary/5 border-l-2 border-l-primary"
            )}
          >
            <GripVertical size={13} className="text-border shrink-0" />
            <Star size={12} className={cn("shrink-0", t.starred ? "text-yellow-400 fill-yellow-400" : "text-border")} />
            <p className="flex-1 text-sm text-foreground truncate">{t.title}</p>
            <span className="hidden sm:block text-[10px] font-medium px-1.5 py-0.5 rounded bg-secondary border border-border text-muted-foreground shrink-0">{t.tag}</span>
            <StatusBadge s={t.status} />
            <PriorityBadge p={t.priority} />
            <Avatar initials={t.assignee} />
            <span className="text-[10px] text-muted-foreground shrink-0 hidden md:block">{t.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── View: Table ─────────────────────────────────────────────────────────────

function ViewTable() {
  const state = useFilterSort(INITIAL_TASKS)

  function SortHeader({ label, k }: { label: string; k: SortKey }) {
    const active = state.sortKey === k
    return (
      <button
        onClick={() => {
          if (active) state.setSortDir(d => d === "asc" ? "desc" : "asc")
          else { state.setSortKey(k); state.setSortDir("asc") }
        }}
        className={cn("flex items-center gap-1 text-xs font-semibold transition-colors", active ? "text-foreground" : "text-muted-foreground hover:text-foreground")}
      >
        {label}
        {active
          ? (state.sortDir === "asc" ? <ArrowUp size={11} /> : <ArrowDown size={11} />)
          : <ArrowUpDown size={11} className="opacity-40" />
        }
      </button>
    )
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <Toolbar {...state} />
      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-4 py-2.5 text-left"><SortHeader label="Title" k="title" /></th>
              <th className="px-3 py-2.5 text-left"><SortHeader label="Status" k="status" /></th>
              <th className="px-3 py-2.5 text-left hidden md:table-cell"><SortHeader label="Priority" k="priority" /></th>
              <th className="px-3 py-2.5 text-left hidden lg:table-cell text-xs font-semibold text-muted-foreground">Tag</th>
              <th className="px-3 py-2.5 text-left hidden lg:table-cell text-xs font-semibold text-muted-foreground">Assignee</th>
              <th className="px-3 py-2.5 text-right"><SortHeader label="Date" k="date" /></th>
            </tr>
          </thead>
          <tbody>
            {state.filtered.map((t, i) => (
              <tr key={t.id} className={cn("hover:bg-secondary/40 transition-colors cursor-default", i < state.filtered.length - 1 && "border-b border-border")}>
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <Star size={11} className={cn(t.starred ? "text-yellow-400 fill-yellow-400" : "text-border")} />
                    <span className="text-xs text-foreground truncate max-w-[140px]">{t.title}</span>
                  </div>
                </td>
                <td className="px-3 py-2.5"><StatusBadge s={t.status} /></td>
                <td className="px-3 py-2.5 hidden md:table-cell"><PriorityBadge p={t.priority} /></td>
                <td className="px-3 py-2.5 hidden lg:table-cell">
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-secondary border border-border text-muted-foreground">{t.tag}</span>
                </td>
                <td className="px-3 py-2.5 hidden lg:table-cell"><Avatar initials={t.assignee} /></td>
                <td className="px-3 py-2.5 text-right text-[10px] text-muted-foreground">{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── All Views Switcher (master showcase) ──────────────────────────────��──�����───

type ViewMode = "kanban" | "board" | "cards" | "list" | "table"

const VIEW_TABS: { id: ViewMode; label: string; icon: React.ReactNode }[] = [
  { id: "kanban", label: "Kanban", icon: <Kanban size={13} /> },
  { id: "board",  label: "Board",  icon: <Columns size={13} /> },
  { id: "cards",  label: "Cards",  icon: <LayoutGrid size={13} /> },
  { id: "list",   label: "List",   icon: <List size={13} /> },
  { id: "table",  label: "Table",  icon: <Table size={13} /> },
]

function ViewSwitcher() {
  const [view, setView] = useState<ViewMode>("kanban")
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-1 p-1 rounded-xl bg-secondary border border-border w-fit" role="tablist">
        {VIEW_TABS.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={view === tab.id}
            onClick={() => setView(tab.id)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150",
              view === tab.id ? "bg-card text-foreground border border-border shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>
      {view === "kanban" && <ViewKanban />}
      {view === "board"  && <ViewBoard />}
      {view === "cards"  && <ViewCards />}
      {view === "list"   && <ViewList />}
      {view === "table"  && <ViewTable />}
    </div>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export type ComponentEntry = {
  name: string
  description: string
  category: string
  tags: string[]
  href?: string
  fullWidth?: boolean
  preview: React.ReactNode
  code: string
}

export const CATEGORIES = ["All", "Auth", "Calendar", "Carousel", "Dropdown", "Search", "Toggle", "Palette", "Data Views", "Forms", "Chat", "Loading", "Inputs", "Display", "Feedback", "Navigation", "Charts", "Mobile"] as const

export const COMPONENTS: ComponentEntry[] = [
  {
    name: "Sign In", description: "Email + password login with GitHub OAuth and show/hide password toggle.", category: "Auth", tags: ["auth", "login", "form", "password", "github"], href: "/sign-in", fullWidth: true, preview: <SignInFull />,
    code: `"use client"
import { useState } from "react"
import { Eye, EyeOff, ArrowRight, Github } from "@/components/nexui/icons"

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">Sign in to your account to continue.</p>
      </div>
      <button className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary h-11 text-sm font-medium hover:bg-secondary/80 transition-colors">
        <Github size={16} /> Continue with GitHub
      </button>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border" /><span className="text-xs text-muted-foreground">or</span><div className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-wider text-foreground/80">Email</label>
          <input type="email" placeholder="you@example.com" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium uppercase tracking-wider text-foreground/80">Password</label>
            <a href="#" className="text-xs text-primary hover:text-primary/80">Forgot password?</a>
          </div>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 pr-11 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            <button type="button" onClick={() => setShowPassword(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <button onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500) }} disabled={loading} className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all mt-1">
          {loading ? <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" /> : <>Sign in <ArrowRight size={15} /></>}
        </button>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account? <a href="/sign-up" className="text-primary font-medium hover:text-primary/80">Sign up</a>
      </p>
    </div>
  )
}`,
  },
  {
    name: "Sign Up", description: "Registration form with name fields, email, and live password strength hints.", category: "Auth", tags: ["auth", "register", "form", "password"], href: "/sign-up", fullWidth: true, preview: <SignUpFull />,
    code: `"use client"
import { useState } from "react"
import { Eye, EyeOff, ArrowRight, Github, Check } from "@/components/nexui/icons"

const rules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /[0-9]/.test(v) },
]

export function SignUp() {
  const [showPw, setShowPw] = useState(false)
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  return (
    <div className="flex flex-col gap-5 w-full max-w-sm">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="mt-1 text-sm text-muted-foreground">Join NexUI and start building.</p>
      </div>
      <button className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary h-11 text-sm font-medium hover:bg-secondary/80 transition-colors">
        <Github size={16} /> Sign up with GitHub
      </button>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border" /><span className="text-xs text-muted-foreground">or</span><div className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wider">First name</label>
            <input placeholder="Jane" className="h-11 rounded-xl border border-border bg-secondary px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wider">Last name</label>
            <input placeholder="Doe" className="h-11 rounded-xl border border-border bg-secondary px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-wider">Email</label>
          <input type="email" placeholder="you@example.com" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-wider">Password</label>
          <div className="relative">
            <input type={showPw ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 pr-11 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            <button type="button" onClick={() => setShowPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {password.length > 0 && (
            <ul className="flex flex-col gap-1 mt-1">
              {rules.map(r => {
                const ok = r.test(password)
                return <li key={r.label} className={\`flex items-center gap-1.5 text-xs \${ok ? "text-emerald-400" : "text-muted-foreground"}\`}><Check size={11} className={ok ? "opacity-100" : "opacity-30"} />{r.label}</li>
              })}
            </ul>
          )}
        </div>
        <button onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500) }} disabled={loading} className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all">
          {loading ? <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" /> : <>Sign up <ArrowRight size={15} /></>}
        </button>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Already have an account? <a href="/sign-in" className="text-primary font-medium hover:text-primary/80">Sign in</a>
      </p>
    </div>
  )
}`,
  },
  {
    name: "Create Account", description: "Two-step flow: account type picker then profile details.", category: "Auth", tags: ["auth", "onboarding", "stepper", "form"], href: "/create-account", fullWidth: true, preview: <CreateAccountFull />,
    code: `"use client"
import { useState } from "react"
import { ArrowRight, Github, Building2, User, Code2 } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const types = [
  { id: "personal", label: "Personal", description: "For individual developers", icon: User },
  { id: "team", label: "Team", description: "For small teams & startups", icon: Building2 },
  { id: "enterprise", label: "Enterprise", description: "For large organisations", icon: Code2 },
]

export function CreateAccount() {
  const [selected, setSelected] = useState("personal")
  const [step, setStep] = useState<1 | 2>(1)
  const [loading, setLoading] = useState(false)
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div>
        <div className="flex gap-1.5 mb-3">
          {[1,2].map(s => <div key={s} className={cn("h-1 rounded-full flex-1 transition-all", s <= step ? "bg-primary" : "bg-border")} />)}
        </div>
        <p className="text-xs text-muted-foreground font-mono mb-1">Step {step} of 2</p>
        <h1 className="text-2xl font-semibold tracking-tight">{step === 1 ? "Choose account type" : "Your details"}</h1>
      </div>
      {step === 1 ? (
        <>
          <div className="flex flex-col gap-3">
            {types.map(({ id, label, description, icon: Icon }) => (
              <button key={id} onClick={() => setSelected(id)} className={cn("flex items-center gap-4 p-4 rounded-xl border text-left w-full transition-all", selected === id ? "border-primary/60 bg-primary/10" : "border-border bg-secondary hover:border-primary/30")}>
                <div className={cn("size-10 rounded-lg flex items-center justify-center shrink-0", selected === id ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground")}><Icon size={18} /></div>
                <div><p className="text-sm font-medium">{label}</p><p className="text-xs text-muted-foreground mt-0.5">{description}</p></div>
                <div className={cn("ml-auto size-4 rounded-full border-2 shrink-0", selected === id ? "border-primary bg-primary" : "border-border")} />
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all">Continue <ArrowRight size={15} /></button>
          <button className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary h-11 text-sm font-medium hover:bg-secondary/80 transition-colors"><Github size={16} /> Continue with GitHub</button>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wider">Username</label>
            <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">@</span><input placeholder="yourhandle" className="h-11 w-full rounded-xl border border-border bg-secondary pl-8 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wider">Email</label>
            <input type="email" placeholder="you@example.com" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wider">Password</label>
            <input type="password" placeholder="••••••••" className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="flex gap-3 mt-1">
            <button onClick={() => setStep(1)} className="flex items-center justify-center h-11 flex-1 rounded-xl border border-border bg-secondary text-sm font-medium hover:bg-secondary/80 transition-colors">Back</button>
            <button onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500) }} disabled={loading} className="flex items-center justify-center gap-2 h-11 flex-1 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all">
              {loading ? <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" /> : <>Create account <ArrowRight size={14} /></>}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "Calendar — Basic", description: "Single date picker with month navigation and today indicator.", category: "Calendar", tags: ["calendar", "date", "picker", "datepicker"], fullWidth: true, preview: <CalendarBasic />,
    code: `"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"


function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export function CalendarBasic() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState<Date | null>(today)
  const first = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  return (
    <div className="w-full max-w-xs rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prev} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Previous month"><ChevronLeft size={15} /></button>
        <span className="text-sm font-semibold">{MONTHS[month]} {year}</span>
        <button onClick={next} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Next month"><ChevronRight size={15} /></button>
      </div>
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => <span key={d} className="text-[10px] font-medium text-muted-foreground text-center py-1">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {Array.from({ length: first }).map((_, i) => <span key={\`e\${i}\`} />)}
        {Array.from({ length: total }).map((_, i) => {
          const day = i + 1
          const date = new Date(year, month, day)
          const isToday = isSameDay(date, today)
          const isSel = isSameDay(date, selected)
          return (
            <button key={day} onClick={() => setSelected(date)} className={cn("size-8 mx-auto flex items-center justify-center rounded-lg text-xs transition-all", isSel ? "bg-primary text-primary-foreground font-semibold" : isToday ? "border border-primary text-primary font-semibold" : "text-foreground hover:bg-secondary")}>
              {day}
            </button>
          )
        })}
      </div>
      {selected && (
        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">Selected: <span className="text-foreground font-medium">{selected.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span></p>
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "Calendar — Range", description: "Select a start and end date with an interactive range highlight.", category: "Calendar", tags: ["calendar", "range", "date", "picker", "from", "to"], fullWidth: true, preview: <CalendarRange />,
    code: `"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"


function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export function CalendarRange() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [start, setStart] = useState<Date | null>(null)
  const [end, setEnd] = useState<Date | null>(null)
  const [hovered, setHovered] = useState<Date | null>(null)
  const first = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()
  const rangeEnd = end ?? hovered

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  function handleClick(date: Date) {
    if (!start || (start && end)) { setStart(date); setEnd(null) }
    else { if (date < start) { setEnd(start); setStart(date) } else setEnd(date) }
  }

  return (
    <div className="w-full max-w-xs rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prev} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground"><ChevronLeft size={15} /></button>
        <span className="text-sm font-semibold">{MONTHS[month]} {year}</span>
        <button onClick={next} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground"><ChevronRight size={15} /></button>
      </div>
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => <span key={d} className="text-[10px] font-medium text-muted-foreground text-center py-1">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-y-0.5">
        {Array.from({ length: first }).map((_, i) => <span key={\`e\${i}\`} />)}
        {Array.from({ length: total }).map((_, i) => {
          const day = i + 1
          const date = new Date(year, month, day)
          const isStart = isSameDay(date, start)
          const isEnd = isSameDay(date, end)
          const lo = start && rangeEnd && start < rangeEnd ? start : rangeEnd
          const hi = start && rangeEnd && start < rangeEnd ? rangeEnd : start
          const inRange = lo && hi && date > lo && date < hi
          return (
            <button key={day} onClick={() => handleClick(date)} onMouseEnter={() => !end && setHovered(date)} onMouseLeave={() => setHovered(null)} className={cn("size-8 mx-auto flex items-center justify-center text-xs transition-all", isStart || isEnd ? "bg-primary text-primary-foreground font-semibold rounded-lg z-10" : inRange ? "bg-primary/15 text-foreground rounded-none" : "text-foreground hover:bg-secondary rounded-lg")}>
              {day}
            </button>
          )
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-border flex gap-3">
        <div className="flex-1 rounded-lg bg-secondary px-3 py-2">
          <p className="text-[10px] text-muted-foreground mb-0.5">From</p>
          <p className="text-xs font-medium">{start ? start.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—"}</p>
        </div>
        <div className="flex-1 rounded-lg bg-secondary px-3 py-2">
          <p className="text-[10px] text-muted-foreground mb-0.5">To</p>
          <p className="text-xs font-medium">{end ? end.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—"}</p>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "Calendar — With Events", description: "Monthly view with colour-coded event dots and a day detail panel.", category: "Calendar", tags: ["calendar", "events", "schedule", "dots"], fullWidth: true, preview: <CalendarWithEvents />,
    code: `"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"


const EVENTS: Record<number, { label: string; color: string }[]> = {
  3:  [{ label: "Team standup", color: "bg-primary" }],
  7:  [{ label: "Design review", color: "bg-emerald-400" }],
  12: [{ label: "Product launch", color: "bg-purple-400" }, { label: "All-hands", color: "bg-primary" }],
  18: [{ label: "1:1 with Alex", color: "bg-amber-400" }],
  22: [{ label: "Sprint planning", color: "bg-primary" }],
}

function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export function CalendarWithEvents() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState<Date | null>(null)
  const first = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  const selectedEvents = selected ? (EVENTS[selected.getDate()] ?? []) : []

  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card overflow-hidden">
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prev} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground"><ChevronLeft size={15} /></button>
          <span className="text-sm font-semibold">{MONTHS[month]} {year}</span>
          <button onClick={next} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground"><ChevronRight size={15} /></button>
        </div>
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map(d => <span key={d} className="text-[10px] font-medium text-muted-foreground text-center py-1">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {Array.from({ length: first }).map((_, i) => <span key={\`e\${i}\`} />)}
          {Array.from({ length: total }).map((_, i) => {
            const day = i + 1
            const date = new Date(year, month, day)
            const isToday = isSameDay(date, today)
            const isSel = isSameDay(date, selected)
            const events = EVENTS[day] ?? []
            return (
              <button key={day} onClick={() => setSelected(isSel ? null : date)} className={cn("flex flex-col items-center gap-0.5 py-1 rounded-lg transition-all", isSel ? "bg-primary/10" : "hover:bg-secondary")}>
                <span className={cn("size-6 flex items-center justify-center rounded-full text-xs", isSel ? "bg-primary text-primary-foreground font-semibold" : isToday ? "border border-primary text-primary font-semibold" : "text-foreground")}>{day}</span>
                <div className="flex gap-0.5">{events.slice(0,2).map((e, ei) => <span key={ei} className={cn("w-1 h-1 rounded-full", e.color)} />)}</div>
              </button>
            )
          })}
        </div>
      </div>
      {selected && (
        <div className="border-t border-border px-5 py-3">
          <p className="text-xs font-medium mb-2">{selected.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
          {selectedEvents.length === 0 ? <p className="text-xs text-muted-foreground">No events</p> : (
            <div className="flex flex-col gap-1.5">
              {selectedEvents.map((e, i) => <div key={i} className="flex items-center gap-2"><span className={cn("w-2 h-2 rounded-full shrink-0", e.color)} /><span className="text-xs">{e.label}</span></div>)}
            </div>
          )}
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "Calendar �� Mini", description: "Compact inline calendar paired with an upcoming events list.", category: "Calendar", tags: ["calendar", "mini", "inline", "compact", "events"], fullWidth: true, preview: <CalendarMini />,
    code: `"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"


function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export function CalendarMini() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState<Date | null>(today)
  const first = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
      <div className="w-64 rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center justify-between mb-3">
          <button onClick={prev} className="size-6 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground"><ChevronLeft size={13} /></button>
          <span className="text-xs font-semibold">{MONTHS[month].slice(0,3)} {year}</span>
          <button onClick={next} className="size-6 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground"><ChevronRight size={13} /></button>
        </div>
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map(d => <span key={d} className="text-[9px] font-medium text-muted-foreground text-center">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-y-0.5">
          {Array.from({ length: first }).map((_, i) => <span key={\`e\${i}\`} />)}
          {Array.from({ length: total }).map((_, i) => {
            const day = i + 1
            const date = new Date(year, month, day)
            const isToday = isSameDay(date, today)
            const isSel = isSameDay(date, selected)
            return (
              <button key={day} onClick={() => setSelected(date)} className={cn("size-7 mx-auto flex items-center justify-center rounded-md text-[10px] transition-all", isSel ? "bg-primary text-primary-foreground font-bold" : isToday ? "border border-primary/60 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary")}>
                {day}
              </button>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:pt-1">
        <p className="text-xs font-medium">Upcoming</p>
        {[
          { day: 12, label: "Product launch", time: "2:00 PM", color: "bg-purple-400" },
          { day: 18, label: "1:1 with Alex", time: "10:30 AM", color: "bg-amber-400" },
          { day: 22, label: "Sprint planning", time: "9:00 AM", color: "bg-primary" },
        ].map(e => (
          <div key={e.day} className="flex items-center gap-3 rounded-xl border border-border bg-secondary px-3 py-2.5">
            <span className={cn("w-2 h-2 rounded-full shrink-0", e.color)} />
            <div>
              <p className="text-xs font-medium">{e.label}</p>
              <p className="text-[10px] text-muted-foreground">{MONTHS[month].slice(0,3)} {e.day} · {e.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "Calendar — Time Picker", description: "Date picker combined with an AM/PM hour and minute roller.", category: "Calendar", tags: ["calendar", "time", "datetime", "picker", "schedule"], fullWidth: true, preview: <CalendarTimePicker />,
    code: `"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"


function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export function CalendarTimePicker() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState<Date | null>(today)
  const [hour, setHour] = useState(10)
  const [minute, setMinute] = useState(30)
  const [ampm, setAmpm] = useState<"AM" | "PM">("AM")
  const first = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full max-w-xl">
      <div className="flex-1 rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prev} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground"><ChevronLeft size={15} /></button>
          <span className="text-sm font-semibold">{MONTHS[month]} {year}</span>
          <button onClick={next} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground"><ChevronRight size={15} /></button>
        </div>
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(d => <span key={d} className="text-[10px] font-medium text-muted-foreground text-center py-1">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {Array.from({ length: first }).map((_, i) => <span key={\`e\${i}\`} />)}
          {Array.from({ length: total }).map((_, i) => {
            const day = i + 1
            const date = new Date(year, month, day)
            const isToday = isSameDay(date, today)
            const isSel = isSameDay(date, selected)
            return (
              <button key={day} onClick={() => setSelected(date)} className={cn("size-8 mx-auto flex items-center justify-center rounded-lg text-xs transition-all", isSel ? "bg-primary text-primary-foreground font-semibold" : isToday ? "border border-primary text-primary" : "text-foreground hover:bg-secondary")}>{day}</button>
            )
          })}
        </div>
      </div>
      <div className="lg:w-44 rounded-2xl border border-border bg-card p-5 flex flex-col gap-5">
        <div className="flex items-center gap-2 text-xs font-medium"><Clock size={13} className="text-primary" />Select time</div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1 flex-1">
            <button onClick={() => setHour(h => h === 12 ? 1 : h + 1)} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Increase hour"><ChevronRight size={13} className="rotate-[-90deg]" /></button>
            <span className="text-lg font-semibold w-8 text-center">{String(hour).padStart(2,"0")}</span>
            <button onClick={() => setHour(h => h === 1 ? 12 : h - 1)} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Decrease hour"><ChevronLeft size={13} className="rotate-[-90deg]" /></button>
          </div>
          <span className="text-lg font-bold text-muted-foreground">:</span>
          <div className="flex flex-col items-center gap-1 flex-1">
            <button onClick={() => setMinute(m => m === 55 ? 0 : m + 5)} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Increase minute"><ChevronRight size={13} className="rotate-[-90deg]" /></button>
            <span className="text-lg font-semibold w-8 text-center">{String(minute).padStart(2,"0")}</span>
            <button onClick={() => setMinute(m => m === 0 ? 55 : m - 5)} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Decrease minute"><ChevronLeft size={13} className="rotate-[-90deg]" /></button>
          </div>
        </div>
        <div className="flex rounded-lg border border-border overflow-hidden">
          {(["AM","PM"] as const).map(p => (
            <button key={p} onClick={() => setAmpm(p)} className={cn("flex-1 text-xs py-1.5 font-medium transition-colors", ampm === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")}>{p}</button>
          ))}
        </div>
        {selected && (
          <div className="mt-auto rounded-xl bg-secondary px-3 py-2.5">
            <p className="text-[10px] text-muted-foreground mb-0.5">Scheduled</p>
            <p className="text-xs font-semibold">{selected.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
            <p className="text-xs text-primary font-medium">{String(hour).padStart(2,"0")}:{String(minute).padStart(2,"0")} {ampm}</p>
          </div>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "Calendar — Booking", description: "Date selector with available time slots and a confirm booking flow.", category: "Calendar", tags: ["calendar", "booking", "slots", "availability", "schedule"], fullWidth: true, preview: <CalendarBooking />,
    code: `"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, CalendarDays, Check, X } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const SLOTS = ["9:00 AM","10:00 AM","11:00 AM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"]
const BOOKED = new Set(["10:00 AM","2:00 PM"])

function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export function CalendarBooking() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState<Date | null>(today)
  const [slot, setSlot] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const first = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full max-w-2xl">
      <div className="flex-1 rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prev} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground"><ChevronLeft size={15} /></button>
          <span className="text-sm font-semibold">{MONTHS[month]} {year}</span>
          <button onClick={next} className="size-7 flex items-center justify-center rounded-lg hover:bg-secondary text-muted-foreground"><ChevronRight size={15} /></button>
        </div>
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(d => <span key={d} className="text-[10px] font-medium text-muted-foreground text-center py-1">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {Array.from({ length: first }).map((_, i) => <span key={\`e\${i}\`} />)}
          {Array.from({ length: total }).map((_, i) => {
            const day = i + 1
            const date = new Date(year, month, day)
            const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
            const isToday = isSameDay(date, today)
            const isSel = isSameDay(date, selected)
            return (
              <button key={day} onClick={() => { if (!isPast) { setSelected(date); setSlot(null); setConfirmed(false) } }} disabled={isPast} className={cn("size-8 mx-auto flex items-center justify-center rounded-lg text-xs transition-all", isPast ? "text-muted-foreground/30 cursor-not-allowed" : isSel ? "bg-primary text-primary-foreground font-semibold" : isToday ? "border border-primary text-primary" : "text-foreground hover:bg-secondary")}>{day}</button>
            )
          })}
        </div>
      </div>
      <div className="lg:w-56 rounded-2xl border border-border bg-card p-5 flex flex-col gap-4">
        <div>
          <p className="text-xs font-semibold flex items-center gap-1.5"><CalendarDays size={13} className="text-primary" />{selected ? selected.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }) : "Pick a date"}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Available time slots</p>
        </div>
        {confirmed ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center">
            <div className="size-10 rounded-full bg-emerald-400/20 flex items-center justify-center"><Check size={18} className="text-emerald-400" /></div>
            <div><p className="text-sm font-semibold">Booked!</p><p className="text-xs text-muted-foreground mt-0.5">{slot} on {selected?.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p></div>
            <button onClick={() => { setSlot(null); setConfirmed(false) }} className="text-xs text-primary hover:text-primary/80 flex items-center gap-1"><X size={11} /> Cancel booking</button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-1.5 flex-1">
              {SLOTS.map(s => {
                const isBooked = BOOKED.has(s)
                const isSel = slot === s
                return (
                  <button key={s} onClick={() => !isBooked && setSlot(isSel ? null : s)} disabled={isBooked} className={cn("w-full rounded-lg px-3 py-2 text-xs font-medium transition-all text-left", isBooked ? "bg-secondary/50 text-muted-foreground/40 cursor-not-allowed line-through" : isSel ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80 border border-transparent hover:border-primary/30")}>
                    {s}{isBooked && <span className="ml-2 text-[10px] no-underline">(taken)</span>}
                  </button>
                )
              })}
            </div>
            <button onClick={() => slot && setConfirmed(true)} disabled={!slot} className="w-full h-9 rounded-xl bg-primary text-primary-foreground text-xs font-semibold disabled:opacity-40 hover:bg-primary/90 transition-all">Confirm booking</button>
          </>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "Dropdown — Basic", description: "Single-select dropdown with a solid primary background on the selected item and a left-aligned checkmark — matching the macOS-native style.", category: "Dropdown", tags: ["dropdown", "select", "menu", "picker"], fullWidth: true, preview: <DropdownBasic />,
    code: `"use client"
import { useState } from "react"
import { ChevronDown, Check } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const options = ["Next.js", "Remix", "Astro", "SvelteKit"]

export function Dropdown() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("Next.js")

  return (
    <div className="relative w-72">
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-secondary border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
      >
        {selected}
        <ChevronDown size={15} className={cn("text-muted-foreground transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <ul role="listbox" className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-card shadow-xl overflow-hidden py-1">
          {options.map(opt => {
            const isSel = selected === opt
            return (
              <li key={opt} role="option" aria-selected={isSel}>
                <button
                  onClick={() => { setSelected(opt); setOpen(false) }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 mx-1 rounded-lg text-sm transition-colors",
                    isSel ? "bg-primary text-primary-foreground font-medium" : "text-foreground hover:bg-secondary"
                  )}
                  style={{ width: "calc(100% - 8px)" }}
                >
                  <Check size={14} className={cn("shrink-0", isSel ? "opacity-100" : "opacity-0")} />
                  {opt}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}`,
  },
  {
    name: "Dropdown — Searchable", description: "Dropdown with a live search input to filter a long list of options.", category: "Dropdown", tags: ["dropdown", "search", "filter", "combobox"], fullWidth: true, preview: <DropdownSearch />,
    code: `"use client"
import { useState } from "react"
import { ChevronDown, Check, Search } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const options = ["TypeScript", "JavaScript", "Python", "Rust", "Go", "Swift", "Kotlin", "C++"]

export function DropdownSearch() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const filtered = options.filter(o => o.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="relative w-72">
      <button
        onClick={() => { setOpen(o => !o); setQuery("") }}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-secondary border border-border text-sm font-medium hover:border-primary/40 transition-colors"
      >
        <span className={selected ? "text-foreground" : "text-muted-foreground"}>{selected ?? "Select language..."}</span>
        <ChevronDown size={15} className={cn("text-muted-foreground transition-transform duration-200 shrink-0", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-card shadow-lg overflow-hidden">
          <div className="p-2 border-b border-border">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary">
              <Search size={13} className="text-muted-foreground shrink-0" />
              <input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none" />
            </div>
          </div>
          <ul role="listbox" className="max-h-48 overflow-y-auto py-1">
            {filtered.length === 0
              ? <li className="px-4 py-3 text-xs text-muted-foreground text-center">No results</li>
              : filtered.map(opt => (
                <li key={opt} role="option" aria-selected={selected === opt}>
                  <button onClick={() => { setSelected(opt); setOpen(false) }} className={cn("w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors", selected === opt ? "text-foreground bg-primary/10 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary")}>
                    {opt}
                    {selected === opt && <Check size={13} className="text-primary" />}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "Dropdown — Multi-select", description: "Select multiple options with checkboxes and removable chip badges.", category: "Dropdown", tags: ["dropdown", "multi", "multiselect", "checkbox", "chips"], fullWidth: true, preview: <DropdownMulti />,
    code: `"use client"
import { useState } from "react"
import { ChevronDown, Check, X } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const options = ["UI Design", "Frontend", "Backend", "DevOps", "Mobile", "Data Science"]

export function DropdownMulti() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  function toggle(opt: string) {
    setSelected(s => s.includes(opt) ? s.filter(x => x !== opt) : [...s, opt])
  }

  return (
    <div className="relative w-72">
      <button onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open} aria-multiselectable="true"
        className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-secondary border border-border hover:border-primary/40 transition-colors min-h-[46px]">
        <div className="flex flex-wrap gap-1.5 flex-1">
          {selected.length === 0
            ? <span className="text-muted-foreground text-sm">Select skills...</span>
            : selected.map(s => (
              <span key={s} className="inline-flex items-center gap-1 rounded-md bg-primary/15 text-primary text-xs font-medium px-2 py-0.5">
                {s}
                <button onClick={e => { e.stopPropagation(); toggle(s) }} aria-label={\`Remove \${s}\`} className="hover:text-primary/60"><X size={10} /></button>
              </span>
            ))}
        </div>
        <ChevronDown size={15} className={cn("text-muted-foreground transition-transform duration-200 shrink-0", open && "rotate-180")} />
      </button>
      {open && (
        <ul role="listbox" className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-card shadow-lg overflow-hidden py-1">
          {options.map(opt => {
            const isSel = selected.includes(opt)
            return (
              <li key={opt} role="option" aria-selected={isSel}>
                <button onClick={() => toggle(opt)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-secondary">
                  <span className={cn("size-4 rounded flex items-center justify-center border shrink-0 transition-colors", isSel ? "bg-primary border-primary" : "border-border")}>
                    {isSel && <Check size={10} className="text-primary-foreground" />}
                  </span>
                  <span className={isSel ? "text-foreground font-medium" : "text-muted-foreground"}>{opt}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}`,
  },
  {
    name: "Dropdown — With Icons", description: "Rich dropdown with icon, title, and subtitle per option — great for framework or service pickers.", category: "Dropdown", tags: ["dropdown", "icons", "rich", "select", "picker"], fullWidth: true, preview: <DropdownWithIcons />,
    code: `"use client"
import { useState } from "react"
import { ChevronDown, Check, Globe, Layers, Zap, Server } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const options = [
  { label: "Next.js", desc: "React framework", icon: Globe },
  { label: "Nuxt", desc: "Vue framework", icon: Layers },
  { label: "SvelteKit", desc: "Svelte framework", icon: Zap },
  { label: "Astro", desc: "Content-first", icon: Server },
]

export function DropdownWithIcons() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="relative w-72">
      <button onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-secondary border border-border hover:border-primary/40 transition-colors">
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <selected.icon size={13} className="text-primary" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-foreground leading-none">{selected.label}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{selected.desc}</p>
          </div>
        </div>
        <ChevronDown size={15} className={cn("text-muted-foreground transition-transform duration-200 shrink-0", open && "rotate-180")} />
      </button>
      {open && (
        <ul role="listbox" className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-card shadow-lg overflow-hidden py-1">
          {options.map(opt => {
            const isSel = selected.label === opt.label
            return (
              <li key={opt.label} role="option" aria-selected={isSel}>
                <button onClick={() => { setSelected(opt); setOpen(false) }} className={cn("w-full flex items-center gap-3 px-4 py-2.5 transition-colors", isSel ? "bg-primary/10" : "hover:bg-secondary")}>
                  <div className="size-7 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <opt.icon size={13} className={isSel ? "text-primary" : "text-muted-foreground"} />
                  </div>
                  <div className="text-left flex-1">
                    <p className={cn("text-sm leading-none", isSel ? "text-foreground font-medium" : "text-muted-foreground")}>{opt.label}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{opt.desc}</p>
                  </div>
                  {isSel && <Check size={13} className="text-primary shrink-0" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}`,
  },
  // ── Search Bar entries ───────────────────────────────────────────────────────
  {
    name: "Search — Basic", description: "Clean animated search bar with a glowing ring focus state and animated clear button.", category: "Search", tags: ["search", "input", "focus", "animated"], fullWidth: true, preview: <SearchBarBasic />,
    code: `"use client"
import { useState } from "react"
import { Search, X } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

export function SearchBar() {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl border bg-secondary transition-all duration-200 w-full max-w-md",
      focused ? "border-primary ring-2 ring-primary/20" : "border-border"
    )}>
      <Search size={15} className={cn("shrink-0 transition-colors", focused ? "text-primary" : "text-muted-foreground")} />
      <input
        value={value} onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        placeholder="Search anything..." aria-label="Search"
        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
      />
      {value && (
        <button onClick={() => setValue("")} aria-label="Clear" className="text-muted-foreground hover:text-foreground transition-colors">
          <X size={13} />
        </button>
      )}
    </div>
  )
}`,
  },
  {
    name: "Search — Command", description: "Command palette style search bar with ⌘K keyboard shortcut badge.", category: "Search", tags: ["search", "command", "keyboard", "palette"], fullWidth: true, preview: <SearchBarCommand />,
    code: `"use client"
import { useState } from "react"
import { Command } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

export function CommandSearch() {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl border bg-secondary transition-all duration-300 w-full max-w-md",
      focused ? "border-primary ring-2 ring-primary/20" : "border-border"
    )}>
      <Command size={14} className={cn("shrink-0 transition-colors", focused ? "text-primary" : "text-muted-foreground")} />
      <input
        value={value} onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        placeholder="Type a command..." aria-label="Command search"
        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
      />
      <div className="flex items-center gap-1 shrink-0">
        <kbd className="flex items-center h-5 px-1.5 rounded border border-border bg-card text-[10px] font-mono text-muted-foreground">⌘</kbd>
        <kbd className="flex items-center h-5 px-1.5 rounded border border-border bg-card text-[10px] font-mono text-muted-foreground">K</kbd>
      </div>
    </div>
  )
}`,
  },
  {
    name: "Search — With Suggestions", description: "Animated suggestions dropdown that appears on focus with live filtering.", category: "Search", tags: ["search", "suggestions", "autocomplete", "dropdown", "animated"], fullWidth: true, preview: <SearchBarWithSuggestions />,
    code: `"use client"
import { useState } from "react"
import { Search, X } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const suggestions = ["Next.js App Router","Tailwind CSS v4","React Server Components","TypeScript 5.4","Vercel Edge Functions"]

export function SearchWithSuggestions() {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  const filtered = value.trim() ? suggestions.filter(s => s.toLowerCase().includes(value.toLowerCase())) : suggestions

  return (
    <div className="relative w-full max-w-md">
      <div className={cn("flex items-center gap-3 px-4 py-3 rounded-xl border bg-secondary transition-all duration-200",
        focused ? "border-primary ring-2 ring-primary/20" : "border-border")}>
        <Search size={15} className={cn("shrink-0 transition-colors", focused ? "text-primary" : "text-muted-foreground")} />
        <input value={value} onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search docs..." aria-label="Search docs"
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none" />
        {value && <button onClick={() => setValue("")} aria-label="Clear" className="text-muted-foreground hover:text-foreground transition-colors"><X size={13} /></button>}
      </div>
      {focused && filtered.length > 0 && (
        <ul role="listbox" className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-card shadow-xl overflow-hidden py-1">
          {filtered.map(s => (
            <li key={s} role="option">
              <button onMouseDown={() => { setValue(s); setFocused(false) }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors text-left">
                <Search size={12} className="text-muted-foreground shrink-0" />{s}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}`,
  },
  {
    name: "Search — With Filters", description: "Search bar with animated filter pill tabs to scope the search query.", category: "Search", tags: ["search", "filter", "tabs", "animated"], fullWidth: true, preview: <SearchBarWithFilters />,
    code: `"use client"
import { useState } from "react"
import { Search, Filter } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const filters = ["All", "Docs", "Blog", "API"]

export function SearchWithFilters() {
  const [value, setValue] = useState("")
  const [active, setActive] = useState("All")
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <div className={cn("flex items-center gap-3 px-4 py-3 rounded-xl border bg-secondary transition-all duration-200",
        focused ? "border-primary ring-2 ring-primary/20" : "border-border")}>
        <Search size={15} className={cn("shrink-0 transition-colors", focused ? "text-primary" : "text-muted-foreground")} />
        <input value={value} onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          placeholder={\`Search \${active === "All" ? "everything" : active}...\`}
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none" />
        <Filter size={13} className="text-muted-foreground shrink-0" />
      </div>
      <div className="flex items-center gap-2">
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)}
            className={cn("px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150",
              active === f ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground border border-border")}>
            {f}
          </button>
        ))}
      </div>
    </div>
  )
}`,
  },
  // ── Toggle entries ───────────────────────────────────────────────────────────
  {
    name: "Toggle — Dark / Light", description: "Animated pill toggle that switches between dark and light mode with icon transitions.", category: "Toggle", tags: ["toggle", "dark", "light", "theme", "animated"], fullWidth: true, preview: <ToggleDarkLight />,
    code: `"use client"
import { useState } from "react"
import { Sun, Moon } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const [dark, setDark] = useState(true)
  return (
    <button onClick={() => setDark(d => !d)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={dark}
      className={cn("relative w-16 h-8 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        dark ? "bg-primary border-primary" : "bg-secondary border-border")}>
      <span className={cn("absolute top-1 size-6 rounded-full flex items-center justify-center shadow-sm transition-all duration-300",
        dark ? "translate-x-8 bg-white" : "translate-x-1 bg-foreground")}>
        {dark ? <Moon size={12} className="text-primary" /> : <Sun size={12} className="text-background" />}
      </span>
    </button>
  )
}`,
  },
  {
    name: "Toggle — Mode Group", description: "Three-way segmented control for System / Light / Dark mode selection.", category: "Toggle", tags: ["toggle", "segmented", "theme", "mode", "group"], fullWidth: true, preview: <ToggleGroup />,
    code: `"use client"
import { useState } from "react"
import { Sun, Moon, SlidersHorizontal } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

export function ModeToggleGroup() {
  const [selected, setSelected] = useState<"system"|"light"|"dark">("dark")
  return (
    <div className="flex items-center gap-1 p-1 rounded-xl bg-secondary border border-border" role="group" aria-label="Theme selection">
      {(["light","system","dark"] as const).map(mode => (
        <button key={mode} onClick={() => setSelected(mode)} aria-pressed={selected === mode}
          className={cn("flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 capitalize",
            selected === mode ? "bg-card text-foreground shadow-sm border border-border" : "text-muted-foreground hover:text-foreground")}>
          {mode === "light" && <Sun size={12} />}
          {mode === "system" && <SlidersHorizontal size={12} />}
          {mode === "dark" && <Moon size={12} />}
          {mode}
        </button>
      ))}
    </div>
  )
}`,
  },
  {
    name: "Toggle — Switch List", description: "Settings-style list of labeled pill toggles with animated thumb transitions.", category: "Toggle", tags: ["toggle", "switch", "settings", "list", "animated"], fullWidth: true, preview: <TogglePill />,
    code: `"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"

function Switch({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked)
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-secondary border border-border">
      <span className="text-sm text-foreground">{label}</span>
      <button onClick={() => setChecked(c => !c)} role="switch" aria-checked={checked} aria-label={"Toggle " + label}
        className={cn("relative w-11 h-6 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0",
          checked ? "bg-primary" : "bg-muted border border-border")}>
        <span className={cn("absolute top-[3px] left-[3px] size-[18px] rounded-full bg-white shadow-sm transition-transform duration-200",
          checked ? "translate-x-[20px]" : "translate-x-0")} />
      </button>
    </div>
  )
}

export function SwitchList() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <Switch label="Notifications" defaultChecked />
      <Switch label="Auto-save" defaultChecked />
      <Switch label="Analytics" />
    </div>
  )
}`,
  },
  // ── Color Palette entries ────────────────────────────────────────────────────
  {
    name: "Palette — Swatches", description: "Expanding swatch palette — hover to expand a color slot and click to copy the hex value.", category: "Palette", tags: ["color", "palette", "swatch", "copy", "design"], fullWidth: true, preview: <ColorPaletteShowcase />,
    code: `"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"

const palettes = [
  { name: "Ocean",  colors: ["#0f172a","#1e3a5f","#1d4ed8","#3b82f6","#93c5fd","#e0f2fe"] },
  { name: "Sunset", colors: ["#1c0a00","#7c2d12","#ea580c","#f97316","#fbbf24","#fef3c7"] },
  { name: "Forest", colors: ["#052e16","#14532d","#16a34a","#4ade80","#86efac","#dcfce7"] },
  { name: "Violet", colors: ["#0f0a1e","#3b0764","#7c3aed","#a78bfa","#c4b5fd","#f5f3ff"] },
]

export function PaletteSwatches() {
  const [copied, setCopied] = useState<string | null>(null)
  function copy(hex: string) {
    navigator.clipboard.writeText(hex); setCopied(hex); setTimeout(() => setCopied(null), 1500)
  }
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      {palettes.map(palette => (
        <div key={palette.name} className="flex flex-col gap-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{palette.name}</span>
          <div className="flex rounded-xl overflow-hidden border border-border">
            {palette.colors.map(hex => (
              <button key={hex} onClick={() => copy(hex)} title={hex} aria-label={\`Copy \${hex}\`}
                className="flex-1 h-12 relative group hover:flex-[2] transition-all duration-300"
                style={{ backgroundColor: hex }}>
                <span className={cn("absolute inset-0 flex items-center justify-center text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity",
                  parseInt(hex.slice(1),16) > 0xaaaaaa ? "text-black/70" : "text-white/80")}>
                  {copied === hex ? "✓" : hex}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "Palette — Design Tokens", description: "Interactive design token grid with dark/light mode preview and one-click hex copy.", category: "Palette", tags: ["color", "tokens", "theme", "design", "system"], fullWidth: true, preview: <ColorTokensGrid />,
    code: `"use client"
import { useState } from "react"
import { Sun, Moon } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

const tokens = [
  { label: "Background", light: "#ffffff", dark: "#09090b" },
  { label: "Foreground", light: "#09090b", dark: "#fafafa" },
  { label: "Primary",    light: "#1d4ed8", dark: "#3b82f6" },
  { label: "Secondary",  light: "#f1f5f9", dark: "#1e293b" },
  { label: "Muted",      light: "#94a3b8", dark: "#64748b" },
  { label: "Border",     light: "#e2e8f0", dark: "#1e293b" },
  { label: "Accent",     light: "#f97316", dark: "#f97316" },
  { label: "Destructive",light: "#ef4444", dark: "#ef4444" },
]

export function DesignTokens() {
  const [mode, setMode] = useState<"dark"|"light">("dark")
  const [copied, setCopied] = useState<string | null>(null)
  function copy(hex: string) {
    navigator.clipboard.writeText(hex); setCopied(hex); setTimeout(() => setCopied(null), 1500)
  }
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground">Preview mode:</span>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary border border-border">
          {(["dark","light"] as const).map(m => (
            <button key={m} onClick={() => setMode(m)}
              className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 capitalize",
                mode === m ? "bg-card text-foreground border border-border" : "text-muted-foreground hover:text-foreground")}>
              {m === "dark" ? <Moon size={11} /> : <Sun size={11} />}{m}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {tokens.map(token => {
          const hex = mode === "dark" ? token.dark : token.light
          return (
            <button key={token.label} onClick={() => copy(hex)}
              className="flex flex-col gap-2 p-3 rounded-xl border border-border bg-secondary hover:border-primary/40 transition-all group">
              <div className="w-full h-8 rounded-lg border border-white/5 shadow-inner group-hover:scale-95 transition-transform" style={{ backgroundColor: hex }} />
              <div className="text-left">
                <p className="text-[11px] font-medium text-foreground leading-none">{token.label}</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-0.5">{copied === hex ? "Copied!" : hex}</p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}`,
  },
  // ── Data Views entries ───────────────────────────────────────────────────────
  {
    name: "View — Kanban", description: "Classic Kanban board with status columns, priority badges, assignee avatars, and a full filter/sort toolbar.", category: "Data Views", tags: ["kanban", "board", "columns", "filter", "sort", "view"], fullWidth: true, preview: <ViewKanban />,
    code: `// See "View — All Views" for the full multi-view implementation with shared data and toolbar.`,
  },
  {
    name: "View — Board", description: "Horizontal swimlane board grouping tasks by status, with horizontal card scroll per lane.", category: "Data Views", tags: ["board", "swimlane", "horizontal", "filter", "sort", "view"], fullWidth: true, preview: <ViewBoard />,
    code: `// See "View — All Views" for the full multi-view implementation with shared data and toolbar.`,
  },
  {
    name: "View — Cards", description: "Responsive card grid view showing full task details with tag, status, priority, and assignee.", category: "Data Views", tags: ["cards", "grid", "view", "filter", "sort"], fullWidth: true, preview: <ViewCards />,
    code: `// See "View — All Views" for the full multi-view implementation with shared data and toolbar.`,
  },
  {
    name: "View — List", description: "Compact single-column list view with drag handles, inline badges, and all metadata at a glance.", category: "Data Views", tags: ["list", "compact", "view", "filter", "sort"], fullWidth: true, preview: <ViewList />,
    code: `// See "View — All Views" for the full multi-view implementation with shared data and toolbar.`,
  },
  {
    name: "View — Table", description: "Sortable data table with clickable column headers, status and priority chips, and avatar assignees.", category: "Data Views", tags: ["table", "data", "sort", "view", "grid"], fullWidth: true, preview: <ViewTable />,
    code: `// See "View — All Views" for the full multi-view implementation with shared data and toolbar.`,
  },
  {
    name: "View — All Views", description: "Full view-switcher with Kanban, Board, Cards, List, and Table — all sharing the same filter and sort toolbar.", category: "Data Views", tags: ["view", "switcher", "kanban", "table", "list", "cards", "filter", "sort"], fullWidth: true, preview: <ViewSwitcher />,
    code: `"use client"
import { useState } from "react"
import { Search, X, Star, ArrowUp, ArrowDown, ArrowUpDown, GripVertical, Kanban, Columns, LayoutGrid, List, Table, Circle, PauseCircle, AlertCircle, CheckCircle2 } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

type Priority = "Low" | "Medium" | "High"
type Status = "Todo" | "In Progress" | "In Review" | "Done"
type SortKey = "title" | "priority" | "date" | "status"
type SortDir = "asc" | "desc"

interface Task { id: number; title: string; status: Status; priority: Priority; tag: string; assignee: string; date: string; starred: boolean }

const TASKS: Task[] = [
  { id: 1, title: "Design system tokens", status: "Done", priority: "High", tag: "Design", assignee: "AK", date: "Mar 10", starred: true },
  { id: 2, title: "Implement auth flow", status: "In Progress", priority: "High", tag: "Dev", assignee: "JS", date: "Mar 12", starred: false },
  { id: 3, title: "Write API docs", status: "Todo", priority: "Medium", tag: "Docs", assignee: "ML", date: "Mar 15", starred: false },
  { id: 4, title: "Fix mobile layout", status: "In Review", priority: "Medium", tag: "Dev", assignee: "AK", date: "Mar 13", starred: true },
  { id: 5, title: "Onboarding emails", status: "Todo", priority: "Low", tag: "Marketing", assignee: "NP", date: "Mar 18", starred: false },
  { id: 6, title: "Performance audit", status: "In Progress", priority: "High", tag: "Dev", assignee: "JS", date: "Mar 11", starred: false },
  { id: 7, title: "User research interviews", status: "Done", priority: "Medium", tag: "Research", assignee: "ML", date: "Mar 9", starred: true },
  { id: 8, title: "Dashboard analytics", status: "In Review", priority: "Low", tag: "Dev", assignee: "NP", date: "Mar 14", starred: false },
]

const STATUS_CONFIG = {
  "Todo":        { color: "text-muted-foreground", icon: <Circle size={12} /> },
  "In Progress": { color: "text-blue-400",         icon: <PauseCircle size={12} /> },
  "In Review":   { color: "text-yellow-400",        icon: <AlertCircle size={12} /> },
  "Done":        { color: "text-green-400",         icon: <CheckCircle2 size={12} /> },
}
const PRIORITY_ORDER = { High: 0, Medium: 1, Low: 2 }
const STATUS_ORDER   = { "In Progress": 0, "In Review": 1, "Todo": 2, "Done": 3 }
const AVATAR_COLORS  = { AK: "bg-violet-500", JS: "bg-blue-500", ML: "bg-emerald-500", NP: "bg-orange-500" }
const KANBAN_COLS: Status[] = ["Todo", "In Progress", "In Review", "Done"]

function Avatar({ initials }: { initials: string }) {
  return <span className={cn("inline-flex items-center justify-center size-6 rounded-full text-[10px] font-bold text-white shrink-0", AVATAR_COLORS[initials as keyof typeof AVATAR_COLORS] ?? "bg-primary")}>{initials}</span>
}
function PriorityBadge({ p }: { p: Priority }) {
  const dots = { Low: "bg-muted-foreground", Medium: "bg-yellow-400", High: "bg-red-400" }
  return <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className={cn("size-1.5 rounded-full shrink-0", dots[p])} />{p}</span>
}
function StatusBadge({ s }: { s: Status }) {
  const { color, icon } = STATUS_CONFIG[s]
  return <span className={cn("inline-flex items-center gap-1 text-xs font-medium", color)}>{icon}{s}</span>
}

export function ViewSwitcher() {
  const [view, setView] = useState<"kanban"|"board"|"cards"|"list"|"table">("kanban")
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<Status|"All">("All")
  const [priorityFilter, setPriorityFilter] = useState<Priority|"All">("All")
  const [sortKey, setSortKey] = useState<SortKey>("date")
  const [sortDir, setSortDir] = useState<SortDir>("asc")

  const filtered = TASKS
    .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
    .filter(t => statusFilter === "All" || t.status === statusFilter)
    .filter(t => priorityFilter === "All" || t.priority === priorityFilter)
    .sort((a, b) => {
      let cmp = sortKey === "title" ? a.title.localeCompare(b.title)
        : sortKey === "priority" ? PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
        : sortKey === "status"   ? STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
        : a.date.localeCompare(b.date)
      return sortDir === "asc" ? cmp : -cmp
    })

  const VIEWS = [
    { id: "kanban", label: "Kanban", icon: <Kanban size={13} /> },
    { id: "board",  label: "Board",  icon: <Columns size={13} /> },
    { id: "cards",  label: "Cards",  icon: <LayoutGrid size={13} /> },
    { id: "list",   label: "List",   icon: <List size={13} /> },
    { id: "table",  label: "Table",  icon: <Table size={13} /> },
  ]

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* View switcher tabs */}
      <div className="flex items-center gap-1 p-1 rounded-xl bg-secondary border border-border w-fit">
        {VIEWS.map(v => (
          <button key={v.id} onClick={() => setView(v.id as typeof view)}
            className={cn("flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all",
              view === v.id ? "bg-card text-foreground border border-border shadow-sm" : "text-muted-foreground hover:text-foreground")}>
            {v.icon}<span className="hidden sm:inline">{v.label}</span>
          </button>
        ))}
      </div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary border border-border flex-1 min-w-[140px]">
          <Search size={13} className="text-muted-foreground shrink-0" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Filter tasks..."
            className="bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none w-full" />
          {search && <button onClick={() => setSearch("")}><X size={11} className="text-muted-foreground" /></button>}
        </div>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)}
          className="px-3 py-2 rounded-lg bg-secondary border border-border text-xs text-foreground outline-none cursor-pointer">
          {["All","Todo","In Progress","In Review","Done"].map(s => <option key={s}>{s}</option>)}
        </select>
        <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value as any)}
          className="px-3 py-2 rounded-lg bg-secondary border border-border text-xs text-foreground outline-none cursor-pointer">
          {["All","High","Medium","Low"].map(p => <option key={p}>{p}</option>)}
        </select>
        <select value={sortKey} onChange={e => setSortKey(e.target.value as SortKey)}
          className="px-3 py-2 rounded-lg bg-secondary border border-border text-xs text-foreground outline-none cursor-pointer">
          {["date","title","priority","status"].map(k => <option key={k} value={k}>{k.charAt(0).toUpperCase()+k.slice(1)}</option>)}
        </select>
        <button onClick={() => setSortDir(d => d==="asc"?"desc":"asc")}
          className="p-2 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground transition-colors">
          {sortDir === "asc" ? <ArrowUp size={13} /> : <ArrowDown size={13} />}
        </button>
      </div>
      {/* Views */}
      {/* ... render filtered tasks in the selected view layout ... */}
    </div>
  )
}`,
  },
  { name: "Button", description: "Trigger actions with multiple variants and sizes.", category: "Inputs", tags: ["button", "action", "cta", "variant"], preview: <ButtonPreview />,
    code: `import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function Button({ variant = "default", size = "md", className, ...props }: ButtonProps) {
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
        className
      )}
      {...props}
    />
  )
}`,
  },
  {
    name: "iOS Button", description: "Native iOS-style buttons with SF-inspired typography, large tap targets, and system variants.", category: "Mobile", tags: ["ios", "mobile", "button", "apple", "native"], preview: <IOSButtonPreview />,
    code: `import { cn } from "@/lib/utils"

interface IOSButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "destructive"
}

export function IOSButton({ variant = "default", className, ...props }: IOSButtonProps) {
  return (
    <button
      className={cn(
        "w-full h-[50px] rounded-[14px] text-[17px] font-semibold tracking-[-0.4px] transition-opacity active:opacity-70 select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "disabled:pointer-events-none disabled:opacity-40",
        variant === "default" && "bg-primary text-white",
        variant === "secondary" && "bg-secondary text-foreground border border-border",
        variant === "ghost" && "bg-transparent text-primary",
        variant === "destructive" && "bg-destructive/15 text-destructive border border-destructive/20",
        className
      )}
      {...props}
    />
  )
}`,
  },
  {
    name: "Android Button", description: "Material Design 3 buttons — filled, tonal, outlined, and text styles with pill shape and ripple-ready transitions.", category: "Mobile", tags: ["android", "mobile", "button", "material", "native"], preview: <AndroidButtonPreview />,
    code: `import { cn } from "@/lib/utils"

interface AndroidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "tonal" | "outlined" | "text"
}

export function AndroidButton({ variant = "filled", className, ...props }: AndroidButtonProps) {
  return (
    <button
      className={cn(
        "h-12 rounded-full px-6 text-sm font-medium tracking-[0.1px] transition-all select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "disabled:pointer-events-none disabled:opacity-40",
        "active:scale-[0.98]",
        variant === "filled" && "bg-primary text-white shadow-sm active:shadow-none",
        variant === "tonal" && "bg-secondary text-foreground border border-border",
        variant === "outlined" && "bg-transparent text-primary border border-primary/60",
        variant === "text" && "bg-transparent text-primary",
        className
      )}
      {...props}
    />
  )
}`,
  },
  {
    name: "Checkbox", description: "Multi-select control with accessible toggle states.", category: "Inputs", tags: ["checkbox", "toggle", "select", "form"], preview: <CheckboxPreview />,
    code: `"use client"
import { useState } from "react"
import { Check } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

export function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer">
      <button
        role="checkbox"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn("w-4 h-4 rounded flex items-center justify-center border transition-colors shrink-0", checked ? "bg-primary border-primary" : "border-border bg-secondary")}
      >
        {checked && <Check size={10} className="text-primary-foreground" aria-hidden="true" />}
      </button>
      <span className="text-sm text-foreground">{label}</span>
    </label>
  )
}`,
  },
  {
    name: "Select", description: "Dropdown menu for choosing from a list of options.", category: "Inputs", tags: ["select", "dropdown", "form", "picker"], preview: <SelectPreview />,
    code: `import { cn } from "@/lib/utils"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: { value: string; label: string }[]
}

export function Select({ label, options, className, id, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>}
      <select
        id={id}
        className={cn("h-9 w-full rounded-lg border border-border bg-secondary px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring", className)}
        {...props}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  )
}`,
  },
  {
    name: "Textarea", description: "Multi-line text input for longer content.", category: "Inputs", tags: ["textarea", "input", "form", "text"], preview: <TextareaPreview />,
    code: `import { cn } from "@/lib/utils"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>}
      <textarea
        id={id}
        className={cn("w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none", error && "border-destructive focus:ring-destructive", className)}
        {...props}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}`,
  },
  {
    name: "Input", description: "Text fields for capturing user input.", category: "Inputs", tags: ["input", "text", "form", "field"], preview: <InputPreview />,
    code: `import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>}
      <input
        id={id}
        className={cn("w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50", error && "border-destructive", className)}
        {...props}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}`,
  },
  {
    name: "Switch", description: "Toggle boolean settings on or off.", category: "Inputs", tags: ["switch", "toggle", "boolean", "settings"], preview: <SwitchPreview />,
    code: `"use client"
import { cn } from "@/lib/utils"

export function Switch({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label?: string }) {
  return (
    <label className="flex items-center justify-between gap-8 cursor-pointer">
      {label && <span className="text-sm text-foreground">{label}</span>}
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn("w-9 h-5 rounded-full relative transition-colors shrink-0", checked ? "bg-primary" : "bg-secondary border border-border")}
      >
        <span className={cn("absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all", checked ? "left-[18px]" : "left-0.5")} />
      </button>
    </label>
  )
}`,
  },
  {
    name: "Badge", description: "Small status indicators and labels.", category: "Display", tags: ["badge", "label", "tag", "status"], preview: <BadgePreview />,
    code: `import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline" | "destructive"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
      variant === "default" && "bg-primary text-primary-foreground",
      variant === "secondary" && "bg-secondary text-secondary-foreground",
      variant === "outline" && "border border-border text-foreground",
      variant === "destructive" && "bg-destructive/15 text-destructive border border-destructive/20",
      className
    )}>
      {children}
    </span>
  )
}`,
  },
  {
    name: "Card", description: "Container for grouping related content.", category: "Display", tags: ["card", "container", "layout", "content"], preview: <CardPreview />,
    code: `import { cn } from "@/lib/utils"

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-xl border border-border bg-card text-card-foreground", className)} {...props} />
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
  return <div className={cn("flex items-center px-6 pb-6 pt-0 gap-3", className)} {...props} />
}`,
  },
  {
    name: "Avatar", description: "User profile pictures with fallback initials.", category: "Display", tags: ["avatar", "user", "profile", "image"], preview: <AvatarPreview />,
    code: `import { cn } from "@/lib/utils"

interface AvatarProps {
  src?: string
  initials?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Avatar({ src, initials, size = "md", className }: AvatarProps) {
  const sizes = { sm: "size-7 text-xs", md: "size-9 text-sm", lg: "size-12 text-base" }
  return (
    <div className={cn("rounded-full flex items-center justify-center bg-primary/20 text-primary font-semibold overflow-hidden shrink-0", sizes[size], className)}>
      {src ? <img src={src} alt="" className="w-full h-full object-cover" /> : (initials ?? "?")}
    </div>
  )
}`,
  },
  {
    name: "Progress", description: "Visualise completion of a task or metric.", category: "Display", tags: ["progress", "bar", "loading", "metric"], preview: <ProgressPreview />,
    code: `import { cn } from "@/lib/utils"

interface ProgressProps {
  value: number
  max?: number
  label?: string
  className?: string
}

export function Progress({ value, max = 100, label, className }: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <div className="flex justify-between">
          <span className="text-xs text-muted-foreground">{label}</span>
          <span className="text-xs text-foreground font-medium">{Math.round(pct)}%</span>
        </div>
      )}
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: \`\${pct}%\` }} />
      </div>
    </div>
  )
}`,
  },
  {
    name: "Alert", description: "Communicate important messages inline.", category: "Feedback", tags: ["alert", "notification", "warning", "error", "info"], preview: <AlertPreview />,
    code: `import { cn } from "@/lib/utils"

interface AlertProps {
  title: string
  description?: string
  variant?: "default" | "destructive" | "success"
}

export function Alert({ title, description, variant = "default" }: AlertProps) {
  return (
    <div className={cn("flex items-start gap-3 rounded-lg border p-3",
      variant === "default" && "border-primary/30 bg-primary/10",
      variant === "destructive" && "border-destructive/30 bg-destructive/10",
      variant === "success" && "border-emerald-400/30 bg-emerald-400/10"
    )}>
      <span className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0",
        variant === "default" && "bg-primary",
        variant === "destructive" && "bg-destructive",
        variant === "success" && "bg-emerald-400"
      )} />
      <div>
        <p className="text-xs font-semibold text-foreground">{title}</p>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
      </div>
    </div>
  )
}`,
  },
  {
    name: "Toast", description: "Temporary notifications at the edge of the screen.", category: "Feedback", tags: ["toast", "notification", "snackbar", "message"], preview: <ToastPreview />,
    code: `"use client"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ToastProps {
  message: string
  variant?: "default" | "destructive"
  action?: { label: string; onClick: () => void }
  duration?: number
  onClose?: () => void
}

export function Toast({ message, variant = "default", action, duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(() => onClose?.(), duration)
    return () => clearTimeout(t)
  }, [duration, onClose])

  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 shadow-sm min-w-[260px]">
      <div className="flex items-center gap-2">
        <span className={cn("w-2 h-2 rounded-full", variant === "default" ? "bg-emerald-400" : "bg-destructive")} />
        <span className="text-sm text-foreground font-medium">{message}</span>
      </div>
      {action && (
        <button onClick={action.onClick} className="text-xs text-muted-foreground hover:text-foreground ml-4">{action.label}</button>
      )}
    </div>
  )
}`,
  },
  {
    name: "Tabs", description: "Segmented navigation between related views.", category: "Navigation", tags: ["tabs", "navigation", "segment", "menu"], preview: <TabPreview />,
    code: `"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface Tab { label: string; content: React.ReactNode }

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0)
  return (
    <div className="w-full">
      <div className="flex border-b border-border">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={cn("px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px", active === i ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="pt-4">{tabs[active]?.content}</div>
    </div>
  )
}`,
  },
]

// ─── Form components are appended below via FORM_REGISTRY spread ──────────────
// (COMPONENTS is reassigned after FORM_REGISTRY is defined — see bottom of file)

// Shared field primitives
function FormField({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-red-400 ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-400" role="alert">
          <AlertTriangle size={11} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn("w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all", className)}
      {...props}
    />
  )
}

function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn("w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all resize-none", className)}
      {...props}
    />
  )
}

function SubmitButton({ loading, children }: { loading: boolean; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 disabled:opacity-60 transition-colors"
    >
      {loading ? <Loader2 size={14} className="animate-spin" aria-hidden="true" /> : <ArrowUp size={14} aria-hidden="true" />}
      {children}
    </button>
  )
}

// ── Contact Form ───────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Enter a valid email"
    if (!form.subject.trim()) e.subject = "Subject is required"
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters"
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setSent(true)
  }

  if (sent) return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <div className="size-12 rounded-full bg-green-400/15 flex items-center justify-center">
        <CheckCircle2 size={22} className="text-green-400" aria-hidden="true" />
      </div>
      <p className="font-semibold text-foreground">Message sent!</p>
      <p className="text-sm text-muted-foreground max-w-xs">Thanks for reaching out. We'll get back to you within 24 hours.</p>
      <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }) }} className="mt-2 text-xs text-primary hover:underline">Send another</button>
    </div>
  )

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl border border-border bg-card p-6 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-xl bg-primary/15 flex items-center justify-center">
          <Mail size={16} className="text-primary" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact Us</h2>
          <p className="text-xs text-muted-foreground">We'll reply within 24 hours</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Full name" required error={errors.name}>
            <Input placeholder="Jane Smith" value={form.name} onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(err => ({ ...err, name: "" })) }} aria-required="true" />
          </FormField>
          <FormField label="Email" required error={errors.email}>
            <Input type="email" placeholder="jane@example.com" value={form.email} onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(err => ({ ...err, email: "" })) }} aria-required="true" />
          </FormField>
        </div>
        <FormField label="Subject" required error={errors.subject}>
          <Input placeholder="How can we help?" value={form.subject} onChange={e => { setForm(f => ({ ...f, subject: e.target.value })); setErrors(err => ({ ...err, subject: "" })) }} aria-required="true" />
        </FormField>
        <FormField label="Message" required error={errors.message}>
          <Textarea rows={4} placeholder="Describe your question or issue in detail..." value={form.message} onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(err => ({ ...err, message: "" })) }} aria-required="true" />
        </FormField>
        <SubmitButton loading={loading}>Send message</SubmitButton>
      </form>
    </div>
  )
}

// ── Feedback Form ─────────────────�����──���────────────────────────────────────────
function FeedbackForm() {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const categories = ["Bug report", "Feature request", "Performance", "Design", "Other"]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!rating) errs.rating = "Please select a rating"
    if (!category) errs.category = "Please select a category"
    if (message.trim().length < 5) errs.message = "Please describe your feedback"
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  if (sent) return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <div className="size-12 rounded-full bg-primary/15 flex items-center justify-center">
        <ThumbsUp size={22} className="text-primary" aria-hidden="true" />
      </div>
      <p className="font-semibold text-foreground">Thanks for your feedback!</p>
      <p className="text-sm text-muted-foreground max-w-xs">Your input helps us build a better product.</p>
      <button onClick={() => { setSent(false); setRating(0); setCategory(""); setMessage("") }} className="mt-2 text-xs text-primary hover:underline">Submit more feedback</button>
    </div>
  )

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-border bg-card p-6 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-xl bg-primary/15 flex items-center justify-center">
          <MessageSquare size={16} className="text-primary" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Share Feedback</h2>
          <p className="text-xs text-muted-foreground">Help us improve the product</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {/* Star rating */}
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-foreground">Overall rating <span className="text-red-400">*</span></span>
          <div className="flex items-center gap-1" role="group" aria-label="Rating">
            {[1, 2, 3, 4, 5].map(n => (
              <button
                key={n}
                type="button"
                onClick={() => { setRating(n); setErrors(err => ({ ...err, rating: "" })) }}
                onMouseEnter={() => setHovered(n)}
                onMouseLeave={() => setHovered(0)}
                aria-label={`${n} star${n > 1 ? "s" : ""}`}
                className="transition-transform hover:scale-110"
              >
                <Star
                  size={24}
                  className={cn("transition-colors", (hovered || rating) >= n ? "text-yellow-400 fill-yellow-400" : "text-border")}
                  aria-hidden="true"
                />
              </button>
            ))}
            {rating > 0 && (
              <span className="ml-2 text-xs text-muted-foreground">
                {["", "Poor", "Fair", "Good", "Very good", "Excellent"][rating]}
              </span>
            )}
          </div>
          {errors.rating && <p className="flex items-center gap-1 text-xs text-red-400"><AlertTriangle size={11} />{errors.rating}</p>}
        </div>
        {/* Category chips */}
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-foreground">Category <span className="text-red-400">*</span></span>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                type="button"
                onClick={() => { setCategory(c); setErrors(err => ({ ...err, category: "" })) }}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                  category === c ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          {errors.category && <p className="flex items-center gap-1 text-xs text-red-400"><AlertTriangle size={11} />{errors.category}</p>}
        </div>
        <FormField label="Your feedback" required error={errors.message}>
          <Textarea rows={3} placeholder="What's on your mind?" value={message} onChange={e => { setMessage(e.target.value); setErrors(err => ({ ...err, message: "" })) }} />
        </FormField>
        <SubmitButton loading={loading}>Submit feedback</SubmitButton>
      </form>
    </div>
  )
}

// ── Survey Form (multi-step) ──────────────────────────────────────────────────
const SURVEY_STEPS = [
  { id: "role", title: "Your role" },
  { id: "usage", title: "How you use it" },
  { id: "nps", title: "Recommendation" },
  { id: "done", title: "Done" },
]

function SurveyForm() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({ role: "", usageFreq: "", usageFeature: [] as string[], nps: -1, extra: "" })
  const [loading, setLoading] = useState(false)

  const roles = ["Developer", "Designer", "Product manager", "Engineering lead", "Other"]
  const freqs = ["Daily", "A few times a week", "Weekly", "Monthly"]
  const features = ["Components", "Design tokens", "Code snippets", "Documentation", "Theming"]

  function toggleFeature(f: string) {
    setAnswers(a => ({
      ...a,
      usageFeature: a.usageFeature.includes(f) ? a.usageFeature.filter(x => x !== f) : [...a.usageFeature, f],
    }))
  }

  async function finish() {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1100))
    setLoading(false)
    setStep(3)
  }

  const progress = ((step) / (SURVEY_STEPS.length - 1)) * 100

  if (step === 3) return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <div className="size-12 rounded-full bg-green-400/15 flex items-center justify-center">
        <CheckCircle2 size={22} className="text-green-400" />
      </div>
      <p className="font-semibold text-foreground">Survey complete — thank you!</p>
      <p className="text-sm text-muted-foreground max-w-xs">Your responses help shape our roadmap.</p>
    </div>
  )

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl border border-border bg-card p-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Step {step + 1} of {SURVEY_STEPS.length - 1}</p>
        <p className="text-xs font-medium text-foreground">{SURVEY_STEPS[step].title}</p>
      </div>
      {/* Progress bar */}
      <div className="w-full h-1 rounded-full bg-secondary overflow-hidden" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {/* Step 0 — role */}
      {step === 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-foreground">What best describes your role?</p>
          <div className="flex flex-col gap-2">
            {roles.map(r => (
              <button
                key={r}
                type="button"
                onClick={() => setAnswers(a => ({ ...a, role: r }))}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all",
                  answers.role === r ? "border-primary bg-primary/10 text-foreground font-medium" : "border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {r}
                {answers.role === r && <Check size={14} className="text-primary shrink-0" aria-hidden="true" />}
              </button>
            ))}
          </div>
          <button disabled={!answers.role} onClick={() => setStep(1)} className="mt-1 flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 disabled:opacity-40 transition-colors">Next <ArrowRight size={14} /></button>
        </div>
      )}

      {/* Step 1 — usage */}
      {step === 1 && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-foreground">How often do you use NexUI?</p>
            <div className="grid grid-cols-2 gap-2">
              {freqs.map(f => (
                <button key={f} type="button" onClick={() => setAnswers(a => ({ ...a, usageFreq: f }))}
                  className={cn("px-3 py-2.5 rounded-xl border text-xs font-medium transition-all", answers.usageFreq === f ? "border-primary bg-primary/10 text-foreground" : "border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground")}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-foreground">Which features do you use most? <span className="text-muted-foreground font-normal">(pick all that apply)</span></p>
            <div className="flex flex-wrap gap-2">
              {features.map(f => (
                <button key={f} type="button" onClick={() => toggleFeature(f)}
                  className={cn("px-3 py-1.5 rounded-lg text-xs font-medium border transition-all", answers.usageFeature.includes(f) ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-muted-foreground border-border hover:border-primary/40 hover:text-foreground")}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setStep(0)} className="flex items-center gap-1 px-4 py-2.5 rounded-lg border border-border bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors"><ChevronLeft size={14} />Back</button>
            <button disabled={!answers.usageFreq} onClick={() => setStep(2)} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 disabled:opacity-40 transition-colors">Next <ArrowRight size={14} /></button>
          </div>
        </div>
      )}

      {/* Step 2 — NPS */}
      {step === 2 && (
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-foreground">How likely are you to recommend NexUI to a colleague?</p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 flex-wrap">
              {Array.from({ length: 11 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setAnswers(a => ({ ...a, nps: i }))}
                  className={cn(
                    "size-9 rounded-lg text-xs font-semibold border transition-all",
                    answers.nps === i ? "bg-primary text-primary-foreground border-primary" :
                    i >= 9 ? "border-green-400/30 bg-green-400/10 text-green-400 hover:bg-green-400/20" :
                    i >= 7 ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20" :
                    "border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                >
                  {i}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1 px-0.5">
              <span>Not likely</span>
              <span>Extremely likely</span>
            </div>
          </div>
          <FormField label="Anything else you'd like to share?" >
            <Textarea rows={3} placeholder="Optional comments..." value={answers.extra} onChange={e => setAnswers(a => ({ ...a, extra: e.target.value }))} />
          </FormField>
          <div className="flex gap-2">
            <button onClick={() => setStep(1)} className="flex items-center gap-1 px-4 py-2.5 rounded-lg border border-border bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors"><ChevronLeft size={14} />Back</button>
            <button disabled={answers.nps < 0 || loading} onClick={finish} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 disabled:opacity-40 transition-colors">
              {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />} Submit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Newsletter Subscribe Form ─────────────────────────────────────────────────
function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setError("Enter a valid email address"); return }
    setError("")
    setLoading(true)
    await new Promise(r => setTimeout(r, 1100))
    setLoading(false)
    setDone(true)
  }

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-border bg-card p-8 flex flex-col items-center gap-5 text-center">
      <div className="size-10 rounded-xl bg-primary/15 flex items-center justify-center">
        <Mail size={18} className="text-primary" aria-hidden="true" />
      </div>
      <div>
        <h2 className="font-semibold text-foreground">Stay in the loop</h2>
        <p className="text-sm text-muted-foreground mt-1">Get notified when new components drop. No spam, ever.</p>
      </div>
      {done ? (
        <div className="flex flex-col items-center gap-2">
          <CheckCircle2 size={28} className="text-green-400" aria-hidden="true" />
          <p className="text-sm font-medium text-foreground">You're subscribed!</p>
          <p className="text-xs text-muted-foreground">Check your inbox for a confirmation.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col gap-3">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => { setEmail(e.target.value); setError("") }}
              aria-label="Email address"
              aria-required="true"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-1.5 shrink-0 bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-primary/90 disabled:opacity-60 transition-colors"
            >
              {loading ? <Loader2 size={14} className="animate-spin" /> : <ArrowRight size={14} />}
              Subscribe
            </button>
          </div>
          {error && <p className="flex items-center justify-center gap-1 text-xs text-red-400"><AlertTriangle size={11} />{error}</p>}
          <p className="text-[11px] text-muted-foreground">By subscribing you agree to our Privacy Policy.</p>
        </form>
      )}
    </div>
  )
}

// ── Support / Bug Report Form ─────────────────────────────────────────────────
function SupportForm() {
  const [form, setForm] = useState({ title: "", severity: "", description: "", steps: "", email: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const severities = [
    { value: "low", label: "Low", desc: "Minor issue", color: "text-green-400 bg-green-400/10 border-green-400/30" },
    { value: "medium", label: "Medium", desc: "Needs attention", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30" },
    { value: "high", label: "High", desc: "Blocking issue", color: "text-red-400 bg-red-400/10 border-red-400/30" },
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!form.title.trim()) errs.title = "Title is required"
    if (!form.severity) errs.severity = "Select a severity"
    if (form.description.trim().length < 10) errs.description = "Describe the issue"
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Enter a valid email"
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1300))
    setLoading(false)
    setSent(true)
  }

  if (sent) return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <div className="size-12 rounded-full bg-green-400/15 flex items-center justify-center">
        <CheckCircle2 size={22} className="text-green-400" />
      </div>
      <p className="font-semibold text-foreground">Report submitted</p>
      <p className="text-sm text-muted-foreground max-w-xs">We'll investigate and follow up via email.</p>
    </div>
  )

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl border border-border bg-card p-6 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-xl bg-red-400/15 flex items-center justify-center">
          <AlertTriangle size={16} className="text-red-400" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Report a Bug</h2>
          <p className="text-xs text-muted-foreground">Help us fix it fast</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <FormField label="Issue title" required error={errors.title}>
          <Input placeholder="Short description of the bug" value={form.title} onChange={e => { setForm(f => ({ ...f, title: e.target.value })); setErrors(err => ({ ...err, title: "" })) }} />
        </FormField>
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-foreground">Severity <span className="text-red-400">*</span></span>
          <div className="grid grid-cols-3 gap-2">
            {severities.map(s => (
              <button
                key={s.value}
                type="button"
                onClick={() => { setForm(f => ({ ...f, severity: s.value })); setErrors(err => ({ ...err, severity: "" })) }}
                className={cn(
                  "flex flex-col items-start px-3 py-2.5 rounded-xl border text-left transition-all",
                  form.severity === s.value ? s.color + " font-semibold" : "border-border bg-secondary text-muted-foreground hover:border-primary/40"
                )}
              >
                <span className="text-xs font-semibold">{s.label}</span>
                <span className="text-[10px] mt-0.5 opacity-80">{s.desc}</span>
              </button>
            ))}
          </div>
          {errors.severity && <p className="flex items-center gap-1 text-xs text-red-400"><AlertTriangle size={11} />{errors.severity}</p>}
        </div>
        <FormField label="Description" required error={errors.description}>
          <Textarea rows={3} placeholder="What happened? What did you expect?" value={form.description} onChange={e => { setForm(f => ({ ...f, description: e.target.value })); setErrors(err => ({ ...err, description: "" })) }} />
        </FormField>
        <FormField label="Steps to reproduce">
          <Textarea rows={2} placeholder="1. Go to...&#10;2. Click on...&#10;3. See error" value={form.steps} onChange={e => setForm(f => ({ ...f, steps: e.target.value }))} />
        </FormField>
        <FormField label="Your email" required error={errors.email}>
          <Input type="email" placeholder="we'll follow up here" value={form.email} onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(err => ({ ...err, email: "" })) }} />
        </FormField>
        <SubmitButton loading={loading}>Submit report</SubmitButton>
      </form>
    </div>
  )
}

// ── Request a Feature Form ────────────────────────────────────────────────────
function FeatureRequestForm() {
  const [form, setForm] = useState({ title: "", problem: "", solution: "", priority: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const priorities = ["Nice to have", "Would use it", "Blocking me"]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!form.title.trim()) errs.title = "Feature title is required"
    if (form.problem.trim().length < 10) errs.problem = "Describe the problem you're facing"
    if (!form.priority) errs.priority = "Select a priority level"
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  if (sent) return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <div className="size-12 rounded-full bg-primary/15 flex items-center justify-center">
        <Zap size={22} className="text-primary" />
      </div>
      <p className="font-semibold text-foreground">Feature request submitted!</p>
      <p className="text-sm text-muted-foreground max-w-xs">We review all requests and vote them into the roadmap.</p>
    </div>
  )

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl border border-border bg-card p-6 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-xl bg-primary/15 flex items-center justify-center">
          <Plus size={16} className="text-primary" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Request a Feature</h2>
          <p className="text-xs text-muted-foreground">Shape the roadmap</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <FormField label="Feature title" required error={errors.title}>
          <Input placeholder="e.g. Dark mode toggle, Data table, etc." value={form.title} onChange={e => { setForm(f => ({ ...f, title: e.target.value })); setErrors(err => ({ ...err, title: "" })) }} />
        </FormField>
        <FormField label="What problem does this solve?" required error={errors.problem}>
          <Textarea rows={3} placeholder="Describe the pain point or use case..." value={form.problem} onChange={e => { setForm(f => ({ ...f, problem: e.target.value })); setErrors(err => ({ ...err, problem: "" })) }} />
        </FormField>
        <FormField label="Suggested solution (optional)">
          <Textarea rows={2} placeholder="How would you imagine this working?" value={form.solution} onChange={e => setForm(f => ({ ...f, solution: e.target.value }))} />
        </FormField>
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-foreground">Priority for you <span className="text-red-400">*</span></span>
          <div className="flex gap-2">
            {priorities.map(p => (
              <button
                key={p}
                type="button"
                onClick={() => { setForm(f => ({ ...f, priority: p })); setErrors(err => ({ ...err, priority: "" })) }}
                className={cn(
                  "flex-1 py-2 px-2 rounded-xl border text-xs font-medium transition-all",
                  form.priority === p ? "bg-primary text-primary-foreground border-primary" : "bg-secondary border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {p}
              </button>
            ))}
          </div>
          {errors.priority && <p className="flex items-center gap-1 text-xs text-red-400"><AlertTriangle size={11} />{errors.priority}</p>}
        </div>
        <SubmitButton loading={loading}>Submit request</SubmitButton>
      </form>
    </div>
  )
}

// ── Onboarding Profile Form ───────────────────────────────────────────────────
function OnboardingForm() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ name: "", role: "", team: "", avatar: "" })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const roles = ["Frontend developer", "Backend developer", "Full-stack developer", "Designer", "Product manager", "Other"]
  const teamSizes = ["Just me", "2–5", "6–15", "16–50", "50+"]
  const avatarColors = ["bg-violet-500", "bg-blue-500", "bg-emerald-500", "bg-orange-500", "bg-pink-500", "bg-teal-500"]

  async function finish() {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1100))
    setLoading(false)
    setDone(true)
  }

  if (done) return (
    <div className="flex flex-col items-center gap-4 py-10 text-center">
      <div className={cn("size-16 rounded-full flex items-center justify-center text-white text-2xl font-bold", form.avatar || "bg-primary")}>
        {form.name ? form.name[0].toUpperCase() : "?"}
      </div>
      <div>
        <p className="font-semibold text-foreground text-lg">Welcome, {form.name || "there"}!</p>
        <p className="text-sm text-muted-foreground mt-1">Your profile is all set.</p>
      </div>
    </div>
  )

  const totalSteps = 3

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-border bg-card p-6 flex flex-col gap-5">
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-muted-foreground font-medium">Step {step + 1} of {totalSteps}</p>
          <p className="text-xs font-semibold text-foreground">{["Your name", "Your role", "Team size"][step]}</p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className={cn("h-1 flex-1 rounded-full transition-all duration-300", i <= step ? "bg-primary" : "bg-secondary")} />
          ))}
        </div>
      </div>

      {step === 0 && (
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-foreground">What should we call you?</p>
          <Input placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} autoFocus />
          <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground font-medium">Pick an avatar color</p>
            <div className="flex gap-2">
              {avatarColors.map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, avatar: c }))}
                  className={cn("size-8 rounded-full transition-transform hover:scale-110", c, form.avatar === c && "ring-2 ring-offset-2 ring-offset-card ring-primary")}
                  aria-label={c.replace("bg-", "").replace("-500", "")}
                />
              ))}
            </div>
          </div>
          <button disabled={!form.name.trim()} onClick={() => setStep(1)} className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 disabled:opacity-40 transition-colors">Continue <ArrowRight size={14} /></button>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-foreground">What's your primary role?</p>
          <div className="flex flex-col gap-2">
            {roles.map(r => (
              <button key={r} type="button" onClick={() => setForm(f => ({ ...f, role: r }))}
                className={cn("flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all", form.role === r ? "border-primary bg-primary/10 text-foreground font-medium" : "border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground")}>
                {r}
                {form.role === r && <Check size={14} className="text-primary shrink-0" />}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            <button onClick={() => setStep(0)} className="flex items-center gap-1 px-4 py-2.5 rounded-lg border border-border bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors"><ChevronLeft size={14} />Back</button>
            <button disabled={!form.role} onClick={() => setStep(2)} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 disabled:opacity-40 transition-colors">Next <ArrowRight size={14} /></button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-foreground">How big is your team?</p>
          <div className="grid grid-cols-3 gap-2">
            {teamSizes.map(t => (
              <button key={t} type="button" onClick={() => setForm(f => ({ ...f, team: t }))}
                className={cn("py-2.5 rounded-xl border text-xs font-medium transition-all", form.team === t ? "border-primary bg-primary/10 text-foreground" : "border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground")}>
                {t}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            <button onClick={() => setStep(1)} className="flex items-center gap-1 px-4 py-2.5 rounded-lg border border-border bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors"><ChevronLeft size={14} />Back</button>
            <button disabled={!form.team || loading} onClick={finish} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 disabled:opacity-40 transition-colors">
              {loading ? <Loader2 size={14} className="animate-spin" /> : null} Finish setup
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Quick Reaction Widget ──��──────────────────────────────────────────────────
function ReactionForm() {
  const [voted, setVoted] = useState<string | null>(null)
  const [counts, setCounts] = useState({ helpful: 124, notHelpful: 18 })

  function vote(type: "helpful" | "notHelpful") {
    if (voted) return
    setVoted(type)
    setCounts(c => ({ ...c, [type]: c[type] + 1 }))
  }

  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl border border-border bg-card p-6 flex flex-col items-center gap-4 text-center">
      <p className="text-sm font-medium text-foreground">Was this documentation helpful?</p>
      {voted ? (
        <div className="flex flex-col items-center gap-2">
          <CheckCircle2 size={28} className="text-green-400" />
          <p className="text-sm text-muted-foreground">Thanks for your feedback!</p>
        </div>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={() => vote("helpful")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-secondary text-sm text-muted-foreground hover:border-green-400/40 hover:text-green-400 hover:bg-green-400/10 transition-all font-medium"
          >
            <ThumbsUp size={15} aria-hidden="true" /> Yes, helpful
          </button>
          <button
            onClick={() => vote("notHelpful")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-secondary text-sm text-muted-foreground hover:border-red-400/40 hover:text-red-400 hover:bg-red-400/10 transition-all font-medium"
          >
            <ThumbsDown size={15} aria-hidden="true" /> Not really
          </button>
        </div>
      )}
      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
        <span>{counts.helpful} found helpful</span>
        <span className="text-border">·</span>
        <span>{counts.notHelpful} didn't</span>
      </div>
    </div>
  )
}

export const FORM_REGISTRY: ComponentEntry[] = [
  {
    name: "Contact Form",
    description: "Full contact form with name, email, subject, and message fields. Includes client-side validation, error states, loading spinner, and success confirmation.",
    category: "Forms",
    tags: ["contact", "form", "email", "validation", "submit"],
    fullWidth: true,
    preview: <ContactForm />,
    code: `"use client"
import { useState } from "react"
import { Send, Mail, CheckCircle2, AlertTriangle, Loader2 } from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

function FormField({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="flex items-center gap-1 text-xs text-red-400" role="alert"><AlertTriangle size={11} />{error}</p>}
    </div>
  )
}

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)) e.email = "Enter a valid email"
    if (!form.subject.trim()) e.subject = "Subject is required"
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters"
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setSent(true)
  }

  if (sent) return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <div className="size-12 rounded-full bg-green-400/15 flex items-center justify-center">
        <CheckCircle2 size={22} className="text-green-400" />
      </div>
      <p className="font-semibold text-foreground">Message sent!</p>
      <p className="text-sm text-muted-foreground max-w-xs">We'll get back to you within 24 hours.</p>
    </div>
  )

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl border border-border bg-card p-6 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-xl bg-primary/15 flex items-center justify-center">
          <Mail size={16} className="text-primary" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact Us</h2>
          <p className="text-xs text-muted-foreground">We'll reply within 24 hours</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Full name" required error={errors.name}>
            <input className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
              placeholder="Jane Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </FormField>
          <FormField label="Email" required error={errors.email}>
            <input type="email" className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
              placeholder="jane@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          </FormField>
        </div>
        <FormField label="Subject" required error={errors.subject}>
          <input className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
            placeholder="How can we help?" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
        </FormField>
        <FormField label="Message" required error={errors.message}>
          <textarea rows={4} className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all resize-none"
            placeholder="Describe your question..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
        </FormField>
        <button type="submit" disabled={loading}
          className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 disabled:opacity-60 transition-colors">
          {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
          Send message
        </button>
      </form>
    </div>
  )
}`,
  },
  {
    name: "Feedback Form",
    description: "Product feedback form with a 5-star rating, category chip selector, and open text. Validates all fields before submitting.",
    category: "Forms",
    tags: ["feedback", "rating", "stars", "form", "survey"],
    fullWidth: true,
    preview: <FeedbackForm />,
    code: `// See Contact Form for the shared field primitives pattern.`,
  },
  {
    name: "Survey Form — Multi-step",
    description: "Three-step survey with progress bar, single-select list, multi-select chips, and NPS 0–10 grid. Each step validates before advancing.",
    category: "Forms",
    tags: ["survey", "multi-step", "nps", "wizard", "progress", "form"],
    fullWidth: true,
    preview: <SurveyForm />,
    code: `// See Contact Form for the shared field primitives pattern.`,
  },
  {
    name: "Newsletter Form",
    description: "Minimal email subscribe form with inline validation, loading state, and success confirmation. Ideal for footers or landing pages.",
    category: "Forms",
    tags: ["newsletter", "subscribe", "email", "form", "cta"],
    fullWidth: true,
    preview: <NewsletterForm />,
    code: `// See Contact Form for the shared field primitives pattern.`,
  },
  {
    name: "Bug Report Form",
    description: "Support form with severity selector (Low / Medium / High with color coding), reproduction steps, and email for follow-up.",
    category: "Forms",
    tags: ["bug", "support", "report", "severity", "form"],
    fullWidth: true,
    preview: <SupportForm />,
    code: `// See Contact Form for the shared field primitives pattern.`,
  },
  {
    name: "Feature Request Form",
    description: "Feature request form capturing the problem, suggested solution, and personal priority level. Helps product teams triage incoming ideas.",
    category: "Forms",
    tags: ["feature", "request", "roadmap", "form"],
    fullWidth: true,
    preview: <FeatureRequestForm />,
    code: `// See Contact Form for the shared field primitives pattern.`,
  },
  {
    name: "Onboarding Profile Form",
    description: "Three-step onboarding wizard: name + avatar color, role picker, and team-size selector. Ends with a personalised welcome screen.",
    category: "Forms",
    tags: ["onboarding", "profile", "wizard", "multi-step", "form"],
    fullWidth: true,
    preview: <OnboardingForm />,
    code: `// See Contact Form for the shared field primitives pattern.`,
  },
  {
    name: "Quick Reaction Widget",
    description: "Thumbs-up / thumbs-down doc-page feedback widget. One click locks in your vote and shows aggregate counts.",
    category: "Forms",
    tags: ["reaction", "thumbs", "vote", "feedback", "widget"],
    preview: <ReactionForm />,
    code: `// See Contact Form for the shared field primitives pattern.`,
  },
]

// Merge form entries into the main COMPONENTS array
COMPONENTS.push(...FORM_REGISTRY)

// ─── Chat UI components ───────────────────────────────────────────────────────

// NexUI logo mark — used as the AI avatar across all chat components
function NexLogo({ size = 12 }: { size?: number }) {
  const s = Math.round(size * 0.65)
  return (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="5" height="5" rx="1" fill="currentColor" />
      <rect x="8" y="1" width="5" height="5" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="1" y="8" width="5" height="5" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor" />
    </svg>
  )
}

type ChatRole = "user" | "assistant"
type AttachmentType = "image" | "pdf" | "doc" | "csv"

interface Attachment {
  id: string
  name: string
  size: string
  type: AttachmentType
}

interface ChatMessage {
  id: string
  role: ChatRole
  content: string
  attachments?: Attachment[]
  timestamp: string
  streaming?: boolean
}

// Shared helpers ──────────────────────────────────────────────────────────────

const FILE_COLORS: Record<AttachmentType, string> = {
  image: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  pdf:   "text-rose-400 bg-rose-400/10 border-rose-400/20",
  doc:   "text-primary bg-primary/10 border-primary/20",
  csv:   "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
}

const FILE_EXT: Record<AttachmentType, string> = {
  image: "IMG", pdf: "PDF", doc: "DOC", csv: "CSV",
}

function useTypewriter(text: string, active: boolean, speed = 12) {
  const [displayed, setDisplayed] = useState("")
  React.useEffect(() => {
    if (!active) { setDisplayed(text); return }
    setDisplayed("")
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, active, speed])
  return displayed
}

// Renders minimal markdown: **bold**, `code`, numbered/bullet lists, ---
function renderMd(raw: string) {
  return raw.split("\n").map((line, i) => {
    if (line.startsWith("---")) return <hr key={i} className="border-border my-2" />
    const isNumbered = /^\d+\.\s/.test(line)
    const isBullet = /^[-•]\s/.test(line)
    const content = line
      .replace(/^\d+\.\s|^[-•]\s/, "")
      .split(/(`[^`]+`|\*\*[^*]+\*\*)/g)
      .map((p, j) => {
        if (p.startsWith("**") && p.endsWith("**")) return <strong key={j} className="font-semibold">{p.slice(2,-2)}</strong>
        if (p.startsWith("`") && p.endsWith("`")) return <code key={j} className="px-1 py-0.5 rounded bg-primary/15 text-primary text-[11px] font-mono">{p.slice(1,-1)}</code>
        return p
      })
    if (isNumbered || isBullet) {
      return <p key={i} className="flex gap-2 leading-relaxed"><span className="shrink-0 text-muted-foreground">{isNumbered ? line.match(/^\d+/)?.[0] + "." : "·"}</span><span>{content}</span></p>
    }
    return <p key={i} className={cn("leading-relaxed", line === "" ? "h-2" : "")}>{content}</p>
  })
}

const MOCK_REPLIES = [
  "Sure, here's how I'd approach that:\n\n1. Break the problem into smaller, testable pieces\n2. Write a failing test first — **red, green, refactor**\n3. Keep functions pure where possible\n\nWant me to write the first iteration?",
  "Great question. The key insight is that `useEffect` runs **after** every render by default. You control when it re-runs using the dependency array:\n\n- Empty array `[]` → run once on mount\n- With deps → run when deps change\n- No array → run after every render",
  "I've reviewed the document. The three most important points are:\n\n1. Revenue grew **24%** YoY to $4.2M\n2. Churn dropped from 5.1% to **3.8%**\n3. Organic search is your top acquisition channel at **38%**\n\nShould I draft an executive summary email?",
]

const MOCK_FILES: Record<AttachmentType, Attachment> = {
  pdf:   { id: "f1", name: "Q3_Report.pdf",    size: "2.4 MB", type: "pdf"   },
  image: { id: "f2", name: "screenshot.png",   size: "340 KB", type: "image" },
  doc:   { id: "f3", name: "meeting_notes.docx",size: "88 KB", type: "doc"   },
  csv:   { id: "f4", name: "analytics.csv",    size: "210 KB", type: "csv"   },
}

const EMOJI_SET = ["👍","👏","🔥","✅","💡","😊","🎉","❤️"]

const SUGGESTIONS = [
  { icon: <Sparkles size={12} />, text: "Summarise this document" },
  { icon: <Code2 size={12} />,    text: "Write a React component" },
  { icon: <FileText size={12} />, text: "Draft a cold email" },
  { icon: <Hash size={12} />,     text: "Explain async/await" },
]

// ── 1. Full-screen Chat (ChatGPT-style) ───────────────────────────────────────
const FULLSCREEN_SEED: ChatMessage[] = [
  { id: "s1", role: "assistant", timestamp: "now", content: "Hello! I'm your AI assistant. Ask me anything, share a file, or pick a suggestion below." },
  { id: "s2", role: "user", timestamp: "now", content: "Can you review this report?", attachments: [MOCK_FILES.pdf] },
  { id: "s3", role: "assistant", timestamp: "now", content: MOCK_REPLIES[2] },
]

function FullscreenChat() {
  const [msgs, setMsgs] = useState<ChatMessage[]>(FULLSCREEN_SEED)
  const [input, setInput] = useState("")
  const [files, setFiles] = useState<Attachment[]>([])
  const [streaming, setStreaming] = useState(false)
  const [recording, setRecording] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)
  const [showFiles, setShowFiles] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [model, setModel] = useState("NexAI Pro")
  const bottomRef = React.useRef<HTMLDivElement>(null)
  const taRef = React.useRef<HTMLTextAreaElement>(null)
  const models = ["NexAI Pro", "NexAI Fast", "NexAI Vision"]

  React.useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }) }, [msgs, streaming])

  function resize(el: HTMLTextAreaElement) {
    el.style.height = "auto"
    el.style.height = Math.min(el.scrollHeight, 160) + "px"
  }

  async function send() {
    const text = input.trim()
    if (!text && !files.length) return
    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: text, attachments: files.length ? [...files] : undefined, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
    setMsgs(m => [...m, userMsg])
    setInput(""); setFiles([])
    if (taRef.current) taRef.current.style.height = "auto"
    setStreaming(true)
    const reply = MOCK_REPLIES[Math.floor(Math.random() * MOCK_REPLIES.length)]
    const botId = (Date.now() + 1).toString()
    const botMsg: ChatMessage = { id: botId, role: "assistant", content: reply, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), streaming: true }
    setMsgs(m => [...m, botMsg])
    await new Promise(r => setTimeout(r, reply.length * 12 + 300))
    setMsgs(m => m.map(x => x.id === botId ? { ...x, streaming: false } : x))
    setStreaming(false)
  }

  function copy(id: string, text: string) {
    navigator.clipboard.writeText(text).catch(() => {})
    setCopied(id); setTimeout(() => setCopied(null), 1600)
  }

  const canSend = input.trim().length > 0 || files.length > 0

  return (
    <div className="flex h-[680px] w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border bg-background shadow-2xl">
      {/* Slim sidebar */}
      <div className="w-[200px] shrink-0 border-r border-border bg-card flex flex-col">
        <div className="p-3 border-b border-border">
          <button className="flex items-center gap-2 w-full px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-medium hover:bg-primary/15 transition-colors">
            <Plus size={13} /> New chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
          {["Q3 report review", "React useEffect tips", "Cold email draft", "SQL query help"].map((t, i) => (
            <button key={t} className={cn("w-full text-left px-3 py-2 rounded-xl text-xs truncate transition-colors", i === 0 ? "bg-secondary text-foreground font-medium" : "text-muted-foreground hover:bg-secondary hover:text-foreground")}>
              {t}
            </button>
          ))}
        </div>
        {/* Model selector at bottom */}
        <div className="p-3 border-t border-border">
          <div className="relative">
            <select
              value={model}
              onChange={e => setModel(e.target.value)}
              aria-label="Select model"
              className="w-full bg-secondary border border-border rounded-lg text-[10px] text-muted-foreground px-2 py-1.5 appearance-none outline-none focus:border-primary/40 cursor-pointer"
            >
              {models.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            <ChevronDown size={10} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Main chat */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card shrink-0">
          <div className="flex items-center gap-2.5">
          <div className="size-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <NexLogo size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-none">NexUI Assistant</p>
              <p className="text-[10px] text-green-400 mt-0.5">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setMsgs(FULLSCREEN_SEED)} aria-label="Reset" className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <RotateCcw size={13} />
            </button>
            <button aria-label="More options" className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <MoreHorizontal size={13} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-5">
          {msgs.map((msg, idx) => {
            const isUser = msg.role === "user"
            const isLatest = idx === msgs.length - 1
            const body = isLatest && msg.streaming ? msg.content : msg.content
            return (
              <div key={msg.id} className={cn("group flex gap-3", isUser ? "flex-row-reverse" : "flex-row")}>
                <div className={cn("size-7 rounded-full shrink-0 flex items-center justify-center mt-0.5 border", isUser ? "bg-secondary border-border" : "bg-primary/15 border-primary/25")}>
                  {isUser ? <User size={12} className="text-muted-foreground" /> : <NexLogo size={18} />}
                </div>
                <div className={cn("flex flex-col gap-1 max-w-[75%]", isUser ? "items-end" : "items-start")}>
                  {isUser && msg.attachments?.map(a => (
                    <div key={a.id} className={cn("inline-flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium", FILE_COLORS[a.type])}>
                      <span className="font-mono text-[10px] font-bold tracking-wider">{FILE_EXT[a.type]}</span>
                      <span className="truncate max-w-[100px]">{a.name}</span>
                      <span className="opacity-50">{a.size}</span>
                    </div>
                  ))}
                  <div className={cn(
                    "px-4 py-3 rounded-2xl text-sm",
                    isUser
                      ? "bg-primary text-primary-foreground rounded-tr-md"
                      : "bg-card border border-border text-foreground rounded-tl-md"
                  )}>
                    {isLatest && msg.streaming
                      ? <StreamingText text={body} />
                      : <div className="flex flex-col gap-0.5">{renderMd(body)}</div>
                    }
                  </div>
                  <div className={cn("flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-muted-foreground", isUser ? "flex-row-reverse" : "flex-row")}>
                    <span>{msg.timestamp}</span>
                    {!isUser && (
                      <button onClick={() => copy(msg.id, msg.content)} className="flex items-center gap-1 hover:text-foreground transition-colors">
                        {copied === msg.id ? <CheckCircle2 size={10} className="text-green-400" /> : <Copy size={10} />}
                        {copied === msg.id ? "Copied" : "Copy"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
          {streaming && msgs[msgs.length - 1]?.role !== "assistant" && (
            <div className="flex gap-3">
              <div className="size-7 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                <NexLogo size={20} />
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-card border border-border flex items-center gap-1">
                {[0,120,240].map(d => <span key={d} className="size-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: `${d}ms` }} />)}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions — only before first user message */}
        {!msgs.some(m => m.role === "user" && m.id !== "s2") && (
          <div className="px-5 pb-2 flex flex-wrap gap-2 shrink-0">
            {SUGGESTIONS.map(s => (
              <button key={s.text} onClick={() => { setInput(s.text); taRef.current?.focus() }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
                {s.icon} {s.text}
              </button>
            ))}
          </div>
        )}

        {/* Pending files */}
        {files.length > 0 && (
          <div className="px-5 pb-2 flex flex-wrap gap-1.5 shrink-0">
            {files.map(f => (
              <div key={f.id} className={cn("flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium", FILE_COLORS[f.type])}>
                <span className="font-mono text-[10px] font-bold">{FILE_EXT[f.type]}</span>
                <span className="truncate max-w-[90px]">{f.name}</span>
                <button onClick={() => setFiles(p => p.filter(x => x.id !== f.id))} aria-label={`Remove ${f.name}`} className="opacity-60 hover:opacity-100 transition-opacity"><X size={10} /></button>
              </div>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 pb-4 pt-2 border-t border-border bg-card shrink-0">
          {recording && (
            <div className="flex items-center gap-2 mb-2 px-3 py-1.5 rounded-xl bg-rose-400/10 border border-rose-400/20">
              <span className="size-2 rounded-full bg-rose-400 animate-pulse" />
              <span className="text-xs text-rose-400 font-medium flex-1">Recording — tap mic to stop</span>
              <span className="text-xs text-rose-400 font-mono">0:04</span>
            </div>
          )}
          <div className="flex items-end gap-2 bg-secondary border border-border rounded-2xl px-3 py-2.5 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
            {/* Attach */}
            <div className="relative shrink-0 self-end mb-0.5">
              <button onClick={() => setShowFiles(v => !v)} aria-label="Attach" aria-expanded={showFiles} className="size-8 flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-border/50 transition-colors">
                <Paperclip size={15} />
              </button>
              {showFiles && (
                <div className="absolute bottom-10 left-0 z-30 w-48 rounded-2xl border border-border bg-card shadow-2xl py-1.5 overflow-hidden">
                  {(["pdf","image","doc","csv"] as AttachmentType[]).map(t => (
                    <button key={t} onClick={() => { setFiles(p => [...p, { ...MOCK_FILES[t], id: Date.now().toString() }]); setShowFiles(false) }}
                      className="flex items-center gap-2.5 w-full px-4 py-2.5 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      <span className={cn("text-[10px] font-bold font-mono px-1.5 py-0.5 rounded-md border", FILE_COLORS[t])}>{FILE_EXT[t]}</span>
                      {MOCK_FILES[t].name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Textarea */}
            <textarea ref={taRef} value={input}
              onChange={e => { setInput(e.target.value); resize(e.target) }}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send() } }}
              placeholder="Ask anything… (Enter to send)"
              rows={1} aria-label="Message input"
              className="flex-1 resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none min-h-[28px] max-h-40 overflow-y-auto leading-relaxed py-0.5 self-end"
            />

            {/* Emoji */}
            <div className="relative shrink-0 self-end mb-0.5">
              <button onClick={() => setShowEmoji(v => !v)} aria-label="Emoji" aria-expanded={showEmoji} className="size-8 flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-border/50 transition-colors">
                <Smile size={15} />
              </button>
              {showEmoji && (
                <div className="absolute bottom-10 right-0 z-30 p-2 rounded-2xl border border-border bg-card shadow-2xl grid grid-cols-4 gap-1">
                  {EMOJI_SET.map(e => (
                    <button key={e} onClick={() => { setInput(v => v + e); setShowEmoji(false); taRef.current?.focus() }} className="text-base p-1.5 rounded-xl hover:bg-secondary transition-colors">{e}</button>
                  ))}
                </div>
              )}
            </div>

            {/* Voice */}
            <button onClick={() => { setRecording(r => !r); if (recording) setInput(v => v + " [voice message]") }}
              aria-label={recording ? "Stop recording" : "Voice input"}
              className={cn("size-8 shrink-0 self-end mb-0.5 flex items-center justify-center rounded-xl border transition-all",
                recording ? "bg-rose-400/20 border-rose-400/40 text-rose-400" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-border/50"
              )}>
              {recording ? <MicOff size={15} /> : <Mic size={15} />}
            </button>

            {/* Send / Stop */}
            {streaming ? (
              <button onClick={() => { setStreaming(false); setMsgs(m => m.map(x => x.streaming ? { ...x, streaming: false } : x)) }}
                aria-label="Stop" className="size-8 shrink-0 self-end mb-0.5 flex items-center justify-center rounded-xl bg-rose-400/20 border border-rose-400/30 text-rose-400 hover:bg-rose-400/30 transition-all">
                <StopCircle size={15} />
              </button>
            ) : (
              <button onClick={send} disabled={!canSend} aria-label="Send"
                className={cn("size-8 shrink-0 self-end mb-0.5 flex items-center justify-center rounded-xl transition-all",
                  canSend ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" : "bg-secondary border border-border text-muted-foreground opacity-40 cursor-not-allowed"
                )}>
                <ArrowUp size={15} />
              </button>
            )}
          </div>
          <p className="text-center text-[10px] text-muted-foreground mt-1.5">AI can make mistakes — verify important information.</p>
        </div>
      </div>
    </div>
  )
}

// Streaming typewriter sub-component
function StreamingText({ text }: { text: string }) {
  const displayed = useTypewriter(text, true)
  return (
    <div className="flex flex-col gap-0.5">
      {renderMd(displayed)}
      <span className="inline-block w-1.5 h-4 bg-primary animate-pulse rounded-sm align-middle" />
    </div>
  )
}

// ── 2. Compact Sidebar Chat ───────────────────────────────────────────────────
const SIDEBAR_SEED: ChatMessage[] = [
  { id: "c1", role: "assistant", timestamp: "9:41", content: "Hi! How can I help you today?" },
  { id: "c2", role: "user",      timestamp: "9:42", content: "What's the difference between `let` and `const`?" },
  { id: "c3", role: "assistant", timestamp: "9:42", content: "`const` declares a **block-scoped** variable that cannot be reassigned. `let` is also block-scoped but can be reassigned. Neither is function-scoped like `var`." },
]

function SidebarChat() {
  const [msgs, setMsgs] = useState<ChatMessage[]>(SIDEBAR_SEED)
  const [input, setInput] = useState("")
  const [streaming, setStreaming] = useState(false)
  const bottomRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }) }, [msgs])

  async function send() {
    const text = input.trim()
    if (!text) return
    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: text, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
    setMsgs(m => [...m, userMsg])
    setInput("")
    setStreaming(true)
    const reply = MOCK_REPLIES[Math.floor(Math.random() * MOCK_REPLIES.length)]
    const botId = (Date.now()+1).toString()
    setMsgs(m => [...m, { id: botId, role: "assistant", content: reply, timestamp: new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" }), streaming: true }])
    await new Promise(r => setTimeout(r, reply.length * 12 + 200))
    setMsgs(m => m.map(x => x.id === botId ? { ...x, streaming: false } : x))
    setStreaming(false)
  }

  return (
    <div className="flex flex-col w-[340px] h-[520px] mx-auto rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-border shrink-0">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="size-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <NexLogo size={22} />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-green-400 border-2 border-card" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">NexAI</p>
            <p className="text-[10px] text-muted-foreground">Always ready</p>
          </div>
        </div>
        <div className="flex gap-1">
          <button onClick={() => setMsgs(SIDEBAR_SEED)} aria-label="Reset" className="size-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            <RotateCcw size={12} />
          </button>
          <button aria-label="Close" className="size-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
        {msgs.map((msg, idx) => {
          const isUser = msg.role === "user"
          const isLatest = idx === msgs.length - 1
          return (
            <div key={msg.id} className={cn("flex gap-2", isUser ? "flex-row-reverse" : "flex-row")}>
              {!isUser && (
                <div className="size-6 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5">
                  <NexLogo size={16} />
                </div>
              )}
              <div className={cn("flex flex-col gap-0.5 max-w-[82%]", isUser ? "items-end" : "items-start")}>
                <div className={cn(
                  "px-3 py-2 rounded-2xl text-xs",
                  isUser ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-background border border-border text-foreground rounded-tl-sm"
                )}>
                  {isLatest && msg.streaming
                    ? <StreamingText text={msg.content} />
                    : <div className="flex flex-col gap-0.5">{renderMd(msg.content)}</div>
                  }
                </div>
                <span className="text-[9px] text-muted-foreground px-1">{msg.timestamp}</span>
              </div>
            </div>
          )
        })}
        {streaming && msgs[msgs.length-1]?.role !== "assistant" && (
          <div className="flex gap-2">
            <div className="size-6 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
              <NexLogo size={16} />
            </div>
            <div className="px-3 py-2 rounded-2xl rounded-tl-sm bg-background border border-border flex gap-1 items-center">
              {[0,100,200].map(d => <span key={d} className="size-1 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: `${d}ms` }} />)}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border bg-card shrink-0">
        <div className="flex items-center gap-2 bg-background border border-border rounded-xl px-3 py-2 focus-within:border-primary/40 transition-all">
          <input value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && send()}
            placeholder="Type a message…" aria-label="Message"
            className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none" />
          <button onClick={send} disabled={!input.trim()} aria-label="Send"
            className={cn("size-6 flex items-center justify-center rounded-lg transition-all",
              input.trim() ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-muted-foreground opacity-40 cursor-not-allowed"
            )}>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

// ── 3. Floating Chat Widget ───────────────────────────────────────────────────
function FloatingChatWidget() {
  const [open, setOpen] = useState(true)
  const [msgs, setMsgs] = useState<ChatMessage[]>([
    { id: "w1", role: "assistant", timestamp: "now", content: "Hi there! Got a question? I'm here to help." },
  ])
  const [input, setInput] = useState("")
  const [streaming, setStreaming] = useState(false)
  const [unread, setUnread] = useState(0)
  const bottomRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }) }, [msgs])

  async function send() {
    const text = input.trim()
    if (!text) return
    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: text, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
    setMsgs(m => [...m, userMsg])
    setInput("")
    setStreaming(true)
    const reply = MOCK_REPLIES[Math.floor(Math.random() * MOCK_REPLIES.length)]
    const botId = (Date.now()+1).toString()
    setMsgs(m => [...m, { id: botId, role: "assistant", content: reply, timestamp: new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" }), streaming: true }])
    await new Promise(r => setTimeout(r, reply.length * 12 + 200))
    setMsgs(m => m.map(x => x.id === botId ? { ...x, streaming: false } : x))
    setStreaming(false)
    if (!open) setUnread(n => n + 1)
  }

  return (
    <div className="relative w-full flex items-end justify-end h-[480px] bg-secondary/40 rounded-2xl border border-border overflow-hidden p-4">
      {/* Mock page background */}
      <div className="absolute inset-0 p-6">
        <div className="flex flex-col gap-3">
          <div className="h-4 w-32 bg-border/60 rounded-full" />
          <div className="h-3 w-64 bg-border/40 rounded-full" />
          <div className="h-3 w-48 bg-border/40 rounded-full" />
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[1,2,3].map(i => <div key={i} className="h-20 rounded-xl bg-border/30" />)}
          </div>
          <div className="h-3 w-56 bg-border/40 rounded-full mt-2" />
          <div className="h-3 w-40 bg-border/40 rounded-full" />
        </div>
      </div>

      {/* Chat panel */}
      {open && (
        <div className="absolute bottom-20 right-4 w-72 flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden z-10" style={{ maxHeight: 320 }}>
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground shrink-0">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <NexLogo size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold leading-none">NexAI Support</p>
                <p className="text-[10px] opacity-70 mt-0.5">Typically replies instantly</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="opacity-70 hover:opacity-100 transition-opacity">
              <X size={14} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2" style={{ minHeight: 160 }}>
            {msgs.map((msg, idx) => {
              const isUser = msg.role === "user"
              const isLatest = idx === msgs.length - 1
              return (
                <div key={msg.id} className={cn("flex", isUser ? "justify-end" : "justify-start")}>
                  <div className={cn("max-w-[85%] px-3 py-2 rounded-2xl text-xs",
                    isUser ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-background border border-border text-foreground rounded-tl-sm"
                  )}>
                    {isLatest && msg.streaming
                      ? <StreamingText text={msg.content} />
                      : <div>{renderMd(msg.content)}</div>
                    }
                  </div>
                </div>
              )
            })}
            <div ref={bottomRef} />
          </div>
          <div className="p-2 border-t border-border bg-card shrink-0">
            <div className="flex items-center gap-1.5 bg-background border border-border rounded-xl px-3 py-1.5 focus-within:border-primary/40 transition-all">
              <input value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && send()}
                placeholder="Type a message…" aria-label="Message"
                className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none" />
              <button onClick={send} disabled={!input.trim()} aria-label="Send"
                className={cn("size-5 flex items-center justify-center rounded-lg transition-all",
                  input.trim() ? "bg-primary text-primary-foreground" : "text-muted-foreground opacity-40 cursor-not-allowed"
                )}>
                <ArrowUp size={10} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => { setOpen(o => !o); setUnread(0) }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="relative z-10 size-12 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
      >
        {open ? <X size={18} /> : <MessageSquare size={18} />}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 size-5 rounded-full bg-rose-400 border-2 border-card text-[10px] font-bold text-white flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>
    </div>
  )
}

// ── 4. Voice Chat UI ──────────────────────���───────────────────────────────────
type VoiceState = "idle" | "listening" | "processing" | "speaking"

function VoiceChatUI() {
  const [state, setState] = useState<VoiceState>("idle")
  const [transcript, setTranscript] = useState("")
  const [msgs, setMsgs] = useState<{ role: ChatRole; text: string }[]>([
    { role: "assistant", text: "Hello! Tap the microphone and start speaking." },
  ])

  const labels: Record<VoiceState, string> = {
    idle:       "Tap to speak",
    listening:  "Listening…",
    processing: "Processing…",
    speaking:   "Speaking…",
  }

  const colors: Record<VoiceState, string> = {
    idle:       "bg-primary/20 border-primary/30 text-primary",
    listening:  "bg-rose-400/20 border-rose-400/40 text-rose-400",
    processing: "bg-yellow-400/20 border-yellow-400/40 text-yellow-400",
    speaking:   "bg-green-400/20 border-green-400/40 text-green-400",
  }

  const SAMPLE_PHRASES = [
    "What's the weather today?",
    "Explain recursion simply.",
    "Draft a short apology email.",
  ]

  async function handleMic() {
    if (state !== "idle") return
    setState("listening")
    await new Promise(r => setTimeout(r, 1800))
    const phrase = SAMPLE_PHRASES[Math.floor(Math.random() * SAMPLE_PHRASES.length)]
    setTranscript(phrase)
    setState("processing")
    await new Promise(r => setTimeout(r, 900))
    setMsgs(m => [...m, { role: "user", text: phrase }])
    setTranscript("")
    setState("speaking")
    const reply = MOCK_REPLIES[Math.floor(Math.random() * MOCK_REPLIES.length)]
    await new Promise(r => setTimeout(r, 1600))
    setMsgs(m => [...m, { role: "assistant", text: reply }])
    setState("idle")
  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-5 py-8 px-6 rounded-2xl border border-border bg-card">

      {/* Visualiser bars */}
      <div className="flex items-center justify-center gap-1 h-10 w-full" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={cn("w-1 rounded-full transition-all duration-100", state === "listening" || state === "speaking" ? "bg-primary" : "bg-border")}
            style={{
              height: (state === "listening" || state === "speaking")
                ? `${20 + Math.abs(Math.sin(i * 0.6) * 28)}px`
                : "6px",
              animationDelay: `${i * 40}ms`,
            }}
          />
        ))}
      </div>

      {/* Mic button */}
      <button
        onClick={handleMic}
        disabled={state !== "idle"}
        aria-label={state === "idle" ? "Start recording" : labels[state]}
        className={cn(
          "size-20 rounded-full border-2 flex items-center justify-center transition-all duration-300",
          colors[state],
          state === "idle" ? "hover:scale-105 active:scale-95 cursor-pointer" : "cursor-not-allowed",
          (state === "listening" || state === "speaking") && "animate-pulse"
        )}
      >
        {state === "idle" && <Mic size={28} />}
        {state === "listening" && <Mic size={28} />}
        {state === "processing" && <Loader2 size={28} className="animate-spin" />}
        {state === "speaking" && <Volume2 size={28} />}
      </button>

      {/* Status label — single, centered */}
      <div className="h-5 flex items-center justify-center w-full">
        {transcript
          ? <p className="text-sm text-foreground font-medium text-center italic">"{transcript}"</p>
          : <p className="text-xs text-muted-foreground text-center">{labels[state]}</p>
        }
      </div>

      {/* Conversation history */}
      <div className="w-full flex flex-col gap-2 max-h-40 overflow-y-auto">
        {msgs.slice(-4).map((m, i) => (
          <div key={i} className={cn("flex gap-2", m.role === "user" ? "flex-row-reverse" : "flex-row")}>
            <div className={cn("size-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center", m.role === "assistant" ? "bg-primary/15" : "bg-secondary")}>
              {m.role === "assistant" ? <NexLogo size={14} /> : <User size={9} className="text-muted-foreground" />}
            </div>
            <div className={cn("px-3 py-2 rounded-2xl text-xs max-w-[80%]", m.role === "user" ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-secondary text-foreground rounded-tl-sm border border-border")}>
              {m.text.length > 80 ? m.text.slice(0, 80) + "…" : m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Chat registry ────────────────────────────────────────────────────────────
const CHAT_REGISTRY: ComponentEntry[] = [
  {
    name: "Full-screen Chat",
    description: "ChatGPT-style full-screen chat with conversation sidebar, model selector, file attachments (PDF/image/doc/CSV), emoji picker, voice recording, streaming typewriter replies, stop generation, and copy-on-hover.",
    category: "Chat",
    tags: ["chat", "ai", "full-screen", "sidebar", "attachments", "streaming", "voice", "emoji"],
    fullWidth: true,
    preview: <FullscreenChat />,
    code: `"use client"\n// Full-screen chat — see lib/components-registry.tsx`,
  },
  {
    name: "Sidebar Chat",
    description: "Compact 340px chat panel designed for sidebars and drawers. Online indicator, streaming bubbles with typewriter effect, and minimal send input.",
    category: "Chat",
    tags: ["chat", "sidebar", "compact", "ai", "streaming"],
    preview: <SidebarChat />,
    code: `"use client"\n// Sidebar chat — see lib/components-registry.tsx`,
  },
  {
    name: "Floating Chat Widget",
    description: "Fixed-position FAB that toggles a compact support chat panel. Includes unread badge, primary-colored header, streaming replies, and a mock page backdrop.",
    category: "Chat",
    tags: ["chat", "widget", "floating", "support", "fab", "bubble"],
    fullWidth: true,
    preview: <FloatingChatWidget />,
    code: `"use client"\n// Floating chat widget — see lib/components-registry.tsx`,
  },
  {
    name: "Voice Chat UI",
    description: "Voice-first interface with animated waveform bars, four-state mic button (idle → listening → processing → speaking), live transcript, and a rolling conversation history.",
    category: "Chat",
    tags: ["chat", "voice", "mic", "audio", "waveform", "ai"],
    preview: <VoiceChatUI />,
    code: `"use client"\n// Voice chat UI — see lib/components-registry.tsx`,
  },
]

COMPONENTS.push(...CHAT_REGISTRY)

// ─── Loading / Skeleton components ───────────────────────────────────────────

// Shared shimmer base — a single pill/rect that animates
function Bone({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-secondary before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.06] before:to-transparent",
        className
      )}
      aria-hidden="true"
    />
  )
}

// Rect variant (for cards / images)
function BoneRect({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-secondary before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.06] before:to-transparent",
        className
      )}
      aria-hidden="true"
    />
  )
}

// ── 1. Text List Skeleton (matches the screenshot exactly) ────────────────────
function TextListSkeleton() {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-3" role="status" aria-label="Loading content">
      <Bone className="h-5 w-44" />
      <Bone className="h-4 w-full" />
      <Bone className="h-4 w-72" />
      <div className="pt-1" />
      <div className="grid grid-cols-3 gap-4">
        <BoneRect className="h-36" />
        <BoneRect className="h-36" />
        <BoneRect className="h-36" />
      </div>
      <div className="pt-1" />
      <Bone className="h-4 w-80" />
      <Bone className="h-4 w-52" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

// ── 2. Article / Blog Post Skeleton ──────────────────────────────────────────
function ArticleSkeleton() {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-4" role="status" aria-label="Loading article">
      <BoneRect className="h-48 w-full rounded-2xl" />
      <div className="flex items-center gap-2">
        <Bone className="size-8 shrink-0 rounded-full" />
        <div className="flex flex-col gap-1.5 flex-1">
          <Bone className="h-3 w-28" />
          <Bone className="h-3 w-16" />
        </div>
        <Bone className="h-5 w-16 rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <Bone className="h-6 w-4/5" />
        <Bone className="h-6 w-2/3" />
      </div>
      <div className="flex flex-col gap-2">
        <Bone className="h-4 w-full" />
        <Bone className="h-4 w-full" />
        <Bone className="h-4 w-3/4" />
      </div>
      <div className="flex gap-2 pt-1">
        <Bone className="h-7 w-20 rounded-full" />
        <Bone className="h-7 w-16 rounded-full" />
        <Bone className="h-7 w-24 rounded-full" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  )
}

// ── 3. Profile / User Card Skeleton ──────────────────────────────────────────
function ProfileSkeleton() {
  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl border border-border bg-card p-6 flex flex-col items-center gap-4" role="status" aria-label="Loading profile">
      <Bone className="size-20 rounded-full" />
      <div className="w-full flex flex-col items-center gap-2">
        <Bone className="h-5 w-36" />
        <Bone className="h-4 w-24" />
      </div>
      <div className="w-full grid grid-cols-3 gap-3 pt-1">
        {[0,1,2].map(i => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <Bone className="h-6 w-12" />
            <Bone className="h-3 w-10" />
          </div>
        ))}
      </div>
      <Bone className="h-10 w-full rounded-xl" />
      <div className="w-full flex flex-col gap-2">
        {[0,1,2].map(i => (
          <div key={i} className="flex items-center gap-3">
            <Bone className="size-5 rounded-lg shrink-0" />
            <Bone className="h-4 flex-1" />
          </div>
        ))}
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  )
}

// ── 4. Dashboard Stats Skeleton ───────────────────────────────────────────────
function DashboardSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-5" role="status" aria-label="Loading dashboard">
      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-3">
        {[0,1,2,3].map(i => (
          <div key={i} className="rounded-2xl border border-border bg-card p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Bone className="h-3 w-16" />
              <Bone className="size-6 rounded-lg" />
            </div>
            <Bone className="h-7 w-20" />
            <Bone className="h-3 w-14" />
          </div>
        ))}
      </div>
      {/* Chart area */}
      <div className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <Bone className="h-4 w-28" />
            <Bone className="h-3 w-20" />
          </div>
          <div className="flex gap-2">
            <Bone className="h-7 w-16 rounded-lg" />
            <Bone className="h-7 w-16 rounded-lg" />
          </div>
        </div>
        <BoneRect className="h-40 w-full rounded-xl" />
      </div>
      {/* Table */}
      <div className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between mb-1">
          <Bone className="h-4 w-24" />
          <Bone className="h-7 w-20 rounded-lg" />
        </div>
        {[0,1,2,3,4].map(i => (
          <div key={i} className="flex items-center gap-4 py-1">
            <Bone className="size-7 rounded-full shrink-0" />
            <Bone className="h-3.5 w-28" />
            <Bone className="h-3.5 flex-1" />
            <Bone className="h-3.5 w-14" />
            <Bone className="h-5 w-14 rounded-full" />
          </div>
        ))}
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  )
}

// ── 5. Product Card Grid Skeleton ─────────────────────────────────────────────
function ProductGridSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-5" role="status" aria-label="Loading products">
      <div className="flex items-center justify-between">
        <Bone className="h-5 w-32" />
        <div className="flex gap-2">
          <Bone className="h-8 w-24 rounded-xl" />
          <Bone className="h-8 w-8 rounded-xl" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
            <BoneRect className="h-36 rounded-none" />
            <div className="p-3 flex flex-col gap-2">
              <Bone className="h-3.5 w-3/4" />
              <Bone className="h-3 w-1/2" />
              <div className="flex items-center justify-between mt-1">
                <Bone className="h-5 w-16" />
                <Bone className="h-7 w-7 rounded-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  )
}

// ── 6. Chat / Message Skeleton ────────────────────────────────────────────────
function ChatSkeleton() {
  const rows: Array<{ isUser: boolean; lines: number[]; hasAvatar: boolean }> = [
    { isUser: false, lines: [220, 160, 180], hasAvatar: true },
    { isUser: true,  lines: [140],           hasAvatar: false },
    { isUser: false, lines: [200, 110],      hasAvatar: true },
    { isUser: true,  lines: [170, 130],      hasAvatar: false },
  ]
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-4 p-4 rounded-2xl border border-border bg-card" role="status" aria-label="Loading messages">
      {rows.map((row, ri) => (
        <div key={ri} className={cn("flex gap-3 items-end", row.isUser ? "flex-row-reverse" : "flex-row")}>
          {!row.isUser && <Bone className="size-8 rounded-full shrink-0" />}
          <div className={cn("flex flex-col gap-1.5 max-w-[72%]", row.isUser ? "items-end" : "items-start")}>
            {row.lines.map((w, li) => (
              <BoneRect key={li} className="h-9 rounded-2xl" style={{ width: w }} />
            ))}
          </div>
        </div>
      ))}
      {/* Input bar */}
      <div className="flex items-center gap-2 mt-2 border-t border-border pt-3">
        <BoneRect className="h-9 flex-1 rounded-xl" />
        <Bone className="size-9 rounded-xl" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  )
}

// ── 7. Spinner & Progress bar collection ──────────────────────────────────────
function SpinnerCollection() {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-8">
      {/* Spinners row */}
      <div className="flex flex-wrap items-center gap-8">
        {/* Classic ring */}
        <div className="flex flex-col items-center gap-2">
          <div className="size-10 rounded-full border-[3px] border-border border-t-primary animate-spin" role="status" aria-label="Loading" />
          <span className="text-[10px] text-muted-foreground">Ring</span>
        </div>
        {/* Dots pulse */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1.5 items-center h-10" role="status" aria-label="Loading">
            {[0,150,300].map(d => (
              <span key={d} className="size-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: `${d}ms` }} />
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground">Dots</span>
        </div>
        {/* Bars */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1 items-end h-10" role="status" aria-label="Loading">
            {[0,100,200,300,400].map((d, i) => (
              <span key={i} className="w-1.5 rounded-sm bg-primary animate-pulse" style={{ height: `${14 + (i % 3) * 8}px`, animationDelay: `${d}ms` }} />
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground">Bars</span>
        </div>
        {/* Dual ring */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative size-10" role="status" aria-label="Loading">
            <div className="absolute inset-0 rounded-full border-[3px] border-primary/20" />
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary animate-spin" />
            <div className="absolute inset-[6px] rounded-full border-[2px] border-transparent border-b-primary/60 animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
          </div>
          <span className="text-[10px] text-muted-foreground">Dual ring</span>
        </div>
        {/* Ripple */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative size-10 flex items-center justify-center" role="status" aria-label="Loading">
            <span className="absolute size-10 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: "1.2s" }} />
            <span className="absolute size-6 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: "1.2s", animationDelay: "0.3s" }} />
            <span className="size-3 rounded-full bg-primary" />
          </div>
          <span className="text-[10px] text-muted-foreground">Ripple</span>
        </div>
        {/* NexUI logo spinner */}
        <div className="flex flex-col items-center gap-2">
          <div className="size-10 flex items-center justify-center animate-pulse text-primary" role="status" aria-label="Loading">
            <NexLogo size={36} />
          </div>
          <span className="text-[10px] text-muted-foreground">Logo pulse</span>
        </div>
      </div>

      {/* Progress bars */}
      <div className="flex flex-col gap-4">
        {/* Indeterminate */}
        <div className="flex flex-col gap-1.5">
          <p className="text-xs text-muted-foreground font-medium">Indeterminate</p>
          <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden" role="progressbar" aria-label="Loading">
            <div className="h-full w-1/3 bg-primary rounded-full animate-[indeterminate_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
        {/* Determinate 60% */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[10px] text-muted-foreground">
            <span>Uploading…</span><span>60%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-secondary overflow-hidden" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-full w-[60%] bg-primary rounded-full transition-all" />
          </div>
        </div>
        {/* Segmented */}
        <div className="flex flex-col gap-1.5">
          <p className="text-xs text-muted-foreground font-medium">Steps (3/5)</p>
          <div className="flex gap-1.5" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={5}>
            {[1,2,3,4,5].map(s => (
              <div key={s} className={cn("h-1.5 flex-1 rounded-full transition-all", s <= 3 ? "bg-primary" : "bg-secondary")} />
            ))}
          </div>
        </div>
        {/* Circular progress */}
        <div className="flex items-center gap-4">
          {[25, 60, 85].map(pct => {
            const r = 18, c = 2 * Math.PI * r
            return (
              <div key={pct} className="flex flex-col items-center gap-1.5">
                <svg width="48" height="48" viewBox="0 0 48 48" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${pct}%`}>
                  <circle cx="24" cy="24" r={r} fill="none" stroke="currentColor" strokeWidth="3" className="text-secondary" />
                  <circle cx="24" cy="24" r={r} fill="none" stroke="currentColor" strokeWidth="3" className="text-primary" strokeLinecap="round"
                    strokeDasharray={c} strokeDashoffset={c - (c * pct / 100)} transform="rotate(-90 24 24)" style={{ transition: "stroke-dashoffset 0.5s ease" }} />
                  <text x="24" y="28" textAnchor="middle" fontSize="9" fill="currentColor" className="text-foreground font-semibold" fontFamily="inherit">{pct}%</text>
                </svg>
                <span className="text-[10px] text-muted-foreground">{pct}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ─── Loading registry ─────────────────────────────────────────────────────────
const LOADING_REGISTRY: ComponentEntry[] = [
  {
    name: "Page Content Skeleton",
    description: "Matches the screenshot exactly: title line, two body lines, a 3-column card grid, then two footer lines — all with a smooth left-to-right shimmer sweep.",
    category: "Loading",
    tags: ["skeleton", "loading", "shimmer", "placeholder", "content"],
    fullWidth: true,
    preview: <TextListSkeleton />,
    code: `// Bone + BoneRect + TextListSkeleton — see lib/components-registry.tsx`,
  },
  {
    name: "Article Skeleton",
    description: "Full blog-post skeleton: hero image, author avatar with meta, two heading lines, three body lines, and tag pill row with a shimmer sweep.",
    category: "Loading",
    tags: ["skeleton", "article", "blog", "card", "shimmer"],
    preview: <ArticleSkeleton />,
    code: `// ArticleSkeleton — see lib/components-registry.tsx`,
  },
  {
    name: "Profile Card Skeleton",
    description: "User profile skeleton with circular avatar, name/handle lines, three stat columns, a CTA button bone, and a list of info rows.",
    category: "Loading",
    tags: ["skeleton", "profile", "user", "card", "avatar"],
    preview: <ProfileSkeleton />,
    code: `// ProfileSkeleton — see lib/components-registry.tsx`,
  },
  {
    name: "Dashboard Skeleton",
    description: "Full dashboard placeholder: four stat cards, a large chart area, and a five-row data table — all shimmering simultaneously.",
    category: "Loading",
    tags: ["skeleton", "dashboard", "stats", "table", "chart"],
    fullWidth: true,
    preview: <DashboardSkeleton />,
    code: `// DashboardSkeleton — see lib/components-registry.tsx`,
  },
  {
    name: "Product Grid Skeleton",
    description: "E-commerce 3-column product grid skeleton with image, title, price, and add-to-cart button bones inside each card.",
    category: "Loading",
    tags: ["skeleton", "product", "grid", "ecommerce", "cards"],
    fullWidth: true,
    preview: <ProductGridSkeleton />,
    code: `// ProductGridSkeleton — see lib/components-registry.tsx`,
  },
  {
    name: "Chat Skeleton",
    description: "Chat interface skeleton with alternating user/assistant bubble rows (varying widths), avatar bone, and an input bar placeholder.",
    category: "Loading",
    tags: ["skeleton", "chat", "messages", "bubbles", "loading"],
    preview: <ChatSkeleton />,
    code: `// ChatSkeleton — see lib/components-registry.tsx`,
  },
  {
    name: "Spinners & Progress",
    description: "Complete loading indicator collection: ring, bouncing dots, vertical bars, dual counter-rotating rings, ripple ping, NexUI logo pulse, indeterminate and determinate progress bars, segmented steps, and circular progress SVGs.",
    category: "Loading",
    tags: ["spinner", "progress", "loading", "animation", "indicator"],
    fullWidth: true,
    preview: <SpinnerCollection />,
    code: `// SpinnerCollection — see lib/components-registry.tsx`,
  },
]

COMPONENTS.push(...LOADING_REGISTRY)

// ─── Advanced Navigation components ────────────────��─────────────────────────

// ── 1. Top Navbar with mega-menu ─────────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: "Products",
    mega: true,
    sections: [
      {
        title: "Platform",
        items: [
          { icon: <Zap size={14} />, label: "NexUI Core", desc: "Foundational component primitives" },
          { icon: <Layers size={14} />, label: "NexUI Pro", desc: "Advanced patterns & templates" },
          { icon: <Globe size={14} />, label: "NexUI Cloud", desc: "Hosted design infrastructure" },
        ],
      },
      {
        title: "Tools",
        items: [
          { icon: <Code2 size={14} />, label: "CLI", desc: "One-command component setup" },
          { icon: <SlidersHorizontal size={14} />, label: "Theming Studio", desc: "Visual token editor" },
          { icon: <Server size={14} />, label: "API", desc: "Headless component API" },
        ],
      },
    ],
  },
  { label: "Docs", mega: false },
  { label: "Pricing", mega: false },
  { label: "Blog", mega: false },
]

function TopNavbar() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="w-full max-w-3xl mx-auto">
      <nav className="relative flex items-center justify-between px-5 py-3 rounded-2xl border border-border bg-card shadow-lg" aria-label="Main navigation">
        {/* Logo */}
        <div className="flex items-center gap-2 text-primary">
          <NexLogo size={22} />
          <span className="text-sm font-bold text-foreground tracking-tight">NexUI</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <div key={item.label} className="relative">
              <button
                onMouseEnter={() => item.mega ? setOpen(item.label) : setOpen(null)}
                onMouseLeave={() => setOpen(null)}
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 rounded-xl text-sm transition-colors",
                  open === item.label ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
                aria-haspopup={item.mega ? "true" : undefined}
                aria-expanded={item.mega ? open === item.label : undefined}
              >
                {item.label}
                {item.mega && <ChevronDown size={12} className={cn("transition-transform", open === item.label && "rotate-180")} />}
              </button>

              {/* Mega menu */}
              {item.mega && open === item.label && (
                <div
                  onMouseEnter={() => setOpen(item.label)}
                  onMouseLeave={() => setOpen(null)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] rounded-2xl border border-border bg-card shadow-2xl p-4 z-50 grid grid-cols-2 gap-4"
                >
                  {item.sections?.map(sec => (
                    <div key={sec.title}>
                      <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-2 px-1">{sec.title}</p>
                      <div className="flex flex-col gap-1">
                        {sec.items.map(si => (
                          <button key={si.label} className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors text-left group">
                            <span className="mt-0.5 text-primary opacity-70 group-hover:opacity-100 transition-opacity">{si.icon}</span>
                            <div>
                              <p className="text-xs font-medium text-foreground">{si.label}</p>
                              <p className="text-[10px] text-muted-foreground mt-0.5">{si.desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <button className="text-sm text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-xl hover:bg-secondary transition-colors">Sign in</button>
          <button className="text-sm bg-primary text-primary-foreground px-4 py-1.5 rounded-xl hover:bg-primary/90 transition-colors font-medium">Get started</button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-xl hover:bg-secondary transition-colors text-muted-foreground" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={16} /> : <MoreHorizontal size={16} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mt-2 rounded-2xl border border-border bg-card p-3 flex flex-col gap-1">
          {NAV_ITEMS.map(item => (
            <button key={item.label} className="text-sm text-muted-foreground hover:text-foreground hover:bg-secondary px-4 py-2.5 rounded-xl text-left transition-colors">{item.label}</button>
          ))}
          <div className="border-t border-border mt-1 pt-2 flex flex-col gap-1">
            <button className="text-sm text-muted-foreground hover:text-foreground px-4 py-2.5 rounded-xl text-left hover:bg-secondary transition-colors">Sign in</button>
            <button className="text-sm bg-primary text-primary-foreground px-4 py-2.5 rounded-xl font-medium">Get started</button>
          </div>
        </div>
      )}
    </div>
  )
}

// ── 2. Breadcrumb ────────────────────────────────────────────────────────────
function BreadcrumbNav() {
  const paths = [
    [
      { label: "Home" },
      { label: "Products" },
      { label: "Components" },
      { label: "Breadcrumb", current: true },
    ],
    [
      { label: "Dashboard" },
      { label: "Settings" },
      { label: "Profile", current: true },
    ],
  ]

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-4">
      {paths.map((crumbs, pi) => (
        <nav key={pi} aria-label="Breadcrumb" className="flex items-center gap-1 flex-wrap">
          {crumbs.map((crumb, ci) => (
            <React.Fragment key={crumb.label}>
              {ci > 0 && <ChevronRight size={12} className="text-muted-foreground shrink-0" aria-hidden="true" />}
              {crumb.current ? (
                <span className="text-sm text-foreground font-medium" aria-current="page">{crumb.label}</span>
              ) : (
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">{crumb.label}</button>
              )}
            </React.Fragment>
          ))}
        </nav>
      ))}

      {/* Pill variant */}
      <nav aria-label="Breadcrumb pill variant" className="flex items-center gap-1 flex-wrap bg-secondary border border-border rounded-xl px-3 py-1.5 w-fit">
        {["Dashboard", "Analytics", "Revenue"].map((label, ci, arr) => (
          <React.Fragment key={label}>
            {ci > 0 && <span className="text-muted-foreground text-xs" aria-hidden="true">/</span>}
            <button className={cn("text-xs transition-colors px-1", ci === arr.length - 1 ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground")}>
              {label}
            </button>
          </React.Fragment>
        ))}
      </nav>
    </div>
  )
}

// ── 3. Pagination ─────────────────────────────────────────────────────────────
function PaginationNav() {
  const [page, setPage] = useState(4)
  const total = 12

  function pages() {
    const all: (number | "...")[] = []
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
    all.push(1)
    if (page > 3) all.push("...")
    for (let i = Math.max(2, page - 1); i <= Math.min(total - 1, page + 1); i++) all.push(i)
    if (page < total - 2) all.push("...")
    all.push(total)
    return all
  }

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
      {/* Default */}
      <nav aria-label="Pagination" className="flex items-center gap-1 justify-center">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
          aria-label="Previous page"
          className="size-9 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={14} />
        </button>
        {pages().map((p, i) => (
          <button key={i} onClick={() => typeof p === "number" && setPage(p)} disabled={p === "..."}
            aria-label={typeof p === "number" ? `Page ${p}` : "More pages"}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              "size-9 flex items-center justify-center rounded-xl text-sm font-medium transition-all",
              p === page ? "bg-primary text-primary-foreground shadow-sm" : p === "..." ? "text-muted-foreground cursor-default" : "border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => setPage(p => Math.min(total, p + 1))} disabled={page === total}
          aria-label="Next page"
          className="size-9 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight size={14} />
        </button>
      </nav>

      {/* Compact with page info */}
      <div className="flex items-center justify-between w-full">
        <p className="text-xs text-muted-foreground">Page <span className="text-foreground font-medium">{page}</span> of <span className="text-foreground font-medium">{total}</span></p>
        <div className="flex items-center gap-1">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all">
            <ChevronLeft size={12} /> Prev
          </button>
          <button onClick={() => setPage(p => Math.min(total, p + 1))} disabled={page === total}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all">
            Next <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

// ── 4. Vertical Sidebar Navigation ───────────────────────────────────────────
const SIDEBAR_GROUPS = [
  {
    label: "Main",
    items: [
      { icon: <LayoutGrid size={14} />, label: "Dashboard", badge: null, active: true },
      { icon: <MessageSquare size={14} />, label: "Messages", badge: "12", active: false },
      { icon: <Star size={14} />, label: "Starred", badge: null, active: false },
    ],
  },
  {
    label: "Workspace",
    items: [
      { icon: <Layers size={14} />, label: "Projects", badge: null, active: false },
      { icon: <Table size={14} />, label: "Reports", badge: null, active: false },
      { icon: <Globe size={14} />, label: "Integrations", badge: "New", active: false },
    ],
  },
  {
    label: "Account",
    items: [
      { icon: <User size={14} />, label: "Profile", badge: null, active: false },
      { icon: <SlidersHorizontal size={14} />, label: "Settings", badge: null, active: false },
    ],
  },
]

function SidebarNav() {
  const [active, setActive] = useState("Dashboard")
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex gap-3 w-full max-w-2xl mx-auto">
      {/* Sidebar */}
      <nav
        className={cn("flex flex-col rounded-2xl border border-border bg-card transition-all duration-300", collapsed ? "w-14" : "w-52")}
        aria-label="Sidebar navigation"
      >
        {/* Logo row */}
        <div className={cn("flex items-center gap-2.5 px-3 py-4 border-b border-border", collapsed && "justify-center px-2")}>
          <span className="text-primary shrink-0"><NexLogo size={20} /></span>
          {!collapsed && <span className="text-sm font-bold text-foreground">NexUI</span>}
        </div>

        {/* Groups */}
        <div className="flex-1 p-2 flex flex-col gap-4 overflow-y-auto">
          {SIDEBAR_GROUPS.map(group => (
            <div key={group.label} className="flex flex-col gap-0.5">
              {!collapsed && (
                <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground px-3 mb-1">{group.label}</p>
              )}
              {group.items.map(item => (
                <button
                  key={item.label}
                  onClick={() => setActive(item.label)}
                  aria-current={active === item.label ? "page" : undefined}
                  title={collapsed ? item.label : undefined}
                  className={cn(
                    "flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-medium transition-all",
                    collapsed && "justify-center",
                    active === item.label
                      ? "bg-primary/15 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <span className="shrink-0">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <span className={cn(
                          "text-[9px] font-bold px-1.5 py-0.5 rounded-full",
                          item.badge === "New" ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                        )}>{item.badge}</span>
                      )}
                    </>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Collapse toggle */}
        <div className="p-2 border-t border-border">
          <button
            onClick={() => setCollapsed(v => !v)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="w-full flex items-center justify-center gap-2 px-2.5 py-2 rounded-xl text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          >
            {collapsed ? <ChevronRight size={13} /> : <><ChevronLeft size={13} /><span>Collapse</span></>}
          </button>
        </div>
      </nav>

      {/* Mock content area */}
      <div className="flex-1 rounded-2xl border border-border bg-card p-4 flex flex-col gap-3">
        <p className="text-sm font-semibold text-foreground">{active}</p>
        <div className="flex flex-col gap-2">
          {[80, 60, 70, 50].map((w, i) => (
            <div key={i} className="h-3 rounded-full bg-secondary" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-1">
          {[0, 1].map(i => <div key={i} className="h-16 rounded-xl bg-secondary" />)}
        </div>
      </div>
    </div>
  )
}

// ── 5. Multi-step Stepper ────────────────────────────────────────────────────
const STEPS = [
  { label: "Account", desc: "Create credentials" },
  { label: "Profile", desc: "Personal details" },
  { label: "Plan",    desc: "Choose your tier" },
  { label: "Confirm", desc: "Review & finish" },
]

function StepperNav() {
  const [current, setCurrent] = useState(1)

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-8">
      {/* Horizontal stepper */}
      <div className="flex items-start gap-0">
        {STEPS.map((step, i) => {
          const done = i < current
          const active = i === current
          return (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center gap-1.5 flex-1">
                <button
                  onClick={() => setCurrent(i)}
                  aria-label={`Step ${i + 1}: ${step.label}`}
                  aria-current={active ? "step" : undefined}
                  className={cn(
                    "size-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all",
                    done  ? "bg-primary border-primary text-primary-foreground" :
                    active ? "bg-card border-primary text-primary" :
                             "bg-card border-border text-muted-foreground"
                  )}
                >
                  {done ? <Check size={13} /> : i + 1}
                </button>
                <div className="flex flex-col items-center">
                  <p className={cn("text-[11px] font-semibold", active ? "text-foreground" : done ? "text-foreground" : "text-muted-foreground")}>{step.label}</p>
                  <p className="text-[9px] text-muted-foreground text-center">{step.desc}</p>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className={cn("flex-1 h-0.5 mt-4 rounded-full transition-all", i < current ? "bg-primary" : "bg-border")} />
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* Controls */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrent(p => Math.max(0, p - 1))} disabled={current === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={14} /> Back
        </button>
        <button
          onClick={() => setCurrent(p => Math.min(STEPS.length - 1, p + 1))} disabled={current === STEPS.length - 1}
          className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          {current === STEPS.length - 2 ? "Finish" : "Continue"} <ChevronRight size={14} />
        </button>
      </div>

      {/* Vertical stepper variant */}
      <div className="flex flex-col gap-0">
        {STEPS.map((step, i) => {
          const done = i < current
          const active = i === current
          return (
            <div key={step.label} className="flex gap-3">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setCurrent(i)}
                  aria-label={`Step ${i + 1}: ${step.label}`}
                  aria-current={active ? "step" : undefined}
                  className={cn(
                    "size-7 rounded-full flex items-center justify-center text-[11px] font-bold border-2 shrink-0 transition-all",
                    done  ? "bg-primary border-primary text-primary-foreground" :
                    active ? "bg-card border-primary text-primary" :
                             "bg-card border-border text-muted-foreground"
                  )}
                >
                  {done ? <Check size={11} /> : i + 1}
                </button>
                {i < STEPS.length - 1 && <div className={cn("w-0.5 flex-1 min-h-[28px] my-1 rounded-full transition-all", i < current ? "bg-primary" : "bg-border")} />}
              </div>
              <div className="pb-5">
                <p className={cn("text-xs font-semibold mt-0.5", active ? "text-foreground" : done ? "text-foreground" : "text-muted-foreground")}>{step.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{step.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── 6. Bottom Tab Bar (mobile) ────────────────────────────────────────────────
type TabItem = { label: string; icon: React.ElementType; badge?: number }

const TAB_ITEMS: TabItem[] = [
  { label: "Home",    icon: LayoutGrid },
  { label: "Search",  icon: Search },
  { label: "Chat",    icon: MessageSquare, badge: 3 },
  { label: "Saved",   icon: Star },
  { label: "Profile", icon: User },
]

function BottomTabBar() {
  const [active, setActive] = useState("Home")

  return (
    <div style={{ width: 360, margin: "0 auto" }}>
      <div
        style={{ height: 440, display: "flex", flexDirection: "column", borderRadius: 28, overflow: "hidden" }}
        className="border border-border bg-card"
      >
        {/* Mock content */}
        <div style={{ flex: 1, padding: 20, display: "flex", flexDirection: "column", gap: 12, overflow: "hidden" }}>
          <p className="text-sm font-semibold text-foreground">{active}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[88, 66, 76, 50].map((w, i) => (
              <div key={i} className="bg-secondary rounded-full" style={{ height: 10, width: `${w}%` }} />
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, flex: 1 }}>
            {[0,1,2,3].map(i => <div key={i} className="bg-secondary rounded-2xl" />)}
          </div>
        </div>

        {/* Tab bar */}
        <div
          className="border-t border-border bg-card"
          style={{ height: 64, display: "flex" }}
          role="navigation"
          aria-label="Bottom navigation"
        >
          {TAB_ITEMS.map(({ label, icon: Icon, badge }) => {
            const on = active === label
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                aria-label={label}
                aria-current={on ? "page" : undefined}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  color: on ? "var(--color-primary)" : "var(--color-muted-foreground)",
                  padding: "6px 0 4px",
                }}
              >
                {/* Indicator line */}
                <span style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  borderRadius: 9999,
                  background: on ? "var(--color-primary)" : "transparent",
                  marginBottom: 2,
                }} />
                {/* Icon + badge */}
                <span style={{ position: "relative", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} />
                  {badge != null && (
                    <span style={{
                      position: "absolute",
                      top: -5,
                      right: -7,
                      minWidth: 14,
                      height: 14,
                      borderRadius: 9999,
                      background: "#f43f5e",
                      color: "#fff",
                      fontSize: 8,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 3px",
                      lineHeight: 1,
                      border: "2px solid var(--color-card)",
                    }}>
                      {badge}
                    </span>
                  )}
                </span>
                {/* Label */}
                <span style={{ fontSize: 10, fontWeight: on ? 600 : 400, lineHeight: 1 }}>
                  {label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ── 7. Command Palette ──────────────────────────�����─────────────────────────────
const CMD_ITEMS = [
  { group: "Navigation", items: [
    { icon: <LayoutGrid size={13} />, label: "Go to Dashboard", shortcut: "G D" },
    { icon: <MessageSquare size={13} />, label: "Open Messages", shortcut: "G M" },
    { icon: <Star size={13} />, label: "Starred items", shortcut: "G S" },
  ]},
  { group: "Actions", items: [
    { icon: <Plus size={13} />, label: "New project", shortcut: "⌘ N" },
    { icon: <Upload size={13} />, label: "Import file", shortcut: "⌘ I" },
    { icon: <Copy size={13} />, label: "Duplicate", shortcut: "⌘ D" },
  ]},
  { group: "Theme", items: [
    { icon: <Sun size={13} />, label: "Switch to light mode", shortcut: null },
    { icon: <Moon size={13} />, label: "Switch to dark mode", shortcut: null },
  ]},
]

function CommandPalette() {
  const [query, setQuery] = useState("")
  const [sel, setSel] = useState<string | null>("Go to Dashboard")
  const inputRef = React.useRef<HTMLInputElement>(null)

  const filtered = query.trim()
    ? CMD_ITEMS.map(g => ({
        ...g,
        items: g.items.filter(it => it.label.toLowerCase().includes(query.toLowerCase())),
      })).filter(g => g.items.length > 0)
    : CMD_ITEMS

  const allItems = filtered.flatMap(g => g.items)

  function move(dir: 1 | -1) {
    const idx = allItems.findIndex(it => it.label === sel)
    const next = allItems[(idx + dir + allItems.length) % allItems.length]
    setSel(next?.label ?? null)
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
        onKeyDown={e => {
          if (e.key === "ArrowDown") { e.preventDefault(); move(1) }
          if (e.key === "ArrowUp")   { e.preventDefault(); move(-1) }
        }}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search size={14} className="text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search commands, pages, actions…"
            aria-label="Command search"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <kbd className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-secondary border border-border text-[10px] text-muted-foreground font-mono">
            <Command size={9} /> K
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-64 overflow-y-auto py-2" role="listbox" aria-label="Search results">
          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">No results for "{query}"</p>
          ) : (
            filtered.map(group => (
              <div key={group.group}>
                <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground px-4 py-1.5">{group.group}</p>
                {group.items.map(item => (
                  <button
                    key={item.label}
                    role="option"
                    aria-selected={sel === item.label}
                    onClick={() => setSel(item.label)}
                    onMouseEnter={() => setSel(item.label)}
                    className={cn(
                      "flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors",
                      sel === item.label ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className={cn("shrink-0", sel === item.label ? "text-primary" : "")}>{item.icon}</span>
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.shortcut && (
                      <kbd className="text-[10px] font-mono text-muted-foreground bg-secondary border border-border px-1.5 py-0.5 rounded-md">{item.shortcut}</kbd>
                    )}
                    {sel === item.label && <ChevronRight size={11} className="text-primary shrink-0" />}
                  </button>
                ))}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-t border-border bg-secondary/30">
          {[
            { keys: ["↑", "↓"], label: "navigate" },
            { keys: ["↵"], label: "select" },
            { keys: ["esc"], label: "close" },
          ].map(hint => (
            <div key={hint.label} className="flex items-center gap-1">
              {hint.keys.map(k => <kbd key={k} className="text-[9px] font-mono text-muted-foreground bg-secondary border border-border px-1 py-0.5 rounded">{k}</kbd>)}
              <span className="text-[10px] text-muted-foreground">{hint.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── 8. Dock (macOS-style) ─────────────────────────────────────────────────────
const DOCK_APPS = [
  { icon: <LayoutGrid size={18} />, label: "Dashboard" },
  { icon: <MessageSquare size={18} />, label: "Messages", dot: true },
  { icon: <Search size={18} />, label: "Search" },
  { icon: <Star size={18} />, label: "Starred" },
  { icon: <Globe size={18} />, label: "Browser" },
  { icon: <Code2 size={18} />, label: "Editor" },
  { icon: <User size={18} />, label: "Profile" },
]

function DockNav() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [active, setActive] = useState("Dashboard")

  function scale(label: string) {
    if (!hovered) return 1
    const idx = DOCK_APPS.findIndex(a => a.label === label)
    const hIdx = DOCK_APPS.findIndex(a => a.label === hovered)
    const dist = Math.abs(idx - hIdx)
    return dist === 0 ? 1.5 : dist === 1 ? 1.25 : dist === 2 ? 1.1 : 1
  }

  return (
    <div className="w-full flex flex-col items-center gap-6 py-4">
      {/* Mock screen */}
      <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-4 flex flex-col gap-2" style={{ height: 140 }}>
        <p className="text-sm font-semibold text-foreground">{active}</p>
        <div className="flex flex-col gap-2">
          {[70, 50, 60].map((w, i) => <div key={i} className="h-3 rounded-full bg-secondary" style={{ width: `${w}%` }} />)}
        </div>
      </div>

      {/* Dock */}
      <nav
        aria-label="Dock navigation"
        className="flex items-end gap-2 px-4 py-3 rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-xl"
      >
        {DOCK_APPS.map(app => (
          <div key={app.label} className="relative flex flex-col items-center" style={{ transformOrigin: "bottom center" }}>
            {/* Tooltip */}
            {hovered === app.label && (
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg bg-card border border-border text-[10px] text-foreground whitespace-nowrap shadow-lg">
                {app.label}
              </div>
            )}
            <button
              onClick={() => setActive(app.label)}
              onMouseEnter={() => setHovered(app.label)}
              onMouseLeave={() => setHovered(null)}
              aria-label={app.label}
              aria-current={active === app.label ? "page" : undefined}
              style={{ transform: `scale(${scale(app.label)})`, transition: "transform 0.15s ease" }}
              className={cn(
                "size-11 rounded-2xl flex items-center justify-center transition-all origin-bottom",
                active === app.label
                  ? "bg-primary/20 border border-primary/30 text-primary"
                  : "bg-secondary border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {app.icon}
            </button>
            {/* Active dot */}
            {active === app.label && (
              <span className="absolute -bottom-1.5 size-1 rounded-full bg-primary" />
            )}
            {/* Notification dot */}
            {app.dot && active !== app.label && (
              <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-rose-400 border border-card" />
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

// ─── Navigation registry ──────────────────────────────────────────────────────
const NAV_REGISTRY: ComponentEntry[] = [
  {
    name: "Top Navbar with Mega Menu",
    description: "Responsive top navigation bar with a hover-triggered two-column mega menu, CTA buttons, and a mobile hamburger drawer.",
    category: "Navigation",
    tags: ["navbar", "mega-menu", "responsive", "header", "navigation"],
    fullWidth: true,
    preview: <TopNavbar />,
    code: `// TopNavbar — see lib/components-registry.tsx`,
  },
  {
    name: "Breadcrumb",
    description: "Two text-based breadcrumb variants (chevron-separated and slash-separated pill) with current-page aria annotation.",
    category: "Navigation",
    tags: ["breadcrumb", "path", "navigation", "hierarchy"],
    preview: <BreadcrumbNav />,
    code: `// BreadcrumbNav — see lib/components-registry.tsx`,
  },
  {
    name: "Pagination",
    description: "Smart pagination with ellipsis truncation, previous/next buttons, and a compact page-info row variant. Fully keyboard and aria accessible.",
    category: "Navigation",
    tags: ["pagination", "pages", "navigation", "table"],
    preview: <PaginationNav />,
    code: `// PaginationNav — see lib/components-registry.tsx`,
  },
  {
    name: "Vertical Sidebar",
    description: "Collapsible sidebar with grouped nav items, active state, badge counts, collapse toggle, and a live content area preview.",
    category: "Navigation",
    tags: ["sidebar", "navigation", "collapsible", "groups", "menu"],
    fullWidth: true,
    preview: <SidebarNav />,
    code: `// SidebarNav — see lib/components-registry.tsx`,
  },
  {
    name: "Multi-step Stepper",
    description: "Horizontal and vertical stepper variants with completed/active/pending states, connecting progress lines, and back/continue controls.",
    category: "Navigation",
    tags: ["stepper", "steps", "wizard", "onboarding", "progress"],
    preview: <StepperNav />,
    code: `// StepperNav — see lib/components-registry.tsx`,
  },
  {
    name: "Bottom Tab Bar",
    description: "Mobile-style bottom navigation bar with active indicator line, notification badge, and label. Rendered inside a phone-screen mock.",
    category: "Navigation",
    tags: ["tabs", "mobile", "bottom-nav", "tab-bar", "app"],
    preview: <BottomTabBar />,
    code: `// BottomTabBar — see lib/components-registry.tsx`,
  },
  {
    name: "Command Palette",
    description: "Spotlight-style command palette with live search filtering, grouped results, keyboard shortcut hints, arrow-key navigation, and a footer legend.",
    category: "Navigation",
    tags: ["command", "palette", "search", "spotlight", "keyboard"],
    fullWidth: true,
    preview: <CommandPalette />,
    code: `// CommandPalette — see lib/components-registry.tsx`,
  },
  {
    name: "Dock",
    description: "macOS-style app dock with magnification scaling on hover, active dot indicator, notification badge, and tooltip labels.",
    category: "Navigation",
    tags: ["dock", "app", "macos", "toolbar", "icons"],
    fullWidth: true,
    preview: <DockNav />,
    code: `// DockNav — see lib/components-registry.tsx`,
  },
]

COMPONENTS.push(...NAV_REGISTRY)

// ─── Chart colors (resolved from CSS vars at runtime) ────────────────────────
// We pass literal oklch values so Recharts can use them directly — CSS vars
// are not resolved inside SVG paint attributes.

const C = {
  primary:   "oklch(0.62 0.21 250)",
  secondary: "oklch(0.55 0.18 300)",
  tertiary:  "oklch(0.60 0.18 170)",
  quaternary:"oklch(0.65 0.20 40)",
  quinary:   "oklch(0.58 0.15 340)",
  muted:     "oklch(0.40 0.00 0)",
  border:    "oklch(0.25 0.00 0)",
  text:      "oklch(0.92 0.00 0)",
  bg:        "oklch(0.10 0.00 0)",
}
const PALETTE = [C.primary, C.secondary, C.tertiary, C.quaternary, C.quinary]

// ── 1. Area Chart (simple + stacked) ─────────────────────────────────────────
const AREA_DATA = [
  { month: "Jan", revenue: 4200, expenses: 2400 },
  { month: "Feb", revenue: 5800, expenses: 2800 },
  { month: "Mar", revenue: 5200, expenses: 3200 },
  { month: "Apr", revenue: 7100, expenses: 2900 },
  { month: "May", revenue: 6400, expenses: 3600 },
  { month: "Jun", revenue: 8900, expenses: 3100 },
  { month: "Jul", revenue: 9200, expenses: 4100 },
]
const areaConfig = {
  revenue:  { label: "Revenue",  color: C.primary },
  expenses: { label: "Expenses", color: C.secondary },
}

function AreaChartDemo() {
  const [stacked, setStacked] = useState(false)
  const series = [
    { key: "revenue",  label: "Revenue",  color: C.primary },
    { key: "expenses", label: "Expenses", color: C.secondary },
  ]
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center justify-between px-1">
        <div>
          <p className="text-sm font-semibold text-foreground">Revenue vs Expenses</p>
          <p className="text-xs text-muted-foreground">Jan – Jul 2025</p>
        </div>
        <div className="flex gap-1">
          {["Normal","Stacked"].map(v => (
            <button key={v} onClick={() => setStacked(v==="Stacked")}
              className={cn("px-3 py-1 rounded-lg text-xs font-medium transition-all",
                (v==="Stacked") === stacked ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              )}>{v}</button>
          ))}
        </div>
      </div>
      <AreaChart
        data={AREA_DATA}
        xKey="month"
        series={series}
        stacked={stacked}
        yFormatter={v => `$${v/1000}k`}
        height={224}
      />
      <ChartLegend items={series} />
    </div>
  )
}

// ── 2. Bar Chart (vertical + horizontal) ─────────────────────────────────────
const BAR_DATA = [
  { name: "Q1", web: 4200, mobile: 2400, desktop: 1800 },
  { name: "Q2", web: 5800, mobile: 3100, desktop: 2200 },
  { name: "Q3", web: 4900, mobile: 3800, desktop: 2600 },
  { name: "Q4", web: 7200, mobile: 4100, desktop: 3200 },
]
const barConfig = {
  web:     { label: "Web",     color: C.primary },
  mobile:  { label: "Mobile",  color: C.secondary },
  desktop: { label: "Desktop", color: C.tertiary },
}

function BarChartDemo() {
  const [horizontal, setHorizontal] = useState(false)
  const [grouped, setGrouped] = useState(true)
  const series = [
    { key: "web",     label: "Web",     color: C.primary },
    { key: "mobile",  label: "Mobile",  color: C.secondary },
    { key: "desktop", label: "Desktop", color: C.tertiary },
  ]
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center justify-between flex-wrap gap-2 px-1">
        <div>
          <p className="text-sm font-semibold text-foreground">Traffic by Platform</p>
          <p className="text-xs text-muted-foreground">Quarterly breakdown</p>
        </div>
        <div className="flex gap-1 flex-wrap">
          {["Grouped","Stacked"].map(v => (
            <button key={v} onClick={() => setGrouped(v==="Grouped")}
              className={cn("px-3 py-1 rounded-lg text-xs font-medium transition-all", (v==="Grouped")===grouped ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground")}>{v}</button>
          ))}
          <button onClick={() => setHorizontal(v=>!v)} className="px-3 py-1 rounded-lg text-xs font-medium bg-secondary text-muted-foreground hover:text-foreground transition-all">{horizontal ? "Vertical" : "Horizontal"}</button>
        </div>
      </div>
      <BarChart
        data={BAR_DATA}
        xKey="name"
        series={series}
        stacked={!grouped}
        horizontal={horizontal}
        yFormatter={v => `${v/1000}k`}
        height={224}
      />
      <ChartLegend items={series} />
    </div>
  )
}

// ── 3. Line Chart (multi-line + reference) ───────────────────────────────────
const LINE_DATA = [
  { week: "W1",  userA: 120, userB: 80,  userC: 60  },
  { week: "W2",  userA: 180, userB: 120, userC: 90  },
  { week: "W3",  userA: 150, userB: 200, userC: 110 },
  { week: "W4",  userA: 220, userB: 160, userC: 140 },
  { week: "W5",  userA: 300, userB: 180, userC: 160 },
  { week: "W6",  userA: 280, userB: 240, userC: 200 },
  { week: "W7",  userA: 350, userB: 210, userC: 230 },
  { week: "W8",  userA: 400, userB: 290, userC: 260 },
]
const lineConfig = {
  userA: { label: "Team A", color: C.primary },
  userB: { label: "Team B", color: C.secondary },
  userC: { label: "Team C", color: C.tertiary },
}

function LineChartDemo() {
  const series = [
    { key: "userA", label: "Team A", color: C.primary },
    { key: "userB", label: "Team B", color: C.secondary },
    { key: "userC", label: "Team C", color: C.tertiary },
  ]
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Weekly Active Users</p>
        <p className="text-xs text-muted-foreground">8-week trend by team</p>
      </div>
      <LineChart
        data={LINE_DATA}
        xKey="week"
        series={series}
        referenceLine={{ value: 200, label: "Target" }}
        height={224}
      />
      <ChartLegend items={series} />
    </div>
  )
}

// ── 4. Pie & Donut Chart ─────────────────────────────────────────────────────
const PIE_DATA = [
  { name: "Direct",   value: 38, color: PALETTE[0] },
  { name: "Organic",  value: 27, color: PALETTE[1] },
  { name: "Referral", value: 18, color: PALETTE[2] },
  { name: "Social",   value: 11, color: PALETTE[3] },
  { name: "Email",    value: 6,  color: PALETTE[4] },
]

function PieChartDemo() {
  const [donut, setDonut] = useState(true)
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center justify-between px-1">
        <div>
          <p className="text-sm font-semibold text-foreground">Traffic Sources</p>
          <p className="text-xs text-muted-foreground">Channel distribution</p>
        </div>
        <div className="flex gap-1">
          {["Pie","Donut"].map(v => (
            <button key={v} onClick={() => setDonut(v==="Donut")}
              className={cn("px-3 py-1 rounded-lg text-xs font-medium transition-all", (v==="Donut")===donut ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground")}>{v}</button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <PieChart data={PIE_DATA} donut={donut} size={200} className="shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          {PIE_DATA.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              <span className="size-2 rounded-sm shrink-0" style={{ background: d.color }} />
              <span className="text-xs text-muted-foreground flex-1">{d.name}</span>
              <span className="text-xs font-semibold text-foreground tabular-nums">{d.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
// ── 5. Radar Chart ───────────────────────────────────────────────────────────
const RADAR_DATA = [
  { skill: "TypeScript", score: 90, benchmark: 70 },
  { skill: "React",      score: 85, benchmark: 75 },
  { skill: "CSS",        score: 78, benchmark: 65 },
  { skill: "Node.js",    score: 72, benchmark: 68 },
  { skill: "Testing",    score: 65, benchmark: 60 },
  { skill: "DevOps",     score: 55, benchmark: 72 },
]

function RadarChartDemo() {
  const series = [
    { key: "score",     label: "You", color: C.primary,   fillOpacity: 0.25 },
    { key: "benchmark", label: "Avg", color: C.secondary, fillOpacity: 0.15 },
  ]
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Skill Radar</p>
        <p className="text-xs text-muted-foreground">Score vs industry average</p>
      </div>
      <div className="flex justify-center">
        <RadarChart
          data={RADAR_DATA}
          labelKey="skill"
          series={series}
          domain={[0, 100]}
          size={260}
        />
      </div>
      <ChartLegend items={series} />
    </div>
  )
}

// ── 6. Radial Bar Chart ───────────────────────────────────────────────────────
const RADIAL_DATA = [
  { name: "Storage",  value: 82,  color: C.primary   },
  { name: "Memory",   value: 65,  color: C.secondary  },
  { name: "CPU",      value: 48,  color: C.tertiary   },
  { name: "Network",  value: 91,  color: C.quaternary },
]

function RadialBarChartDemo() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">System Usage</p>
        <p className="text-xs text-muted-foreground">Resource utilisation %</p>
      </div>
      <div className="flex items-center gap-4">
        <RadialProgress data={RADIAL_DATA} size={200} className="shrink-0" />
        <div className="flex flex-col gap-3 flex-1">
          {RADIAL_DATA.map(d => (
            <div key={d.name} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{d.name}</span>
                <span className="text-xs font-bold text-foreground tabular-nums">{d.value}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${d.value}%`, background: d.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── 7. Scatter Chart ──────────────────────────────────────────────────────────
function makeScatter(n: number, cx: number, cy: number, spread: number, color: string) {
  return Array.from({ length: n }, (_, i) => ({
    x: +(cx + (Math.sin(i*1.3)*spread + Math.cos(i*2.1)*spread*0.5)).toFixed(1),
    y: +(cy + (Math.cos(i*1.7)*spread + Math.sin(i*2.9)*spread*0.4)).toFixed(1),
    z: Math.round(20 + Math.abs(Math.sin(i)) * 60),
    color,
  }))
}
const SCATTER_DATA_A = makeScatter(20, 40, 50, 20, C.primary)
const SCATTER_DATA_B = makeScatter(20, 70, 30, 15, C.secondary)
function ScatterChartDemo() {
  const [tooltip, setTooltip] = React.useState<{x:number;y:number;color:string;xv:number;yv:number;z:number} | null>(null)
  const svgRef = React.useRef<SVGSVGElement>(null)
  const PAD = { t: 12, r: 12, b: 28, l: 36 }
  const W = 560, H = 340
  const xS = (v: number) => PAD.l + (v / 100) * W
  const yS = (v: number) => PAD.t + H - (v / 100) * H
  const groups = [
    { data: SCATTER_DATA_A, color: C.primary,   label: "Segment A" },
    { data: SCATTER_DATA_B, color: C.tertiary,  label: "Segment B" },
  ]
  const ticks = [0, 25, 50, 75, 100]
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Scatter Plot</p>
        <p className="text-xs text-muted-foreground">Two-segment distribution</p>
      </div>
      <div className="relative" style={{ height: H + PAD.t + PAD.b }}>
        <svg ref={svgRef} viewBox={`0 0 ${W + PAD.l + PAD.r} ${H + PAD.t + PAD.b}`} preserveAspectRatio="xMidYMid meet" className="w-full h-full" onMouseLeave={() => setTooltip(null)}>
          {ticks.map(v => (
            <g key={v}>
              <line x1={PAD.l} x2={W+PAD.l} y1={yS(v)} y2={yS(v)} stroke="currentColor" strokeOpacity={0.07} strokeWidth={1} />
              <line x1={xS(v)} x2={xS(v)} y1={PAD.t} y2={H+PAD.t} stroke="currentColor" strokeOpacity={0.07} strokeWidth={1} />
              <text x={PAD.l-4} y={yS(v)} textAnchor="end" dominantBaseline="middle" fontSize={9} fill="currentColor" fillOpacity={0.35}>{v}</text>
              <text x={xS(v)} y={H+PAD.t+14} textAnchor="middle" fontSize={9} fill="currentColor" fillOpacity={0.35}>{v}</text>
            </g>
          ))}
          {groups.map(g => g.data.map((d: any, i: number) => (
            <circle key={i} cx={xS(d.x)} cy={yS(d.y)} r={Math.max(3, Math.min(10, d.z / 3))}
              fill={g.color} fillOpacity={0.65} stroke={g.color} strokeOpacity={0.3} strokeWidth={1}
              style={{ cursor: "pointer" }}
              onMouseMove={e => {
                if (!svgRef.current) return
                const r = svgRef.current.getBoundingClientRect()
                setTooltip({ x: e.clientX - r.left, y: e.clientY - r.top, color: g.color, xv: d.x, yv: d.y, z: d.z })
              }}
            />
          )))}
        </svg>
        {tooltip && (
          <div className="pointer-events-none absolute z-50 rounded-lg border border-border/60 bg-card px-3 py-2 shadow-xl text-xs" style={{ left: tooltip.x, top: tooltip.y, transform: "translate(-50%,-110%)" }}>
            <div className="flex items-center gap-1.5 mb-1"><span className="size-2 rounded-sm" style={{ background: tooltip.color }} /><span className="text-muted-foreground">Point</span></div>
            <div className="flex gap-3 tabular-nums text-foreground font-medium">
              <span>x: {tooltip.xv}</span><span>y: {tooltip.yv}</span><span>z: {tooltip.z}</span>
            </div>
          </div>
        )}
      </div>
      <ChartLegend items={groups} />
    </div>
  )
}

// ── 8. Treemap ────────────────────────────────────────────────────────────────
const TREEMAP_DATA = [
  { name: "React",      size: 420, fill: C.primary },
  { name: "TypeScript", size: 310, fill: C.secondary },
  { name: "Next.js",    size: 280, fill: C.tertiary },
  { name: "Tailwind",   size: 240, fill: C.quaternary },
  { name: "Prisma",     size: 180, fill: C.quinary },
  { name: "Supabase",   size: 160, fill: C.primary   },
  { name: "Vercel",     size: 140, fill: C.secondary  },
  { name: "Radix",      size: 110, fill: C.tertiary   },
]
function TreemapChartDemo() {
  // Pure SVG treemap — squarified layout
  const W = 560, H = 210
  const total = TREEMAP_DATA.reduce((s, d) => s + d.size, 0)
  type Rect = { x:number; y:number; w:number; h:number; name:string; fill:string; size:number }
  const rects: Rect[] = []
  function layout(items: typeof TREEMAP_DATA, x: number, y: number, w: number, h: number) {
    if (items.length === 0) return
    if (items.length === 1) { rects.push({ x, y, w, h, ...items[0] }); return }
    const half = items.reduce((s, d) => s + d.size, 0) / 2
    let sum = 0, split = 0
    for (let i = 0; i < items.length; i++) { sum += items[i].size; if (sum >= half) { split = i + 1; break } }
    const frac = items.slice(0, split).reduce((s, d) => s + d.size, 0) / items.reduce((s, d) => s + d.size, 0)
    if (w >= h) { layout(items.slice(0, split), x, y, w * frac, h); layout(items.slice(split), x + w * frac, y, w * (1 - frac), h) }
    else { layout(items.slice(0, split), x, y, w, h * frac); layout(items.slice(split), x, y + h * frac, w, h * (1 - frac)) }
  }
  layout(TREEMAP_DATA.slice().sort((a, b) => b.size - a.size), 0, 0, W, H)
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Tech Stack Usage</p>
        <p className="text-xs text-muted-foreground">Size = relative popularity</p>
      </div>
      <div style={{ height: H }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
          {rects.map((r, i) => (
            <g key={i}>
              <rect x={r.x+2} y={r.y+2} width={Math.max(0,r.w-4)} height={Math.max(0,r.h-4)} rx={5} fill={r.fill} fillOpacity={0.22} stroke={r.fill} strokeOpacity={0.5} strokeWidth={1} />
              {r.w > 55 && r.h > 28 && (
                <text x={r.x+r.w/2} y={r.y+r.h/2} textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontSize={r.w > 90 ? 12 : 9} fontWeight={600} fillOpacity={0.85}>{r.name}</text>
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

// ── 9. Funnel Chart ───────────────────────────────────────────────────────────
const FUNNEL_DATA = [
  { name: "Visitors",   value: 12400, fill: C.primary },
  { name: "Sign-ups",   value: 4300,  fill: C.secondary },
  { name: "Activated",  value: 2100,  fill: C.tertiary },
  { name: "Converted",  value: 890,   fill: C.quaternary },
  { name: "Retained",   value: 340,   fill: C.quinary },
]
function FunnelChartDemo() {
  const max = FUNNEL_DATA[0].value
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Conversion Funnel</p>
        <p className="text-xs text-muted-foreground">Visitor → Retention</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-1.5 flex-1 py-2">
          {FUNNEL_DATA.map((d, i) => (
            <div key={d.name} className="w-full flex justify-center">
              <div
                className="h-9 flex items-center justify-center rounded-md text-xs font-bold text-white transition-all"
                style={{ width: `${(d.value / max) * 100}%`, background: d.fill, opacity: 0.88 }}
              >
                {d.value.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 w-32 shrink-0">
          {FUNNEL_DATA.map((d, i) => {
            const rate = i === 0 ? 100 : Math.round(d.value / FUNNEL_DATA[0].value * 100)
            return (
              <div key={d.name} className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-sm shrink-0" style={{ background: d.fill }} />
                  <span className="text-[10px] text-muted-foreground">{d.name}</span>
                </div>
                <span className="text-xs font-bold text-foreground tabular-nums pl-3.5">{rate}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ── 10. Gantt Chart (pure SVG — no Recharts needed) ───────────────────────────
interface GanttTask {
  id: string
  label: string
  group: string
  start: number  // day offset
  end: number    // day offset
  color: string
  deps?: string[]
  progress: number // 0-100
}

const GANTT_TASKS: GanttTask[] = [
  { id:"t1", label:"Discovery",       group:"Research",    start:0,  end:6,  color:C.primary,    progress:100 },
  { id:"t2", label:"Requirements",    group:"Research",    start:3,  end:9,  color:C.primary,    progress:80  },
  { id:"t3", label:"UI Design",       group:"Design",      start:8,  end:16, color:C.tertiary,   progress:60, deps:["t2"] },
  { id:"t4", label:"Prototyping",     group:"Design",      start:13, end:20, color:C.tertiary,   progress:30  },
  { id:"t5", label:"API Setup",       group:"Dev",         start:10, end:18, color:C.tertiary,   progress:55, deps:["t2"] },
  { id:"t6", label:"Frontend",        group:"Dev",         start:16, end:27, color:C.tertiary,   progress:20, deps:["t3","t5"] },
  { id:"t7", label:"Backend",         group:"Dev",         start:14, end:25, color:C.tertiary,   progress:35, deps:["t5"] },
  { id:"t8", label:"Integration",     group:"Dev",         start:24, end:30, color:C.quaternary, progress:0,  deps:["t6","t7"] },
  { id:"t9", label:"QA Testing",      group:"QA",          start:26, end:33, color:C.quinary,    progress:0,  deps:["t8"] },
  { id:"t10",label:"Launch",          group:"Release",     start:32, end:35, color:C.quaternary, progress:0,  deps:["t9"] },
]

const TOTAL_DAYS = 36
const LABEL_W = 100
const ROW_H = 32
const HEADER_H = 36
const CHART_PAD = 8
const DAY_COL = 18   // px per day in day-view
const WEEK_COL = 40  // px per week in week-view

function GanttChartDemo() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [zoom, setZoom] = useState<"day"|"week">("day")

  const groups = [...new Set(GANTT_TASKS.map(t => t.group))]
  const totalWeeks = Math.ceil(TOTAL_DAYS / 7)
  const colPitch = zoom === "day" ? DAY_COL : WEEK_COL
  const cols     = zoom === "day" ? TOTAL_DAYS : totalWeeks
  const totalW   = LABEL_W + CHART_PAD * 2 + cols * colPitch
  const totalH   = GANTT_TASKS.length * ROW_H + HEADER_H + CHART_PAD * 2

  // Convert a day-offset to an x pixel coordinate
  const dayToX = (day: number) =>
    LABEL_W + CHART_PAD + (zoom === "day" ? day * DAY_COL : (day / 7) * WEEK_COL)

  // row index map
  const rowIdx = Object.fromEntries(GANTT_TASKS.map((t, i) => [t.id, i]))

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center justify-between px-1">
        <div>
          <p className="text-sm font-semibold text-foreground">Project Gantt Chart</p>
          <p className="text-xs text-muted-foreground">10 tasks · 5 groups · dependencies</p>
        </div>
        <div className="flex gap-1">
          {(["day","week"] as const).map(v => (
            <button key={v} onClick={() => setZoom(v)}
              className={cn("px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all", zoom===v ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground")}>{v}</button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <svg
          width="100%"
          viewBox={`0 0 ${totalW} ${totalH}`}
          className="block min-w-[540px]"
          aria-label="Gantt chart"
          role="img"
        >
          {/* Header background */}
          <rect x={0} y={0} width={totalW} height={HEADER_H} fill={C.bg} opacity={0.6} />

          {/* Column headers + grid lines */}
          {Array.from({ length: cols }).map((_, di) => {
            const x = LABEL_W + CHART_PAD + di * colPitch
            const label = zoom === "day" ? `D${di+1}` : `W${di+1}`
            return (
              <g key={di}>
                <line x1={x} y1={HEADER_H} x2={x} y2={totalH} stroke={C.border} strokeWidth={0.5} opacity={0.5} />
                {(zoom === "week" || di % 5 === 0) && (
                  <text x={x + colPitch / 2} y={HEADER_H - 10} textAnchor="middle" fontSize={8} fill={C.text} opacity={0.4}>{label}</text>
                )}
              </g>
            )
          })}

          {/* Alternating row backgrounds */}
          {GANTT_TASKS.map((_, ri) => (
            <rect key={ri} x={0} y={HEADER_H + CHART_PAD + ri * ROW_H} width={totalW} height={ROW_H}
              fill={ri % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)"} />
          ))}

          {/* Dependency arrows */}
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill={C.muted} opacity={0.5} />
            </marker>
          </defs>
          {GANTT_TASKS.flatMap(task =>
            (task.deps || []).map(depId => {
              const dep = GANTT_TASKS.find(t => t.id === depId)
              if (!dep) return null
              const depRow = rowIdx[depId]
              const taskRow = rowIdx[task.id]
              const x1 = dayToX(dep.end)
              const y1 = HEADER_H + CHART_PAD + depRow * ROW_H + ROW_H / 2
              const x2 = dayToX(task.start)
              const y2 = HEADER_H + CHART_PAD + taskRow * ROW_H + ROW_H / 2
              const mx = (x1 + x2) / 2
              return (
                <path key={`${depId}-${task.id}`}
                  d={`M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`}
                  fill="none" stroke={C.muted} strokeWidth={1} strokeDasharray="3 2" opacity={0.5}
                  markerEnd="url(#arrow)"
                />
              )
            })
          )}

          {/* Task bars */}
          {GANTT_TASKS.map((task, ri) => {
            const x = dayToX(task.start)
            const w = Math.max(dayToX(task.end) - dayToX(task.start), 14)
            const y = HEADER_H + CHART_PAD + ri * ROW_H + 5
            const h = ROW_H - 10
            const isHov = hovered === task.id

            return (
              <g key={task.id}
                onMouseEnter={() => setHovered(task.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                <text x={LABEL_W - 6} y={y + h / 2 + 4} textAnchor="end" fontSize={9.5} fill={C.text}
                  opacity={isHov ? 1 : 0.65} fontWeight={isHov ? 700 : 400}>
                  {task.label}
                </text>
                <rect x={x} y={y} width={w} height={h} rx={4}
                  fill={task.color} fillOpacity={isHov ? 0.35 : 0.18}
                  stroke={task.color} strokeWidth={isHov ? 1.5 : 1} strokeOpacity={0.6} />
                <rect x={x} y={y} width={w * task.progress / 100} height={h} rx={4}
                  fill={task.color} fillOpacity={isHov ? 0.75 : 0.55} />
                {w > 28 && task.progress > 0 && (
                  <text x={x + 5} y={y + h / 2 + 4} fontSize={8} fill={C.text} opacity={0.9} fontWeight={600}>
                    {task.progress}%
                  </text>
                )}
              </g>
            )
          })}

          {/* Today line + label — day 15 */}
          {(() => {
            const x = dayToX(15)
            return (
              <g>
                <line x1={x} y1={HEADER_H} x2={x} y2={totalH} stroke={C.quaternary} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.7} />
                <rect x={x - 14} y={4} width={28} height={16} rx={4} fill={C.quaternary} opacity={0.9} />
                <text x={x} y={15} textAnchor="middle" fontSize={8} fill={C.bg} fontWeight={700}>Today</text>
              </g>
            )
          })()}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 px-1">
        {groups.map((g, i) => {
          const task = GANTT_TASKS.find(t => t.group === g)
          return (
            <div key={g} className="flex items-center gap-1.5">
              <span className="size-2 rounded-sm" style={{ background: task?.color }} />
              <span className="text-[10px] text-muted-foreground">{g}</span>
            </div>
          )
        })}
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-0.5 border-t-2 border-dashed" style={{ borderColor: C.quaternary }} />
          <span className="text-[10px] text-muted-foreground">Today</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-0.5 border-t border-dashed opacity-40" style={{ borderColor: C.muted }} />
          <span className="text-[10px] text-muted-foreground">Dependency</span>
        </div>
      </div>
    </div>
  )
}

// ── 11. Timeline / Resource Gantt ─────────────────────────────────────────────
const RESOURCE_DATA = [
  { person: "Alice",  tasks: [{ label: "Research",  start: 0,  end: 5,  color: C.primary   }, { label: "Review",   start: 12, end: 16, color: C.tertiary  }] },
  { person: "Bob",    tasks: [{ label: "Design",    start: 4,  end: 12, color: C.secondary  }, { label: "Handoff",  start: 14, end: 16, color: C.quinary   }] },
  { person: "Carol",  tasks: [{ label: "API",       start: 6,  end: 14, color: C.tertiary   }] },
  { person: "Dave",   tasks: [{ label: "Frontend",  start: 11, end: 18, color: C.primary    }] },
  { person: "Eve",    tasks: [{ label: "QA",        start: 15, end: 20, color: C.quinary    }] },
]
const RES_TOTAL = 21

function ResourceGanttDemo() {
  const [hovered, setHovered] = useState<string | null>(null)
  const ROW = 36, LW = 72, PAD = 8, CELL = 20
  const H = RESOURCE_DATA.length * ROW + 32 + PAD * 2

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Resource Timeline</p>
        <p className="text-xs text-muted-foreground">Team allocation across 3-week sprint</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <svg width="100%" viewBox={`0 0 ${LW + RES_TOTAL * CELL + PAD * 2} ${H}`} className="block min-w-[420px]" role="img" aria-label="Resource Gantt">
          <rect x={0} y={0} width="100%" height={32} fill={C.bg} opacity={0.6} />
          {Array.from({ length: RES_TOTAL }).map((_, d) => (
            <g key={d}>
              <line x1={LW + PAD + d * CELL} y1={32} x2={LW + PAD + d * CELL} y2={H} stroke={C.border} strokeWidth={0.5} opacity={0.4} />
              <text x={LW + PAD + d * CELL + CELL / 2} y={20} textAnchor="middle" fontSize={8} fill={C.text} opacity={0.4}>D{d+1}</text>
            </g>
          ))}
          {RESOURCE_DATA.map((row, ri) => (
            <g key={row.person}>
              <rect x={0} y={32 + PAD + ri * ROW} width="100%" height={ROW} fill={ri % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)"} />
              <text x={LW - 8} y={32 + PAD + ri * ROW + ROW / 2 + 4} textAnchor="end" fontSize={10} fill={C.text} opacity={0.7} fontWeight={500}>{row.person}</text>
              {row.tasks.map(task => {
                const key = `${row.person}-${task.label}`
                const x = LW + PAD + task.start * CELL
                const w = (task.end - task.start) * CELL
                const y = 32 + PAD + ri * ROW + 6
                const isHov = hovered === key
                return (
                  <g key={key} onMouseEnter={() => setHovered(key)} onMouseLeave={() => setHovered(null)} style={{ cursor: "pointer" }}>
                    <rect x={x} y={y} width={w} height={ROW - 12} rx={4}
                      fill={task.color} fillOpacity={isHov ? 0.6 : 0.3}
                      stroke={task.color} strokeWidth={isHov ? 1.5 : 1} strokeOpacity={0.7} />
                    {w > 30 && (
                      <text x={x + w / 2} y={y + (ROW - 12) / 2 + 4} textAnchor="middle" fontSize={9} fill={C.text} opacity={0.9} fontWeight={600}>{task.label}</text>
                    )}
                  </g>
                )
              })}
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

// ── 12. Composed Chart (Bar + Line) ──────────────────────────────────────────
const COMPOSED_DATA = [
  { month: "Jan", sales: 4200, target: 3800, growth: 10 },
  { month: "Feb", sales: 5100, target: 4500, growth: 18 },
  { month: "Mar", sales: 4700, target: 5000, growth: -6 },
  { month: "Apr", sales: 6200, target: 5200, growth: 32 },
  { month: "May", sales: 5800, target: 5500, growth: 5  },
  { month: "Jun", sales: 7100, target: 6000, growth: 22 },
]
function ComposedChartDemo() {
  // Dual-axis composed chart: bars (sales/target) + line (growth) all in pure SVG
  const [tooltip, setTooltip] = React.useState<{x:number;y:number;idx:number} | null>(null)
  const svgRef = React.useRef<SVGSVGElement>(null)
  const PAD = { t: 12, r: 40, b: 28, l: 44 }
  const W = 560, H = 200
  const maxBar = Math.max(...COMPOSED_DATA.map(d => Math.max(d.sales, d.target))) * 1.15
  const minGrowth = Math.min(...COMPOSED_DATA.map(d => d.growth))
  const maxGrowth = Math.max(...COMPOSED_DATA.map(d => d.growth))
  const growthRange = maxGrowth - minGrowth || 1
  const n = COMPOSED_DATA.length
  const groupW = W / n
  const barW = groupW * 0.3
  const xMid = (i: number) => PAD.l + i * groupW + groupW / 2
  const yBar = (v: number) => PAD.t + H - (v / maxBar) * H
  const yLine = (v: number) => PAD.t + H - ((v - minGrowth) / growthRange) * H
  const linePts = COMPOSED_DATA.map((d, i) => [xMid(i), yLine(d.growth)] as [number,number])
  const barTicks = [0, 0.25, 0.5, 0.75, 1].map(t => Math.round(maxBar * t))
  const growthTicks = [minGrowth, (minGrowth+maxGrowth)/2, maxGrowth].map(v => Math.round(v))
  const series = [
    { key: "sales",  label: "Sales",    color: C.primary },
    { key: "target", label: "Target",   color: C.secondary },
    { key: "growth", label: "Growth %", color: C.tertiary },
  ]
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Sales vs Target + Growth</p>
        <p className="text-xs text-muted-foreground">Bar (sales & target) + Line (growth %)</p>
      </div>
      <div className="relative" style={{ height: H + PAD.t + PAD.b }}>
        <svg ref={svgRef} viewBox={`0 0 ${W + PAD.l + PAD.r} ${H + PAD.t + PAD.b}`} preserveAspectRatio="none" className="w-full h-full" onMouseLeave={() => setTooltip(null)}>
          {barTicks.map(v => (
            <g key={v}>
              <line x1={PAD.l} x2={W+PAD.l} y1={yBar(v)} y2={yBar(v)} stroke="currentColor" strokeOpacity={0.07} strokeWidth={1} />
              <text x={PAD.l-6} y={yBar(v)} textAnchor="end" dominantBaseline="middle" fontSize={9} fill="currentColor" fillOpacity={0.4}>${Math.round(v/1000)}k</text>
            </g>
          ))}
          {growthTicks.map((v, i) => (
            <text key={i} x={W+PAD.l+4} y={yLine(v)} dominantBaseline="middle" fontSize={9} fill={C.tertiary} fillOpacity={0.6}>{v}%</text>
          ))}
          {COMPOSED_DATA.map((d, i) => (
            <g key={i}>
              <rect x={xMid(i) - barW - 1} y={yBar(d.sales)} width={barW} height={H - (yBar(d.sales) - PAD.t)} fill={C.primary} fillOpacity={0.8} rx={2} />
              <rect x={xMid(i) + 1} y={yBar(d.target)} width={barW} height={H - (yBar(d.target) - PAD.t)} fill={C.secondary} fillOpacity={0.5} rx={2} />
              <text x={xMid(i)} y={H+PAD.t+16} textAnchor="middle" fontSize={10} fill="currentColor" fillOpacity={0.4}>{d.month}</text>
              <rect x={PAD.l + i*groupW} y={PAD.t} width={groupW} height={H} fill="transparent" onMouseMove={e => { if (!svgRef.current) return; const r = svgRef.current.getBoundingClientRect(); setTooltip({x: e.clientX-r.left, y: e.clientY-r.top}) }} />
            </g>
          ))}
          {/* zero reference line for growth */}
          <line x1={PAD.l} x2={W+PAD.l} y1={yLine(0)} y2={yLine(0)} stroke={C.tertiary} strokeOpacity={0.2} strokeWidth={1} strokeDasharray="4 3" />
          {/* growth line */}
          <path d={linePts.map(([x,y],i) => `${i===0?'M':'L'} ${x} ${y}`).join(' ')} fill="none" stroke={C.tertiary} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          {linePts.map(([x,y],i) => <circle key={i} cx={x} cy={y} r={3} fill={C.tertiary} />)}
        </svg>
      </div>
      <ChartLegend items={series} />
    </div>
  )
}

// ─── Charts registry ──────────────────────────────────────────────────────────
const CHARTS_REGISTRY: ComponentEntry[] = [
  {
    name: "Area Chart",
    description: "Smooth area chart with gradient fills and a Normal/Stacked toggle. Shows multi-series revenue vs expenses data.",
    category: "Charts",
    tags: ["chart", "area", "stacked", "gradient", "recharts"],
    fullWidth: true,
    preview: <AreaChartDemo />,
    code: `// AreaChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Bar Chart",
    description: "Grouped and stacked bar chart with a vertical/horizontal orientation toggle. Three-series quarterly data with NexUI BarChart.",
    category: "Charts",
    tags: ["chart", "bar", "grouped", "stacked", "horizontal", "recharts"],
    fullWidth: true,
    preview: <BarChartDemo />,
    code: `// BarChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Line Chart",
    description: "Multi-line chart with three team traces, a reference target line, and no-dot style for clean readability.",
    category: "Charts",
    tags: ["chart", "line", "multi-line", "reference", "recharts"],
    fullWidth: true,
    preview: <LineChartDemo />,
    code: `// LineChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Pie & Donut Chart",
    description: "Interactive pie/donut toggle with hover highlighting, center-text total, and a custom side legend with percentages.",
    category: "Charts",
    tags: ["chart", "pie", "donut", "interactive", "recharts"],
    fullWidth: true,
    preview: <PieChartDemo />,
    code: `// PieChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Radar Chart",
    description: "Dual-trace radar chart comparing individual scores vs industry benchmarks across six skill dimensions.",
    category: "Charts",
    tags: ["chart", "radar", "spider", "skills", "recharts"],
    fullWidth: true,
    preview: <RadarChartDemo />,
    code: `// RadarChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Radial Bar Chart",
    description: "Circular progress rings for four system resources (Storage, Memory, CPU, Network) with a matching linear progress legend.",
    category: "Charts",
    tags: ["chart", "radial", "circular", "progress", "recharts"],
    fullWidth: true,
    preview: <RadialBarChartDemo />,
    code: `// RadialBarChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Scatter Chart",
    description: "Two-segment bubble scatter chart with semi-transparent fills and axis domains from 0–100.",
    category: "Charts",
    tags: ["chart", "scatter", "bubble", "recharts"],
    fullWidth: true,
    preview: <ScatterChartDemo />,
    code: `// ScatterChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Treemap",
    description: "Proportional treemap with custom SVG cell content, tinted fills per segment, and label overflow protection.",
    category: "Charts",
    tags: ["chart", "treemap", "hierarchy", "recharts"],
    fullWidth: true,
    preview: <TreemapChartDemo />,
    code: `// TreemapChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Funnel Chart",
    description: "Conversion funnel from Visitors through Retention with percentage drop-off labels and a step-by-step side legend.",
    category: "Charts",
    tags: ["chart", "funnel", "conversion", "recharts"],
    fullWidth: true,
    preview: <FunnelChartDemo />,
    code: `// FunnelChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Gantt Chart",
    description: "Full Gantt chart with 10 tasks across 5 groups, dependency arrows, progress fills, day/week zoom toggle, and a Today marker — rendered as scalable SVG.",
    category: "Charts",
    tags: ["chart", "gantt", "project", "timeline", "dependencies", "svg"],
    fullWidth: true,
    preview: <GanttChartDemo />,
    code: `// GanttChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Resource Timeline",
    description: "Resource/person-based Gantt (swim-lane view) showing five team members' tasks across a 3-week sprint with hover highlights.",
    category: "Charts",
    tags: ["chart", "gantt", "resource", "timeline", "swimlane", "svg"],
    fullWidth: true,
    preview: <ResourceGanttDemo />,
    code: `// ResourceGanttDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Composed Chart",
    description: "Combined bar + line chart on dual Y-axes — Sales/Target bars on the left axis, Growth % line on the right, with a zero reference line.",
    category: "Charts",
    tags: ["chart", "composed", "bar", "line", "dual-axis", "recharts"],
    fullWidth: true,
    preview: <ComposedChartDemo />,
    code: `// ComposedChartDemo — see lib/components-registry.tsx`,
  },
]

COMPONENTS.push(...CHARTS_REGISTRY)

// ���─��� Advanced Charts (custom — no shadcn, pure Recharts + SVG) ───────────────

// Shared custom tooltip ──────────────────────────────────��─────────────────────
function ChartTip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-border bg-card px-3 py-2 shadow-xl text-xs">
      {label != null && <p className="font-semibold text-foreground mb-1">{label}</p>}
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-1.5">
          <span className="size-2 rounded-sm shrink-0" style={{ background: p.color || p.fill }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-medium text-foreground">{typeof p.value === "number" ? p.value.toLocaleString() : p.value}</span>
        </div>
      ))}
    </div>
  )
}

// Custom Legend row ────────────────────────────────────────���───────────────────
function ChartLegRow({ items }: { items: { color: string; label: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center pt-1">
      {items.map(it => (
        <div key={it.label} className="flex items-center gap-1.5">
          <span className="size-2 rounded-sm" style={{ background: it.color }} />
          <span className="text-[10px] text-muted-foreground">{it.label}</span>
        </div>
      ))}
    </div>
  )
}

// ── 13. Waterfall Chart (custom SVG) ─────────────────────────────────────────
const WATERFALL_DATA = [
  { label: "Jan",      value: 4200,  isTotal: false },
  { label: "Feb",      value: 800,   isTotal: false },
  { label: "Mar",      value: -600,  isTotal: false },
  { label: "Apr",      value: 1100,  isTotal: false },
  { label: "May",      value: -300,  isTotal: false },
  { label: "Jun",      value: 900,   isTotal: false },
  { label: "Total",    value: 0,     isTotal: true  },
]

function WaterfallChartDemo() {
  const W = 560, H = 220, PAD = { t: 20, r: 20, b: 40, l: 52 }
  const barW = 48, gap = (W - PAD.l - PAD.r - barW * WATERFALL_DATA.length) / (WATERFALL_DATA.length - 1)

  // compute running totals
  let running = 0
  const items = WATERFALL_DATA.map(d => {
    const base = d.isTotal ? 0 : running
    const v = d.isTotal ? running : d.value
    if (!d.isTotal) running += d.value
    return { ...d, base, v, end: base + v }
  })
  // fix total bar
  items[items.length - 1].v = running

  const allVals = items.flatMap(d => [d.base, d.base + d.v])
  const minV = Math.min(0, ...allVals), maxV = Math.max(...allVals)
  const range = maxV - minV || 1
  const yScale = (v: number) => PAD.t + (1 - (v - minV) / range) * (H - PAD.t - PAD.b)
  const zero = yScale(0)

  const ticks = 5
  const tickVals = Array.from({ length: ticks + 1 }, (_, i) => minV + (i / ticks) * range)

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Waterfall Chart</p>
        <p className="text-xs text-muted-foreground">Cumulative revenue change Jan–Jun</p>
      </div>
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full block min-w-[360px]" role="img" aria-label="Waterfall chart">
          {/* Y grid + labels */}
          {tickVals.map((v, i) => {
            const y = yScale(v)
            return (
              <g key={i}>
                <line x1={PAD.l} y1={y} x2={W - PAD.r} y2={y} stroke={C.border} strokeWidth={0.5} opacity={0.5} />
                <text x={PAD.l - 6} y={y + 4} textAnchor="end" fontSize={9} fill={C.text} opacity={0.45}>{v >= 1000 || v <= -1000 ? `${(v/1000).toFixed(0)}k` : v}</text>
              </g>
            )
          })}
          {/* Zero line */}
          <line x1={PAD.l} y1={zero} x2={W - PAD.r} y2={zero} stroke={C.muted} strokeWidth={1} opacity={0.6} />

          {/* Bars */}
          {items.map((d, i) => {
            const x = PAD.l + i * (barW + gap)
            const top = yScale(Math.max(d.base, d.base + d.v))
            const bot = yScale(Math.min(d.base, d.base + d.v))
            const bh = Math.max(bot - top, 1)
            const color = d.isTotal ? C.muted : d.v >= 0 ? C.tertiary : C.quinary
            return (
              <g key={d.label}>
                {/* Connector line to previous bar */}
                {i > 0 && !d.isTotal && (
                  <line
                    x1={PAD.l + (i - 1) * (barW + gap) + barW} y1={yScale(d.base)}
                    x2={x} y2={yScale(d.base)}
                    stroke={C.muted} strokeWidth={1} strokeDasharray="3 2" opacity={0.4}
                  />
                )}
                <rect x={x} y={top} width={barW} height={bh} rx={4} fill={color} fillOpacity={0.7} />
                {/* Value label */}
                <text x={x + barW / 2} y={top - 4} textAnchor="middle" fontSize={9} fill={C.text} opacity={0.7} fontWeight={600}>
                  {d.v >= 0 ? "+" : ""}{d.v >= 1000 ? `${(d.v/1000).toFixed(1)}k` : d.v}
                </text>
                {/* X label */}
                <text x={x + barW / 2} y={H - PAD.b + 14} textAnchor="middle" fontSize={10} fill={C.text} opacity={0.5}>{d.label}</text>
              </g>
            )
          })}
        </svg>
      </div>
      <ChartLegRow items={[{ color: C.tertiary, label: "Gain" }, { color: C.quinary, label: "Loss" }, { color: C.muted, label: "Total" }]} />
    </div>
  )
}

// ── 14. Heatmap / Calendar Heatmap ───────────────────────────────────────────
const HEATMAP_WEEKS = 16
const HEATMAP_DAYS = 7
// Deterministic seeded values — avoids SSR/client hydration mismatch from Math.random()
const HEATMAP_SEED = [
  7,11,4,14,0,0,3, 11,1,8,5,16,12,2, 3,14,17,13,1,2,4,
  2,7,15,8,1,0,18, 12,0,6,3,8,8,4,  9,1,0,7,9,8,13,
  14,3,2,12,13,0,14, 4,0,16,0,13,13, 3,4,10,3,0,13,7,
  3,9,18,6,0,1,7,  14,3,0,9,18,15,14, 4,1,2,12,0,0,2,
  0,6,6,5,13,4,2,   0,9,18,6,0,0,7,  14,3,1,5,17,2,4,
  5,8,11,6,0,0,18,
]
const HEATMAP_DATA = Array.from({ length: HEATMAP_WEEKS * HEATMAP_DAYS }, (_, i) => ({
  week: Math.floor(i / HEATMAP_DAYS),
  day: i % HEATMAP_DAYS,
  value: HEATMAP_SEED[i % HEATMAP_SEED.length],
}))
const HEAT_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const HEAT_MONTHS = ["Jan", "Mar", "May", "Jul"]

function HeatmapChartDemo() {
  const [hov, setHov] = useState<{ week: number; day: number } | null>(null)
  const CELL = 18, GAP = 3, LW = 28, TH = 20
  const W = LW + HEATMAP_WEEKS * (CELL + GAP), H = TH + HEATMAP_DAYS * (CELL + GAP)
  const maxVal = Math.max(...HEATMAP_DATA.map(d => d.value))

  function alpha(v: number) { return v === 0 ? 0.05 : 0.15 + (v / maxVal) * 0.75 }

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Activity Heatmap</p>
        <p className="text-xs text-muted-foreground">Contribution graph — 16 weeks</p>
      </div>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H + 16}`} className="block" style={{ minWidth: W }} role="img" aria-label="Activity heatmap">
          {/* Month labels */}
          {HEAT_MONTHS.map((m, i) => (
            <text key={m} x={LW + (i * (HEATMAP_WEEKS / HEAT_MONTHS.length)) * (CELL + GAP)} y={12} fontSize={9} fill={C.text} opacity={0.4}>{m}</text>
          ))}
          {/* Day labels */}
          {HEAT_LABELS.map((d, i) => (
            i % 2 === 1 && <text key={d} x={LW - 4} y={TH + i * (CELL + GAP) + CELL * 0.75} textAnchor="end" fontSize={8} fill={C.text} opacity={0.35}>{d}</text>
          ))}
          {/* Cells */}
          {HEATMAP_DATA.map(cell => {
            const isHov = hov?.week === cell.week && hov?.day === cell.day
            return (
              <rect
                key={`${cell.week}-${cell.day}`}
                x={LW + cell.week * (CELL + GAP)} y={TH + cell.day * (CELL + GAP)}
                width={CELL} height={CELL} rx={3}
                fill={C.primary} fillOpacity={alpha(cell.value)}
                stroke={isHov ? C.primary : "transparent"} strokeWidth={1.5}
                onMouseEnter={() => setHov({ week: cell.week, day: cell.day })}
                onMouseLeave={() => setHov(null)}
                style={{ cursor: "pointer" }}
                role="gridcell" aria-label={`${HEAT_LABELS[cell.day]} week ${cell.week + 1}: ${cell.value} contributions`}
              />
            )
          })}
        </svg>
      </div>
      {/* Legend scale */}
      <div className="flex items-center gap-1.5 px-1">
        <span className="text-[10px] text-muted-foreground">Less</span>
        {[0.05, 0.25, 0.45, 0.65, 0.9].map((a, i) => (
          <span key={i} className="size-3 rounded-sm" style={{ background: C.primary, opacity: a }} />
        ))}
        <span className="text-[10px] text-muted-foreground">More</span>
      </div>
    </div>
  )
}

// ── 15. Bubble Chart ──────────��─���─���──────��──��──────────���─����───────────────────
const BUBBLE_DATA = [
  { x: 20, y: 65, z: 80,  name: "Product A", color: C.primary    },
  { x: 45, y: 40, z: 120, name: "Product B", color: C.secondary   },
  { x: 70, y: 75, z: 60,  name: "Product C", color: C.tertiary    },
  { x: 30, y: 25, z: 200, name: "Product D", color: C.quaternary  },
  { x: 80, y: 50, z: 90,  name: "Product E", color: C.quinary     },
  { x: 55, y: 85, z: 45,  name: "Product F", color: C.primary     },
  { x: 15, y: 80, z: 150, name: "Product G", color: C.secondary   },
]

function BubbleChartDemo() {
  const [hov, setHov] = useState<string | null>(null)
  const W = 560, H = 260, PAD = { t: 20, r: 20, b: 36, l: 44 }
  const iW = W - PAD.l - PAD.r, iH = H - PAD.t - PAD.b
  const xS = (v: number) => PAD.l + (v / 100) * iW
  const yS = (v: number) => H - PAD.b - (v / 100) * iH
  const rS = (v: number) => 6 + (v / 200) * 28
  const ticks5 = [0, 25, 50, 75, 100]

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Bubble Chart</p>
        <p className="text-xs text-muted-foreground">Market share (size) vs satisfaction (y) vs price (x)</p>
      </div>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full block min-w-[320px]" role="img" aria-label="Bubble chart">
          {ticks5.map(t => (
            <g key={t}>
              <line x1={PAD.l} y1={yS(t)} x2={W - PAD.r} y2={yS(t)} stroke={C.border} strokeWidth={0.5} opacity={0.4} />
              <text x={PAD.l - 6} y={yS(t) + 4} textAnchor="end" fontSize={9} fill={C.text} opacity={0.4}>{t}</text>
              <line x1={xS(t)} y1={PAD.t} x2={xS(t)} y2={H - PAD.b} stroke={C.border} strokeWidth={0.5} opacity={0.4} />
              <text x={xS(t)} y={H - PAD.b + 14} textAnchor="middle" fontSize={9} fill={C.text} opacity={0.4}>{t}</text>
            </g>
          ))}
          {/* Axis labels */}
          <text x={W / 2} y={H - 2} textAnchor="middle" fontSize={9} fill={C.text} opacity={0.35}>Price Index</text>
          <text transform={`translate(10,${H / 2}) rotate(-90)`} textAnchor="middle" fontSize={9} fill={C.text} opacity={0.35}>Satisfaction</text>

          {BUBBLE_DATA.map(d => {
            const isHov = hov === d.name
            return (
              <g key={d.name} onMouseEnter={() => setHov(d.name)} onMouseLeave={() => setHov(null)} style={{ cursor: "pointer" }}>
                <circle cx={xS(d.x)} cy={yS(d.y)} r={rS(d.z)} fill={d.color} fillOpacity={isHov ? 0.5 : 0.25} stroke={d.color} strokeWidth={isHov ? 2 : 1} strokeOpacity={0.7} />
                {isHov && (
                  <text x={xS(d.x)} y={yS(d.y) + 4} textAnchor="middle" fontSize={9} fill={C.text} fontWeight={700}>{d.name}</text>
                )}
              </g>
            )
          })}
        </svg>
      </div>
      <ChartLegRow items={BUBBLE_DATA.map(d => ({ color: d.color, label: d.name }))} />
    </div>
  )
}

// ── 16. Candlestick / OHLC Chart ─────────────────────────────────────────────
const CANDLES = [
  { d: "Jan 13", o: 142, h: 151, l: 138, c: 149 },
  { d: "Jan 14", o: 149, h: 155, l: 143, c: 145 },
  { d: "Jan 15", o: 145, h: 148, l: 139, c: 141 },
  { d: "Jan 16", o: 141, h: 150, l: 140, c: 148 },
  { d: "Jan 17", o: 148, h: 158, l: 147, c: 156 },
  { d: "Jan 20", o: 156, h: 162, l: 153, c: 160 },
  { d: "Jan 21", o: 160, h: 163, l: 155, c: 157 },
  { d: "Jan 22", o: 157, h: 165, l: 154, c: 163 },
  { d: "Jan 23", o: 163, h: 168, l: 158, c: 162 },
  { d: "Jan 24", o: 162, h: 170, l: 160, c: 167 },
]

function CandlestickChartDemo() {
  const [hov, setHov] = useState<number | null>(null)
  const W = 560, H = 240, PAD = { t: 20, r: 20, b: 36, l: 52 }
  const iW = W - PAD.l - PAD.r, iH = H - PAD.t - PAD.b
  const allVals = CANDLES.flatMap(c => [c.h, c.l])
  const minV = Math.min(...allVals) - 2, maxV = Math.max(...allVals) + 2
  const range = maxV - minV
  const yS = (v: number) => PAD.t + (1 - (v - minV) / range) * iH
  const step = iW / CANDLES.length
  const candleW = step * 0.55
  const ticks = [135, 145, 155, 165]

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Candlestick Chart</p>
        <p className="text-xs text-muted-foreground">OHLC — stock price Jan 13–24</p>
      </div>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full block min-w-[360px]" role="img" aria-label="Candlestick chart">
          {ticks.map(t => (
            <g key={t}>
              <line x1={PAD.l} y1={yS(t)} x2={W - PAD.r} y2={yS(t)} stroke={C.border} strokeWidth={0.5} opacity={0.4} />
              <text x={PAD.l - 6} y={yS(t) + 4} textAnchor="end" fontSize={9} fill={C.text} opacity={0.4}>{t}</text>
            </g>
          ))}
          {CANDLES.map((c, i) => {
            const cx = PAD.l + i * step + step / 2
            const isUp = c.c >= c.o
            const color = isUp ? C.tertiary : C.quinary
            const bodyTop = yS(Math.max(c.o, c.c))
            const bodyH = Math.max(Math.abs(yS(c.o) - yS(c.c)), 1)
            const isHov = hov === i
            return (
              <g key={i} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} style={{ cursor: "pointer" }}>
                {/* Wick */}
                <line x1={cx} y1={yS(c.h)} x2={cx} y2={yS(c.l)} stroke={color} strokeWidth={1.5} opacity={0.7} />
                {/* Body */}
                <rect x={cx - candleW / 2} y={bodyTop} width={candleW} height={bodyH} rx={2}
                  fill={color} fillOpacity={isHov ? 0.8 : 0.5} stroke={color} strokeWidth={1} strokeOpacity={0.8} />
                {/* Tooltip */}
                {isHov && (
                  <g>
                    <rect x={cx - 38} y={PAD.t - 2} width={76} height={38} rx={5} fill={C.bg} stroke={C.border} strokeWidth={0.8} opacity={0.95} />
                    <text x={cx} y={PAD.t + 11} textAnchor="middle" fontSize={8} fill={C.text} opacity={0.7}>{c.d}</text>
                    <text x={cx} y={PAD.t + 24} textAnchor="middle" fontSize={8} fill={color} fontWeight={700}>O:{c.o} H:{c.h} L:{c.l} C:{c.c}</text>
                  </g>
                )}
                <text x={cx} y={H - PAD.b + 14} textAnchor="middle" fontSize={7.5} fill={C.text} opacity={0.4}>{c.d.split(" ")[1]}</text>
              </g>
            )
          })}
        </svg>
      </div>
      <ChartLegRow items={[{ color: C.tertiary, label: "Bullish" }, { color: C.quinary, label: "Bearish" }]} />
    </div>
  )
}

// ── 17. Histogram ─────────────────────────────────────────────────────────────
// Fully static dataset — no Math.random(), guarantees SSR/client match
const HIST_DATA = [
  { label: "20", count: 4  },
  { label: "28", count: 11 },
  { label: "36", count: 23 },
  { label: "44", count: 34 },
  { label: "52", count: 42 },
  { label: "60", count: 38 },
  { label: "68", count: 27 },
  { label: "76", count: 14 },
  { label: "84", count: 6  },
  { label: "92", count: 2  },
]

function HistogramChartDemo() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Histogram</p>
        <p className="text-xs text-muted-foreground">Frequency distribution of 200 samples</p>
      </div>
      <BarChart
        data={HIST_DATA}
        xKey="label"
        series={[{ key: "count", label: "Count", color: C.primary }]}
        height={220}
        barGap={1}
      />
    </div>
  )
}

// ── 18. Stacked 100% Bar Chart ────────────────────────────────────────────────
const S100_DATA = [
  { q: "Q1", design: 35, dev: 45, qa: 20 },
  { q: "Q2", design: 28, dev: 52, qa: 20 },
  { q: "Q3", design: 40, dev: 38, qa: 22 },
  { q: "Q4", design: 30, dev: 50, qa: 20 },
]
// Normalise to 100%
const S100_NORM = S100_DATA.map(d => {
  const t = d.design + d.dev + d.qa
  return { q: d.q, Design: +(d.design / t * 100).toFixed(1), Dev: +(d.dev / t * 100).toFixed(1), QA: +(d.qa / t * 100).toFixed(1) }
})

function Stacked100BarDemo() {
  const series = [
    { key: "Design", label: "Design", color: C.primary   },
    { key: "Dev",    label: "Dev",    color: C.secondary  },
    { key: "QA",     label: "QA",     color: C.tertiary   },
  ]
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">100% Stacked Bar</p>
        <p className="text-xs text-muted-foreground">Team effort distribution by quarter</p>
      </div>
      <BarChart
        data={S100_NORM}
        xKey="q"
        series={series}
        stacked
        yFormatter={v => `${v}%`}
        height={220}
      />
      <ChartLegend items={series} />
    </div>
  )
}

// ── 19. Step / Staircase Line Chart ───��────────────────���─────────────────────
const STEP_DATA = [
  { t: "00:00", price: 100 },
  { t: "04:00", price: 100 },
  { t: "06:00", price: 115 },
  { t: "08:00", price: 115 },
  { t: "10:00", price: 98  },
  { t: "12:00", price: 98  },
  { t: "14:00", price: 122 },
  { t: "16:00", price: 122 },
  { t: "18:00", price: 108 },
  { t: "20:00", price: 108 },
  { t: "22:00", price: 130 },
  { t: "24:00", price: 130 },
]

function StepLineChartDemo() {
  const series = [{ key: "price", label: "Price", color: C.quaternary }]
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Step Line Chart</p>
        <p className="text-xs text-muted-foreground">Dynamic pricing changes over 24 hours</p>
      </div>
      <LineChart
        data={STEP_DATA}
        xKey="t"
        series={series}
        step
        height={220}
      />
    </div>
  )
}

// ── 20. Dual-axis Combined Chart ──────────────────────────────────────────────
const DUAL_DATA = [
  { m: "Jan", rev: 42000, users: 1200 },
  { m: "Feb", rev: 58000, users: 1800 },
  { m: "Mar", rev: 52000, users: 2100 },
  { m: "Apr", rev: 71000, users: 2600 },
  { m: "May", rev: 65000, users: 3200 },
  { m: "Jun", rev: 83000, users: 4100 },
]

function DualAxisChartDemo() {
  // Custom dual-axis: bars for rev (left scale) + line for users (right scale)
  const [tooltip, setTooltip] = React.useState<{x:number;y:number;idx:number}|null>(null)
  const svgRef = React.useRef<SVGSVGElement>(null)
  const PAD = { t: 12, r: 44, b: 28, l: 44 }
  const W = 560, H = 180
  const maxRev = Math.max(...DUAL_DATA.map(d => d.rev)) * 1.15
  const maxUsers = Math.max(...DUAL_DATA.map(d => d.users)) * 1.15
  const n = DUAL_DATA.length
  const gW = W / n
  const bW = gW * 0.45
  const xMid = (i: number) => PAD.l + i * gW + gW / 2
  const yRev = (v: number) => PAD.t + H - (v / maxRev) * H
  const yUsers = (v: number) => PAD.t + H - (v / maxUsers) * H
  const linePts = DUAL_DATA.map((d, i) => [xMid(i), yUsers(d.users)] as [number, number])
  const revTicks = [0, 0.5, 1].map(t => Math.round(maxRev * t))
  const userTicks = [0, 0.5, 1].map(t => Math.round(maxUsers * t))
  const legItems = [{ color: C.primary, label: "Revenue" }, { color: C.quaternary, label: "Active Users" }]
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Dual-Axis Chart</p>
        <p className="text-xs text-muted-foreground">Revenue (bars, left) vs Active users (line, right)</p>
      </div>
      <div className="relative" style={{ height: H + PAD.t + PAD.b }}>
        <svg ref={svgRef} viewBox={`0 0 ${W + PAD.l + PAD.r} ${H + PAD.t + PAD.b}`} preserveAspectRatio="none" className="w-full h-full" onMouseLeave={() => setTooltip(null)}>
          {revTicks.map(v => (
            <g key={v}>
              <line x1={PAD.l} x2={W + PAD.l} y1={yRev(v)} y2={yRev(v)} stroke="currentColor" strokeOpacity={0.07} strokeWidth={1} />
              <text x={PAD.l - 5} y={yRev(v)} textAnchor="end" dominantBaseline="middle" fontSize={9} fill="currentColor" fillOpacity={0.4}>${Math.round(v/1000)}k</text>
            </g>
          ))}
          {userTicks.map((v, i) => (
            <text key={i} x={W + PAD.l + 4} y={yUsers(v)} dominantBaseline="middle" fontSize={9} fill={C.quaternary} fillOpacity={0.6}>{(v/1000).toFixed(1)}k</text>
          ))}
          {DUAL_DATA.map((d, i) => (
            <g key={i}>
              <rect x={xMid(i) - bW / 2} y={yRev(d.rev)} width={bW} height={H - (yRev(d.rev) - PAD.t)} fill={C.primary} fillOpacity={0.65} rx={3} />
              <text x={xMid(i)} y={H + PAD.t + 16} textAnchor="middle" fontSize={10} fill="currentColor" fillOpacity={0.4}>{d.m}</text>
            </g>
          ))}
          <path d={linePts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ")} fill="none" stroke={C.quaternary} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
          {linePts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={3.5} fill={C.quaternary} />)}
        </svg>
      </div>
      <ChartLegend items={legItems} />
    </div>
  )
}

// ── 21. Polar Area / Rose Chart ───────────────────────────────────────────────
const ROSE_DATA = [
  { subject: "North",  A: 85, B: 60 },
  { subject: "NE",     A: 72, B: 90 },
  { subject: "East",   A: 55, B: 78 },
  { subject: "SE",     A: 92, B: 50 },
  { subject: "South",  A: 68, B: 82 },
  { subject: "SW",     A: 48, B: 95 },
  { subject: "West",   A: 78, B: 65 },
  { subject: "NW",     A: 62, B: 72 },
]

function RoseChartDemo() {
  const series = [
    { key: "A", label: "Season A", color: C.primary,   fillOpacity: 0.25 },
    { key: "B", label: "Season B", color: C.secondary, fillOpacity: 0.20 },
  ]
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Polar Area / Rose Chart</p>
        <p className="text-xs text-muted-foreground">Wind direction distribution (two datasets)</p>
      </div>
      <div className="flex justify-center">
        <RadarChart
          data={ROSE_DATA}
          labelKey="subject"
          series={series}
          domain={[0, 100]}
          size={260}
        />
      </div>
      <ChartLegend items={series} />
    </div>
  )
}

// ── 22. Gantt — Milestone / Phase view ───────────────────────────────────────
const MILESTONES = [
  { phase: "Discovery",    start: 0,  end: 4,  milestones: [{ day: 3, label: "Brief signed" }] },
  { phase: "Design",       start: 3,  end: 10, milestones: [{ day: 7, label: "Wireframes" }, { day: 10, label: "Design QA" }] },
  { phase: "Development",  start: 9,  end: 22, milestones: [{ day: 15, label: "Beta"  }, { day: 22, label: "Code freeze" }] },
  { phase: "Testing",      start: 20, end: 26, milestones: [{ day: 24, label: "UAT pass" }] },
  { phase: "Launch",       start: 25, end: 28, milestones: [{ day: 28, label: "Go live" }] },
]
const MS_TOTAL = 30
const MS_COLORS = [C.primary, C.secondary, C.tertiary, C.quaternary, C.quinary]

function MilestoneGanttDemo() {
  const [hov, setHov] = useState<string | null>(null)
  const ROW = 44, LW = 96, PAD = 8, CELL = 14
  const H = MILESTONES.length * ROW + 32 + PAD * 2

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Milestone Gantt</p>
        <p className="text-xs text-muted-foreground">Phase + milestone diamonds — 30-day project</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <svg viewBox={`0 0 ${LW + MS_TOTAL * CELL + PAD * 2} ${H}`} className="block min-w-[440px]" role="img" aria-label="Milestone Gantt">
          {/* Header */}
          <rect x={0} y={0} width="100%" height={32} fill={C.bg} opacity={0.8} />
          {Array.from({ length: MS_TOTAL }).map((_, d) => (
            <g key={d}>
              <line x1={LW + PAD + d * CELL} y1={32} x2={LW + PAD + d * CELL} y2={H} stroke={C.border} strokeWidth={0.5} opacity={0.3} />
              {(d + 1) % 5 === 0 && <text x={LW + PAD + d * CELL - CELL / 2} y={20} textAnchor="middle" fontSize={8} fill={C.text} opacity={0.4}>D{d+1}</text>}
            </g>
          ))}
          {/* Today */}
          <line x1={LW + PAD + 14 * CELL} y1={0} x2={LW + PAD + 14 * CELL} y2={H} stroke={C.quaternary} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.5} />

          {MILESTONES.map((phase, pi) => {
            const color = MS_COLORS[pi % MS_COLORS.length]
            const y = 32 + PAD + pi * ROW
            const barY = y + 10
            const x = LW + PAD + phase.start * CELL
            const w = (phase.end - phase.start) * CELL
            return (
              <g key={phase.phase}>
                {/* Row bg */}
                <rect x={0} y={y} width="100%" height={ROW} fill={pi % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)"} />
                {/* Phase label */}
                <text x={LW - 8} y={barY + 10} textAnchor="end" fontSize={10} fill={C.text} opacity={0.7} fontWeight={500}>{phase.phase}</text>
                {/* Phase bar */}
                <rect x={x} y={barY} width={w} height={16} rx={6}
                  fill={color} fillOpacity={0.2} stroke={color} strokeWidth={1} strokeOpacity={0.5} />
                {/* Progress fill (60%) */}
                <rect x={x} y={barY} width={w * 0.6} height={16} rx={6}
                  fill={color} fillOpacity={0.5} />
                {/* Milestones */}
                {phase.milestones.map(ms => {
                  const mx = LW + PAD + ms.day * CELL
                  const key = `${phase.phase}-${ms.label}`
                  const isHov = hov === key
                  return (
                    <g key={key} onMouseEnter={() => setHov(key)} onMouseLeave={() => setHov(null)} style={{ cursor: "pointer" }}>
                      {/* Diamond */}
                      <polygon
                        points={`${mx},${barY - 4} ${mx + 6},${barY + 8} ${mx},${barY + 20} ${mx - 6},${barY + 8}`}
                        fill={isHov ? color : C.bg} stroke={color} strokeWidth={1.5}
                      />
                      {/* Label */}
                      {isHov && (
                        <g>
                          <rect x={mx - 30} y={barY - 22} width={60} height={14} rx={3} fill={C.bg} stroke={C.border} strokeWidth={0.8} opacity={0.95} />
                          <text x={mx} y={barY - 12} textAnchor="middle" fontSize={8} fill={C.text} fontWeight={600}>{ms.label}</text>
                        </g>
                      )}
                    </g>
                  )
                })}
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

// ── 23. Network / Dependency Graph (SVG) ─────────────────────────────────────
const NODES = [
  { id: "api",      label: "API",       x: 280, y: 120, color: C.primary    },
  { id: "auth",     label: "Auth",      x: 100, y: 60,  color: C.secondary  },
  { id: "db",       label: "DB",        x: 100, y: 200, color: C.tertiary   },
  { id: "cache",    label: "Cache",     x: 460, y: 60,  color: C.quaternary },
  { id: "worker",   label: "Worker",    x: 460, y: 200, color: C.quinary    },
  { id: "frontend", label: "Frontend",  x: 280, y: 280, color: C.secondary  },
]
const EDGES = [
  { from: "frontend", to: "api" },
  { from: "api",      to: "auth"   },
  { from: "api",      to: "db"     },
  { from: "api",      to: "cache"  },
  { from: "api",      to: "worker" },
  { from: "auth",     to: "db"     },
  { from: "worker",   to: "db"     },
  { from: "worker",   to: "cache"  },
]

function NetworkGraphDemo() {
  const [hov, setHov] = useState<string | null>(null)
  const nodeMap = Object.fromEntries(NODES.map(n => [n.id, n]))

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">Network / Dependency Graph</p>
        <p className="text-xs text-muted-foreground">Service architecture — hover nodes to highlight</p>
      </div>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 560 360" className="w-full block min-w-[360px]" role="img" aria-label="Network graph">
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={C.muted} opacity={0.5} />
            </marker>
          </defs>
          {EDGES.map(e => {
            const a = nodeMap[e.from], b = nodeMap[e.to]
            const isLit = hov === e.from || hov === e.to
            // shorten line to not overlap node circles
            const dx = b.x - a.x, dy = b.y - a.y, dist = Math.sqrt(dx*dx+dy*dy)
            const r = 26
            const x1 = a.x + (dx/dist)*r, y1 = a.y + (dy/dist)*r
            const x2 = b.x - (dx/dist)*(r+6), y2 = b.y - (dy/dist)*(r+6)
            return (
              <line key={`${e.from}-${e.to}`} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={isLit ? C.primary : C.muted} strokeWidth={isLit ? 2 : 1}
                strokeOpacity={isLit ? 0.7 : 0.3} markerEnd="url(#arrow)" />
            )
          })}
          {NODES.map(n => {
            const isHov = hov === n.id
            const connected = new Set(EDGES.filter(e => e.from === n.id || e.to === n.id).flatMap(e => [e.from, e.to]))
            const dim = hov && !connected.has(n.id)
            return (
              <g key={n.id} onMouseEnter={() => setHov(n.id)} onMouseLeave={() => setHov(null)} style={{ cursor: "pointer" }}>
                <circle cx={n.x} cy={n.y} r={26} fill={n.color} fillOpacity={dim ? 0.1 : isHov ? 0.4 : 0.2} stroke={n.color} strokeWidth={isHov ? 2 : 1} strokeOpacity={dim ? 0.2 : 0.6} />
                <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={11} fill={C.text} fontWeight={600} opacity={dim ? 0.3 : 0.9}>{n.label}</text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

// ─── Additional Charts registry ───────────────────────────────────────────────
const EXTRA_CHARTS_REGISTRY: ComponentEntry[] = [
  {
    name: "Waterfall Chart",
    description: "Custom SVG waterfall chart showing cumulative revenue gains and losses with connector lines between bars and a running total column.",
    category: "Charts",
    tags: ["chart", "waterfall", "cumulative", "finance", "svg"],
    fullWidth: true,
    preview: <WaterfallChartDemo />,
    code: `// WaterfallChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Activity Heatmap",
    description: "GitHub-style calendar heatmap over 16 weeks. Custom SVG cells with opacity-scaled fill and an interactive hover state.",
    category: "Charts",
    tags: ["chart", "heatmap", "calendar", "activity", "svg"],
    fullWidth: true,
    preview: <HeatmapChartDemo />,
    code: `// HeatmapChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Bubble Chart",
    description: "Pure SVG bubble chart encoding three dimensions: x-axis price, y-axis satisfaction, and bubble radius as market share. Hover to reveal product names.",
    category: "Charts",
    tags: ["chart", "bubble", "scatter", "multi-dimensional", "svg"],
    fullWidth: true,
    preview: <BubbleChartDemo />,
    code: `// BubbleChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Candlestick Chart",
    description: "OHLC candlestick chart with green/red candle bodies, high/low wicks, and an on-hover tooltip showing all four price values.",
    category: "Charts",
    tags: ["chart", "candlestick", "ohlc", "stock", "finance", "svg"],
    fullWidth: true,
    preview: <CandlestickChartDemo />,
    code: `// CandlestickChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Histogram",
    description: "Frequency distribution histogram built with Recharts BarChart with zero gap between bins and a sample of 200 data points.",
    category: "Charts",
    tags: ["chart", "histogram", "distribution", "frequency", "recharts"],
    fullWidth: true,
    preview: <HistogramChartDemo />,
    code: `// HistogramChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "100% Stacked Bar",
    description: "Proportional stacked bar chart normalised to 100% per quarter, showing relative team effort split across Design, Dev, and QA.",
    category: "Charts",
    tags: ["chart", "bar", "stacked", "100%", "proportional", "recharts"],
    fullWidth: true,
    preview: <Stacked100BarDemo />,
    code: `// Stacked100BarDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Step Line Chart",
    description: "Staircase-type line chart using Recharts stepAfter interpolation for discrete pricing or status changes over time.",
    category: "Charts",
    tags: ["chart", "line", "step", "staircase", "pricing", "recharts"],
    fullWidth: true,
    preview: <StepLineChartDemo />,
    code: `// StepLineChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Dual-Axis Chart",
    description: "ComposedChart with revenue bars on the left Y-axis and active user count line on the right Y-axis — two independent scales on one canvas.",
    category: "Charts",
    tags: ["chart", "dual-axis", "composed", "bar", "line", "recharts"],
    fullWidth: true,
    preview: <DualAxisChartDemo />,
    code: `// DualAxisChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Polar Area / Rose Chart",
    description: "Eight-direction polar area chart (wind rose) built with Recharts RadarChart, comparing two seasonal datasets with filled area traces.",
    category: "Charts",
    tags: ["chart", "polar", "rose", "radar", "wind", "recharts"],
    fullWidth: true,
    preview: <RoseChartDemo />,
    code: `// RoseChartDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Milestone Gantt",
    description: "Phase + milestone SVG Gantt chart with diamond milestone markers, 60% progress fills inside phase bars, and a Today reference line. Hover diamonds for labels.",
    category: "Charts",
    tags: ["chart", "gantt", "milestone", "project", "svg"],
    fullWidth: true,
    preview: <MilestoneGanttDemo />,
    code: `// MilestoneGanttDemo — see lib/components-registry.tsx`,
  },
  {
    name: "Network Graph",
    description: "SVG service-architecture dependency graph with directed arrow edges, hover-triggered node and edge highlighting, and automatic edge shortening to avoid node overlap.",
    category: "Charts",
    tags: ["chart", "network", "graph", "dependency", "architecture", "svg"],
    fullWidth: true,
    preview: <NetworkGraphDemo />,
    code: `// NetworkGraphDemo — see lib/components-registry.tsx`,
  },
]

COMPONENTS.push(...EXTRA_CHARTS_REGISTRY)

// ─────────────────────────────────────────────────────────────────────────────
// CAROUSEL DEMOS
// ─────────────────────────────────────────────────────────────────────────────

// ── Shared hook: arrow-key + drag/swipe navigation ───────────────────────────
function useCarousel(count: number, loop = true) {
  const [idx, setIdx] = React.useState(0)
  const [dragging, setDragging] = React.useState(false)
  const dragStart = React.useRef(0)

  const prev = React.useCallback(() =>
    setIdx(i => loop ? (i - 1 + count) % count : Math.max(0, i - 1)), [count, loop])
  const next = React.useCallback(() =>
    setIdx(i => loop ? (i + 1) % count : Math.min(count - 1, i + 1)), [count, loop])
  const go = React.useCallback((n: number) => setIdx(n), [])

  const onKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft")  { e.preventDefault(); prev() }
    if (e.key === "ArrowRight") { e.preventDefault(); next() }
  }, [prev, next])

  const pointerDown = React.useCallback((x: number) => {
    setDragging(true)
    dragStart.current = x
  }, [])
  const pointerUp = React.useCallback((x: number) => {
    setDragging(false)
    const delta = dragStart.current - x
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
  }, [next, prev])

  return { idx, prev, next, go, dragging, onKeyDown, pointerDown, pointerUp }
}

// ── 1. Basic Image Carousel ───────────────────────────────────────────────────
const SLIDES_BASIC = [
  { bg: "oklch(0.18 0.06 250)", label: "Aurora Peaks",   sub: "Norwegian highlands at dusk" },
  { bg: "oklch(0.18 0.06 300)", label: "Violet Tide",    sub: "Pacific coastline at sunset" },
  { bg: "oklch(0.18 0.06 170)", label: "Emerald Basin",  sub: "Rainforest canopy, Borneo" },
  { bg: "oklch(0.18 0.06 40)",  label: "Amber Flats",    sub: "Saharan dunes, golden hour" },
  { bg: "oklch(0.18 0.06 340)", label: "Crimson Cliffs", sub: "Utah canyon country" },
]

function CarouselBasic() {
  const { idx, prev, next, go, onKeyDown, pointerDown, pointerUp } = useCarousel(SLIDES_BASIC.length)
  const [auto, setAuto] = React.useState(true)

  React.useEffect(() => {
    if (!auto) return
    const t = setInterval(() => next(), 3200)
    return () => clearInterval(t)
  }, [auto, next])

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-semibold text-foreground">Image Carousel</p>
        <button
          onClick={() => setAuto(v => !v)}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          aria-label={auto ? "Pause autoplay" : "Start autoplay"}
        >
          {auto ? <Pause size={12} /> : <Play size={12} />}
          {auto ? "Pause" : "Play"}
        </button>
      </div>

      {/* Fixed-height track so background colours are always visible */}
      <div
        className="relative w-full overflow-hidden rounded-2xl select-none"
        style={{ height: 220 }}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Image carousel"
        onMouseDown={e => pointerDown(e.clientX)}
        onMouseUp={e => pointerUp(e.clientX)}
        onTouchStart={e => pointerDown(e.touches[0].clientX)}
        onTouchEnd={e => pointerUp(e.changedTouches[0].clientX)}
      >
        {/* Sliding strip */}
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ width: `${SLIDES_BASIC.length * 100}%`, transform: `translateX(-${(idx * 100) / SLIDES_BASIC.length}%)` }}
        >
          {SLIDES_BASIC.map((s, i) => (
            <div
              key={i}
              className="relative h-full flex items-end p-6 shrink-0"
              style={{ width: `${100 / SLIDES_BASIC.length}%`, backgroundColor: s.bg }}
            >
              {/* Dot grid texture */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden="true">
                <defs>
                  <pattern id={`dot${i}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#dot${i})`} />
              </svg>
              <div className="relative z-10">
                <p className="text-xl font-bold text-white drop-shadow">{s.label}</p>
                <p className="text-sm text-white/60 mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>

        {/* Counter badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-xs text-white tabular-nums">
          {idx + 1} / {SLIDES_BASIC.length}
        </div>
      </div>

      {/* Dot nav */}
      <div className="flex items-center justify-center gap-1.5" role="tablist" aria-label="Slide indicators">
        {SLIDES_BASIC.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === idx}
            onClick={() => go(i)}
            className={cn(
              "rounded-full transition-all duration-300",
              i === idx ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground"
            )}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── 2. Cards Carousel (peek effect) ──────────────────────────────────────────
const CARDS_DATA = [
  { title: "Design System",      desc: "Unified token-based design language across all platforms.",  icon: Layers,     color: "oklch(0.55 0.21 250)" },
  { title: "Component Library",  desc: "Over 120 production-ready accessible React components.",     icon: Code2,      color: "oklch(0.52 0.18 300)" },
  { title: "Performance",        desc: "Sub-50ms interaction budgets enforced by CI benchmarks.",    icon: Zap,        color: "oklch(0.55 0.18 170)" },
  { title: "Edge Runtime",       desc: "Deploy instantly to 100+ global edge locations.",            icon: Server,     color: "oklch(0.60 0.20 40)"  },
  { title: "Analytics",          desc: "Real-time insights without compromising user privacy.",      icon: TrendingUp, color: "oklch(0.55 0.15 340)" },
  { title: "Search",             desc: "Full-text search with typo-tolerance out of the box.",       icon: Search,     color: "oklch(0.55 0.21 250)" },
]

function CarouselCards() {
  const { idx, prev, next, go, onKeyDown, pointerDown, pointerUp } = useCarousel(CARDS_DATA.length)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between px-1">
        <div>
          <p className="text-sm font-semibold text-foreground">Feature Cards</p>
          <p className="text-xs text-muted-foreground">Peek carousel with side previews</p>
        </div>
        <div className="flex gap-1">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-border transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-border transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Clip wrapper — overflow-hidden prevents peek cards bleeding outside */}
      <div
        className="relative w-full overflow-hidden select-none"
        style={{ height: 190 }}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Feature cards carousel"
        onMouseDown={e => pointerDown(e.clientX)}
        onMouseUp={e => pointerUp(e.clientX)}
        onTouchStart={e => pointerDown(e.touches[0].clientX)}
        onTouchEnd={e => pointerUp(e.changedTouches[0].clientX)}
      >
        {CARDS_DATA.map((card, i) => {
          const offset = i - idx
          const Icon = card.icon
          // Position: active card centred; ±1 peek in from either side
          // translateX is in px so it stays relative to the wrapper, not the card's own width
          const translateX = offset === 0 ? "0%" : offset > 0 ? "88%" : "-88%"
          const scale   = offset === 0 ? 1 : 0.9
          const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.4 : 0
          const zIndex  = offset === 0 ? 10 : Math.abs(offset) === 1 ? 5 : 0
          const pointer = offset !== 0 ? "pointer-events-none" : ""

          return (
            <div
              key={i}
              aria-hidden={offset !== 0}
              className={cn("absolute inset-y-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]", pointer)}
              style={{
                left: "8%",
                right: "8%",
                transform: `translateX(${translateX}) scale(${scale})`,
                transformOrigin: offset > 0 ? "left center" : "right center",
                opacity,
                zIndex,
              }}
            >
              <div
                className="w-full h-full rounded-2xl border border-border flex flex-col p-6 gap-4"
                style={{ background: `color-mix(in oklch, ${card.color} 12%, var(--color-card))` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `color-mix(in oklch, ${card.color} 22%, transparent)` }}
                >
                  <Icon size={18} style={{ color: card.color }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">{card.title}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Dot nav */}
      <div className="flex items-center justify-center gap-1.5" role="tablist">
        {CARDS_DATA.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === idx}
            onClick={() => go(i)}
            className={cn(
              "rounded-full transition-all duration-300",
              i === idx ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground"
            )}
            aria-label={`Card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── 3. Testimonials Carousel ──────────────────────────────────────────────────
const TESTIMONIALS = [
  { name: "Sarah Okonkwo", role: "Staff Eng, Vercel",     initials: "SO", color: "oklch(0.62 0.21 250)", rating: 5, text: "NexUI cut our design-to-production time in half. The components are thoughtfully built — every edge case handled, every accessibility concern addressed." },
  { name: "Mateo Rivera",  role: "CTO, Pulse Analytics",  initials: "MR", color: "oklch(0.55 0.18 300)", rating: 5, text: "We migrated an entire product to NexUI in two sprints. The consistency across components is remarkable and the dark-mode support is flawless." },
  { name: "Jin-Ho Park",   role: "Lead Designer, Linear", initials: "JP", color: "oklch(0.60 0.18 170)", rating: 5, text: "Finally a component library that doesn't fight your design system. The token architecture maps perfectly onto our brand guidelines." },
  { name: "Amara Diallo",  role: "Indie Hacker",          initials: "AD", color: "oklch(0.65 0.20 40)",  rating: 4, text: "Shipped my SaaS MVP in 3 weeks. NexUI handled all the UI heavy lifting so I could focus on the product. Absolutely worth it." },
]

function CarouselTestimonials() {
  const { idx, prev, next, go, onKeyDown } = useCarousel(TESTIMONIALS.length)
  const t = TESTIMONIALS[idx]

  return (
    <div
      className="w-full flex flex-col gap-4 focus:outline-none"
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Testimonials carousel"
    >
      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-semibold text-foreground">Testimonials</p>
        <span className="text-xs text-muted-foreground tabular-nums">{idx + 1} / {TESTIMONIALS.length}</span>
      </div>

      <div className="relative rounded-2xl border border-border bg-card p-6 overflow-hidden min-h-[190px] flex flex-col justify-between gap-4">
        <Quote size={52} className="absolute top-4 right-4 opacity-[0.06] text-foreground" aria-hidden="true" />

        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className={i < t.rating ? "text-amber-400" : "text-border"} aria-hidden="true" />
            ))}
          </div>
          <p className="text-sm text-foreground leading-relaxed">&ldquo;{t.text}&rdquo;</p>
        </div>

        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: t.color }}>
              {t.initials}
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
          <div className="flex gap-1">
            <button onClick={prev} className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-border transition-colors" aria-label="Previous">
              <ChevronLeft size={14} />
            </button>
            <button onClick={next} className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-border transition-colors" aria-label="Next">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5" role="tablist">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === idx}
            onClick={() => go(i)}
            className={cn("rounded-full transition-all duration-300", i === idx ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground")}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── 4. Product Showcase Carousel ──────────────────────────────────────────────
const PRODUCTS = [
  { name: "Arc Pro Headphones",   price: "$349", badge: "New",     stars: 4.9, reviews: 1248, color: "oklch(0.22 0.05 250)", accent: "oklch(0.62 0.21 250)" },
  { name: "Studio Monitor XL",    price: "$899", badge: "Popular", stars: 4.7, reviews: 867,  color: "oklch(0.22 0.05 300)", accent: "oklch(0.55 0.18 300)" },
  { name: "Compact Desk Speaker", price: "$199", badge: "Sale",    stars: 4.5, reviews: 2031, color: "oklch(0.22 0.05 170)", accent: "oklch(0.60 0.18 170)" },
  { name: "Wireless Earbuds Max", price: "$249", badge: "Limited", stars: 4.8, reviews: 512,  color: "oklch(0.22 0.05 40)",  accent: "oklch(0.65 0.20 40)"  },
]

function CarouselProduct() {
  const { idx, prev, next, go, onKeyDown, pointerDown, pointerUp } = useCarousel(PRODUCTS.length)
  const [liked, setLiked] = React.useState<Set<number>>(new Set())
  const p = PRODUCTS[idx]

  return (
    <div
      className="w-full flex flex-col gap-4 focus:outline-none"
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Product carousel"
    >
      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-semibold text-foreground">Product Showcase</p>
        <div className="flex gap-1">
          <button onClick={prev} className="w-7 h-7 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-border transition-colors" aria-label="Previous product">
            <ChevronLeft size={14} />
          </button>
          <button onClick={next} className="w-7 h-7 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-border transition-colors" aria-label="Next product">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div
        className="w-full rounded-2xl border border-border overflow-hidden select-none"
        onMouseDown={e => pointerDown(e.clientX)}
        onMouseUp={e => pointerUp(e.clientX)}
        onTouchStart={e => pointerDown(e.touches[0].clientX)}
        onTouchEnd={e => pointerUp(e.changedTouches[0].clientX)}
      >
        <div className="relative flex items-center justify-center" style={{ height: 180, backgroundColor: p.color }}>
          <svg viewBox="0 0 120 80" className="w-40 opacity-70" aria-hidden="true">
            <ellipse cx="60" cy="72" rx="44" ry="5" fill="black" fillOpacity="0.25" />
            <rect x="20" y="18" width="80" height="48" rx="12" fill={p.accent} fillOpacity="0.95" />
            <rect x="34" y="32" width="52" height="20" rx="6" fill="white" fillOpacity="0.1" />
            <circle cx="60" cy="42" r="8" fill="white" fillOpacity="0.15" />
          </svg>
          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style={{ backgroundColor: p.accent }}>
            {p.badge}
          </span>
          <button
            onClick={() => setLiked(s => { const n = new Set(s); n.has(idx) ? n.delete(idx) : n.add(idx); return n })}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition-colors"
            aria-label={liked.has(idx) ? "Unlike" : "Like"}
          >
            <Heart size={14} className={cn("transition-colors", liked.has(idx) ? "text-red-400" : "text-white/70")} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {PRODUCTS.map((_, i) => (
              <button key={i} onClick={() => go(i)} className={cn("rounded-full transition-all duration-300", i === idx ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30")} aria-label={`Product ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="p-5 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-foreground">{p.name}</p>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} className={i < Math.round(p.stars) ? "text-amber-400" : "text-border"} aria-hidden="true" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{p.stars} ({p.reviews.toLocaleString()})</span>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-lg font-bold text-foreground">{p.price}</span>
            <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 5. Filmstrip / Thumbnail Carousel ────────────────────────────────────────
const FILM_SLIDES = [
  { label: "Chapter 01", title: "The Beginning",  duration: "3:42", color: "oklch(0.20 0.07 250)" },
  { label: "Chapter 02", title: "Rising Action",  duration: "5:18", color: "oklch(0.20 0.07 280)" },
  { label: "Chapter 03", title: "The Conflict",   duration: "4:55", color: "oklch(0.20 0.07 310)" },
  { label: "Chapter 04", title: "Dark Night",     duration: "6:02", color: "oklch(0.20 0.07 170)" },
  { label: "Chapter 05", title: "The Revelation", duration: "4:10", color: "oklch(0.20 0.07 40)"  },
  { label: "Chapter 06", title: "Resolution",     duration: "5:33", color: "oklch(0.20 0.07 340)" },
]

function CarouselFilmstrip() {
  const [active, setActive] = React.useState(0)
  const [playing, setPlaying] = React.useState(false)
  const thumbsRef = React.useRef<HTMLDivElement>(null)
  const { prev, next } = useCarousel(FILM_SLIDES.length)
  const s = FILM_SLIDES[active]

  React.useEffect(() => {
    const el = thumbsRef.current?.children[active] as HTMLElement | undefined
    el?.scrollIntoView({ inline: "nearest", behavior: "smooth" })
  }, [active])

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-semibold text-foreground">Filmstrip Carousel</p>
        <span className="text-xs text-muted-foreground tabular-nums">{active + 1} / {FILM_SLIDES.length}</span>
      </div>

      {/* Main stage */}
      <div
        className="relative rounded-2xl overflow-hidden flex items-center justify-center"
        style={{ height: 196, backgroundColor: s.color }}
      >
        {/* Film-strip decoration */}
        <div className="absolute inset-y-0 left-0 w-5 flex flex-col justify-around py-2 opacity-20" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => <div key={i} className="w-3 h-2 rounded-sm bg-white mx-auto" />)}
        </div>
        <div className="absolute inset-y-0 right-0 w-5 flex flex-col justify-around py-2 opacity-20" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => <div key={i} className="w-3 h-2 rounded-sm bg-white mx-auto" />)}
        </div>

        <button
          onClick={() => setPlaying(v => !v)}
          className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/25 transition-colors"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing
            ? <Pause size={22} className="text-white" />
            : <Play size={22} className="text-white translate-x-0.5" />
          }
        </button>

        <div className="absolute bottom-3 left-6 right-6 flex items-end justify-between">
          <div>
            <p className="text-xs text-white/50">{s.label}</p>
            <p className="text-base font-bold text-white">{s.title}</p>
          </div>
          <div className="flex items-center gap-1 text-white/60">
            <Clock size={11} aria-hidden="true" />
            <span className="text-xs tabular-nums">{s.duration}</span>
          </div>
        </div>

        <button
          onClick={() => setActive(i => (i - 1 + FILM_SLIDES.length) % FILM_SLIDES.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          aria-label="Previous chapter"
        >
          <ChevronLeft size={15} />
        </button>
        <button
          onClick={() => setActive(i => (i + 1) % FILM_SLIDES.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          aria-label="Next chapter"
        >
          <ChevronRight size={15} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        ref={thumbsRef}
        className="flex gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
        role="tablist"
        aria-label="Chapter list"
      >
        {FILM_SLIDES.map((f, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "shrink-0 relative rounded-xl overflow-hidden transition-all duration-200 w-20 h-14 border-2",
              i === active ? "border-primary opacity-100 scale-100" : "border-transparent opacity-50 hover:opacity-80"
            )}
            style={{ backgroundColor: f.color }}
            aria-label={f.title}
          >
            <span className="absolute bottom-1 inset-x-1 text-center text-[9px] text-white/80 font-medium truncate">{f.title}</span>
            {i === active && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center">
                <Play size={6} className="text-white translate-x-px" aria-hidden="true" />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── 6. Stacked Cards Carousel ─────────────────────────────────────────────���───
const STACK_SLIDES = [
  { title: "Onboarding",  step: "01", desc: "Set up your workspace in minutes with our guided flow.",          color: "oklch(0.62 0.21 250)" },
  { title: "Invite Team", step: "02", desc: "Add teammates with role-based permissions and SSO support.",      color: "oklch(0.55 0.18 300)" },
  { title: "Import Data", step: "03", desc: "Connect your existing tools via 200+ native integrations.",       color: "oklch(0.60 0.18 170)" },
  { title: "Launch",      step: "04", desc: "Ship to production with one click. Rollbacks always included.",   color: "oklch(0.65 0.20 40)"  },
]

function CarouselStacked() {
  const { idx, next, go, onKeyDown, pointerDown, pointerUp } = useCarousel(STACK_SLIDES.length, false)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between px-1">
        <div>
          <p className="text-sm font-semibold text-foreground">Stacked Cards</p>
          <p className="text-xs text-muted-foreground">Tap to advance through steps</p>
        </div>
        <span className="text-xs tabular-nums text-muted-foreground">{idx + 1} / {STACK_SLIDES.length}</span>
      </div>

      {/* Stack container — needs explicit height so absolute children size correctly */}
      <div
        className="relative w-full select-none"
        style={{ height: 200 }}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Stacked cards carousel"
        onMouseDown={e => pointerDown(e.clientX)}
        onMouseUp={e => pointerUp(e.clientX)}
        onTouchStart={e => pointerDown(e.touches[0].clientX)}
        onTouchEnd={e => pointerUp(e.changedTouches[0].clientX)}
      >
        {STACK_SLIDES.map((s, i) => {
          const offset = i - idx
          // Only render active + up to 2 upcoming cards; hide past cards entirely
          if (offset < 0 || offset > 2) return null
          const yOff   = offset * 10
          const scale  = 1 - offset * 0.05
          const zIndex = STACK_SLIDES.length - offset
          const opacity = 1 - offset * 0.25
          const isActive = offset === 0

          return (
            <div
              key={i}
              className="absolute inset-x-0 rounded-2xl border border-border overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                top: yOff,
                height: 180,
                transform: `scale(${scale})`,
                transformOrigin: "top center",
                zIndex,
                opacity,
                backgroundColor: `color-mix(in oklch, ${s.color} 10%, var(--color-card))`,
                cursor: isActive ? "default" : "pointer",
              }}
              onClick={() => !isActive && next()}
              aria-hidden={!isActive}
            >
              <div className="flex flex-col justify-between h-full p-6">
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-black leading-none" style={{ color: `color-mix(in oklch, ${s.color} 20%, transparent)` }}>
                    {s.step}
                  </span>
                  <div
                    className="w-8 h-8 rounded-xl border border-border flex items-center justify-center"
                    style={{ backgroundColor: `color-mix(in oklch, ${s.color} 18%, transparent)` }}
                  >
                    <ArrowRight size={14} style={{ color: s.color }} aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{s.title}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress bars */}
      <div className="flex items-center gap-2 px-1" role="tablist">
        {STACK_SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === idx}
            onClick={() => go(i)}
            className={cn(
              "flex-1 h-1 rounded-full transition-all duration-300",
              i < idx ? "bg-primary" : i === idx ? "bg-primary/60" : "bg-border"
            )}
            aria-label={`Step ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Registry entries ─���────────────────────────────────────────────────────────
const CAROUSEL_REGISTRY: ComponentEntry[] = [
  {
    name: "Carousel — Basic",
    description: "Auto-playing image carousel with smooth slide transitions, arrow controls, drag-to-swipe, dot navigation, and a play/pause toggle.",
    category: "Carousel",
    tags: ["carousel", "slider", "image", "autoplay", "swipe"],
    fullWidth: true,
    preview: <CarouselBasic />,
    code: `// CarouselBasic`,
  },
  {
    name: "Carousel — Cards Peek",
    description: "Feature-card carousel with a peek effect showing partial adjacent cards, scale-and-fade depth, and icon-led content cards.",
    category: "Carousel",
    tags: ["carousel", "cards", "peek", "slide", "feature"],
    fullWidth: true,
    preview: <CarouselCards />,
    code: `// CarouselCards`,
  },
  {
    name: "Carousel — Testimonials",
    description: "Single-card testimonial carousel with star ratings, avatar initials, decorative quote mark, and directional controls.",
    category: "Carousel",
    tags: ["carousel", "testimonial", "review", "quote", "stars"],
    fullWidth: true,
    preview: <CarouselTestimonials />,
    code: `// CarouselTestimonials`,
  },
  {
    name: "Carousel — Product",
    description: "E-commerce product carousel with drag-to-swipe, badge overlay, likeable heart toggle, star ratings, and add-to-cart action.",
    category: "Carousel",
    tags: ["carousel", "product", "ecommerce", "shop", "swipe"],
    fullWidth: true,
    preview: <CarouselProduct />,
    code: `// CarouselProduct`,
  },
  {
    name: "Carousel — Filmstrip",
    description: "Video chapter carousel with a large main stage, play/pause toggle, duration badge, and a scrollable filmstrip thumbnail track.",
    category: "Carousel",
    tags: ["carousel", "filmstrip", "video", "thumbnail", "chapters"],
    fullWidth: true,
    preview: <CarouselFilmstrip />,
    code: `// CarouselFilmstrip`,
  },
  {
    name: "Carousel — Stacked",
    description: "Stacked perspective card carousel for step-by-step flows — tap any back card to advance, progress bar shows completion.",
    category: "Carousel",
    tags: ["carousel", "stacked", "3d", "steps", "onboarding"],
    fullWidth: true,
    preview: <CarouselStacked />,
    code: `// CarouselStacked`,
  },
]

COMPONENTS.push(...CAROUSEL_REGISTRY)

