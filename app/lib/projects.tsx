import type { Project } from './types'
import { cache } from 'react'
import { unstable_cache } from 'next/cache'
import { cacheLife } from 'next/dist/server/use-cache/cache-life'
import { GitHub } from '@components/icons'
import { Globe } from 'lucide-react'

const Projects: Project[] = [
  {
    title: 'Instagram Data Pipeline',
    description:
      'Python data pipeline that automates data collection from Instagram and other sources for fashion trend analysis',
    href: 'https://github.com/stars/wtp43/lists/intrend-project',
    dates: 'Sep. 2024 - Present',
    type: 'project',
    imageUrl: '/projects/instagram-data-pipeline.png',
    technologies: [
      'Python',
      'Postgres',
      'Redis',
      'RabbitMQ',
      'Kubernetes',
      'Terraform',
      'Prometheus',
      'LLM',
    ],
    image: '/projects/instagram-data-pipeline.png',
    links: [
      // {
      //   type: 'Website',
      //   href: '',
      //   icon: <Globe className="size-3" />,
      // },
      {
        type: 'Source',
        href: 'https://github.com/stars/wtp43/lists/intrend-project',
        icon: <GitHub />,
      },
    ],
  },
  {
    title: 'Algorithms Reference',
    description:
      'A collection of algorithms and data structures and relevant interesting problems.',
    href: 'https://algo-ds-docs.vercel.app/',
    dates: 'Jan. 2024 - Present',
    type: 'project',
    imageUrl: '/projects/algo-docs.png',
    technologies: ['Next.js', 'Markdown'],
    image: '/projects/algo-docs.png',
    links: [
      {
        type: 'Website',
        href: 'https://algo-ds-docs.vercel.app/',
        icon: <Globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://github.com/wtp43/algo-docs',
        icon: <GitHub />,
      },
    ],
  },
]

export const getProjects = cache(async (): Promise<Project[]> => {
  // if (process.env.NODE_ENV === 'production' && !process.env.GITHUB_TOKEN) {
  //   throw new Error(
  //     'No GITHUB_TOKEN provided. Generate a personal use token on GitHub.',
  //   )
  // }

  const withStars = await Promise.all(
    Projects.map(async (proj) => {
      const split = proj.href?.split('/')
      if (!split) {
        return proj
      }

      //[ 'https:', '', 'github.com', 'user', 'jsontree' ]
      // if (split[2] === 'github.com') {
      //   const user = split[3]
      //   const repo = split[4]
      //   const fetchUrl =
      //     process.env.NODE_ENV === 'production'
      //       ? `https://api.github.com/repos/${user}/${repo}`
      //       : 'http://localhost:3000/mock-stars-response.json'
      //   const { stargazers_count, message } = await (
      //     await fetch(fetchUrl, {
      //       headers: {
      //         Authorization: process.env.GITHUB_TOKEN ?? '',
      //       },
      //       cache: 'force-cache',
      //     })
      //   ).json()
      //
      //   // rate limited
      //   if (!stargazers_count && message) {
      //     console.warn(`Rate limited or error: ${message}`)
      //     return proj
      //   }
      //
      //   return {
      //     ...proj,
      //     stars: stargazers_count,
      //   }
      // }
      return proj
    }),
  )

  return withStars
})
