"use client"

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff, ArrowRight, Github, Check } from "lucide-react"
import { AuthPanel } from "@/components/nexui/auth-panel"

const passwordRules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /[0-9]/.test(v) },
]

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <AuthPanel
      quote="Open source, open code — built for developers who demand more."
      quoteAuthor="NexUI"
    >
      <div className="flex flex-col gap-7">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Join NexUI and start building beautiful interfaces.
          </p>
        </div>

        {/* Social login */}
        <button
          type="button"
          className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium h-11 transition-colors"
        >
          <Github size={16} aria-hidden="true" />
          Sign up with GitHub
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name row */}
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

          {/* Email */}
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

          {/* Password */}
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
            {/* Password strength hints */}
            {password.length > 0 && (
              <ul className="flex flex-col gap-1 mt-1" aria-label="Password requirements">
                {passwordRules.map((rule) => {
                  const pass = rule.test(password)
                  return (
                    <li key={rule.label} className={`flex items-center gap-1.5 text-xs transition-colors ${pass ? "text-emerald-400" : "text-muted-foreground"}`}>
                      <Check size={11} aria-hidden="true" className={pass ? "opacity-100" : "opacity-30"} />
                      {rule.label}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all mt-1"
          >
            {loading ? (
              <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" aria-label="Loading" />
            ) : (
              <>
                Sign up
                <ArrowRight size={15} aria-hidden="true" />
              </>
            )}
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-primary font-medium hover:text-primary/80 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </AuthPanel>
  )
}
