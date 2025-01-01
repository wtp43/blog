import { MDXRemote } from 'next-mdx-remote/rsc'

import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji'
import remarkToc from 'remark-toc'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { mdxComponents } from './components'

import Script from 'next/script'

export function PostBody({ children }: { children: string }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.19/dist/katex.min.css"
        integrity="sha384-7lU0muIg/i1plk7MgygDUp3/bNRA65orrBub4/OSWHECgwEsY83HaS1x3bljA/XV"
        crossOrigin="anonymous"
      />
      <Script
        defer
        src="https://cdn.jsdelivr.net/npm/katex@0.16.19/dist/katex.min.js"
        integrity="sha384-RdymN7NRJ+XoyeRY4185zXaxq9QWOOx3O7beyyrRK4KQZrPlCDQQpCu95FoCGPAE"
        crossOrigin="anonymous"
      ></Script>
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [
              remarkGfm,
              remarkMath,
              remarkFrontmatter,
              remarkA11yEmoji,
              [
                remarkToc,
                {
                  tight: true,
                  maxDepth: 5,
                },
              ],
            ],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeKatex],
          },
        }}
        components={mdxComponents}
      />
    </>
  )
}
