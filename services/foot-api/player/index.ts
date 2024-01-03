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
const getImage = async (playerId: string, type: string | 'player' | 'tournament' | 'team' | 'manager' | 'referee') => {
  try {
      const res = await axiosInstance.get(`/${type}/${playerId}/image`)
      return {
        data: res.request.responseURL,
        status: res.status
      }
  } catch (error:any) {
    console.log(error)
    return {status: error.response.status}
  }
}

export {
  getPlayerDetail,
  getImage
}