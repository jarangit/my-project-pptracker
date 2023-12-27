import { getAllPlayers } from '@/services/players'
import React, { useEffect } from 'react'

type Props = {}

const HomePage = (props: Props) => {
  const getData = async () => {
    const res = await getAllPlayers()
    console.log('%cMyProject%cline:8%cres', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(38, 157, 128);padding:3px;border-radius:2px', res)
  }
  useEffect(() => {
    console.log('reder home')
    
    getData()
  }, [])
  
  return (
    <div>HomePage</div>
  )
}

export default HomePage