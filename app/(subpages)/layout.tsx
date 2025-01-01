import type { ReactNode } from 'react'

export default function Layout({
  children,
  header,
}: {
  children: ReactNode
  header: ReactNode
}) {
  return (
    <div className="mx-auto bg-background text-foreground max-w-[min(1100px,100vw)] px-8">
      {header}
      {children}
    </div>
  )
}
