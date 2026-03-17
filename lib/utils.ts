type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | Record<string, unknown>

/** Flatten ClassValue inputs into a single string (no external deps). */
function clsx(...inputs: ClassValue[]): string {
  const out: string[] = []
  for (const input of inputs) {
    if (!input) continue
    if (typeof input === 'string' || typeof input === 'number') {
      out.push(String(input))
    } else if (Array.isArray(input)) {
      const inner = clsx(...input)
      if (inner) out.push(inner)
    } else if (typeof input === 'object') {
      for (const [k, v] of Object.entries(input)) {
        if (v) out.push(k)
      }
    }
  }
  return out.join(' ')
}

/** Merge Tailwind classes — later classes win for the same utility. */
function twMerge(...classes: string[]): string {
  // Track the last-seen value per Tailwind utility prefix so later entries win.
  const map = new Map<string, string>()
  for (const cls of classes) {
    for (const token of cls.split(/\s+/)) {
      if (!token) continue
      // Extract the utility key: strip variant prefixes (sm:, hover:, dark:…)
      // and the value suffix (-foo, /bar) to find the base utility.
      const withoutVariants = token.replace(/^(?:[a-z][a-z0-9]*:)+/, '')
      // Key = everything up to the last '-' for value-bearing utilities,
      // or the whole token for standalone ones.
      const dashIdx = withoutVariants.lastIndexOf('-')
      const key = dashIdx > 0 ? withoutVariants.slice(0, dashIdx) : withoutVariants
      // Use the full token as the value so we keep variants intact.
      map.set(key, token)
    }
  }
  return Array.from(map.values()).join(' ')
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs))
}
