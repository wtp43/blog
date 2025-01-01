export type Base = {
  title: string
  description: string
  href?: string
}

export type Post = Base & {
  // Not defined for third party posts
  slug: string | undefined
  date: string
  tags: string[]
  body: string
  lastModified?: number
  views?: number
  // Third party only
  isThirdParty?: boolean
  type: 'post'
}

export type Project = Base & {
  title: string
  href?: string
  description: string
  dates: readonly string
  technologies: readonly string[]
  link?: string
  image?: string
  video?: string
  links?: readonly {
    icon: React.ReactNode
    type: string
    href: string
  }[]
  className?: string
  stars?: number
  type: 'project'
  imageUrl?: string
  imageHeight?: number
  imageWidth?: number
}

export type Note = Base & {
  date: string
  body: string
  slug: string
  type: 'snippet' | 'tip' | 'note'
}
