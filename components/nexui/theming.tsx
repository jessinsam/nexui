"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const themes = [
  {
    name: "Midnight",
    description: "Dark, electric blue accent",
    primary: "oklch(0.62 0.21 250)",
    bg: "oklch(0.09 0 0)",
    border: "oklch(0.22 0 0)",
    accent: "bg-[oklch(0.62_0.21_250)]",
    previewBg: "bg-[oklch(0.09_0_0)]",
    previewBorder: "border-[oklch(0.22_0_0)]",
  },
  {
    name: "Sage",
    description: "Dark, emerald green accent",
    primary: "oklch(0.65 0.17 160)",
    bg: "oklch(0.09 0 0)",
    border: "oklch(0.22 0 0)",
    accent: "bg-[oklch(0.65_0.17_160)]",
    previewBg: "bg-[oklch(0.09_0_0)]",
    previewBorder: "border-[oklch(0.22_0_0)]",
  },
  {
    name: "Amber",
    description: "Dark, warm amber accent",
    primary: "oklch(0.75 0.18 85)",
    bg: "oklch(0.09 0 0)",
    border: "oklch(0.22 0 0)",
    accent: "bg-[oklch(0.75_0.18_85)]",
    previewBg: "bg-[oklch(0.09_0_0)]",
    previewBorder: "border-[oklch(0.22_0_0)]",
  },
  {
    name: "Rose",
    description: "Dark, rose pink accent",
    primary: "oklch(0.65 0.22 0)",
    bg: "oklch(0.09 0 0)",
    border: "oklch(0.22 0 0)",
    accent: "bg-[oklch(0.65_0.22_0)]",
    previewBg: "bg-[oklch(0.09_0_0)]",
    previewBorder: "border-[oklch(0.22_0_0)]",
  },
]

const themeCode = `:root {
  --background: oklch(0.09 0 0);
  --foreground: oklch(0.96 0 0);
  --primary: oklch(0.65 0.17 160);   /* ← swap this */
  --primary-foreground: oklch(0.98 0 0);
  --border: oklch(0.22 0 0);
  --muted: oklch(0.16 0 0);
  --muted-foreground: oklch(0.52 0 0);
  --radius: 0.5rem;
}`

function ThemeCard({
  theme,
  active,
  onClick,
}: {
  theme: (typeof themes)[0]
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left rounded-xl border p-4 transition-all duration-200 flex flex-col gap-3",
        active ? "border-primary/50 bg-primary/5" : "border-border hover:border-border/80 bg-card"
      )}
    >
      {/* mini swatch preview */}
      <div className={cn("w-full h-16 rounded-lg border flex items-center gap-2 px-3", theme.previewBg, theme.previewBorder)}>
        <span className={cn("w-6 h-6 rounded-md", theme.accent)} />
        <div className="flex flex-col gap-1.5">
          <div className="w-16 h-1.5 rounded-full bg-white/10" />
          <div className="w-10 h-1.5 rounded-full bg-white/5" />
        </div>
        <div className={cn("ml-auto w-10 h-5 rounded-md", theme.accent)} />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground flex items-center gap-2">
          {theme.name}
          {active && (
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
              Active
            </span>
          )}
        </p>
        <p className="text-xs text-muted-foreground">{theme.description}</p>
      </div>
    </button>
  )
}

export function Theming() {
  const [activeTheme, setActiveTheme] = useState(0)

  return (
    <section id="theming" className="py-14 sm:py-24 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Theming</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Make it yours.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
            All components use CSS custom properties — no theming library, no provider, no context. Swap your accent color, tweak the radius, and the entire system updates instantly.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Theme picker */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase font-semibold tracking-widest text-muted-foreground">Preset themes</p>
            <div className="grid grid-cols-2 gap-3">
              {themes.map((t, i) => (
                <ThemeCard key={t.name} theme={t} active={activeTheme === i} onClick={() => setActiveTheme(i)} />
              ))}
            </div>
          </div>

          {/* Code output */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase font-semibold tracking-widest text-muted-foreground">
              CSS variables — one file, full control
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background/60">
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="ml-3 text-xs font-mono text-muted-foreground">globals.css</span>
              </div>
              <pre className="p-4 sm:p-5 overflow-x-auto bg-[var(--code-bg)] text-xs sm:text-sm font-mono leading-relaxed text-muted-foreground">
                <code>{themeCode}</code>
              </pre>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-3 pt-2">
              {[
                "One CSS file controls every component",
                "No theming provider or context required",
                "Works with Tailwind CSS v4 and v3",
                "Dark mode built in by default",
                "Fully typed with TypeScript",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
