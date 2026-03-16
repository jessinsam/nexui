"use client"

import { useState, useMemo } from "react"
import { Search, ArrowUpRight, X, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { CATEGORIES, COMPONENTS } from "@/lib/components-registry"
import type { ComponentEntry } from "@/lib/components-registry"

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({
  activeCategory,
  onCategory,
  counts,
}: {
  activeCategory: string
  onCategory: (c: string) => void
  counts: Record<string, number>
}) {
  return (
    <aside className="w-56 shrink-0 flex flex-col gap-1 sticky top-20 self-start">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 mb-2">
        Categories
      </p>
      {CATEGORIES.map((cat) => {
        const count = cat === "All" ? COMPONENTS.length : (counts[cat] ?? 0)
        return (
          <button
            key={cat}
            onClick={() => onCategory(cat)}
            className={cn(
              "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left",
              activeCategory === cat
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            <span>{cat}</span>
            <span
              className={cn(
                "text-[10px] font-mono px-1.5 py-0.5 rounded-md",
                activeCategory === cat ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
              )}
            >
              {count}
            </span>
          </button>
        )
      })}
    </aside>
  )
}

// ─── Component card ───────────────────────────────────────────────────────────

function ComponentCard({ comp }: { comp: ComponentEntry }) {
  const isFullWidth = comp.fullWidth

  return (
    <div className={cn(
      "group rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-200 overflow-hidden flex flex-col",
      isFullWidth && "col-span-full"
    )}>
      <div className={cn(
        "flex items-center justify-center bg-background/40",
        isFullWidth ? "p-6 md:p-10" : "min-h-[160px] p-6"
      )}>
        {isFullWidth ? (
          <div className="w-full max-w-5xl">{comp.preview}</div>
        ) : comp.preview}
      </div>
      <div className="px-4 py-3 border-t border-border">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-foreground">{comp.name}</span>
          <div className="flex items-center gap-3">
            {comp.href && (
              <a
                href={comp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${comp.name} full page`}
                className="text-xs text-primary hover:text-primary/80 flex items-center gap-0.5 transition-colors"
              >
                View full page <ArrowUpRight size={11} aria-hidden="true" />
              </a>
            )}
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
              {comp.category}
            </span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{comp.description}</p>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [query, setQuery] = useState("")
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const counts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const c of COMPONENTS) {
      map[c.category] = (map[c.category] ?? 0) + 1
    }
    return map
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return COMPONENTS.filter((c) => {
      const categoryMatch = activeCategory === "All" || c.category === activeCategory
      const searchMatch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tags.some((t) => t.includes(q))
      return categoryMatch && searchMatch
    })
  }, [activeCategory, query])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="NexUI home">
            <span className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
                <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
              </svg>
            </span>
            <span className="font-semibold text-sm tracking-tight text-foreground">
              Nex<span className="text-primary">UI</span>
            </span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-md relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components..."
              aria-label="Search components"
              className="w-full h-9 rounded-lg border border-border bg-secondary pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={13} aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Mobile sidebar toggle */}
          <button
            className="md:hidden flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileSidebarOpen((v) => !v)}
            aria-label="Toggle category filter"
          >
            <SlidersHorizontal size={15} aria-hidden="true" />
            Filter
          </button>

          {/* Right nav */}
          <nav className="hidden md:flex items-center gap-4" aria-label="Top navigation">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <a href="https://github.com/jessinsam/nexui" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <Link href="/create-account" className="text-sm bg-primary text-primary-foreground px-3.5 py-1.5 rounded-md hover:bg-primary/90 transition-colors font-medium">Get started</Link>
          </nav>
        </div>
      </header>

      {/* Mobile sidebar drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={() => setMobileSidebarOpen(false)} />
          <div className="relative z-10 w-64 bg-background border-r border-border h-full pt-20 px-4 flex flex-col gap-1 overflow-y-auto">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 mb-2">Categories</p>
            {CATEGORIES.map((cat) => {
              const count = cat === "All" ? COMPONENTS.length : (counts[cat] ?? 0)
              return (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setMobileSidebarOpen(false) }}
                  className={cn("flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left", activeCategory === cat ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary")}
                >
                  <span>{cat}</span>
                  <span className={cn("text-[10px] font-mono px-1.5 py-0.5 rounded-md", activeCategory === cat ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground")}>{count}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        {/* Page header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Library</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">Components</h1>
          <p className="mt-2 text-muted-foreground max-w-lg leading-relaxed text-sm">
            {COMPONENTS.length} accessible, dark-mode-ready components built with Tailwind CSS. Copy the code and own it.
          </p>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <div className="hidden md:block">
            <Sidebar activeCategory={activeCategory} onCategory={setActiveCategory} counts={counts} />
          </div>

          {/* Grid area */}
          <div className="flex-1 min-w-0">
            {/* Result count + active filters */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-muted-foreground">
                {filtered.length === 0
                  ? "No components found"
                  : `${filtered.length} component${filtered.length !== 1 ? "s" : ""}`}
                {query && (
                  <span className="ml-1">
                    for <span className="text-foreground font-medium">&ldquo;{query}&rdquo;</span>
                  </span>
                )}
              </p>
              {(query || activeCategory !== "All") && (
                <button
                  onClick={() => { setQuery(""); setActiveCategory("All") }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <X size={11} aria-hidden="true" /> Clear filters
                </button>
              )}
            </div>

            {filtered.length > 0 ? (
              <div className="flex flex-col gap-6">
                {/* Full-width components (Auth, Calendar, etc.) */}
                {filtered.filter(c => c.fullWidth).map((comp) => (
                  <ComponentCard key={comp.name} comp={comp} />
                ))}
                {/* Compact grid components */}
                {filtered.filter(c => !c.fullWidth).length > 0 && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.filter(c => !c.fullWidth).map((comp) => (
                      <ComponentCard key={comp.name} comp={comp} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <Search size={20} className="text-muted-foreground" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-foreground">No results</p>
                <p className="text-xs text-muted-foreground mt-1">Try a different search term or category.</p>
                <button
                  onClick={() => { setQuery(""); setActiveCategory("All") }}
                  className="mt-4 text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
