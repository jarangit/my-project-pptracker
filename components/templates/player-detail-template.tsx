import { playerDetail_m_data } from '@/mock-data/player-detail'
import { transferPlayer_m_data } from '@/mock-data/transfer-player'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Text from '../atoms/text'
import Row from '../atoms/row'
import { getPlayerDetail } from '@/services/players'

type Props = {
  league: any;
  namePlayer: any
  playerId: any
}

const PlayerDetailTemplate = ({ league, namePlayer, playerId }: Props) => {
  const [dataPlayerDetail, setDataPlayerDetail] = useState<any>()
  const data = playerDetail_m_data.response[0]


  const onGetDatePlayerDetail = async (league: any, namePlayer: any, playerId: any) => {
    const res: any = false
    // const res: any = await getPlayerDetail(league, namePlayer, playerId)
    if (res) {
      setDataPlayerDetail(res.data.response[0])
    } else {
      setDataPlayerDetail(data)
    }
  }

  useEffect(() => {
    onGetDatePlayerDetail(league, namePlayer, playerId)
  }, [league, namePlayer, playerId]
  )



  return (
    <>
      {dataPlayerDetail && (
        <div>
          <section>
            <Image
              alt=''
              src={dataPlayerDetail.player.photo}
              width={100}
              height={100}
            />
            <div>
              <p>{dataPlayerDetail.player.name} </p>
              <p>Name: {dataPlayerDetail.player.firstname} {dataPlayerDetail.player.lastname}</p>
              <p>Nationality: {dataPlayerDetail.player.nationality}</p>
              <p>Birth: {dataPlayerDetail.player.birth.date}</p>
              <p>Age: {dataPlayerDetail.player.age}</p>
              <p>Height: {dataPlayerDetail.player.height}</p>
              <p>Weight: {dataPlayerDetail.player.weight}</p>
            </div>
          </section>

          {/* static */}
          <section className='grid grid-cols-2 gap-3'>
            {dataPlayerDetail.statistics && dataPlayerDetail.statistics.length && dataPlayerDetail.statistics.map((item: any, key: any) => (
              <div key={key} className='border p-3'>
                <Text size="md" className='font-bold' value={item.league.season} />
                <Text size="md" className='font-bold' value={item.league.name} />
                <ul>
                  <li>
                    <Row>
                      <Image
                        alt=''
                        src={item.team.logo}
                        width={20}
                        height={20}
                      />
                      {/* <Image
                        alt=''
                        src={item.league.logo}
                        width={20}
                        height={20}
                      />
                      <Image
                        alt=''
                        src={item.league.flag}
                        width={20}
                        height={20}
                      /> */}
                    </Row>
                  </li>
                  <li>Game: {item.games.appearences}</li>
                  <li>Goals: {item.goals.total}</li>
                  <li>Assist: {item.goals.assists}</li>
                </ul>
              </div>
            ))}
          </section>
          <div>
            {transferPlayer_m_data.response[0].transfers.map((item, key) => (
              <li key={key}>
                {item.teams.out.name} {`>`}
                {item.teams.in.name}
                {`(${item.type})`}
              </li>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default PlayerDetailTemplate