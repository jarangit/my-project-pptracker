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
  return (
    <>
      <Text value="Top Player" size="xl" className='font-bold' />
      <Row gap='2' className='justify-between'>
        {data.response.map((item: any, key: any) => (
          <div key={key} className='border p-3 w-full'>
            <Link href={{
              pathname: `/player-detail/${item.player.id}`,
              query: { playerName: item.player.name }
            }} >
              <Column className='justify-center items-center' gap='2'>
                <Image
                  alt=''
                  src={item.player.photo}
                  width={100}
                  height={100}
                />
                <Text value={item.player.name} size='lg' className='font-medium' />
                <Text value={item.statistics[0].team.name} size='xs' />
                <Image
                  alt=''
                  src={item.statistics[0].team.logo}
                  width={20}
                  height={20}
                />
              </Column>
            </Link>
          </div>
        ))}
      </Row>

    </>
  )
}

export default TopPlayer