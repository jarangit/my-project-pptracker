

import { axiosInstance } from "../axios-instance";

const getPlayerTopScore = async () => {

  const param = {
    url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
    params: {
      league: '39',
      season: '2020'
    },
  }
  try {
    const res = await axiosInstance.get('/v3/players/topscorers', {
      params: {
        league: '39',
        season: '2023'
      },
    })
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}
export {
  getPlayerTopScore
}