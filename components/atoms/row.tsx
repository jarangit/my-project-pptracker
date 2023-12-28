import React from 'react'

type Props = {
  children: any
  gap?: string
  className?: string
}

const Row = ({ children, gap, className }: Props) => {
  return (
    <div
      className={`flex flex-row items-center 
      ${className ?? ''}
      ${gap ? `gap-${gap}` : 'gap-1'}
      `}
    >
      {children}
    </div>
  )
}

export default Row