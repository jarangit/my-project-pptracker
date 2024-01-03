import { getImage } from '@/services/foot-api/player'
import React, { useEffect, useState } from 'react'

type Props = {
  id: string
  w?: number
  h?: number
  type: 'player' | 'tournament' | 'team' | 'manager' | 'referee'
}

const FootAPIImage = ({ id, w, h, type }: Props) => {
  const [playerImage, setPlayerImage] = useState('')
  const [isReLoad, setIsReLoad] = useState(0)

  const onGetPlayerImage = async (id: string, path: 'player' | 'tournament' | 'team' | 'manager' | 'referee') => {
    const res = await getImage(id, path)
    if (res) {
      setPlayerImage(res.data)
    }
    if (res && res.status === 429) {
      setIsReLoad(isReLoad + 100)
    } else {
      setIsReLoad(0)
    }
  }
  useEffect(() => {
    onGetPlayerImage(id, type)
  }, [id, type])

  useEffect(() => {

  }, [playerImage])
  useEffect(() => {
    if (isReLoad) {
      setTimeout(() => {
        onGetPlayerImage(id, type)
      }, isReLoad);
    }
  }, [isReLoad])


  return (
    <div>
      {playerImage ? (
        <img src={playerImage} alt="" width={w} height={h} />
      ) : ''}


    </div>
  )
}

export default FootAPIImage