import Row from '@/components/atoms/row'
import Text from '@/components/atoms/text'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoFootball } from 'react-icons/io5'
import { PiFootprintsFill } from 'react-icons/pi'

type Props = {
  data: any
}

const seasons = [
  '2021',
  '2022',
  '2023',
]
const StatisticsCardOfSeason = ({ data }: Props) => {
  const [activeSeason, setActiveSeason] = useState('2023')
  return (
    <>
      <div>
        <Text value='STATISTICS' className='font-bold mb-3' />
        <section className='grid grid-cols-1 gap-6 bg-black_bg p-3 relative mt-8'>
          <Row className='w-full absolute -top-5 !gap-0'>
            {seasons.map((item: string, key: any) => (
              <div key={key} onClick={() => setActiveSeason(item)} className={`${item === activeSeason ? '!bg-blue' : 'bg-black_bg text-gray'}   rounded-t-md px-3 text-sm font-bold`}>{item}</div>
            ))}
          </Row>
          {data.statistics && data.statistics.length && data.statistics.map((item: any, key: any) => (
            <div key={key} className=''>
              {/* <Text size="md" className='font-bold' value={item.league.season} /> */}
              <Row gap='2'>
                <Image
                  alt=''
                  src={item.team.logo}
                  width={20}
                  height={20}
                />
                <Text size="xs" className='uppercase font-bold ' value={item.league.name} />
              </Row>
              <ul>
                <li>
                  <Row>
                    {/* <Image
                          alt=''
                          src={item.team.logo}
                          width={20}
                          height={20}
                        /> */}
                    {/* <Image
                        alt=''
                        src={item.league.logo}
                        width={20}
                        height={20}
                      /> */}
                    {/* <Image
                        alt=''
                        src={item.league.flag}
                        width={20}
                        height={20}
                      /> */}
                  </Row>
                </li>
              </ul>
              <Row className='justify-start gap-5 text-sm text-blue'>
                <div>Match: {item.games.appearences}</div>
                <Row>
                  <Text value={item.goals.total} />
                  <IoFootball />
                </Row>
                <Row>
                  <Text value={item.goals.assists ?? '0'} />
                  <PiFootprintsFill />
                </Row>
              </Row>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default StatisticsCardOfSeason