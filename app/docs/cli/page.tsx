import Link from "next/link"
import { ArrowRight } from "@/components/nexui/icons"

export const metadata = {
  title: "CLI",
  description: "Use the NexUI CLI to initialise your project and add components automatically. Works with npm, pnpm, yarn, and bun.",
  alternates: { canonical: "https://www.nexui.dev/docs/cli" },
  openGraph: {
    title: "CLI — NexUI",
    description: "Use the NexUI CLI to initialise your project and add components automatically.",
    url: "https://www.nexui.dev/docs/cli",
  },
}

const ALL_COMPONENTS = [
  "accordion", "alert", "auth-panel", "avatar", "badge", "button", "calendar",
  "card", "carousel", "chart", "checkbox", "code-block", "color-picker",
  "command", "data-table", "date-picker", "dialog", "dropdown", "file-upload",
  "form", "input", "kanban", "modal", "multi-select", "number-input", "otp-input",
  "pagination", "phone-input", "popover", "progress", "radio", "range-slider",
  "rating", "scroll-area", "search", "select", "separator", "sheet", "skeleton",
  "slider", "stepper", "switch", "table", "tabs", "tag-input", "textarea",
  "timeline", "toast", "toggle", "toggle-group", "tooltip", "view-switcher",
  "android-button", "ios-button", "dom-animation", "hover-toolbar", "hover-button-group",
]

const addOutput = [
  "  Resolving button...",
  "  Writing components/nexui/button.tsx",
  "",
  "  Done.",
  '  Import: import { Button } from "@/components/nexui/button"',
]

const listOutput = [
  `  Available components (${ALL_COMPONENTS.length}):`,
  "",
  "  " + ALL_COMPONENTS.slice(0, 6).join("   "),
  "  " + ALL_COMPONENTS.slice(6, 12).join("   "),
  "  " + ALL_COMPONENTS.slice(12, 18).join("   "),
  "  ...",
]

