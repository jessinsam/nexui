"use client"

import { useState } from "react"
import { Eye, EyeOff, Github, Check, ArrowRight, User, Building2, Code2, ChevronLeft, ChevronRight, Clock, CalendarDays, X, ChevronDown, Search, Globe, Layers, Zap, Server, Sun, Moon, SlidersHorizontal, Mic, Command, Filter, LayoutGrid, List, Columns3, Table2, GripVertical, ArrowUpDown, ArrowUp, ArrowDown, Tag, Star, MoreHorizontal, Circle, CheckCircle2, AlertCircle, PauseCircle, LayoutKanban, Plus, TrendingUp } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// ─── Compact previews (non-auth) ──────────────────────────────────────────────

function ButtonPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <button className="text-xs px-4 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">Default</button>
      <button className="text-xs px-4 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium">Secondary</button>
      <button className="text-xs px-4 py-1.5 rounded-md border border-border text-foreground hover:bg-secondary transition-colors font-medium">Outline</button>
      <button className="text-xs px-4 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors font-medium">Ghost</button>
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
    { initials: "CK", cls: "bg-[oklch(0.65_0.22_300)]" },
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
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <select value={val} onChange={(e) => setVal(e.target.value)} className="h-9 w-full rounded-lg border border-border bg-secondary px-3 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
        {["Next.js", "Remix", "Astro", "SvelteKit"].map((f) => <option key={f}>{f}</option>)}
      </select>
      <p className="text-xs text-muted-foreground">Selected: <span className="text-foreground font-medium">{val}</span></p>
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

function SignInFull() {
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

// ─── 3. Calendar With Events ──────────────────────────────────────────────────

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
    <div className="relative w-72">
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
    <div className="relative w-72">
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
    <div className="relative w-72">
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-multiselectable="true"
        className="w-full flex items-center justify-between gap-2 pl-4 pr-5 py-3 rounded-xl bg-secondary border border-border text-sm hover:border-primary/40 transition-colors min-h-[46px]"
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
      </button>
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
    <div className="relative w-72">
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
        aria-label={`Toggle ${label}`}
        className={cn(
          "relative w-10 h-5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0",
          checked ? "bg-primary" : "bg-muted border border-border"
        )}
      >
        <span className={cn(
          "absolute top-0.5 size-4 rounded-full bg-white shadow transition-transform duration-200",
          checked ? "translate-x-5" : "translate-x-0.5"
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
            "absolute top-0.5 size-5 rounded-full bg-white shadow transition-transform duration-200",
            on ? "translate-x-5" : "translate-x-0.5"
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

const STATUS_CONFIG: Record<Status, { color: string; icon: React.ReactNode }> = {
  "Todo":        { color: "text-muted-foreground", icon: <Circle size={12} /> },
  "In Progress": { color: "text-blue-400", icon: <PauseCircle size={12} /> },
  "In Review":   { color: "text-yellow-400", icon: <AlertCircle size={12} /> },
  "Done":        { color: "text-green-400", icon: <CheckCircle2 size={12} /> },
}

const PRIORITY_CONFIG: Record<Priority, { dot: string; label: string }> = {
  "Low":    { dot: "bg-muted-foreground", label: "Low" },
  "Medium": { dot: "bg-yellow-400", label: "Medium" },
  "High":   { dot: "bg-red-400", label: "High" },
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
  const { dot, label } = PRIORITY_CONFIG[p]
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <span className={cn("size-1.5 rounded-full shrink-0", dot)} />
      {label}
    </span>
  )
}

function StatusBadge({ s }: { s: Status }) {
  const { color, icon } = STATUS_CONFIG[s]
  return (
    <span className={cn("inline-flex items-center gap-1 text-xs font-medium", color)}>
      {icon}
      {s}
    </span>
  )
}

// ─── Filter + Sort toolbar (shared) ───────────────────────────────────────────

type SortKey = "title" | "priority" | "date" | "status"
type SortDir = "asc" | "desc"

const PRIORITY_ORDER: Record<Priority, number> = { High: 0, Medium: 1, Low: 2 }
const STATUS_ORDER: Record<Status, number> = { "In Progress": 0, "In Review": 1, "Todo": 2, "Done": 3 }

function useFilterSort(initial: Task[]) {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<Status | "All">("All")
  const [priorityFilter, setPriorityFilter] = useState<Priority | "All">("All")
  const [sortKey, setSortKey] = useState<SortKey>("date")
  const [sortDir, setSortDir] = useState<SortDir>("asc")

  const filtered = initial
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

  return { search, setSearch, statusFilter, setStatusFilter, priorityFilter, setPriorityFilter, sortKey, setSortKey, sortDir, setSortDir, filtered }
}

function Toolbar({
  search, setSearch,
  statusFilter, setStatusFilter,
  priorityFilter, setPriorityFilter,
  sortKey, setSortKey,
  sortDir, setSortDir,
}: ReturnType<typeof useFilterSort>) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Search */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary border border-border flex-1 min-w-[140px]">
        <Search size={13} className="text-muted-foreground shrink-0" />
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Filter tasks..." aria-label="Filter tasks"
          className="bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none w-full"
        />
        {search && <button onClick={() => setSearch("")} aria-label="Clear"><X size={11} className="text-muted-foreground" /></button>}
      </div>
      {/* Status filter */}
      <select
        value={statusFilter}
        onChange={e => setStatusFilter(e.target.value as Status | "All")}
        aria-label="Filter by status"
        className="px-3 py-2 rounded-lg bg-secondary border border-border text-xs text-foreground outline-none cursor-pointer"
      >
        {(["All", "Todo", "In Progress", "In Review", "Done"] as const).map(s => <option key={s}>{s}</option>)}
      </select>
      {/* Priority filter */}
      <select
        value={priorityFilter}
        onChange={e => setPriorityFilter(e.target.value as Priority | "All")}
        aria-label="Filter by priority"
        className="px-3 py-2 rounded-lg bg-secondary border border-border text-xs text-foreground outline-none cursor-pointer"
      >
        {(["All", "High", "Medium", "Low"] as const).map(p => <option key={p}>{p}</option>)}
      </select>
      {/* Sort key */}
      <select
        value={sortKey}
        onChange={e => setSortKey(e.target.value as SortKey)}
        aria-label="Sort by"
        className="px-3 py-2 rounded-lg bg-secondary border border-border text-xs text-foreground outline-none cursor-pointer"
      >
        {(["date", "title", "priority", "status"] as const).map(k => (
          <option key={k} value={k}>{k.charAt(0).toUpperCase() + k.slice(1)}</option>
        ))}
      </select>
      {/* Sort direction */}
      <button
        onClick={() => setSortDir(d => d === "asc" ? "desc" : "asc")}
        aria-label={sortDir === "asc" ? "Sort descending" : "Sort ascending"}
        className="p-2 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground transition-colors"
      >
        {sortDir === "asc" ? <ArrowUp size={13} /> : <ArrowDown size={13} />}
      </button>
    </div>
  )
}

