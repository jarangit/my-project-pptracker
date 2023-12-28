import { topAssists_m_data } from '@/mock-data/top-assists'
import { topPlayers_m_data } from '@/mock-data/top-players'
import { topScorers_m_data } from '@/mock-data/top-scorers'
import { topTransfers_m_data } from '@/mock-data/top-transfers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const HomeTemplate = (props: Props) => {
  return (
    <div className='flex flex-col gap-6'>
      <section>
        <div>Top Player</div>
        <div>
          <ul>
            {topPlayers_m_data.response.map((item, key) => (
              <li key={key}>
                <Link href={{
                  pathname: `/player-detail/${item.player.id}`,
                  query: { playerName: item.player.name }
                }} >
                  <Image
                    alt=''
                    src={item.player.photo}
                    width={100}
                    height={100}
                  />
                  <div>{item.player.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div>Top Score</div>
        <div>
          <ul>
            {topScorers_m_data.response.map((item, key) => (
              <li key={key}>
                <Link href={{
                  pathname: `/player-detail/${item.player.id}`,
                  query: { playerName: item.player.name }
                }} >
                  <Image
                    alt=''
                    src={item.player.photo}
                    width={100}
                    height={100}
                  />
                  <div>{item.player.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div>Top Assists</div>
        <div>
          <ul>
            {topAssists_m_data.response.map((item, key) => (
              <li key={key}>
                <Link href={{
                  pathname: `/player-detail/${item.player.id}`,
                  query: { playerName: item.player.name }
                }} >
                  <Image
                    alt=''
                    src={item.player.photo}
                    width={100}
                    height={100}
                  />
                  <div>{item.player.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div>Top Transfers</div>
        <div>
          <ul>
            {topTransfers_m_data.data.map((item, key) => (
              <li key={key}>
                <Link href={{
                  pathname: `/player-detail/${item.playerID}`,
                  query: { playerName: 'waiting-get-name' }
                }} >
                  <div>{item.playerID}</div>
                  <div>{item.transferFee.value}M {item.transferFee.currency}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* <section>Top Transfer</section>
      <section>Top value</section> */}
    </div>
  )
}

export default HomeTemplate