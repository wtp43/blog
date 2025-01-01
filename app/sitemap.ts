import getNotes from '@lib/get-notes'
import getPosts from './lib/get-posts'

export default async function sitemap() {
  const posts = await getPosts()
  const notes = await getNotes()

  const blogs = posts
    .map((post) => ({
      url: `https://wtp43-blog.vercel.app/blog/${post.slug}`,
      lastModified: post.lastModified
        ? new Date(post.lastModified).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0],
    }))
    .concat(
      notes.map((note) => ({
        url: `https://wtp43-blog.vercel.app/notes/${note.slug}`,
        // @ts-expect-error
        lastModified: note.lastModified
          ? // @ts-expect-error
            new Date(note.lastModified).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
      })),
    )

  const routes = ['', '/about', '/projects'].map((route) => ({
    url: `https://wtp43-blog.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
