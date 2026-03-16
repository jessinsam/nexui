"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

// ---- Mini component previews ----

function ButtonPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <button className="text-xs px-4 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
        Default
      </button>
      <button className="text-xs px-4 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium">
        Secondary
      </button>
      <button className="text-xs px-4 py-1.5 rounded-md border border-border text-foreground hover:bg-secondary transition-colors font-medium">
        Outline
      </button>
      <button className="text-xs px-4 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors font-medium">
        Ghost
      </button>
    </div>
  )
}

function BadgePreview() {
  const badges = [
    { label: "Default", cls: "bg-primary text-primary-foreground" },
    { label: "Secondary", cls: "bg-secondary text-secondary-foreground" },
    { label: "Outline", cls: "border border-border text-foreground" },
    { label: "Destructive", cls: "bg-destructive/15 text-destructive border border-destructive/20" },
  ]
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((b) => (
        <span key={b.label} className={cn("text-xs px-2.5 py-0.5 rounded-full font-medium", b.cls)}>
          {b.label}
        </span>
      ))}
    </div>
  )
}

function InputPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition"
      />
      <input
        type="text"
        placeholder="Disabled input"
        disabled
        className="w-full text-xs px-3 py-2 rounded-md border border-border bg-muted text-muted-foreground cursor-not-allowed"
      />
    </div>
  )
}

function CardPreview() {
  return (
    <div className="rounded-xl border border-border bg-card p-4 w-full max-w-xs">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Alex Chen</p>
          <p className="text-xs text-muted-foreground">Product Designer</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        &quot;NexUI components saved us weeks of work. Clean and easy to customize.&quot;
      </p>
    </div>
  )
}

function AlertPreview() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/10 p-3">
        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
        <div>
          <p className="text-xs font-semibold text-foreground">New release</p>
          <p className="text-xs text-muted-foreground">NexUI v1.0 is now available.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-3">
        <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
        <div>
          <p className="text-xs font-semibold text-foreground">Error</p>
          <p className="text-xs text-muted-foreground">Something went wrong. Please retry.</p>
        </div>
      </div>
    </div>
  )
}

function AvatarPreview() {
  const colors = ["bg-primary", "bg-[oklch(0.7_0.15_160)]", "bg-[oklch(0.65_0.22_300)]", "bg-[oklch(0.75_0.18_85)]"]
  const initials = ["AC", "BJ", "CK", "DL"]
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {colors.map((c, i) => (
          <span key={i} className={cn("w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-primary-foreground", c)}>
            {initials[i]}
          </span>
        ))}
        {/* stacked */}
        <div className="flex ml-2">
          {colors.map((c, i) => (
            <span
              key={i}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-primary-foreground border-2 border-background",
                c,
                i > 0 ? "-ml-2" : ""
              )}
            >
              {initials[i]}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToastPreview() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <div className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[oklch(0.7_0.15_160)]" />
          <span className="text-xs text-foreground font-medium">Saved successfully</span>
        </div>
        <button className="text-xs text-muted-foreground hover:text-foreground">Undo</button>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-destructive" />
          <span className="text-xs text-foreground font-medium">Upload failed</span>
        </div>
        <button className="text-xs text-muted-foreground hover:text-foreground">Retry</button>
      </div>
    </div>
  )
}

function TabPreview() {
  const [tab, setTab] = useState(0)
  const tabs = ["Overview", "Analytics", "Settings"]
  return (
    <div className="w-full">
      <div className="flex border-b border-border">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={cn(
              "px-4 py-2 text-xs font-medium transition-colors border-b-2 -mb-px",
              tab === i
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="pt-4 text-xs text-muted-foreground">
        {tab === 0 && "Overview content goes here."}
        {tab === 1 && "Analytics data and charts."}
        {tab === 2 && "Settings and preferences."}
      </div>
    </div>
  )
}

// ---- Category filter ----

const categories = ["All", "Inputs", "Display", "Feedback", "Navigation"]

const components: {
  name: string
  description: string
  category: string
  preview: React.ReactNode
}[] = [
  {
    name: "Button",
    description: "Trigger actions with multiple variants and sizes.",
    category: "Inputs",
    preview: <ButtonPreview />,
  },
  {
    name: "Badge",
    description: "Small status indicators and labels.",
    category: "Display",
    preview: <BadgePreview />,
  },
  {
    name: "Input",
    description: "Text fields for capturing user input.",
    category: "Inputs",
    preview: <InputPreview />,
  },
  {
    name: "Card",
    description: "Container for grouping related content.",
    category: "Display",
    preview: <CardPreview />,
  },
  {
    name: "Alert",
    description: "Communicate important messages inline.",
    category: "Feedback",
    preview: <AlertPreview />,
  },
  {
    name: "Avatar",
    description: "User profile pictures with fallback initials.",
    category: "Display",
    preview: <AvatarPreview />,
  },
  {
    name: "Toast",
    description: "Temporary notifications at the edge of the screen.",
    category: "Feedback",
    preview: <ToastPreview />,
  },
  {
    name: "Tabs",
    description: "Segmented navigation between related views.",
    category: "Navigation",
    preview: <TabPreview />,
  },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All" ? components : components.filter((c) => c.category === activeCategory)

  return (
    <section id="components" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Components</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Everything you need.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
            40+ components ready to copy into your project. Each one is accessible, responsive, and built with Tailwind CSS.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={cn(
                "text-xs px-3.5 py-1.5 rounded-full border font-medium transition-colors",
                activeCategory === c
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((comp) => (
            <div
              key={comp.name}
              className="group rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Preview area */}
              <div className="flex-1 min-h-[140px] flex items-center justify-center p-6 bg-background/40">
                {comp.preview}
              </div>
              {/* Info */}
              <div className="px-4 py-3 border-t border-border">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-sm font-semibold text-foreground">{comp.name}</span>
                  <span className="text-xs text-muted-foreground">{comp.category}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{comp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          And many more — dialogs, dropdowns, tables, calendars, data pickers, and more coming soon.
        </p>
      </div>
    </section>
  )
}
