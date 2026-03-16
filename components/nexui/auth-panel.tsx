"use client"

import Image from "next/image"
import Link from "next/link"

interface AuthPanelProps {
  children: React.ReactNode
  /** Tagline shown inside the image panel */
  quote?: string
  quoteAuthor?: string
}

export function AuthPanel({
  children,
  quote = "Build faster. Ship cleaner. Own your code.",
  quoteAuthor = "NexUI",
}: AuthPanelProps) {
  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* ── Left: Form column ── */}
      <div className="flex flex-1 flex-col justify-between px-6 py-10 md:px-12 lg:px-16 xl:px-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 w-fit group" aria-label="NexUI home">
          <span className="size-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm font-mono select-none">
            N
          </span>
          <span className="font-semibold text-foreground text-sm tracking-tight">NexUI</span>
        </Link>

        {/* Form content */}
        <div className="w-full max-w-sm mx-auto">{children}</div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground text-center">
          By continuing, you agree to our{" "}
          <Link href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Terms
          </Link>{" "}
          &amp;{" "}
          <Link href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      {/* ── Right: Image panel (hidden on mobile) ── */}
      <div className="hidden lg:flex lg:w-[52%] xl:w-[56%] p-4">
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <Image
            src="/auth-panel.jpg"
            alt="Abstract dark geometric background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/30" />
          {/* Quote */}
          <div className="absolute bottom-10 left-10 right-10">
            <blockquote className="text-foreground text-xl font-semibold leading-snug text-balance">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <p className="mt-3 text-sm text-foreground/60">&mdash; {quoteAuthor}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
