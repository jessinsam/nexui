export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto_auto_auto] gap-10 md:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
                  <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                  <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                  <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
                </svg>
              </span>
              <span className="font-semibold text-sm text-foreground">
                Nex<span className="text-primary">UI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Beautifully designed components you can customize and build on. Open source forever.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/jessinsam/nexui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.021C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://x.com/iamnexui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter) — @iamnexui"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links — Components */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Components</p>
            {[
              { label: "Button",   href: "/components?category=Button"  },
              { label: "Badge",    href: "/components?category=Badge"   },
              { label: "Card",     href: "/components?category=Card"    },
              { label: "Input",    href: "/components?category=Form"    },
              { label: "Avatar",   href: "/components?category=Avatar"  },
              { label: "Tabs",     href: "/components?category=Navigation" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Links — Docs */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Documentation</p>
            {[
              { label: "Introduction",  href: "/docs"              },
              { label: "Installation",  href: "/docs/installation" },
              { label: "CLI",           href: "/docs/cli"          },
              { label: "Theming",       href: "/docs/theming"      },
              { label: "Components",    href: "/components"        },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Links — Project */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Project</p>
            {[
              { label: "GitHub", href: "https://github.com/jessinsam/nexui" },
              { label: "Releases", href: "https://github.com/jessinsam/nexui/releases" },
              { label: "Contributing", href: "https://github.com/jessinsam/nexui/blob/main/CONTRIBUTING.md" },
              { label: "License", href: "https://github.com/jessinsam/nexui/blob/main/LICENSE" },
              { label: "Security", href: "https://github.com/jessinsam/nexui/security" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NexUI. MIT License. Open source and free forever.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with{" "}
            <a href="https://nextjs.org" className="text-foreground hover:text-primary transition-colors">
              Next.js
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com" className="text-foreground hover:text-primary transition-colors">
              Tailwind CSS
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
