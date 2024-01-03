import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Text from '../atoms/text';
import Row from '../atoms/row';
import Column from '../atoms/col';
import { IoFootball } from "react-icons/io5";
import PlayerImage from '../atoms/images/player-image';
import FootAPIImage from '../atoms/images/footapi-image';
import PlayerScore from '../molecules/cards/player-score';

type Props = {
  data: any;
  typeStats: string
}

const TopStatistics = ({ data, typeStats }: Props) => {
  return (
    <div className='relative'>
      {/* FootAPI */}
      <Text value="TOP STATISTICS" size="xl" className='font-bold text-center mb-10' />
      <Row className='absolute top-12 right-10 font-bold text-gray text-xs gap-3'>
        <div>Total</div>
        <div>Match</div>
      </Row>
      <Column gap='2' className='justify-between mt-6'>
        {data?.slice(0, 10).map((item: any, key: any) => (
          <div key={key}>
            <PlayerScore data={item} index={key} score={Number.isInteger(item.statistics[typeStats]) ? item.statistics[typeStats] : item.statistics[typeStats].toFixed(1)} game={item.statistics.appearances} />
          </div>
        ))}
      </Column>
    </div>
  )
}

export default TopStatistics