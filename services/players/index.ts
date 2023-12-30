import { axiosInstance } from "../axios-instance";

const getAllPlayers = async () => {

  const param = {
    fixture: '169080'
  }
  try {
    const res = await axiosInstance.get('/fixtures/players', {
      params: {
        fixture: '169080'
      }
    })
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}

const getPlayerDetail = async (league: string, name: string, playerId:string) => {

  const param = {
    fixture: '169080'
  }
  try {
    const res = await axiosInstance.get('/v3/players', {
      params: {
        // league: league,
        // search: name,
        id: playerId,
        season:'2023'
      },
    })
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}
export {
  getAllPlayers,
  getPlayerDetail
}