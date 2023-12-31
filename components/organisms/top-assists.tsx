import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Text from '../atoms/text';
import Row from '../atoms/row';
import Column from '../atoms/col';
import { PiFootprintsFill } from "react-icons/pi";
import FootAPIImage from '../atoms/images/footapi-image';
import PlayerScore from '../molecules/cards/player-score';

type Props = {
  data: any;
}

const TopAssists = ({ data }: Props) => {
  return (
    <>


      {/* FootAPI */}
      <Text value="TOP ASSISTS" size="xl" className='font-bold text-center mb-3' />
      <Column gap='2' className='justify-between'>
        {data?.slice(0, 10).map((item: any, key: any) => (
          <div key={key}>
            <PlayerScore data={item} index={key} score={item.statistics.assists} />
          </div>
        ))}
      </Column>
    </>
  )
}

export default TopAssists