import { topAssists_m_data } from '@/mock-data/top-assists'
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
import BannerHome from '../organisms/banners/banner-home'
import { topPlayers_m_data } from '@/mock-data/footAPI/top-player'

type Props = {}

const HomeTemplate = (props: Props) => {
  const [dataPlayerTopScore, setDataPlayerTopScore] = useState<any>()
  console.log('%cMyProject%cline:18%cdataPlayerTopScore', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', dataPlayerTopScore)

  const onGetDateTopScorers = async () => {
    // const res = await getPlayerTopScore()
    const res = false
    console.log(res)
    if (res) {
      setDataPlayerTopScore(dataPlayerTopScore)
    } else (
      setDataPlayerTopScore(topPlayers_m_data)
    )
  }

  useEffect(() => {
    onGetDateTopScorers()
  }, [])

  return (
    <div className='flex flex-col gap-6 my-6'>
      <section>
        <BannerHome />
      </section>
      <section>
        {/* <TopPlayer data={topPlayers_m_data} /> */}
      </section>
      <section>
        <TopScore data={dataPlayerTopScore?.topPlayers.goals} />
      </section>
      <section>
        <TopAssists data={dataPlayerTopScore?.topPlayers.assists} />
      </section>
      {/* <section>
        <TopTransfer data={topTransfers_m_data} />
      </section> */}
    </div>
  )
}

export default HomeTemplate