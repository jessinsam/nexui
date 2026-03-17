"use client"

import { useState } from "react"
import {
  ArrowRight,
  Eye,
  EyeOff,
  Github,
  ChevronRight,
} from "@/components/nexui/icons"

// ─── Auth Preview ─────────────────────────────────────────────────────────────

function AuthPreview() {
  const [showPw, setShowPw] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-3 text-left">
      <div className="mb-1">
        <p className="text-base font-semibold text-foreground">Welcome back</p>
        <p className="text-sm text-muted-foreground">Sign in to your account</p>
      </div>

      <button className="flex items-center justify-center gap-2 w-full h-10 rounded-lg border border-border bg-secondary text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors">
        <Github size={14} aria-hidden="true" />
        Continue with GitHub
      </button>

      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="h-10 w-full rounded-lg border border-border bg-secondary px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition"
      />

      <div className="relative">
        <input
          type={showPw ? "text" : "password"}
          placeholder="••••••••"
          readOnly
          className="h-10 w-full rounded-lg border border-border bg-secondary px-3.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPw(v => !v)}
          aria-label="Toggle password visibility"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {showPw ? <EyeOff size={14} aria-hidden="true" /> : <Eye size={14} aria-hidden="true" />}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <div className="w-3.5 h-3.5 rounded border border-border bg-secondary" />
          <span className="text-xs text-muted-foreground">Remember me</span>
        </label>
        <button className="text-xs text-primary hover:text-primary/80 transition-colors">
          Forgot password?
        </button>
      </div>

      <button className="flex items-center justify-center gap-2 h-10 w-full rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all">
        Sign in <ArrowRight size={13} aria-hidden="true" />
      </button>
    </div>
  )
}

// ─── Gallery section ──────────────────────────────────────────────────────────

export function Gallery() {
  return (
    <section id="components" className="py-14 sm:py-20 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Component Showcase</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Everything you need.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed text-sm">
            Hand-crafted, accessible components inspired by the shadcn/ui copy-paste
            philosophy. Drop any component straight into your project and own every line.
          </p>
        </div>

        {/* Auth showcase — full width */}
        <div className="rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-200 overflow-hidden">
          {/* Preview area */}
          <div className="flex items-center justify-center bg-background/40 px-6 py-10 sm:py-14">
            <div className="w-full max-w-md">
              <AuthPreview />
            </div>
          </div>

          {/* Info footer */}
          <div className="px-5 py-4 border-t border-border flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-sm font-semibold text-foreground">Authentication</span>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Auth
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Sign-in, sign-up, and multi-step account creation flows with OAuth, password strength validation, and 2FA.
              </p>
            </div>
            <a
              href="/components"
              className="flex items-center gap-1.5 shrink-0 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all components <ChevronRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Explore more */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-border bg-secondary/30 px-5 sm:px-6 py-5">
          <div>
            <p className="text-sm font-semibold text-foreground">Explore all components</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              50+ components across Auth, Chat, Data Views, Charts, Forms, Carousel, and more.
            </p>
          </div>
          <a
            href="/components"
            className="flex items-center gap-2 shrink-0 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
          >
            Browse components <ChevronRight size={14} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}
