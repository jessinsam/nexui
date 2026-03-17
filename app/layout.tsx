import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/nexui/scroll-to-top'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const SITE_URL = 'https://www.nexui.dev'

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'NexUI — Beautifully designed React components',
    template: '%s — NexUI',
  },
  description:
    'A set of beautifully designed, accessible React components built with Tailwind CSS. Copy-paste into your project and own every line. Open source. Inspired by shadcn/ui.',

  keywords: [
    'React components',
    'Tailwind CSS components',
    'UI library',
    'component library',
    'copy paste components',
    'shadcn inspired',
    'accessible components',
    'Next.js components',
    'open source UI',
    'NexUI',
    'design system',
    'dark mode components',
    'Tailwind UI',
  ],

  authors: [{ name: 'NexUI', url: SITE_URL }],
  creator: 'NexUI',
  publisher: 'NexUI',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'NexUI',
    title: 'NexUI — Beautifully designed React components',
    description:
      'Copy-paste UI components built with Tailwind CSS and React. Open source. Inspired by shadcn/ui.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'NexUI — Beautifully designed components',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nexui_dev',
    creator: '@nexui_dev',
    title: 'NexUI — Beautifully designed React components',
    description:
      'Copy-paste UI components built with Tailwind CSS and React. Open source. Inspired by shadcn/ui.',
    images: ['/opengraph-image'],
  },

  icons: {
    icon: [
      { url: '/icon', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon',
  },

  manifest: '/manifest.webmanifest',

  category: 'technology',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'NexUI',
              url: SITE_URL,
              description:
                'A set of beautifully designed, accessible React components built with Tailwind CSS. Copy-paste into your project and own every line.',
              potentialAction: {
                '@type': 'SearchAction',
                target: `${SITE_URL}/components?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
              sameAs: [
                'https://github.com/jessinsam/nexui',
              ],
            }),
          }}
        />
        {/* Canonical already set via metadata.alternates, but belt-and-suspenders for crawlers */}
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}

