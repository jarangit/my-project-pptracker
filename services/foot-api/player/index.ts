import { axiosInstance } from "@/services/axios-instance"

const getPlayerDetail = async (playerId: string) => {


  try {
    const res = await axiosInstance.get(`/player/${playerId}`)
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}
const getPlayerImage = async (playerId: string, type: string | 'player' | 'tournament' | 'team' | 'manager' | 'referee') => {
  try {
    const foundLocalImage = false
    if (foundLocalImage) {
      return foundLocalImage
    } else {
      const res = await axiosInstance.get(`/${type}/${playerId}/image`)
      return res.request.responseURL
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
export {
  getPlayerDetail,
  getPlayerImage
}