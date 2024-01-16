import { axiosInstance } from "@/services/axios-instance"

// https://footapi7.p.rapidapi.com/api/tournament/7/seasons
const getLastMatchByLeague = async () => {
  try {
    const res = await axiosInstance.get(`/tournament/7/season/36886/matches/last/1`)
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}

export {
  getLastMatchByLeague
}