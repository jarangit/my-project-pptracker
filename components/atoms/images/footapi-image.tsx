import { addImageUrl } from '@/app-state/redux/feature/web-state-slice'
import { useAppDispatch, useAppSelector } from '@/app-state/redux/hook'
import { getImage } from '@/services/foot-api/player'
import { AppContext } from '@/stores/context/app-state'
import React, { useContext, useEffect, useState } from 'react'

type Props = {
  id: string
  w?: number
  h?: number
  type: 'player' | 'tournament' | 'team' | 'manager' | 'referee'
  x?: number,
  y?: number,
  renderType?: string
}

const FootAPIImage = ({ id, w, h, type, x, y, renderType }: Props) => {
  const {images } = useAppSelector((state:any) => state.webState)
  const dispatch = useAppDispatch()
  const {setShowLoading}:any = useContext(AppContext)
  const [playerImage, setPlayerImage] = useState('')
  const [isReLoad, setIsReLoad] = useState(0)

  const onGetPlayerImage = async (id: string, path: 'player' | 'tournament' | 'team' | 'manager' | 'referee') => {
    setShowLoading(true)
    const url = `https://footapi7.p.rapidapi.com/api/${path}/${id}/image`
    const foundImageInRedux = images.find((item:string) => item == url)
    if(foundImageInRedux){
      setPlayerImage(url)
    }else{
      const res = await getImage(id, path)
      if (res) {
        setShowLoading(false)
        setPlayerImage(res.data)
        // add url to redux
        dispatch(addImageUrl(res.data))
      }
    }
    setShowLoading(false)
  }

  // render zone
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
    <>
      {playerImage ? (
        <>
          {renderType == "chart" && x && y ? (
            <image x={x} y={y} width={30} height={30} xlinkHref={playerImage} />
          ) : (
            <img src={playerImage} alt="" width={w} height={h} />
          )}
        </>
      ) : ''}


    </>
  )
}

export default FootAPIImage