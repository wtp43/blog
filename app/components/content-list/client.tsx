'use client'

import { PropsWithChildren, Suspense, useCallback } from 'react'

export function ContentList({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="mt-2 mb-2">
        <h2 className="text-2xl font-semibold tracking-tight dark:text-gray-300">
          Posts and reflections
        </h2>
      </div>
      {children}
    </div>
  )
}
