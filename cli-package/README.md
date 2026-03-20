# NexUI CLI

Official CLI for [NexUI](https://www.nexui.dev) — copy-paste UI components into your project. No runtime dependency, no wrappers. You own every line.

## Usage

```bash
# npm
npx nexui@latest init
npx nexui@latest add button

# pnpm
pnpm dlx nexui@latest add button

# yarn
yarn dlx nexui@latest add button

# bun
bunx nexui@latest add button
```

## Commands

| Command | Description |
|---|---|
| `nexui init` | Set up NexUI (lib/utils.ts + CSS variables) |
| `nexui add <name...>` | Add one or more components |
| `nexui list` | List all available components |
| `nexui search <query>` | Search by name, tag, or category |
| `nexui help` | Show help |

## How it works

The CLI fetches component source from `https://www.nexui.dev/api/registry` and writes the TypeScript file into `components/nexui/` in your project. No packages are installed — the file is yours to edit.

## Requirements

- Node.js 18+
- A Next.js / React project with Tailwind CSS

## License

MIT
