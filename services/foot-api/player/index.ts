import { axiosInstance } from "@/services/axios-instance"
import { IGetPlayerRating, IPlayerDetail } from "./type"

const getPlayerDetail = async ({ playerId, type }: IPlayerDetail) => {
  try {
    const res = await axiosInstance.get(`/player/${playerId}${type ? `/${type}` : ''}`)
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}
const getTopPlayerOfTournament = async (tournamentId: string, seasonId: string) => {
  try {
    const res = await axiosInstance.get(`tournament/${tournamentId}/season/${seasonId}/best-players`)
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}
const getImage = async (playerId: string, type: string | 'player' | 'tournament' | 'team' | 'manager' | 'referee') => {
  try {
    const res = await axiosInstance.get(`/${type}/${playerId}/image`)
    return {
      data: res.request.responseURL,
      status: res.status
    }
  } catch (error: any) {
    // console.log(error)
    return { status: error.response.status }
  }
}

const getPlayerRating = async ({ playerId, tournamentId, seasonId }: IGetPlayerRating) => {
  try {
    const res = await axiosInstance.get(`/player/${playerId}/tournament/${tournamentId}/season/${seasonId}/last-ratings`)
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}
export {
  getPlayerDetail,
  getImage,
  getTopPlayerOfTournament,
  getPlayerRating
}