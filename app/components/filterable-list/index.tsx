'use client'
import Link from 'next/link'
import Badge from '@components/badge'
import Input from '@components/input'
import React from 'react'
import { Base } from '@lib/types'
import { useSearchParams } from 'next/navigation'
import { RenderItem } from '@components/content-list/render-item'

const linkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: 'inherit',
}

const activeClass =
  'border-blue-500 text-blue-600 focus:text-blue-800 dark:text-blue-500'
const nonActiveClass =
  'border-transparent text-gray-500 hover:text-blue-600 focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-50'

// uses router.replace so next.js doesn't refetch in RSC (we have the data already)
function FakeLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        window.history.replaceState({}, '', href)
      }}
      style={linkStyles}
    >
      {children}
    </a>
  )
}

const FilterableList = <T extends Base>({
  items,
  tags,
  enableSearch = true,
  enableTags = true,
}: {
  items: Array<T>
  // eslint-disable-next-line no-unused-vars
  tags?: (item: T) => Array<string>
  enableSearch?: boolean
  enableTags?: boolean
}) => {
  const [search, setSearch] = React.useState('')
  const searchParams = useSearchParams()
  const selectedTag = searchParams?.get('tag')

  const filteredItems = React.useMemo(() => {
    const filtered = items.filter((item) => {
      if (selectedTag && search) {
        return (
          tags?.(item)?.includes(selectedTag) &&
          (item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase()))
        )
      }

      if (selectedTag) {
        return tags?.(item)?.includes(selectedTag)
      }

      if (search) {
        return (
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
        )
      }

      return true
    })

    return filtered
  }, [items, search, selectedTag, tags])

  const tagHref = (tag: string) => {
    const newParams = new URLSearchParams(searchParams?.toString())
    newParams.set('tag', tag)
    return `?${newParams.toString()}`
  }

  const allTags = React.useMemo(() => {
    const tagCounts: { [tag: string]: number } = {}
    items.forEach((item) => {
      const itemTags = tags?.(item) || []
      itemTags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    })
    return Object.entries(tagCounts).sort((a, b) => b[1] - a[1])
  }, [items, tags])

  return (
    <>
      <div className="border-b-2 border-gray-200 dark:border-neutral-700 mb-2">
        {enableTags && (
          <nav className="-mb-0.5 flex gap-x-6">
            <div
              className={`${!selectedTag ? activeClass : nonActiveClass} py-4 px-1 inline-flex items-center gap-2 border-b-2 text-sm font-medium whitespace-nowrap focus:outline-none`}
              key="all"
            >
              <FakeLink href={'?'}>All</FakeLink>
            </div>
            {allTags.map(([tag, count]) => (
              <div
                className={`${selectedTag === tag ? activeClass : nonActiveClass} py-4 px-1 inline-flex items-center gap-2 border-b-2 text-sm font-medium whitespace-nowrap focus:outline-none`}
                key={tag}
              >
                <FakeLink href={tagHref(tag)}>
                  {tag}{' '}
                  <span
                    className={`${selectedTag === tag ? 'bg-blue-100 text-blue-600 dark:bg-blue-500 dark:text-white' : 'bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300'} ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium`}
                  >
                    {count}
                  </span>
                </FakeLink>
              </div>
            ))}
          </nav>
        )}
      </div>
      <ul aria-live="polite" aria-relevant="additions removals">
        {filteredItems.map((item) => (
          <li key={item.title} className="mb-4">
            <RenderItem postOrNote={item as any} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default FilterableList
