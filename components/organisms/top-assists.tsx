import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Text from '../atoms/text';
import Row from '../atoms/row';
import Column from '../atoms/col';
import { PiFootprintsFill } from "react-icons/pi";
import FootAPIImage from '../atoms/images/footapi-image';

type Props = {
  data: any;
}

const TopAssists = ({ data }: Props) => {
  return (
    <>
      {/* <Text value="TOP ASSISTS" size="xl" className='font-bold text-center mb-3' />
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
                  <Row gap='2' className='!items-end'>
                    <Column className='' gap='0'>
                      <Text value={item.player.name} size='lg' className='font-medium' />
                      <Text value={item.statistics[0].team.name} size='xs' className='font-medium text-gray' />
                    </Column>

                  </Row>
                </Row>
                <Row gap='2' className='text-green'>
                  <Text value={item.statistics[0].goals.assists} size='md' />
                </Row>
              </Row>
            </Link>
          </div>
        ))}
      </Column> */}

      {/* FootAPI */}
      <Text value="TOP ASSISTS" size="xl" className='font-bold text-center mb-3' />
      <Column gap='2' className='justify-between'>
        {data?.slice(0, 10).map((item: any, key: any) => (
          <div key={key} className='bg-black_bg rounded-lg py-1 px-3 w-full'>
            <Link href={{
              pathname: `/player-detail/${item.player.id}`,
              query: {
                namePlayer: item.player.name,
                // league: item.statistics[0].league.id,
              }
            }} >
              <Row className='justify-between items-center' gap='2'>
                <Row gap='2'>
                  <Text value={key + 1} size="3xl" className="text-2xl bg-black w-8 flex justify-center items-center rounded-md" />
                  <FootAPIImage
                    type='team'
                    id={item.team.id}
                    w={20}
                    h={20}
                  />
                  <div className='w-fit rounded-md overflow-hidden'>
                    <FootAPIImage
                      type='player'
                      id={item.player.id}
                      w={30}
                      h={30}
                    />
                  </div>
                  <Column className='' gap='0'>
                    <Text value={item.player.shortName} size='lg' className='font-medium' />
                    <Text value={item.team.shortName} size='xs' className='font-medium text-gray' />
                  </Column>
                </Row>
                <Row gap='2' className='text-green'>
                  <Text value={item.statistics.assists} size='md' />
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