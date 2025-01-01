'use client'

import type { Project } from '@lib/types'
import Link from 'next/link'
import { HoverCard, HoverCardTrigger } from '@components/ui/hover-card'
import { useState } from 'react'

import { ProjectCard } from '@components/projects/project-card'

type Props = {
  projects: Project[]
  showYears: boolean
  seeMore: boolean
  cardClassName?: string
  animated?: boolean
}

const Projects = ({ projects = [], seeMore = false }: Props) => {
  const [anyHovercardShown, setAnyHovercardShown] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold tracking-tight dark:text-gray-300">
        Projects
      </h2>

      <div className="flex flex-col gap-3 max-w-[600px]">
        {/* <div className="grid grid-cols-1 gap-3 max-w-[800px] mx-auto"> */}
        {projects.map((project) => (
          <ProjectCard
            href={project.href}
            key={project.title}
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            links={project.links}
          />
        ))}
        {seeMore && (
          <p className="pt-4 ml-1">
            See some more on <Link href="/projects"> this page</Link>
          </p>
        )}
      </div>
    </div>
  )
}

export default Projects
