import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Text from '../atoms/text';
import Row from '../atoms/row';
import Column from '../atoms/col';
import { PiFootprintsFill } from "react-icons/pi";

type Props = {
  data: any;
}

const TopAssists = ({ data }: Props) => {
  return (
    <>
    <Text value="TOP ASSISTS" size="xl" className='font-bold text-center mb-3' />
    <Column gap='2' className='justify-between'>
      {data?.response.map((item: any, key: any) => (
        <div key={key} className='bg-black_bg rounded-lg p-1 px-3 w-full'>
          <Link href={{
            pathname: `/player-detail/${item.player.id}`,
            query: {
              namePlayer: item.player.name,
              league: item.statistics[0].league.id,
            }
          }} >
            <Row className='justify-between items-center' gap='2'>
              <Row gap='2'>
                <div className='w-fit rounded-md overflow-hidden'>
                  <Image
                    alt=''
                    src={item.player.photo}
                    width={40}
                    height={40}
                  />
                </div>
                <Text value={item.player.name} size='lg' className='font-medium' />
                <Image
                  alt=''
                  src={item.statistics[0].team.logo}
                  width={20}
                  height={20}
                />
              </Row>
              <Row gap='2' className='text-green'>
                <Text value={item.statistics[0].goals.assists} size='md' />
                <PiFootprintsFill />
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