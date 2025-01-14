import React, { ReactNode } from 'react'
import styles from './badge.module.css'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode
  width?: string | number
}

const Badge = ({ children, className, width, ...props }: Props) => {
  return (
    <div style={{ width }} {...props}>
      {children}
    </div>
  )
}

export default Badge
