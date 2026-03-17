"use client"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Components",
  description: "Browse 50+ hand-crafted, accessible React components built with Tailwind CSS. Copy-paste into your project. No npm install required.",
  alternates: { canonical: "https://www.nexui.dev/components" },
  openGraph: {
    title: "Components — NexUI",
    description: "Browse 50+ hand-crafted, accessible React components built with Tailwind CSS.",
    url: "https://www.nexui.dev/components",
  },
}


import { useState, useMemo, Suspense, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { CATEGORIES, COMPONENTS } from "@/lib/components-registry"
import type { ComponentEntry } from "@/lib/components-registry"
import {
  Search, ArrowUpRight, X, SlidersHorizontal, Copy, Check, Code2, Eye,
} from "@/components/nexui/icons"

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
    <aside className="w-48 shrink-0 flex flex-col gap-0.5 sticky top-16 self-start max-h-[calc(100vh-5rem)] overflow-y-auto pr-1">
      <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground px-2.5 mb-1.5">
        Categories
      </p>
      {CATEGORIES.map((cat) => {
        const count = cat === "All" ? COMPONENTS.length : (counts[cat] ?? 0)
        return (
          <button
            key={cat}
            onClick={() => onCategory(cat)}
            className={cn(
              "flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors w-full text-left",
              activeCategory === cat
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            <span>{cat}</span>
            <span
              className={cn(
                "text-[9px] font-mono px-1 py-0.5 rounded",
                activeCategory === cat
                  ? "bg-primary/20 text-primary"
                  : "bg-secondary text-muted-foreground"
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
  const [tab, setTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(comp.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-200 flex flex-col">
      {/* Card header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border gap-2 rounded-t-lg overflow-hidden">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs font-semibold text-foreground truncate">{comp.name}</span>
          <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-secondary text-muted-foreground shrink-0">
            {comp.category}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {comp.href && (
            <a
              href={comp.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${comp.name} full page`}
              className="hidden sm:flex items-center gap-0.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          )}
          <div className="flex items-center rounded-md border border-border overflow-hidden bg-secondary">
            <button
              onClick={() => setTab("preview")}
              aria-label="Show preview"
              className={cn(
                "flex items-center gap-1 px-2 py-1 text-[11px] font-medium transition-colors",
                tab === "preview"
                  ? "bg-card text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Eye size={11} aria-hidden="true" />
              <span className="hidden sm:inline">Preview</span>
            </button>
            <button
              onClick={() => setTab("code")}
              aria-label="Show code"
              className={cn(
                "flex items-center gap-1 px-2 py-1 text-[11px] font-medium transition-colors",
                tab === "code"
                  ? "bg-card text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Code2 size={11} aria-hidden="true" />
              <span className="hidden sm:inline">Code</span>
            </button>
          </div>
          <button
            onClick={copy}
            aria-label={copied ? "Copied" : "Copy code"}
            className="flex items-center gap-1 px-2 py-1 rounded-md border border-border bg-secondary text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied
              ? <Check size={11} aria-hidden="true" className="text-emerald-400" />
              : <Copy size={11} aria-hidden="true" />}
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {tab === "preview" ? (
        <div className={cn(
          "flex items-center justify-center bg-background/40 overflow-hidden",
          comp.fullWidth ? "p-3 md:p-4" : "p-4 md:p-7"
        )}>
          <div className={cn("w-full", comp.fullWidth ? "max-w-full" : "max-w-xl")}>{comp.preview}</div>
        </div>
      ) : (
        <div className="relative bg-[var(--code-bg)]">
          <pre className="overflow-x-auto p-4 text-[11px] font-mono leading-relaxed text-muted-foreground max-h-[420px] overflow-y-auto">
            <code>{comp.code}</code>
          </pre>
        </div>
      )}

      {/* Footer */}
      <div className="px-3 py-2 border-t border-border rounded-b-lg overflow-hidden">
        <p className="text-[11px] text-muted-foreground leading-relaxed">{comp.description}</p>
      </div>
    </div>
  )
}

// ─── Grid (lives inside the Suspense boundary) ────────────────────────────────

function ComponentGrid({
  filtered,
  query,
  onClear,
}: {
  filtered: ComponentEntry[]
  query: string
  onClear: () => void
}) {
  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
          <Search size={20} className="text-muted-foreground" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-foreground">No results</p>
        <p className="text-xs text-muted-foreground mt-1">Try a different search term or category.</p>
        <button
          onClick={onClear}
          className="mt-4 text-xs text-primary hover:text-primary/80 transition-colors"
        >
          Clear filters
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {filtered.map((comp) => (
        <ComponentCard key={comp.name} comp={comp} />
      ))}
    </div>
  )
}

// ─── Skeleton shown while suspended ──────────────────────────────���───────────

function GridSkeleton() {
  return (
    <div className="flex flex-col gap-4" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border border-border bg-card animate-pulse"
          style={{ height: 220 }}
        />
      ))}
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [query, setQuery] = useState("")
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const gridTopRef = useRef<HTMLDivElement>(null)

  // Scroll to top of page on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  // Scroll to top of grid when category changes
  const handleCategory = useCallback((cat: string) => {
    setActiveCategory(cat)
    setTimeout(() => {
      gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 20)
  }, [])

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

  function clearFilters() {
    setQuery("")
    setActiveCategory("All")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed header — always renders immediately */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between gap-3">
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

          <div className="flex-1 max-w-md relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
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

          <button
            className="md:hidden flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileSidebarOpen((v) => !v)}
            aria-label="Toggle category filter"
          >
            <SlidersHorizontal size={15} aria-hidden="true" />
            Filter
          </button>

          <nav className="hidden md:flex items-center gap-4" aria-label="Top navigation">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <a
              href="https://github.com/jessinsam/nexui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/create-account"
              className="text-sm bg-primary text-primary-foreground px-3.5 py-1.5 rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Get started
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile sidebar drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative z-10 w-64 bg-background border-r border-border h-full pt-20 px-4 flex flex-col gap-1 overflow-y-auto">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 mb-2">
              Categories
            </p>
            {CATEGORIES.map((cat) => {
              const count = cat === "All" ? COMPONENTS.length : (counts[cat] ?? 0)
              return (
                <button
                  key={cat}
                  onClick={() => { handleCategory(cat); setMobileSidebarOpen(false) }}
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
                      activeCategory === cat
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Page body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12 sm:pb-16">
        {/* Page header */}
        <div className="mb-5 sm:mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1">Library</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground text-balance">Components</h1>
          <p className="mt-1.5 text-muted-foreground max-w-lg leading-relaxed text-xs sm:text-sm">
            {COMPONENTS.length} accessible, dark-mode-ready components built with Tailwind CSS. Copy the code and own it.
          </p>
        </div>

        <div className="flex gap-7">
          <div className="hidden md:block">
            <Sidebar activeCategory={activeCategory} onCategory={handleCategory} counts={counts} />
          </div>

          <div className="flex-1 min-w-0">
            {/* Scroll anchor */}
            <div ref={gridTopRef} style={{ scrollMarginTop: "4rem" }} />
            {/* Meta row */}
            <div id="component-grid-top" className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted-foreground">
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
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <X size={11} aria-hidden="true" /> Clear filters
                </button>
              )}
            </div>

            {/* Component list */}
            <Suspense fallback={<GridSkeleton />}>
              <ComponentGrid filtered={filtered} query={query} onClear={clearFilters} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
