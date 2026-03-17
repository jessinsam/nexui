import { ArrowRight, Star, Zap, Code2, Package } from "@/components/nexui/icons"

export function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 overflow-hidden">
      {/* grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.22 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.22 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, oklch(0.09 0 0) 80%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 border border-primary/30 bg-primary/10 text-primary text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap">
          <Star size={9} strokeWidth={2.5} aria-hidden="true" />
          Inspired by shadcn/ui — own every line.
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight tracking-tight text-balance text-foreground">
          UI components,{" "}
          <span className="text-primary">fully yours.</span>
        </h1>

        {/* Sub */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl text-balance leading-relaxed px-2 sm:px-0">
          NexUI is a collection of hand-crafted, accessible components built with pure Tailwind CSS and React — inspired by the shadcn/ui copy-paste philosophy. Copy the code and own every pixel.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="/components"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Browse components
            <ArrowRight size={14} aria-hidden="true" />
          </a>
          <a
            href="#installation"
            className="flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-secondary transition-colors"
          >
            Get started
          </a>
        </div>

        {/* Stats row — always 4 columns so MIT never orphans */}
        <div className="w-full grid grid-cols-4 gap-2 pt-4 max-w-sm sm:max-w-none sm:flex sm:justify-center sm:gap-8">
          {[
            { value: "50+",  label: "Components" },
            { value: "0 KB", label: "Bundle size" },
            { value: "100%", label: "Yours to edit" },
            { value: "MIT",  label: "License" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-0.5">
              <span className="text-lg sm:text-2xl font-semibold text-foreground">{s.value}</span>
              <span className="text-[9px] sm:text-xs text-muted-foreground uppercase tracking-widest text-center">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Code preview */}
        <div className="w-full mt-4 sm:mt-6 rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-b border-border bg-background/50">
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">terminal</span>
            <span className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              www.nexui.dev
            </span>
          </div>
          <pre className="text-left overflow-x-auto p-4 sm:p-6 text-xs sm:text-sm font-mono leading-relaxed bg-[var(--code-bg)]">
            <code>
              <span className="text-muted-foreground">{"# 1. Initialize (once per project)\n"}</span>
              <span className="text-foreground">{"$ "}</span>
              <span className="text-primary">{"pnpm dlx nexui@latest init\n"}</span>
              <span className="text-muted-foreground/60">{"  Writing nexui.config.ts\n"}</span>
              <span className="text-muted-foreground/60">{"  Writing lib/utils.ts\n"}</span>
              <span className="text-muted-foreground/60">{"  Updating globals.css\n\n"}</span>

              <span className="text-muted-foreground">{"# 2. Add any component\n"}</span>
              <span className="text-foreground">{"$ "}</span>
              <span className="text-primary">{"pnpm dlx nexui@latest add button card badge\n"}</span>
              <span className="text-muted-foreground/60">{"  Writing components/ui/button.tsx\n"}</span>
              <span className="text-muted-foreground/60">{"  Writing components/ui/card.tsx\n"}</span>
              <span className="text-muted-foreground/60">{"  Writing components/ui/badge.tsx\n\n"}</span>

              <span className="text-muted-foreground">{"# 3. Import and use — it's just your code\n"}</span>
              <span className="text-[oklch(0.7_0.15_160)]">{'import '}</span>
              <span className="text-foreground">{'{ Button } '}</span>
              <span className="text-[oklch(0.7_0.15_160)]">{'from '}</span>
              <span className="text-[oklch(0.75_0.18_85)]">{'"@/components/ui/button"'}</span>
            </code>
          </pre>
          <div className="flex flex-wrap items-center justify-between gap-3 px-3 sm:px-4 py-3 border-t border-border bg-background/50">
            <span className="text-xs text-muted-foreground font-mono hidden sm:inline">github.com/jessinsam/nexui</span>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="text-xs px-3 sm:px-4 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
                Default
              </button>
              <button className="text-xs px-3 sm:px-4 py-1.5 rounded-md border border-border text-foreground hover:bg-secondary transition-colors font-medium">
                Outline
              </button>
              <button className="text-xs px-3 sm:px-4 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors font-medium">
                Ghost
              </button>
            </div>
          </div>
        </div>

        {/* Three pillars */}
        <div className="w-full grid sm:grid-cols-3 gap-3 mt-2">
          {[
            {
              icon: <Code2 size={14} aria-hidden="true" className="text-primary" />,
              title: "Inspired by shadcn/ui",
              body: "Built in the same spirit as shadcn/ui — copy-paste ownership, zero hidden wrappers. Pure HTML, Tailwind CSS, and React state you can read and modify.",
            },
            {
              icon: <Package size={14} aria-hidden="true" className="text-primary" />,
              title: "No npm install",
              body: "Nothing to install or configure. Browse a component, copy the code, paste it into your project. That is the full workflow.",
            },
            {
              icon: <Zap size={14} aria-hidden="true" className="text-primary" />,
              title: "You own the code",
              body: "The output is plain TypeScript and Tailwind. Rename it, restyle it, refactor it — there are no hidden layers between you and the UI.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-4 text-left flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {f.icon}
                <p className="text-sm font-semibold text-foreground">{f.title}</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
