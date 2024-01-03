import { axiosInstance } from "@/services/axios-instance"

// https://footapi7.p.rapidapi.com/api/tournament/7/seasons
const getSeasonOfTournament = async (tournamentId: string) => {
  try {
    const res = await axiosInstance.get(`tournament/${tournamentId}/seasons`)
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}

export {
  getSeasonOfTournament
}