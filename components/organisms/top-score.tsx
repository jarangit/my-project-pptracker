import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Text from '../atoms/text';
import Row from '../atoms/row';
import Column from '../atoms/col';
import { IoFootball } from "react-icons/io5";

type Props = {
  data: any;
}

const TopScore = ({ data }: Props) => {
  console.log('%cMyProject%cline:13%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(20, 68, 106);padding:3px;border-radius:2px', data)
  return (
    <>
      <Text value="TOP SCORE" size="xl" className='font-bold text-center mb-3' />
      <Column gap='2' className='justify-between'>
        {data?.response.slice(0,10).map((item: any, key: any) => (
          <div key={key} className='bg-black_bg rounded-lg py-1 px-3 w-full'>
            <Link href={{
              pathname: `/player-detail/${item.player.id}`,
              query: {
                namePlayer: item.player.name,
                league: item.statistics[0].league.id,
              }
            }} >
              <Row className='justify-between items-center' gap='2'>
                <Row gap='2'>
                  <Text value={key + 1} size="3xl" className="text-2xl bg-black w-8 flex justify-center items-center rounded-md" />
                  <Image
                    alt=''
                    src={item.statistics[0].team.logo}
                    width={20}
                    height={20}
                  />
                  <div className='w-fit rounded-md overflow-hidden'>
                    <Image
                      alt=''
                      src={item.player.photo}
                      width={30}
                      height={30}
                    />
                  </div>
                  <Column className='' gap='0'>
                    <Text value={item.player.name} size='lg' className='font-medium' />
                    <Text value={item.statistics[0].team.name} size='xs' className='font-medium text-gray' />
                  </Column>
                </Row>
                <Row gap='2' className='text-green'>
                  <Text value={item.statistics[0].goals.total} size='md' />
                  <IoFootball />
                </Row>
              </Row>
            </Link>
          </div>
        ))}
      </Column>
    </>
  )
}

export default TopScore