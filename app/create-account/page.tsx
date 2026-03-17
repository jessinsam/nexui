"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Github, Building2, User, Code2 } from "@/components/nexui/icons"
import { AuthPanel } from "@/components/nexui/auth-panel"
import { cn } from "@/lib/utils"

const accountTypes = [
  { id: "personal", label: "Personal", description: "For individual developers", icon: User },
  { id: "team", label: "Team", description: "For small teams & startups", icon: Building2 },
  { id: "enterprise", label: "Enterprise", description: "For large organisations", icon: Code2 },
]

export default function CreateAccountPage() {
  const [accountType, setAccountType] = useState("personal")
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<1 | 2>(1)

  function handleNext(e: React.FormEvent) {
    e.preventDefault()
    setStep(2)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <AuthPanel
      quote="Components you can copy, customize, and completely own."
      quoteAuthor="NexUI"
    >
      <div className="flex flex-col gap-7">
        {/* Header */}
        <div className="flex flex-col gap-2">
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-1">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={cn(
                  "h-1 rounded-full flex-1 transition-all duration-300",
                  s <= step ? "bg-primary" : "bg-border"
                )}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-mono">Step {step} of 2</p>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">
            {step === 1 ? "Choose account type" : "Your details"}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {step === 1
              ? "Select the plan that best fits your workflow."
              : "Complete your profile to finish setting up."}
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleNext} className="flex flex-col gap-4">
            {/* Account type cards */}
            <fieldset className="flex flex-col gap-3">
              <legend className="sr-only">Account type</legend>
              {accountTypes.map(({ id, label, description, icon: Icon }) => (
                <label
                  key={id}
                  htmlFor={`type-${id}`}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all",
                    accountType === id
                      ? "border-primary/60 bg-primary/10"
                      : "border-border bg-secondary hover:border-border/80"
                  )}
                >
                  <input
                    id={`type-${id}`}
                    type="radio"
                    name="account-type"
                    value={id}
                    checked={accountType === id}
                    onChange={() => setAccountType(id)}
                    className="sr-only"
                  />
                  <div
                    className={cn(
                      "size-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                      accountType === id ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    )}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
                  </div>
                  {/* Selected indicator */}
                  <div
                    className={cn(
                      "ml-auto size-4 rounded-full border-2 transition-colors shrink-0",
                      accountType === id ? "border-primary bg-primary" : "border-border bg-transparent"
                    )}
                  />
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all mt-1"
            >
              Continue
              <ArrowRight size={15} aria-hidden="true" />
            </button>

            {/* Social option */}
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-border bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium h-11 transition-colors"
            >
              <Github size={16} aria-hidden="true" />
              Continue with GitHub instead
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Username */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-xs font-medium text-foreground/80 uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm select-none">
                  @
                </span>
                <input
                  id="username"
                  type="text"
                  autoComplete="username"
                  placeholder="yourhandle"
                  required
                  className="h-11 w-full rounded-xl border border-border bg-secondary pl-8 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
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
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                required
                className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>

            <div className="flex gap-3 mt-1">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center justify-center h-11 flex-1 rounded-xl border border-border bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 h-11 flex-1 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all"
              >
                {loading ? (
                  <span className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" aria-label="Loading" />
                ) : (
                  <>
                    Create account
                    <ArrowRight size={15} aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

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
