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
    <div className="w-full flex flex-col gap-5 text-left">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 rounded-md flex items-center justify-center bg-primary shrink-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
            <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.6" />
            <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.6" />
            <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
          </svg>
        </span>
        <span className="font-semibold text-sm text-foreground tracking-tight">Nex<span className="text-primary">UI</span></span>
      </div>

      {/* Heading */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground">Welcome back</h3>
        <p className="text-sm text-muted-foreground mt-1">Sign in to your NexUI account to continue.</p>
      </div>

      {/* GitHub */}
      <button className="flex items-center justify-center gap-2 w-full h-11 rounded-lg border border-border bg-secondary text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors">
        <Github size={15} aria-hidden="true" />
        Continue with GitHub
      </button>

      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="h-11 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Password</label>
          <button className="text-xs text-primary hover:text-primary/80 transition-colors">Forgot password?</button>
        </div>
        <div className="relative">
          <input
            type={showPw ? "text" : "password"}
            placeholder="••••••••"
            readOnly
            className="h-11 w-full rounded-lg border border-border bg-secondary px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPw(v => !v)}
            aria-label="Toggle password visibility"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPw ? <EyeOff size={15} aria-hidden="true" /> : <Eye size={15} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Sign in */}
      <button className="flex items-center justify-center gap-2 h-11 w-full rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all">
        Sign in <ArrowRight size={14} aria-hidden="true" />
      </button>

      {/* Sign up */}
      <p className="text-center text-xs text-muted-foreground">
        Don&apos;t have an account?{" "}
        <button className="text-primary hover:text-primary/80 transition-colors font-medium">Sign up</button>
      </p>

      {/* Terms */}
      <p className="text-center text-[10px] text-muted-foreground leading-relaxed">
        By continuing, you agree to our{" "}
        <button className="underline underline-offset-2 hover:text-foreground transition-colors">Terms</button>
        {" & "}
        <button className="underline underline-offset-2 hover:text-foreground transition-colors">Privacy Policy</button>.
      </p>
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

        {/* Auth showcase — two-column: form left, image right */}
        <div className="rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-200 overflow-hidden">
          {/* Preview area */}
          <div className="grid md:grid-cols-2 min-h-[560px]">
            {/* Left — form */}
            <div className="flex items-center justify-center bg-[#0a0a0a] px-8 sm:px-14 py-12 border-b md:border-b-0 md:border-r border-border">
              <div className="w-full max-w-sm">
                <AuthPreview />
              </div>
            </div>

            {/* Right — image with quote */}
            <div className="relative hidden md:block overflow-hidden">
              <img
                src="/auth-visual.jpg"
                alt="Fashion editorial — authentication visual"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Left-side fade to blend with form panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 via-transparent to-transparent" />
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <blockquote className="text-white text-lg font-semibold leading-snug text-balance">
                  &ldquo;The best UI is the one developers actually want to use.&rdquo;
                </blockquote>
                <p className="mt-2 text-white/60 text-sm">— NexUI Team</p>
              </div>
            </div>
          </div>

          {/* Info footer */}
          <div className="px-5 py-4 border-t border-border flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-sm font-semibold text-foreground">Authentication</span>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">Auth</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Sign-in, sign-up, and multi-step account creation flows with OAuth, password strength validation, and 2FA.
              </p>
            </div>
            <a href="/components" className="flex items-center gap-1.5 shrink-0 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
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
