import './styles/global.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import { Viewport } from 'next'

export const dynamic = 'force-static'
export const revalidate = 21_600 // 6 hours

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="data-theme">
          {children}
          <Analytics />
        </ThemeProvider>
        {/* {process.env.NODE_ENV === 'development' ? <VercelToolbar /> : null} */}
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://wtp43-blog.vercel.app'),
  title: {
    template: '%s | William Tang',
    default: 'William Tang',
  },
  description: 'A website by William Tang.',
  openGraph: {
    title: 'William Tang',
    url: '',
    siteName: 'William Tang Blog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://wtp43-blog.vercel.app/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "William Tang's site",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  // icons: {
  //   shortcut: '',
  // },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
}
