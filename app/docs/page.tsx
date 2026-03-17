import Link from "next/link"
import { ArrowRight } from "@/components/nexui/icons"

export const metadata = {
  title: "Introduction — NexUI",
  description: "NexUI is a collection of hand-crafted, accessible components inspired by the shadcn/ui copy-paste philosophy.",
}

export default function DocsPage() {
  return (
    <article className="prose-custom max-w-3xl">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Getting started</p>
        <h1 className="text-3xl font-semibold text-foreground mb-4">Introduction</h1>
        <p className="text-muted-foreground leading-relaxed text-base">
          NexUI is a set of hand-crafted, accessible components built with pure Tailwind CSS and React — inspired by the shadcn/ui copy-paste philosophy. The code is yours from day one.
        </p>
      </div>

      <hr className="border-border mb-10" />

      {/* What it is */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">What is NexUI?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          NexUI is not a traditional component library — there is no npm package to install. Instead, you copy the component source code directly into your project. This means:
        </p>
        <ul className="flex flex-col gap-2 pl-5">
          {[
            "You own every line of code.",
            "No version conflicts, no peer-dependency hell.",
            "Customise freely — rename, restyle, delete anything.",
            "AI models can read and improve your components directly.",
            "Built with Tailwind CSS v4 and React 19.",
          ].map((item) => (
            <li key={item} className="text-muted-foreground text-sm leading-relaxed list-disc">{item}</li>
          ))}
        </ul>
      </section>

      {/* Philosophy */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Philosophy</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Open code",
              body: "The component code lives in your project. You see exactly how it is built. No black boxes, no hidden layers.",
            },
            {
              title: "Copy-paste ownership",
              body: "Inspired by shadcn/ui — browse a component, copy its source, paste it in. The workflow is that simple.",
            },
            {
              title: "Zero dependencies",
              body: "Components use only Tailwind utility classes and React hooks. No Radix, no Headless UI, no third-party primitives.",
            },
            {
              title: "Accessible by default",
              body: "Every component ships with proper ARIA roles, keyboard navigation, and focus management out of the box.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground mb-1">{card.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Frequently asked questions</h2>
        <div className="flex flex-col gap-6">
          {[
            {
              q: "Is there an npm package?",
              a: "No. NexUI is a copy-paste library. You add components by copying their source files into your project, or by using the CLI to automate that step.",
            },
            {
              q: "Can I use it with any React framework?",
              a: "Yes. NexUI components are plain React + Tailwind and work in Next.js, Vite, Remix, Astro, or any project that supports JSX and Tailwind CSS v4.",
            },
            {
              q: "How do I get updates?",
              a: "Because the code lives in your project, updates are manual. Watch the GitHub repo for changes and cherry-pick what you need.",
            },
            {
              q: "Is it free?",
              a: "Yes. NexUI is MIT-licensed and free forever. See the license on GitHub.",
            },
          ].map(({ q, a }) => (
            <div key={q}>
              <p className="text-sm font-semibold text-foreground mb-1">{q}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">Next steps</h2>
        <div className="flex flex-col gap-2">
          {[
            { label: "Installation", href: "/docs/installation", desc: "Set up NexUI in a new or existing project." },
            { label: "CLI", href: "/docs/cli", desc: "Use the NexUI CLI to add components automatically." },
            { label: "Theming", href: "/docs/theming", desc: "Configure CSS variables and colour tokens." },
            { label: "Browse components", href: "/components", desc: "See all 50+ components with live previews." },
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
