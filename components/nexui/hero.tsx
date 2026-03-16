import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-36 pb-28 px-6 overflow-hidden">
      {/* subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.22 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.22 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* fade out grid at edges */}
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
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
          <Star size={10} strokeWidth={2.5} aria-hidden="true" />
          Open source &amp; Open code — v1.0 now available
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight text-balance text-foreground">
          Components built to{" "}
          <span className="text-primary">last.</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance leading-relaxed">
          A set of beautifully designed, accessible components you can copy, customize, and build on. No npm install. Just code you own.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#installation"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get started
            <ArrowRight size={14} aria-hidden="true" />
          </a>
          <a
            href="#components"
            className="flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-secondary transition-colors"
          >
            Browse components
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 pt-4">
          {[
            { value: "40+", label: "Components" },
            { value: "100%", label: "Accessible" },
            { value: "0", label: "Dependencies" },
            { value: "MIT", label: "License" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-semibold text-foreground">{s.value}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Hero component preview strip */}
        <div className="w-full mt-6 rounded-xl border border-border bg-card overflow-hidden">
          {/* window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">components/button.tsx</span>
          </div>
          {/* code snippet */}
          <pre className="text-left overflow-x-auto p-6 text-sm font-mono leading-relaxed text-muted-foreground bg-[var(--code-bg)]">
            <code>
              <span className="text-primary">import</span>
              {" { Button } "}
              <span className="text-primary">from</span>
              {' "@nexui/react"\n\n'}
              <span className="text-foreground">{"export default function App() {\n"}</span>
              {"  "}
              <span className="text-primary">return</span>
              {" (\n    <"}
              <span className="text-[oklch(0.7_0.15_160)]">Button</span>
              {" variant="}
              <span className="text-[oklch(0.75_0.18_85)]">&quot;default&quot;</span>
              {">Get started</"}
              <span className="text-[oklch(0.7_0.15_160)]">Button</span>
              {">\n  )\n}"}
            </code>
          </pre>
          {/* live preview bar */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-background/50">
            <span className="text-xs text-muted-foreground">Live preview</span>
            <div className="flex items-center gap-3">
              <button className="text-xs px-4 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
                Get started
              </button>
              <button className="text-xs px-4 py-1.5 rounded-md border border-border text-foreground hover:bg-secondary transition-colors font-medium">
                Secondary
              </button>
              <button className="text-xs px-4 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors font-medium">
                Ghost
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
