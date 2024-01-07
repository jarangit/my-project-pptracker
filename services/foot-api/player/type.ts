export interface IPlayerDetail {
  playerId: string,
  type?: 'media' | 'summary' | 'transfer' | 'near' | 'penalty' | 'characteristics' | 'statistics/season' | 'summary' | 'attribute'
}
export interface IGetPlayerRating {
  tournamentId: string, seasonId: string, playerId: string
}