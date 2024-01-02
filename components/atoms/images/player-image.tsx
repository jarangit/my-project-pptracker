import { getPlayerImage } from '@/services/foot-api/player'
import React, { useEffect, useState } from 'react'

type Props = {
  id: string
  w?: number
  h?: number
}

const PlayerImage = ({ id, w, h }: Props) => {
  const [playerImage, setPlayerImage] = useState('')

  const onGetPlayerImage = async (id: string) => {
    const res = await getPlayerImage(id, 'player')
    if (res) {
      setPlayerImage(res)
    }
  }
  useEffect(() => {
    onGetPlayerImage(id)
  }, [id])

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

export default PlayerImage