import { topAssists_m_data } from '@/mock-data/top-assists'
import { topPlayers_m_data } from '@/mock-data/top-players'
import { topScorers_m_data } from '@/mock-data/top-scorers'
import { topTransfers_m_data } from '@/mock-data/top-transfers'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TopPlayer from '../organisms/top-player'
import TopScore from '../organisms/top-score'
import TopAssists from '../organisms/top-assists'
import TopTransfer from '../organisms/top-transfers'
import { getPlayerTopScore } from '@/services/players/top-srocer'

type Props = {}

const HomeTemplate = (props: Props) => {
  const [dataPlayerTopScore, setDataPlayerTopScore] = useState<any>()

  const onGetDateTopScorers = async () => {
    // const res = await getPlayerTopScore()
    const res = false
    console.log(res)
    if (res) {
      setDataPlayerTopScore(dataPlayerTopScore)
    } else (
      setDataPlayerTopScore(topScorers_m_data)
    )
  }

  useEffect(() => {
    onGetDateTopScorers()
  }, [])

  return (
    <div className='flex flex-col gap-6 my-6'>
      <section>
        <TopPlayer data={topPlayers_m_data} />
      </section>
      <section>
        <TopScore data={dataPlayerTopScore} />
      </section>
      <section>
        <TopAssists data={topAssists_m_data} />
      </section>
      {/* <section>
        <TopTransfer data={topTransfers_m_data} />
      </section> */}
    </div>
  )
}

export default HomeTemplate