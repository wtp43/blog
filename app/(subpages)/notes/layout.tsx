import Outline from '@components/layout-outline'
import '../../styles/markdown.css'

export const metadata = {
  title: 'Dev Notes',
  description: 'Snippets, learnings, and short form thoughts.',
  alternates: {
    canonical: 'https://wtp43-blog.vercel.app/notes',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <article>{children}</article>
}