export default function CLIPage() {
  return (
    <article className="max-w-3xl">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Getting started</p>
        <h1 className="text-3xl font-semibold text-foreground mb-4">CLI</h1>
        <p className="text-muted-foreground leading-relaxed text-base">
          The NexUI CLI writes component source files directly into your project — you own every line from the moment it lands. No wrappers, no runtime dependency.
        </p>
      </div>

      <hr className="border-border mb-10" />

      {/* Live banner */}
      <div className="rounded-lg border border-green-500/30 bg-green-500/8 px-4 py-3 mb-10">
        <p className="text-xs text-green-400/90 leading-relaxed">
          <span className="text-green-300 font-semibold">CLI is live — </span>
          The <code className="font-mono text-green-300">nexui</code> package is published on npm. Run any command below and it will work immediately.
          Components are fetched from <code className="font-mono text-green-300">nexui.dev/api/registry</code> and written directly into your project.
        </p>
      </div>

      {/* Init */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-2">nexui init</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Run once per project. Creates <code className="text-xs font-mono text-foreground">lib/utils.ts</code> and injects the required CSS variables into{" "}
          <code className="text-xs font-mono text-foreground">globals.css</code>.
        </p>
        <div className="rounded-lg border border-border overflow-hidden font-mono text-sm">
          <div className="px-4 py-2 border-b border-border bg-[var(--code-bg)] text-xs text-muted-foreground">bash</div>
          <div className="px-4 py-3 bg-[var(--code-bg)]">
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">npx nexui@latest init</span>
          </div>
          <div className="px-4 pb-4 bg-[var(--code-bg)] flex flex-col gap-0.5">
            {[
              "  Detecting project structure...",
              "  Writing lib/utils.ts",
              "  Adding CSS variables to globals.css",
              "",
              "  Done. NexUI is ready.",
            ].map((line, i) => (
              <span key={i} className="text-muted-foreground text-xs">{line || "\u00A0"}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Add */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-2">nexui add [component]</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Copies a component into <code className="text-xs font-mono text-foreground">components/nexui/</code>. The file is plain TypeScript — edit it however you like.
        </p>
        <div className="rounded-lg border border-border overflow-hidden font-mono text-sm mb-4">
          <div className="px-4 py-2 border-b border-border bg-[var(--code-bg)] text-xs text-muted-foreground">bash</div>
          <div className="px-4 py-3 bg-[var(--code-bg)]">
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">npx nexui@latest add button</span>
          </div>
          <div className="px-4 pb-4 bg-[var(--code-bg)] flex flex-col gap-0.5">
            {addOutput.map((line, i) => (
              <span key={i} className="text-muted-foreground text-xs">{line || "\u00A0"}</span>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Add multiple components at once:</p>
        <div className="rounded-lg border border-border overflow-hidden font-mono text-sm">
          <div className="px-4 py-2 border-b border-border bg-[var(--code-bg)] text-xs text-muted-foreground">bash</div>
          <div className="px-4 py-3 bg-[var(--code-bg)]">
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">npx nexui@latest add button badge input card</span>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-2">nexui search [query]</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Search components by name, tag, or category.
        </p>
        <div className="rounded-lg border border-border overflow-hidden font-mono text-sm">
          <div className="px-4 py-2 border-b border-border bg-[var(--code-bg)] text-xs text-muted-foreground">bash</div>
          <div className="px-4 py-3 bg-[var(--code-bg)]">
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">npx nexui@latest search calendar</span>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-2">nexui list</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Prints every available component name.
        </p>
        <div className="rounded-lg border border-border overflow-hidden font-mono text-sm">
          <div className="px-4 py-2 border-b border-border bg-[var(--code-bg)] text-xs text-muted-foreground">bash</div>
          <div className="px-4 py-3 bg-[var(--code-bg)]">
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">npx nexui@latest list</span>
          </div>
          <div className="px-4 pb-4 bg-[var(--code-bg)] flex flex-col gap-0.5">
            {listOutput.map((line, i) => (
              <span key={i} className="text-muted-foreground text-xs">{line || "\u00A0"}</span>
            ))}
          </div>
        </div>
      </section>

      {/* All components */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-2">All {ALL_COMPONENTS.length} components</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Pass any of these names to <code className="text-xs font-mono text-foreground">nexui add</code>.
        </p>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="flex flex-wrap gap-2 p-4 bg-[var(--code-bg)]">
            {ALL_COMPONENTS.map((name) => (
              <code key={name} className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-foreground border border-border">
                {name}
              </code>
            ))}
          </div>
        </div>
      </section>

      {/* Package manager variants */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Package manager variants</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="grid grid-cols-[auto_1fr] divide-y divide-border text-sm font-mono">
            {[
              { pm: "npm",  cmd: "npx nexui@latest add button" },
              { pm: "pnpm", cmd: "pnpm dlx nexui@latest add button" },
              { pm: "yarn", cmd: "yarn dlx nexui@latest add button" },
              { pm: "bun",  cmd: "bunx nexui@latest add button" },
            ].map(({ pm, cmd }) => (
              <div key={pm} className="contents">
                <span className="px-4 py-3 text-muted-foreground text-xs border-r border-border">{pm}</span>
                <span className="px-4 py-3 text-foreground text-xs">{cmd}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual fallback */}
      <div className="rounded-lg border border-border bg-secondary/40 px-4 py-3 mb-10">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">No CLI needed — </span>
          Every component is also available via copy-paste. Open the{" "}
          <Link href="/components" className="text-primary hover:underline">component library</Link>, click{" "}
          <strong className="text-foreground">Code</strong> on any card, and paste the source into{" "}
          <code className="text-xs font-mono text-foreground">components/nexui/[name].tsx</code>.
        </p>
      </div>

      {/* Related */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Related</h2>
        <div className="flex flex-col gap-2">
          {[
            { label: "Installation", href: "/docs/installation", desc: "Manual setup without the CLI." },
            { label: "Theming", href: "/docs/theming", desc: "Customise CSS variables and colour tokens." },
            { label: "Components", href: "/components", desc: "Browse all 100+ components with live previews." },
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
