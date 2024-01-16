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
import { getLastMatchByLeague } from '@/services/foot-api/matches/leagueLastMatch'
import LastMatch from '../organisms/last-match'
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
  const [currentTypeStats, setCurrentTypeStats] = useState('rating')
  const [currentTournamentSelected, setCurrentTournamentSelected] = useState<any>()
  const [seasons, setSeasons] = useState<any>()
  const [currentSeasonSelected, setCurrentSeasonSelected] = useState<any>()
  const [lastMatchData, setLastMatchData] = useState<any>()
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

  const onGetLastMatch = async () => {
    try {
      const res = await getLastMatchByLeague()
      if (res) {
        setLastMatchData(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    setCurrentTournamentSelected(topTournaments_m_data[0])
  }, [])
  useEffect(() => {
  }, [dataPlayerTopScore, currentSeasonSelected])
  useEffect(() => {
    if (currentTournamentSelected?.id) {
      onGetSeason(currentTournamentSelected.id)
    }
    onGetLastMatch()
  }, [currentTournamentSelected])
  useEffect(() => {
    if (currentSeasonSelected?.id && currentTournamentSelected?.id) {
      onGetDateTopScorers(currentTournamentSelected.id, currentSeasonSelected.id)
    }
  }, [currentSeasonSelected])

  useEffect(() => {

  }, [dataPlayerTopScore])


  return (
    <div className='flex flex-col gap-3 my-6'>
      <section>
        <BannerHome />
        <div className='mt-6 text-right flex justify-end'>
          <div className='border border-pink p-1 rounded-full w-8 h-8 flex justify-center items-center text-pink hover:bg-pink hover:text-white cursor-pointer' onClick={() => setShowFilter(!showFilter)}>{showFilter ? 'X' : <IoFilterSharp size={20} />}</div>
        </div>
      </section>
      <section className={`${showFilter ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden grid grid-cols-4 gap-3 transition-all duration-500`}>
        <div className='col-span-4'>
          <strong className='text-lg border-b border-white'>Leagues</strong>
          <div className='text-sm flex-wrap gap-6 gap-y-2 mt-3 grid grid-cols-1 md:grid-cols-3'>
            {topTournaments_m_data.map((item: any, key: any) => (
              <div onClick={() => setCurrentTournamentSelected(item)} key={key} className={`hover:text-white hover:bg-pink cursor-pointer p-1 rounded-sm ${currentTournamentSelected?.id === item.id ? "bg-pink font-bold" : "bg-black_bg text-gray"}`}>
                <Row className='gap-3'>
                  <FootAPIImage id={item.id} type={'tournament'} w={30} />
                  {item.name}
                </Row>
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-2'>
          <strong className='text-lg border-b border-white'>Type Stats</strong>
          <Row className='text-sm flex-wrap  gap-1 mt-3'>
            {typeStats.map((item: any, key: any) => (
              <div onClick={() => setCurrentTypeStats((item.key))} key={key} className={`hover:text-pink cursor-pointer  px-2 rounded-sm ${currentTypeStats === item.key ? "!bg-pink " : ""}`}>
                {item.name}
              </div>
            ))}
          </Row>
        </div>
        <div className='col-span-2'>
          <strong className='text-lg border-b border-white'>Season</strong>
          <Row className='text-sm flex-wrap  gap-1 mt-3'>
            {seasons && seasons.length && seasons.slice(0, 10).map((item: any, key: any) => (
              <div onClick={() => setCurrentSeasonSelected(item)} key={key} className={`hover:text-pink cursor-pointer  px-2 rounded-sm ${currentSeasonSelected?.id === item.id ? "!bg-pink " : ""}`}>
                {item.year}
              </div>
            ))}
          </Row>
        </div>
      </section>
      {dataPlayerTopScore && (
        <TopStatistics data={dataPlayerTopScore?.topPlayers[currentTypeStats]} typeStats={currentTypeStats} />
      )}

      {lastMatchData ? (
        <LastMatch data={lastMatchData} />
      ) : ''}
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