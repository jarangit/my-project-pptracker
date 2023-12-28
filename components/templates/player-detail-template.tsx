import { playerDetail_m_data } from '@/mock-data/player-detail'
import { transferPlayer_m_data } from '@/mock-data/transfer-player'
import Image from 'next/image'
import React from 'react'

type Props = {}

const PlayerDetailTemplate = (props: Props) => {
  const data = playerDetail_m_data.response[0]
  return (
    <div>
      <Image
        alt=''
        src={data.player.photo}
        width={100}
        height={100}
      />
      {data.player.name}

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
  )
}

export default PlayerDetailTemplate