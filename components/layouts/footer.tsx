import React from 'react'
import Text from '../atoms/text'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-gray-200 text-center p-3'>
      <Text  className='font-bold' value="PPTRACKER" />
    </div>
  )
}

export default Footer