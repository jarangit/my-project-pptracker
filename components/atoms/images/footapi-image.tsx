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
    console.log('%cMyProject%cline:16%cres', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(34, 8, 7);padding:3px;border-radius:2px', res)
    if (res) {
      setPlayerImage(res.data)
    }
    if (res && res.status === 429) {
      setIsReLoad(isReLoad + 300)
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
      console.log('re call api')
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