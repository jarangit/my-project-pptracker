import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Text from '../atoms/text';
import Row from '../atoms/row';
import Column from '../atoms/col';

type Props = {
  data: any;
}

const TopAssists = ({ data }: Props) => {
  return (
    <>
      <Text value="Top Assists" size="xl" className='font-bold' />
      <Column gap='2' className='justify-between'>
        {data.response.map((item: any, key: any) => (
          <div key={key} className='border p-3 w-full'>
            <Link href={{
              pathname: `/player-detail/${item.player.id}`,
              query: { playerName: item.player.name }
            }} >
              <Row className='justify-between items-center' gap='2'>
                <Row gap='2'>
                  <Image
                    alt=''
                    src={item.player.photo}
                    width={40}
                    height={40}
                  />
                  <Text value={item.player.name} size='lg' className='font-medium' />
                  <Image
                    alt=''
                    src={item.statistics[0].team.logo}
                    width={20}
                    height={20}
                  />
                </Row>
                <Row gap='2'>
                  <Text value={item.statistics[0].goals.assists} size='xs' />
                  <Text value='Assists' />
                </Row>
              </Row>
            </Link>
          </div>
        ))}
      </Column>
    </>
  )
}

export default TopAssists