import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Text from '../atoms/text';
import Row from '../atoms/row';
import Column from '../atoms/col';

type Props = {
  data: any;
}

const TopPlayer = ({ data }: Props) => {
  console.log('%cMyProject%cline:12%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', data)
  return (
    <>
      <Text value="TOP PLAYER" size="xl" className='font-bold text-center mb-3' />
      <Row gap='2' className='justify-between'>
        {data.response.map((item: any, key: any) => (
          <div key={key} className=' p-3 bg-black_bg relative  overflow-hidden rounded-lg  w-full'>
            <Link href={{
              pathname: `/player-detail/${item.player.id}`,
              query: { playerName: item.player.name }
            }} >
              <Column className='justify-center items-center  overflow-hidden relative z-10' gap='1'>
                <div className='rounded-full overflow-hidden '>
                  <Image
                    alt=''
                    src={item.player.photo}
                    width={100}
                    height={100}
                  />
                </div>
                <Text value={item.player.name} size='lg' className='font-medium relative text-gold' />
                <Text value={item.statistics[0].team.name} size='xs' className='text-center text-xs ' />
              </Column>
            </Link>
            <div className='absolute opacity-30 -left-20 -bottom-20 z-0'>
              <Image
                alt=''
                src={item.statistics[0].team.logo}
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </Row>

    </>
  )
}

export default TopPlayer