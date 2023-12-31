import PlayerDetailTemplate from '@/components/templates/player-detail-template'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const PlayerDetailPage = (props: Props) => {
  const { query } = useRouter()
  console.log(query)
  return (
    <div>
      <PlayerDetailTemplate league={query.league} namePlayer={query.namePlayer} playerId={query.id} />
    </div>
  )
}

export default PlayerDetailPage