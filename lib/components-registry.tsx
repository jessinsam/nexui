"use client"

import { useState } from "react"
import { Eye, EyeOff, Github, Check, ArrowRight, User, Building2, Code2, ChevronLeft, ChevronRight, Clock, CalendarDays, X } from "lucide-react"
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

// ─── Calendar helpers ─────────────────────────────────────────────────────────

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

// ─── 6. Booking / Availability Calendar ──────────────────────────────────────

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

// ─── Registry ─────────────────────────────────────────────────────────────────

export type ComponentEntry = {
  name: string
  description: string
  category: string
  tags: string[]
  href?: string
  fullWidth?: boolean
  preview: React.ReactNode
}

export const CATEGORIES = ["All", "Auth", "Calendar", "Inputs", "Display", "Feedback", "Navigation"] as const

export const COMPONENTS: ComponentEntry[] = [
  { name: "Sign In", description: "Email + password login with GitHub OAuth and show/hide password toggle.", category: "Auth", tags: ["auth", "login", "form", "password", "github"], href: "/sign-in", fullWidth: true, preview: <SignInFull /> },
  { name: "Sign Up", description: "Registration form with name fields, email, and live password strength hints.", category: "Auth", tags: ["auth", "register", "form", "password"], href: "/sign-up", fullWidth: true, preview: <SignUpFull /> },
  { name: "Create Account", description: "Two-step flow: account type picker then profile details.", category: "Auth", tags: ["auth", "onboarding", "stepper", "form"], href: "/create-account", fullWidth: true, preview: <CreateAccountFull /> },
  { name: "Calendar — Basic", description: "Single date picker with month navigation and today indicator.", category: "Calendar", tags: ["calendar", "date", "picker", "datepicker"], fullWidth: true, preview: <CalendarBasic /> },
  { name: "Calendar — Range", description: "Select a start and end date with an interactive range highlight.", category: "Calendar", tags: ["calendar", "range", "date", "picker", "from", "to"], fullWidth: true, preview: <CalendarRange /> },
  { name: "Calendar — With Events", description: "Monthly view with colour-coded event dots and a day detail panel.", category: "Calendar", tags: ["calendar", "events", "schedule", "dots"], fullWidth: true, preview: <CalendarWithEvents /> },
  { name: "Calendar — Mini", description: "Compact inline calendar paired with an upcoming events list.", category: "Calendar", tags: ["calendar", "mini", "inline", "compact", "events"], fullWidth: true, preview: <CalendarMini /> },
  { name: "Calendar — Time Picker", description: "Date picker combined with an AM/PM hour and minute roller.", category: "Calendar", tags: ["calendar", "time", "datetime", "picker", "schedule"], fullWidth: true, preview: <CalendarTimePicker /> },
  { name: "Calendar — Booking", description: "Date selector with available time slots and a confirm booking flow.", category: "Calendar", tags: ["calendar", "booking", "slots", "availability", "schedule"], fullWidth: true, preview: <CalendarBooking /> },
  { name: "Button", description: "Trigger actions with multiple variants and sizes.", category: "Inputs", tags: ["button", "action", "cta", "variant"], preview: <ButtonPreview /> },
  { name: "Checkbox", description: "Multi-select control with accessible toggle states.", category: "Inputs", tags: ["checkbox", "toggle", "select", "form"], preview: <CheckboxPreview /> },
  { name: "Select", description: "Dropdown menu for choosing from a list of options.", category: "Inputs", tags: ["select", "dropdown", "form", "picker"], preview: <SelectPreview /> },
  { name: "Textarea", description: "Multi-line text input for longer content.", category: "Inputs", tags: ["textarea", "input", "form", "text"], preview: <TextareaPreview /> },
  { name: "Input", description: "Text fields for capturing user input.", category: "Inputs", tags: ["input", "text", "form", "field"], preview: <InputPreview /> },
  { name: "Switch", description: "Toggle boolean settings on or off.", category: "Inputs", tags: ["switch", "toggle", "boolean", "settings"], preview: <SwitchPreview /> },
  { name: "Badge", description: "Small status indicators and labels.", category: "Display", tags: ["badge", "label", "tag", "status"], preview: <BadgePreview /> },
  { name: "Card", description: "Container for grouping related content.", category: "Display", tags: ["card", "container", "layout", "content"], preview: <CardPreview /> },
  { name: "Avatar", description: "User profile pictures with fallback initials.", category: "Display", tags: ["avatar", "user", "profile", "image"], preview: <AvatarPreview /> },
  { name: "Progress", description: "Visualise completion of a task or metric.", category: "Display", tags: ["progress", "bar", "loading", "metric"], preview: <ProgressPreview /> },
  { name: "Alert", description: "Communicate important messages inline.", category: "Feedback", tags: ["alert", "notification", "warning", "error", "info"], preview: <AlertPreview /> },
  { name: "Toast", description: "Temporary notifications at the edge of the screen.", category: "Feedback", tags: ["toast", "notification", "snackbar", "message"], preview: <ToastPreview /> },
  { name: "Tabs", description: "Segmented navigation between related views.", category: "Navigation", tags: ["tabs", "navigation", "segment", "menu"], preview: <TabPreview /> },
]

