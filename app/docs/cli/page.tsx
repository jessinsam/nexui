import Link from "next/link"
import { ArrowRight } from "@/components/nexui/icons"

export const metadata = {
  title: "CLI — NexUI",
  description: "Use the NexUI CLI to add components to your project automatically.",
}

const initOutput = [
  "  Detecting project structure...",
  "  Writing lib/utils.ts",
  "  Adding CSS variables to globals.css",
  "",
  "  Done. NexUI is ready.",
]

const addOutput = [
  "  Resolving button...",
  "  Writing components/nexui/button.tsx",
  "",
  "  Added button.",
  "  Import: import { Button } from \"@/components/nexui/button\"",
]

const listOutput = [
  "  Available components (50+):",
  "",
  "  accordion    alert       auth-panel  avatar",
  "  badge        button      card        carousel",
  "  chart        checkbox    command     dialog",
  "  dropdown     input       kanban      popover",
  "  progress     select      sheet       skeleton",
  "  slider       switch      table       tabs",
  "  textarea     toast       tooltip     view-switcher",
  "  ...",
]

export default function CLIPage() {
  return (
    <article className="max-w-3xl">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Getting started</p>
        <h1 className="text-3xl font-semibold text-foreground mb-4">CLI</h1>
        <p className="text-muted-foreground leading-relaxed text-base">
          The NexUI CLI lets you add components to your project with a single command, instead of manually copying source files. It writes the component file directly into your codebase — you own it from the start.
        </p>
      </div>

      <hr className="border-border mb-10" />

      {/* Init */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-2">nexui init</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Run once in a new or existing project. Creates <code className="text-xs font-mono text-foreground">lib/utils.ts</code> and adds the required CSS variables to your <code className="text-xs font-mono text-foreground">globals.css</code>.
        </p>
        <div className="rounded-lg border border-border overflow-hidden font-mono text-sm">
          <div className="px-4 py-2 border-b border-border bg-[var(--code-bg)] text-xs text-muted-foreground">bash</div>
          <div className="px-4 py-3 bg-[var(--code-bg)]">
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">npx nexui@latest init</span>
          </div>
          <div className="px-4 pb-4 bg-[var(--code-bg)] flex flex-col gap-0.5">
            {initOutput.map((line, i) => (
              <span key={i} className="text-muted-foreground text-xs">{line || "\u00A0"}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Add */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-2">nexui add [component]</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Downloads one or more components into <code className="text-xs font-mono text-foreground">components/nexui/</code>. The file is plain TypeScript — edit it however you like.
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

      {/* List */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-2">nexui list</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Prints every available component name so you know exactly what you can add.
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

      {/* Package manager variants */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Package manager variants</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="grid grid-cols-[auto_1fr] divide-y divide-border text-sm font-mono">
            {[
              { pm: "npm", cmd: "npx nexui@latest add button" },
              { pm: "pnpm", cmd: "pnpm dlx nexui@latest add button" },
              { pm: "yarn", cmd: "yarn dlx nexui@latest add button" },
              { pm: "bun", cmd: "bunx nexui@latest add button" },
            ].map(({ pm, cmd }) => (
              <div key={pm} className="contents">
                <span className="px-4 py-3 text-muted-foreground text-xs border-r border-border">{pm}</span>
                <span className="px-4 py-3 text-foreground text-xs">{cmd}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <div className="rounded-lg border border-border bg-secondary/40 px-4 py-3 mb-10">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">Note — </span>
          The CLI is a thin file-fetcher. All it does is write the component source to your filesystem. You can always copy components manually from the{" "}
          <Link href="/components" className="text-primary hover:underline">component library</Link> instead.
        </p>
      </div>

      {/* Next */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Related</h2>
        <div className="flex flex-col gap-2">
          {[
            { label: "Installation", href: "/docs/installation", desc: "Manual setup without the CLI." },
            { label: "Theming", href: "/docs/theming", desc: "Customise CSS variables and colour tokens." },
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
