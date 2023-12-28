import { topAssists_m_data } from '@/mock-data/top-assists'
import { topPlayers_m_data } from '@/mock-data/top-players'
import { topScorers_m_data } from '@/mock-data/top-scorers'
import { topTransfers_m_data } from '@/mock-data/top-transfers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TopPlayer from '../organisms/top-player'
import TopScore from '../organisms/top-score'
import TopAssists from '../organisms/top-assists'
import TopTransfer from '../organisms/top-transfers'

type Props = {}

const HomeTemplate = (props: Props) => {
  return (
    <div className='flex flex-col gap-6 my-6'>
      <section>
        <TopPlayer data={topPlayers_m_data} />
      </section>
      <section>
        <TopScore data={topScorers_m_data} />
      </section>
      <section>
        <TopAssists data={topAssists_m_data} />
      </section>
      <section>
        <TopTransfer data={topTransfers_m_data} />
      </section>
    </div>
  )
}

export default HomeTemplate