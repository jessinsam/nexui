import Link from "next/link"
import { ArrowRight } from "@/components/nexui/icons"

export const metadata = {
  title: "Theming",
  description: "Customise NexUI colours, fonts, and border radius with CSS variables. Full OKLCH colour system with dark mode out of the box.",
  alternates: { canonical: "https://www.nexui.dev/docs/theming" },
  openGraph: {
    title: "Theming — NexUI",
    description: "Customise NexUI colours, fonts, and border radius with CSS variables.",
    url: "https://www.nexui.dev/docs/theming",
  },
}

const cssVarsCode = `/* globals.css */
@import "tailwindcss";

@theme inline {
  --font-sans: "Inter", "Inter Fallback";
  --font-mono: "JetBrains Mono", monospace;

  /* Brand */
  --color-primary:             oklch(0.62 0.21 250);
  --color-primary-foreground:  oklch(0.98 0   0);

  /* Surface */
  --color-background:          oklch(0.09 0   0);
  --color-foreground:          oklch(0.97 0   0);
  --color-card:                oklch(0.12 0   0);
  --color-card-foreground:     oklch(0.97 0   0);

  /* Secondary & muted */
  --color-secondary:           oklch(0.16 0   0);
  --color-secondary-foreground:oklch(0.97 0   0);
  --color-muted:               oklch(0.16 0   0);
  --color-muted-foreground:    oklch(0.55 0   0);

  /* Borders */
  --color-border:              oklch(0.22 0   0);
  --color-input:               oklch(0.22 0   0);

  /* Status */
  --color-destructive:         oklch(0.60 0.22 25);
  --color-destructive-foreground: oklch(0.98 0 0);

  /* Ring */
  --color-ring:                oklch(0.62 0.21 250);

  /* Radius */
  --radius: 0.5rem;
}`

const darkCode = `/* globals.css — add a .light class for an explicit light theme */
.light {
  --color-background:       oklch(0.99 0 0);
  --color-foreground:       oklch(0.09 0 0);
  --color-card:             oklch(0.96 0 0);
  --color-border:           oklch(0.90 0 0);
  --color-muted-foreground: oklch(0.45 0 0);
  --color-secondary:        oklch(0.94 0 0);
}`

const componentCode = `/* Override the primary hue for a green brand */
--color-primary: oklch(0.60 0.20 142);`

export default function ThemingPage() {
  return (
    <article className="max-w-3xl">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Getting started</p>
        <h1 className="text-3xl font-semibold text-foreground mb-4">Theming</h1>
        <p className="text-muted-foreground leading-relaxed text-base">
          NexUI uses CSS custom properties (variables) registered in the Tailwind v4{" "}
          <code className="text-xs font-mono text-foreground">@theme inline</code> block. Change a single variable to retheme every component at once.
        </p>
      </div>

      <hr className="border-border mb-10" />

      {/* How it works */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">How it works</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Every component references semantic tokens like <code className="text-xs font-mono text-foreground">bg-primary</code>,{" "}
          <code className="text-xs font-mono text-foreground">text-muted-foreground</code>, and{" "}
          <code className="text-xs font-mono text-foreground">border-border</code> rather than literal colours. Changing a token in{" "}
          <code className="text-xs font-mono text-foreground">globals.css</code> updates every component that references it.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {[
            { token: "--color-primary", role: "Buttons, links, focus rings, active states" },
            { token: "--color-background", role: "Page background" },
            { token: "--color-card", role: "Card & panel surfaces" },
            { token: "--color-border", role: "Borders and dividers" },
            { token: "--color-muted-foreground", role: "Secondary text, placeholders" },
            { token: "--radius", role: "Corner rounding on all components" },
          ].map(({ token, role }) => (
            <div key={token} className="rounded-lg border border-border bg-card p-3">
              <code className="text-xs font-mono text-primary">{token}</code>
              <p className="text-xs text-muted-foreground mt-1">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full token list */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Default tokens</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Copy this block into your <code className="text-xs font-mono text-foreground">globals.css</code> and modify the values to match your brand.
        </p>
        <div className="rounded-lg border border-border overflow-hidden font-mono text-xs">
          <div className="px-4 py-2 border-b border-border bg-[var(--code-bg)] text-muted-foreground">globals.css</div>
          <pre className="p-4 overflow-x-auto bg-[var(--code-bg)] leading-relaxed text-muted-foreground">
            <code>{cssVarsCode}</code>
          </pre>
        </div>
      </section>

      {/* Light mode */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Light mode</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          NexUI defaults to dark. To add a light theme, apply a <code className="text-xs font-mono text-foreground">.light</code> class to{" "}
          <code className="text-xs font-mono text-foreground">&lt;html&gt;</code> and override the surface tokens:
        </p>
        <div className="rounded-lg border border-border overflow-hidden font-mono text-xs">
          <div className="px-4 py-2 border-b border-border bg-[var(--code-bg)] text-muted-foreground">globals.css</div>
          <pre className="p-4 overflow-x-auto bg-[var(--code-bg)] leading-relaxed text-muted-foreground">
            <code>{darkCode}</code>
          </pre>
        </div>
      </section>

      {/* Custom brand */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Custom brand colour</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          NexUI uses the{" "}
          <a href="https://oklch.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            OKLCH colour space
          </a>{" "}
          for perceptually-uniform colour manipulation. To change the primary hue, adjust the third argument (hue angle):
        </p>
        <div className="rounded-lg border border-border overflow-hidden font-mono text-xs">
          <div className="px-4 py-2 border-b border-border bg-[var(--code-bg)] text-muted-foreground">globals.css</div>
          <pre className="p-4 overflow-x-auto bg-[var(--code-bg)] leading-relaxed text-muted-foreground">
            <code>{componentCode}</code>
          </pre>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {[
            { label: "Blue (default)", hue: 250 },
            { label: "Purple", hue: 290 },
            { label: "Green", hue: 142 },
            { label: "Orange", hue: 40 },
            { label: "Rose", hue: 10 },
          ].map(({ label, hue }) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full shrink-0"
                style={{ background: `oklch(0.62 0.21 ${hue})` }}
                aria-hidden="true"
              />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Fonts */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Fonts</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Set{" "}
          <code className="text-xs font-mono text-foreground">--font-sans</code> and{" "}
          <code className="text-xs font-mono text-foreground">--font-mono</code> in the <code className="text-xs font-mono text-foreground">@theme inline</code> block.
          Then load your fonts via <code className="text-xs font-mono text-foreground">next/font/google</code> and apply the CSS variable in your layout. NexUI uses Inter and JetBrains Mono by default.
        </p>
      </section>

      {/* Next */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Related</h2>
        <div className="flex flex-col gap-2">
          {[
            { label: "Installation", href: "/docs/installation", desc: "Set up NexUI in your project." },
            { label: "Browse components", href: "/components", desc: "See all components with live previews." },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between px-4 py-3 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{link.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
              </div>
              <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
