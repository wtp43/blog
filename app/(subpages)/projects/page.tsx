import ProjectList from '@components/projects'
import { getProjects } from '@lib/projects'

export const metadata = {
  title: 'Projects',
  description: 'Most of my projects',
  alternates: {
    canonical: 'https://wtp43-blog.vercel.app/projects',
  },
}

const Projects = async () => {
  const projects = await getProjects()
  return (
    <span className="block max-w-3xl">
      <ProjectList
        showYears={true}
        projects={projects}
        seeMore={false}
        animated={false}
      />
    </span>
  )
}

export default Projects
