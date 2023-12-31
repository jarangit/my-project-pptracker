import Text from '@/components/atoms/text'
import React from 'react'

type Props = {}

const BannerHome = (props: Props) => {
  return (
    <div className=' h-32 rounded-lg bg-blue p-3  jr-banner-home-color'>
      <Text size='xl' className='font-bold' value="In-Depth Footballer Statistics Analysis" />
    </div>
  )
}

export default BannerHome

