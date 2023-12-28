import React, { useEffect } from 'react'

type Props = {
  className?: string
  value: string
  size?: string
}
//molecules
//organisms
const Text = ({ value, className, size }: Props) => {

  const onCheckSizeText = (size: string) => {
    return `text-${size}`
  }
  useEffect(() => {

  }, [value, className, size])

  return (
    <div className={`
    ${className ?? ''} 
    ${size ? `text-${size}` : 'text-md'}
    `}>
      {value}
    </div>
  )
}

export default Text