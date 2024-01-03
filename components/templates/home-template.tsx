import { topAssists_m_data } from '@/mock-data/top-assists'
import { topScorers_m_data } from '@/mock-data/top-scorers'
import { topTransfers_m_data } from '@/mock-data/top-transfers'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import TopPlayer from '../organisms/top-player'
import TopScore from '../organisms/top-score'
import TopAssists from '../organisms/top-assists'
import TopTransfer from '../organisms/top-transfers'
import { getPlayerTopScore } from '@/services/players/top-srocer'
import BannerHome from '../organisms/banners/banner-home'
import { topPlayers_m_data } from '@/mock-data/footAPI/top-player'
import TopRating from '../organisms/top-rating'
import TopStatistics from '../organisms/top-statistics'
import { topTournaments_m_data } from '@/mock-data/footAPI/tournaments/top-touranments'
import FootAPIImage from '../atoms/images/footapi-image'
import Row from '../atoms/row'
import { getTopPlayerOfTournament } from '@/services/foot-api/player'
import { getSeasonOfTournament } from '@/services/foot-api/tournaments'
import { AppContext } from '@/stores/context/app-state'
import Column from '../atoms/col'
import { IoFilterSharp } from "react-icons/io5";
type Props = {}
const typeStats = [
  {
    name: 'Rating',
    key: 'rating'
  },
  {
    name: 'Goals',
    key: 'goals'
  },
  {
    name: 'Assists',
    key: 'assists'
  },
  {
    name: 'Saves',
    key: 'saves'
  },
  {
    name: 'Tackles',
    key: 'tackles'
  },
  {
    name: 'Big Chances Created',
    key: 'bigChancesCreated'
  },
  {
    name: 'Key Passes',
    key: 'keyPasses'
  },
]
const HomeTemplate = (props: Props) => {
  // context
  const [showFilter, setShowFilter] = useState(false)
  const { setShowLoading }: any = useContext(AppContext)
  const [dataPlayerTopScore, setDataPlayerTopScore] = useState<any>()
  console.log('%cMyProject%cline:57%cdataPlayerTopScore', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(251, 178, 23);padding:3px;border-radius:2px', dataPlayerTopScore)
  const [currentTypeStats, setCurrentTypeStats] = useState('rating')
  const [currentTournamentSelected, setCurrentTournamentSelected] = useState<any>()
  const [seasons, setSeasons] = useState<any>()
  const [currentSeasonSelected, setCurrentSeasonSelected] = useState<any>()
  const onGetDateTopScorers = useCallback(async (tournamentId: string, seasonId: string) => {
    setShowLoading(true)
    const res = await getTopPlayerOfTournament(tournamentId, seasonId)
    if (res) {
      setDataPlayerTopScore(res.data)
      setShowLoading(false)
    } else {
      setDataPlayerTopScore(topPlayers_m_data)
      setShowLoading(false)
    }
  }, [currentTournamentSelected, currentSeasonSelected])

  const onGetSeason = async (tournamentId: string,) => {
    setShowLoading(true)
    const res = await getSeasonOfTournament(tournamentId)
    if (res) {
      setSeasons(res.data?.seasons)
      setShowLoading(false)
      setCurrentSeasonSelected(res.data?.seasons[0])
    }
    setShowLoading(false)

  }
  useEffect(() => {
    setCurrentTournamentSelected(topTournaments_m_data[0])
  }, [currentTypeStats])
  useEffect(() => {
  }, [dataPlayerTopScore, currentSeasonSelected])
  useEffect(() => {
    if (currentTournamentSelected?.id) {
      onGetSeason(currentTournamentSelected.id)
    }
  }, [currentTournamentSelected])
  useEffect(() => {
    if (currentSeasonSelected?.id && currentTournamentSelected?.id) {
      onGetDateTopScorers(currentTournamentSelected.id, currentSeasonSelected.id)
    }
  }, [currentSeasonSelected])

  return (
    <div className='flex flex-col gap-3 my-6'>
      <section>
        <BannerHome />
        <div className='mt-6 text-right flex justify-end'>
          <div className='border border-pink px-3 rounded-sm w-fit text-pink' onClick={() => setShowFilter(!showFilter)}>{showFilter ? 'X' : <IoFilterSharp  size={20}/>}</div>
        </div>
      </section>
      <div className={`${showFilter ? 'grid' : 'hidden'} grid-cols-4 gap-3`}>
        <div className='col-span-4'>
          <strong>Leagues</strong>
          <Row className='pl-3 text-sm flex-wrap gap-6 gap-y-2 mt-3'>
            {topTournaments_m_data.map((item: any, key: any) => (
              <div onClick={() => setCurrentTournamentSelected(item)} key={key} className={`hover:text-pink cursor-pointer ${currentTournamentSelected?.id === item.id ? "text-pink" : ""}`}>
                <Row>
                  <FootAPIImage id={item.id} type={'tournament'} w={20} />
                  {item.name}
                </Row>
              </div>
            ))}
          </Row>
        </div>
        <div className='col-span-2'>
          <strong>Type Stats</strong>
          <Row className='pl-3 text-sm flex-wrap  gap-3 mt-3'>
            {typeStats.map((item: any, key: any) => (
              <div onClick={() => setCurrentTypeStats((item.key))} key={key} className={`hover:text-pink cursor-pointer  px-2 rounded-sm ${currentTypeStats === item.key ? "!bg-pink " : ""}`}>
                {item.name}
              </div>
            ))}
          </Row>
        </div>
        <div className='col-span-2'>
          <strong>Season</strong>
          <Row className='pl-3 text-sm flex-wrap  gap-3 mt-3'>
            {seasons && seasons.length && seasons.slice(0, 10).map((item: any, key: any) => (
              <div onClick={() => setCurrentSeasonSelected(item)} key={key} className={`hover:text-pink cursor-pointer  px-2 rounded-sm ${currentSeasonSelected?.id === item.id ? "!bg-pink " : ""}`}>
                {item.year}
              </div>
            ))}
          </Row>
        </div>
      </div>
      <TopStatistics data={dataPlayerTopScore?.topPlayers[currentTypeStats]} typeStats={currentTypeStats} />
      {/* <section>
        <TopRating data={dataPlayerTopScore?.topPlayers.rating} />
      </section> */}
      {/* <section>
        <TopScore data={dataPlayerTopScore?.topPlayers.goals} />
      </section>
      <section>
        <TopAssists data={dataPlayerTopScore?.topPlayers.assists} />
      </section> */}
      {/* <section>
        <TopTransfer data={topTransfers_m_data} />
      </section> */}
    </div>
  )
}

export default HomeTemplate