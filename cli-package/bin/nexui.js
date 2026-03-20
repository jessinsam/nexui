#!/usr/bin/env node
// NexUI CLI — https://www.nexui.dev
// Fetches component source from the NexUI registry and writes it into your project.
// Node 18+ required (native fetch). Zero npm dependencies.

import { createWriteStream, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { join, resolve } from "path"
import { createInterface } from "readline"

const REGISTRY_URL = "https://www.nexui.dev/api/registry"
const VERSION = "1.0.0"
const BLUE  = "\x1b[34m"
const GREEN = "\x1b[32m"
const YELLOW = "\x1b[33m"
const RED   = "\x1b[31m"
const DIM   = "\x1b[2m"
const RESET = "\x1b[0m"
const BOLD  = "\x1b[1m"

function log(msg)    { process.stdout.write(`  ${msg}\n`) }
function ok(msg)     { log(`${GREEN}✓${RESET} ${msg}`) }
function info(msg)   { log(`${BLUE}→${RESET} ${msg}`) }
function warn(msg)   { log(`${YELLOW}!${RESET} ${msg}`) }
function error(msg)  { log(`${RED}✗${RESET} ${msg}`) }
function dim(msg)    { log(`${DIM}${msg}${RESET}`) }

const [,, cmd, ...args] = process.argv

async function fetchRegistry() {
  try {
    const res = await fetch(REGISTRY_URL)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } catch (e) {
    error(`Could not reach the NexUI registry at ${REGISTRY_URL}`)
    error(e.message)
    process.exit(1)
  }
}

function detectPackageManager() {
  if (existsSync("pnpm-lock.yaml")) return "pnpm"
  if (existsSync("yarn.lock"))      return "yarn"
  if (existsSync("bun.lockb"))      return "bun"
  return "npm"
}

function ensureUtils() {
  const utilsPath = resolve("lib/utils.ts")
  if (!existsSync("lib")) mkdirSync("lib", { recursive: true })
  if (!existsSync(utilsPath)) {
    writeFileSync(utilsPath, `import { clsx, type ClassValue } from "clsx"\nimport { twMerge } from "tailwind-merge"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n`)
    ok(`Created lib/utils.ts`)
  }
}

function ensureGlobalsCss() {
  const paths = ["app/globals.css", "styles/globals.css", "src/app/globals.css"]
  const target = paths.find(existsSync)
  if (!target) { warn("Could not find globals.css — add CSS variables manually from nexui.dev/docs/theming"); return }

  const css = readFileSync(target, "utf8")
  if (css.includes("--primary")) { dim(`globals.css already has CSS variables`); return }

  const vars = `\n/* NexUI CSS Variables */\n:root {\n  --background: 0 0% 3.9%;\n  --foreground: 0 0% 98%;\n  --primary: 217 91% 60%;\n  --secondary: 240 3.7% 15.9%;\n  --muted: 240 3.7% 15.9%;\n  --muted-foreground: 240 5% 64.9%;\n  --border: 240 3.7% 15.9%;\n  --card: 240 10% 3.9%;\n  --destructive: 0 62.8% 30.6%;\n  --radius: 0.5rem;\n}\n`
  writeFileSync(target, css + vars)
  ok(`Added CSS variables to ${target}`)
}

// ─── COMMANDS ────────────────────────────────────────────────────────────────

async function cmdInit() {
  process.stdout.write(`\n  ${BOLD}NexUI${RESET} ${DIM}v${VERSION}${RESET}\n\n`)
  info("Initialising NexUI in your project...")
  ensureUtils()
  ensureGlobalsCss()
  if (!existsSync("components/nexui")) mkdirSync("components/nexui", { recursive: true })
  ok("Created components/nexui/")
  process.stdout.write(`\n  ${GREEN}Done.${RESET} NexUI is ready — run ${BLUE}nexui add <component>${RESET} to add components.\n\n`)
}

async function cmdAdd(names) {
  if (!names.length) {
    error("Specify at least one component name, e.g. nexui add button")
    process.exit(1)
  }

  process.stdout.write(`\n  ${BOLD}NexUI${RESET} ${DIM}v${VERSION}${RESET}\n\n`)
  info(`Fetching registry...`)
  const registry = await fetchRegistry()

  const outputDir = "components/nexui"
  if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true })

  let added = 0, skipped = 0

  for (const rawName of names) {
    const name = rawName.toLowerCase().replace(/\s+/g, "-")
    const entry = registry.components.find(
      (c) => c.slug === name || c.name.toLowerCase().replace(/\s+/g, "-") === name
    )

    if (!entry) {
      warn(`Unknown component: ${rawName}`)
      dim(`  Run ${BLUE}nexui list${RESET} to see all available components.`)
      skipped++
      continue
    }

    const filePath = join(outputDir, `${entry.slug}.tsx`)
    if (existsSync(filePath)) {
      const rl = createInterface({ input: process.stdin, output: process.stdout })
      const answer = await new Promise((resolve) => rl.question(`  ${YELLOW}?${RESET} ${filePath} already exists. Overwrite? (y/N) `, resolve))
      rl.close()
      if (answer.trim().toLowerCase() !== "y") { dim(`  Skipped ${entry.slug}`); skipped++; continue }
    }

    writeFileSync(filePath, entry.code, "utf8")
    ok(`${entry.name} → ${filePath}`)
    dim(`  Import: import { ${toPascalCase(entry.slug)} } from "@/components/nexui/${entry.slug}"`)
    added++
  }

  process.stdout.write(`\n  ${added} added, ${skipped} skipped.\n\n`)
}