// ─── View: Kanban ─────────────────────────────────────────────────────────────

const KANBAN_COLS: Status[] = ["Todo", "In Progress", "In Review", "Done"]

function ViewKanban() {
  const state = useFilterSort(TASKS)
  return (
    <div className="flex flex-col gap-4 w-full">
      <Toolbar {...state} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {KANBAN_COLS.map(col => {
          const colTasks = state.filtered.filter(t => t.status === col)
          const { color, icon } = STATUS_CONFIG[col]
          return (
            <div key={col} className="flex flex-col gap-2">
              {/* Column header */}
              <div className="flex items-center justify-between px-1">
                <span className={cn("flex items-center gap-1.5 text-xs font-semibold", color)}>
                  {icon} {col}
                </span>
                <span className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded-full border border-border">{colTasks.length}</span>
              </div>
              {/* Cards */}
              <div className="flex flex-col gap-2 min-h-[80px]">
                {colTasks.map(t => (
                  <div key={t.id} className="p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-150 cursor-default group">
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
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── View: Board (wider swimlanes) ────────────────────────────────────────────

function ViewBoard() {
  const state = useFilterSort(TASKS)
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
                  <div key={t.id} className="flex-shrink-0 w-52 p-3 rounded-lg border border-border bg-secondary hover:border-primary/30 transition-all duration-150 cursor-default">
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
  const state = useFilterSort(TASKS)
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

// ─── View: List ───────────────────────────────────────────────────────────────

function ViewList() {
  const state = useFilterSort(TASKS)
  return (
    <div className="flex flex-col gap-4 w-full">
      <Toolbar {...state} />
      <div className="flex flex-col rounded-xl border border-border overflow-hidden">
        {state.filtered.map((t, i) => (
          <div
            key={t.id}
            className={cn(
              "flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors cursor-default",
              i < state.filtered.length - 1 && "border-b border-border"
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
  const state = useFilterSort(TASKS)

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
              <tr
                key={t.id}
                className={cn("group hover:bg-secondary/40 transition-colors cursor-default", i < state.filtered.length - 1 && "border-b border-border")}
              >
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

// ─── All Views Switcher (master showcase) ─────────────────────────────────────

type ViewMode = "kanban" | "board" | "cards" | "list" | "table"

const VIEW_TABS: { id: ViewMode; label: string; icon: React.ReactNode }[] = [
  { id: "kanban", label: "Kanban", icon: <LayoutKanban size={13} /> },
  { id: "board",  label: "Board",  icon: <Columns3 size={13} /> },
  { id: "cards",  label: "Cards",  icon: <LayoutGrid size={13} /> },
  { id: "list",   label: "List",   icon: <List size={13} /> },
  { id: "table",  label: "Table",  icon: <Table2 size={13} /> },
]

function ViewSwitcher() {
  const [view, setView] = useState<ViewMode>("kanban")
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* View tabs */}
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
      {/* Active view */}
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

export const CATEGORIES = ["All", "Auth", "Calendar", "Dropdown", "Search", "Toggle", "Palette", "Data Views", "Inputs", "Display", "Feedback", "Navigation"] as const

export const COMPONENTS: ComponentEntry[] = [
  {
    name: "Sign In", description: "Email + password login with GitHub OAuth and show/hide password toggle.", category: "Auth", tags: ["auth", "login", "form", "password", "github"], href: "/sign-in", fullWidth: true, preview: <SignInFull />,
    code: `"use client"
import { useState } from "react"
import { Eye, EyeOff, ArrowRight, Github } from "lucide-react"

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
import { Eye, EyeOff, ArrowRight, Github, Check } from "lucide-react"

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
import { ArrowRight, Github, Building2, User, Code2 } from "lucide-react"
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
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"]
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]

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
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"]
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]

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
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"]
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]

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
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"]
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]

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
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"]
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]

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
import { ChevronLeft, ChevronRight, CalendarDays, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"]
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]
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
import { ChevronDown, Check } from "lucide-react"
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
import { ChevronDown, Check, Search } from "lucide-react"
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
import { ChevronDown, Check, X } from "lucide-react"
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
import { ChevronDown, Check, Globe, Layers, Zap, Server } from "lucide-react"
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
import { Search, X } from "lucide-react"
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
import { Command } from "lucide-react"
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
import { Search, X } from "lucide-react"
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
import { Search, Filter } from "lucide-react"
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
import { Sun, Moon } from "lucide-react"
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
import { Sun, Moon, SlidersHorizontal } from "lucide-react"
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
      <button onClick={() => setChecked(c => !c)} role="switch" aria-checked={checked} aria-label={\`Toggle \${label}\`}
        className={cn("relative w-10 h-5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0",
          checked ? "bg-primary" : "bg-muted border border-border")}>
        <span className={cn("absolute top-0.5 size-4 rounded-full bg-white shadow transition-transform duration-200",
          checked ? "translate-x-5" : "translate-x-0.5")} />
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
import { Sun, Moon } from "lucide-react"
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
import { Search, X, Star, ArrowUp, ArrowDown, ArrowUpDown, GripVertical, LayoutKanban, Columns3, LayoutGrid, List, Table2, Circle, PauseCircle, AlertCircle, CheckCircle2 } from "lucide-react"
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
    { id: "kanban", label: "Kanban", icon: <LayoutKanban size={13} /> },
    { id: "board",  label: "Board",  icon: <Columns3 size={13} /> },
    { id: "cards",  label: "Cards",  icon: <LayoutGrid size={13} /> },
    { id: "list",   label: "List",   icon: <List size={13} /> },
    { id: "table",  label: "Table",  icon: <Table2 size={13} /> },
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
    name: "Checkbox", description: "Multi-select control with accessible toggle states.", category: "Inputs", tags: ["checkbox", "toggle", "select", "form"], preview: <CheckboxPreview />,
    code: `"use client"
import { useState } from "react"
import { Check } from "lucide-react"
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

