import { getPlayerImage } from '@/services/foot-api/player'
import React, { useEffect, useState } from 'react'

type Props = {
  id: string
  w?: number
  h?: number
  type: 'player' | 'tournament' | 'team' | 'manager' | 'referee'
}

const FootAPIImage = ({ id, w, h, type }: Props) => {
  const [playerImage, setPlayerImage] = useState('')

  const onGetPlayerImage = async (id: string, path: 'player' | 'tournament' | 'team' | 'manager' | 'referee') => {
    const res = await getPlayerImage(id, path)
    if (res) {
      setPlayerImage(res)
    }
  }
  useEffect(() => {
    onGetPlayerImage(id, type)
  }, [id, type])

  useEffect(() => {

  }, [playerImage])

  return (
    <div>
      {playerImage ? (
        <img src={playerImage} alt="" width={w} height={h} />
      ) : ''}


    </div>
  )
}

export default FootAPIImage