async function cmdList() {
  process.stdout.write(`\n  ${BOLD}NexUI${RESET} ${DIM}v${VERSION}${RESET}\n\n`)
  info("Fetching registry...")
  const registry = await fetchRegistry()
  const byCategory = {}
  for (const c of registry.components) {
    if (!byCategory[c.category]) byCategory[c.category] = []
    byCategory[c.category].push(c.slug)
  }
  for (const [cat, slugs] of Object.entries(byCategory).sort()) {
    process.stdout.write(`  ${BLUE}${cat}${RESET}\n`)
    process.stdout.write(`  ${DIM}${slugs.join("  ")}${RESET}\n\n`)
  }
  process.stdout.write(`  ${registry.components.length} components total.\n\n`)
}

async function cmdSearch(query) {
  if (!query) { error("Provide a search term, e.g. nexui search input"); process.exit(1) }
  info("Fetching registry...")
  const registry = await fetchRegistry()
  const q = query.toLowerCase()
  const results = registry.components.filter(
    (c) => c.name.toLowerCase().includes(q) || c.tags?.some((t) => t.includes(q)) || c.category.toLowerCase().includes(q)
  )
  if (!results.length) { warn(`No components matched "${query}"`); return }
  process.stdout.write(`\n  ${results.length} result(s) for "${query}":\n\n`)
  for (const c of results) {
    process.stdout.write(`  ${BLUE}${c.slug.padEnd(28)}${RESET}${DIM}${c.category}${RESET}\n`)
    process.stdout.write(`  ${DIM}${c.description?.slice(0, 80)}${RESET}\n\n`)
  }
}

function cmdHelp() {
  process.stdout.write(`
  ${BOLD}NexUI CLI${RESET} ${DIM}v${VERSION}${RESET}
  ${DIM}https://www.nexui.dev${RESET}

  ${BOLD}Usage${RESET}
    nexui <command> [arguments]

  ${BOLD}Commands${RESET}
    ${BLUE}init${RESET}                 Set up NexUI in your project (lib/utils.ts + CSS vars)
    ${BLUE}add${RESET} <name...>        Add one or more components to components/nexui/
    ${BLUE}list${RESET}                 List all available components
    ${BLUE}search${RESET} <query>       Search components by name, tag, or category
    ${BLUE}help${RESET}                 Show this help message

  ${BOLD}Examples${RESET}
    ${DIM}npx nexui@latest init${RESET}
    ${DIM}npx nexui@latest add button${RESET}
    ${DIM}npx nexui@latest add button badge input card${RESET}
    ${DIM}npx nexui@latest list${RESET}
    ${DIM}npx nexui@latest search calendar${RESET}

  ${BOLD}Package managers${RESET}
    npm   ${DIM}npx nexui@latest add button${RESET}
    pnpm  ${DIM}pnpm dlx nexui@latest add button${RESET}
    yarn  ${DIM}yarn dlx nexui@latest add button${RESET}
    bun   ${DIM}bunx nexui@latest add button${RESET}

`)
}

function toPascalCase(slug) {
  return slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join("")
}

// ─── DISPATCH ────────────────────────────────────────────────────────────────

switch (cmd) {
  case "init":             await cmdInit();            break
  case "add":              await cmdAdd(args);         break
  case "list":             await cmdList();            break
  case "search":           await cmdSearch(args[0]);   break
  case "help": case "--help": case "-h": cmdHelp();   break
  case undefined:          cmdHelp();                  break
  default:
    error(`Unknown command: ${cmd}`)
    dim(`  Run nexui help for usage.`)
    process.exit(1)
}
