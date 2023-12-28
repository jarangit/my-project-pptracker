import Link from 'next/link'
import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div>
      <Link href={'/'} >Home</Link>
    </div>
  )
}

export default Menu