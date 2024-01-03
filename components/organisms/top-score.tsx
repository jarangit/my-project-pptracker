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
}

const TopScore = ({ data }: Props) => {
  return (
    <>
      {/* FootAPI */}
      <Text value="TOP SCORE" size="xl" className='font-bold text-center mb-3' />
      <Column gap='2' className='justify-between'>
        {data?.slice(0, 10).map((item: any, key: any) => (
          <div key={key}>
            <PlayerScore data={item} index={key} score={item.statistics.goals} />
          </div>
        ))}
      </Column>
    </>
  )
}

export default TopScore