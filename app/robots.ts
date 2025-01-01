export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://wtp43-blog.vercel.app/sitemap.xml',
    host: 'https://wtp43-blog.vercel.app',
  }
}
