import Column from '@/components/atoms/col'
import FootAPIImage from '@/components/atoms/images/footapi-image'
import Row from '@/components/atoms/row'
import Text from '@/components/atoms/text'
import Link from 'next/link'
import React from 'react'
import { PiFootprintsFill } from 'react-icons/pi'
import { IoIosStats } from 'react-icons/io'

type Props = {
  data: any;
  index: number;
  score: number;
  game?: string

}

const PlayerScore = ({ data, index, score, game }: Props) => {
  return (
    <>
      {data && (
        <div className='bg-black_bg rounded-lg py-1 px-3 w-full'>
          <Link href={{
            pathname: `/player-detail/${data.player.id}`,
            query: {
              namePlayer: data.player.name,
              // league: data.statistics[0].league.id,
            }
          }} >
            <Row className='justify-between items-center' gap='2'>
              <Row gap='3'>
                <Text value={(index + 1).toString()}  className="text-md md:text-2xl bg-black w-8 flex justify-center items-center rounded-md" />
                <FootAPIImage
                  type='team'
                  id={data.team.id}
                  w={20}
                  h={20}
                />
                <div className='w-fit rounded-md overflow-hidden'>
                  <FootAPIImage
                    type='player'
                    id={data.player.id}
                    w={30}
                    h={30}
                  />
                </div>
                <Column className='' gap='0'>
                  <Text value={data.player.shortName}  className='font-medium text-xs md:text-lg' />
                  <Text value={data.team.shortName} size='xs' className='hidden md:block font-medium text-gray' />
                </Column>
              </Row>
              <Row gap='6' className='text-green'>
                <Text value={`${score.toString()}`} size='md' />
                <Text value={`${game}`} size='md' />
                <IoIosStats />
              </Row>
            </Row>
          </Link>
        </div>
      )}
    </>
  )
}

export default PlayerScore