import Column from '@/components/atoms/col'
import Text from '@/components/atoms/text'
import React from 'react'

type Props = {}

const BannerHome = (props: Props) => {
  return (
    <div className=' h-32 lg:h-[350px] rounded-lg bg-blue p-3  jr-banner-home-color flex justify-center items-center'>
      <Column className='items-center'>
        <Text size='xl' className='font-bold  mf:text2-xl lg:text-[70px]' value="In-Depth Footballer Statistics Analysis" />
        <div className='hidden lg:block max-w-[80%] text-center mt-6 md:text-xl'>
          An in-depth analysis of footballer statistics involves a comprehensive examination and evaluation of various performance metrics, including goals scored, assists, passing accuracy, tackles, interceptions, and other key performance indicators.
        </div>
      </Column>
    </div>
  )
}

export default BannerHome

