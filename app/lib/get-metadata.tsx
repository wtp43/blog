type Props = {
  title: string
  description: string
  image?: string
  hidden?: boolean
  date?: string
  lastModified?: string
  author?: string
  path: `/${string}`
}

export function getMetadata({
  title,
  description,
  image,
  hidden,
  date,
  lastModified,
  author = 'William Tang',
  path,
}: Props) {
  const domain =
    process.env.NODE_ENV === 'production'
      ? 'https://wtp43-blog.vercel.app'
      : process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : 'http://localhost:3000'

  return (
    <>
      {title.indexOf('William Tang') > -1 ? (
        <title>{title}</title>
      ) : (
        <title>{`${title} - ${author}`}</title>
      )}
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta
        name="og:image"
        content={'https://wtp43-blog.vercel.app/home.png'}
      />
      {/* URL */}
      <meta name="og:url" content={`${domain}${path}`} />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta property="og:site_name" content="William Tang's site" />
      <meta name="apple-mobile-web-app-title" content="WT" />
      <meta name="author" content={author} />
      <meta property="og:type" content="website" />
      <meta charSet="utf-8" />
      <meta property="og:locale" content="en" />

      {/* Favicons */}
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/favicons/favicon-32x32.png"
        key="dynamic-favicon"
      />

      {date && <meta name="date" content={date} />}
      {lastModified && <meta name="last-modified" content={lastModified} />}
      {hidden && <meta name="robots" content="noindex" />}
    </>
  )
}
