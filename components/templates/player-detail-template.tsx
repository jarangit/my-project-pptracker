/* eslint-disable @next/next/no-img-element */
import { playerDetail_m_data } from '@/mock-data/player-detail'
import { transferPlayer_m_data } from '@/mock-data/transfer-player'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import Text from '../atoms/text'
import Row from '../atoms/row'
import Column from '../atoms/col'
import { IoFootball } from "react-icons/io5";
import { PiFootprintsFill } from "react-icons/pi";
import StatisticsCardOfSeason from '../organisms/cards/statistics-of-season'
import { MdOutlineDoubleArrow } from "react-icons/md";
import { getPlayerDetail, getImage, getPlayerRating } from '@/services/foot-api/player'
import PlayerImage from '../atoms/images/player-image'
import { AppContext } from '@/stores/context/app-state'
import MyRadarChart from '../molecules/charts/radar-chart'
import Progress from '../atoms/progasse'
import FootAPIImage from '../atoms/images/footapi-image'
import LineChart from '../molecules/charts/line-chart/transfer-line-chart'
import moment from 'moment';
import Moment from 'react-moment';
import { timeStamp } from 'console'
import TransferLineChart from '../molecules/charts/line-chart/transfer-line-chart'
import StatisticsLineChart from '../molecules/charts/line-chart/statistics-line-chart'

interface IChart {
  subject: string,
  A: number,
  fullMark: number,
}
type Props = {
  league: any;
  namePlayer: any
  playerId: any
}

const PlayerDetailTemplate = ({ league, namePlayer, playerId }: Props) => {
  //context zone 
  const { setShowLoading }: any = useContext(AppContext)

  //state zone
  const [tournamentSelectedId, setTournamentSelectedId] = useState<any>()
  const [seasonSelectedId, setSeasonSelectedId] = useState<any>()
  const [allData, setAllData] = useState<any>()
  console.log('%cMyProject%cline:34%callData', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(248, 214, 110);padding:3px;border-radius:2px', allData)
  const [playerAttribute, setPlayerAttribute] = useState({
    attacking: 0,
    creativity: 0,
    defending: 0,
    technical: 0,
    tactical: 0,

  })
  const [attributeChart, setAttributeChart] = useState<IChart[]>([
    {
      subject: '',
      A: 0,
      fullMark: 100,
    }
  ])
  const [transferChat, setTransferChat] = useState([{
    date: '',
    price: 0,
    currentTeam: null,
    displayPrice: '',
    timeStamp: 0,
  }])
  const [ratingChart, setRatingChart] = useState([{
    date: '',
    rating: 0,
  }])
  const [summaryChart, setSummaryChart] = useState([{
    date: '',
    rating: 0,
  }])
  const data = playerDetail_m_data.response[0]

  // styles zone 
  const styles = {
    bgBlack: `bg-black_bg rounded-lg p-3`
  }

  //function zone

  const onGetALlData = async (playerId: string) => {
    let result;
    setShowLoading(true)

    const detail: any = await getPlayerDetail({ playerId })
    const media: any = await getPlayerDetail({ playerId, type: 'media' })
    const transfer: any = await getPlayerDetail({ playerId, type: 'transfer' })
    const attribute: any = await getPlayerDetail({ playerId, type: 'attribute' })
    const statistics: any = await getPlayerDetail({ playerId, type: 'statistics/season' })
    const summary: any = await getPlayerDetail({ playerId, type: 'summary' })
    if (detail && media && transfer && attribute) {
      result = {
        detail: detail.data,
        media: media.data,
        transfer: transfer.data,
        attribute: attribute.data,
        statistics: statistics.data,
        summary: summary.data,
      }
      setAllData(result)
      setShowLoading(false)
      summaryAttribute(attribute?.data?.playerAttributeOverviews)
      onCreateDateTransferChart(transfer.data)
      onInitTournament(detail.data.player.team.tournament.uniqueTournament.id, statistics.data)
      onCreateDataSummaryChart(summary.data)
      return result
    }
  }

  const summaryAttribute = (data: any) => {
    let result = {
      attacking: 0,
      creativity: 0,
      defending: 0,
      technical: 0,
      tactical: 0,
    }
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        result = {
          attacking: result.attacking += (element.attacking / data.length),
          creativity: result.creativity += (element.creativity / data.length),
          defending: result.defending += (element.defending / data.length),
          technical: result.technical += (element.technical / data.length),
          tactical: result.tactical += (element.tactical / data.length),
        }
      }
      setPlayerAttribute(result)
      setAttributeChart([
        {
          subject: 'Attacking',
          A: result.attacking,
          fullMark: 100
        },
        {
          subject: 'Creativity',
          A: result.creativity,
          fullMark: 100
        },
        {
          subject: 'Defending',
          A: result.defending,
          fullMark: 100
        },
        {
          subject: 'Technical',
          A: result.technical,
          fullMark: 100
        },
        {
          subject: 'Tactical',
          A: result.tactical,
          fullMark: 100
        },
      ])
    }
  }

  const onCreateDateTransferChart = (data: any) => {
    if (data) {
      const newData = data.transferHistory.map((item: any) => {
        const dateString = moment.unix(item.transferDateTimestamp).format("YYYY");
        return {
          date: dateString,
          price: (item.transferFeeRaw?.value ?? 0) / 1000000,
          currentTeam: item.transferTo,
          displayPrice: item.transferFeeDescription,
          timeStamp: item.transferDateTimestamp,
        }
      })

      if (newData) {
        const sorted = newData.sort((a: any, b: any) => {

          return a.timeStamp - b.timeStamp
        })
        setTransferChat(sorted)
      }

    }
  }

  const onGetDateRating = async (playerId: string, tournamentId: string, seasonId: string) => {
    console.log('%cMyProject%cline:185%cseasonId', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(130, 57, 53);padding:3px;border-radius:2px', seasonId)
    console.log('%cMyProject%cline:185%ctournamentId', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(251, 178, 23);padding:3px;border-radius:2px', tournamentId)
    console.log('%cMyProject%cline:185%cplayerId', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(153, 80, 84);padding:3px;border-radius:2px', playerId)
    const rating: any = await getPlayerRating({ playerId, tournamentId, seasonId })
    console.log('%cMyProject%cline:186%crating', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(34, 8, 7);padding:3px;border-radius:2px', rating)
    if (rating) {
      onCreateDataRatingChart(rating.data)
    }

  }

  const onInitTournament = (id: string, data: any) => {
    const found = data?.uniqueTournamentSeasons?.find((item: any) => item.uniqueTournament.id == id)
    if (found) {
      setTournamentSelectedId(found)
      setSeasonSelectedId(found.seasons[0].id)
    }
    onGetDateRating(playerId, id, found.seasons[0].id.toString())
  }

  const onChangeSelectedTournament = (e: any) => {
    onInitTournament(e.target.value, allData.statistics)
  }
  const onChangeSelectedSeason = (e: any) => {
    setSeasonSelectedId(e.target.value)
  }

  const onCreateDataRatingChart = (data: any) => {
    console.log(data)
    if (data) {
      const dataChart = data.lastRatings.map((item: any) => (
        {
          date: item.startTimestamp,
          rating: item.rating
        }
      ))
      console.log('new data chart rating:', dataChart)
      if (dataChart) setRatingChart(dataChart)
    }
  }
  const onCreateDataSummaryChart = (data: any) => {

    console.log(data)
    if (data) {
      const countData = data.summary.length
      const dataChart = data.summary
        .slice(countData - 10, countData).map((item: any) => {
          const dateString = moment.unix(item.timestamp).format("MM/YY");
          return {
            date: dateString,
            rating: item.value < 10 ? item.value : 0
          }
        })
      console.log('new data chart rating:', dataChart)
      if (dataChart) setSummaryChart(dataChart)
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    onGetALlData(playerId)
    console.log('re render')
  }, [playerId])



  return (
    <>
      <Text value='PLAYER DETAIL' className='font-bold mb-3' />
      {allData && (
        <Column gap='6'>
          <section className='p-3 rounded-lg bg-black_bg grid grid-cols-1 lg:grid-cols-4 gap-10'>

            <div>
              <Row className=' !items-start' gap='6'>
                <div className='w-fit rounded-md overflow-hidden'>
                  {/* <Image
                  alt=''
                  src={playerImage ?? ''}
                  width={100}
                  height={100}
                /> */}
                  <PlayerImage
                    id={playerId}
                  />
                </div>
                <Column gap="0">
                  <Text size="xl" value={allData.detail?.player?.shortName} className='font-bold' />
                  <Text size="xs" value={allData.detail?.player?.team.name} className='text-green' />
                  <div className='text-xs mt-1'>
                    <p>Age: {allData.detail.player?.age}</p>
                    <p>Height: {allData.detail.player?.height}</p>
                    <p>Weight: {allData.detail.player?.weight}</p>
                  </div>
                </Column>
              </Row>

              <Column gap='0' className='mt-6'>
                <p >Name:
                  <span className='ml-3 text-gold'>
                    {allData.detail.player?.name}
                  </span>
                </p>
                <p >Nationality:
                  <span className='ml-3 text-gold'>
                    {allData.detail.player?.nationality}
                  </span>
                </p>
                <p >Birth:
                  <span className='ml-3 text-gold'>
                    {allData.detail.player?.dateOfBirthTimestamp}
                  </span>
                </p>
                <p >Age:
                  <span className='ml-3 text-gold'>
                    {allData.detail.player?.age}
                  </span>
                </p>
                <p >Height:
                  <span className='ml-3 text-gold'>
                    {allData.detail.player?.height}
                  </span>
                </p>
                {/* <p >Weight:
                <span className='ml-3 text-gold'>
                  {allData.detail.player?.weight}
                </span>
              </p> */}
                <p >position:
                  <span className='ml-3 text-gold'>
                    {allData.detail.player?.position}
                  </span>
                </p>
                <p >preferredFoot:
                  <span className='ml-3 text-gold'>
                    {allData.detail.player?.preferredFoot}
                  </span>
                </p>
                <p >shirtNumber:
                  <span className='ml-3 text-gold'>
                    {allData.detail.player?.shirtNumber}
                  </span>
                </p>
              </Column>
            </div>

            <div className='col-span-3 overflow-hidden'>
              {/* <div>
                <div>statistics</div>
                {tournamentSelectedId && (
                  <>
                    <select name="Tournament" value={tournamentSelectedId} id="" onChange={onChangeSelectedTournament}>
                      {allData.statistics.uniqueTournamentSeasons?.map((item: any, key: any) => (
                        <React.Fragment key={key}>
                          <option value={item.uniqueTournament.id} label={item.uniqueTournament.name} selected={item.uniqueTournament.id === tournamentSelectedId.uniqueTournament.id ? true : false} ></option>
                        </React.Fragment>
                      ))}
                    </select>
                    <select name="seasons" id="" value={seasonSelectedId} onChange={onChangeSelectedSeason}>
                      {tournamentSelectedId.seasons.map((item: any, key: any) => (
                        <React.Fragment key={key}>
                          <option value={item.id} label={item.name}></option>
                        </React.Fragment>
                      ))}
                    </select>
                  </>
                )}
              </div> */}
              <div className={``}>
                <div className='text-xl font-bold text-center'>Performance Last Year Rating</div>
                <StatisticsLineChart data={summaryChart} />
              </div>
            </div>
          </section>



          {/* static */}
          {/* <StatisticsCardOfSeason data={data} /> */}

          {/* <section>
            <Text value='TRANSFERS' className='font-bold mb-3' />
            <Column gap='2'>
              {transferPlayer_m_data.response[0].transfers.map((item, key) => (
                <div key={key} className='bg-black_bg p-3 rounded-md'>
                  <div className='grid grid-cols-3 justify-center'>
                    <Column className='items-center'>
                      <Image
                        alt=''
                        src={item.teams.out.logo}
                        width={30}
                        height={30}
                      />
                      <Text value={item.teams.out.name} size='xs' />
                    </Column>
                    <div className='text-gold flex justify-center'>
                      <MdOutlineDoubleArrow size={30} />
                    </div>
                    <Column className='items-center'>
                      <Image
                        alt=''
                        src={item.teams.in.logo}
                        width={30}
                        height={30}
                      />
                      <Text value={item.teams.in.name} size='xs' />
                    </Column>
                  </div>
                  <Column className='justify-center items-center text-xs mt-3'>
                    <div className='text-gold'>
                      {item.type !== 'N/A' ? item.type : '30 M'}
                    </div>
                    <div>{item.date}</div>
                  </Column>
                </div>
              ))}
            </Column>
          </section> */}
        </Column>
      )}

      {allData && (
        <Column gap='6' className='my-10'>
          {/* <section>
            <div className='text-xl font-bold text-center mb-3'>Media</div>
            <Column gap='6'>
              {allData.media.media?.length > 0 && allData.media.media.map((item: any, key: any) => (
                <div key={key}>
                  <div className='font-bold'>{item.title}</div>
                  <div className='pl-6'>
                    <p className=' text-sm'>{item.subtitle}</p>
                    <img
                      src={item.thumbnailUrl}
                      alt=''
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              ))}
            </Column>
          </section> */}

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* attribute */}
            <section className={`${styles.bgBlack}`}>
              <div className='text-xl font-bold text-center mb-6'>Attribute</div>
              <div className='grid grid-cols-5'>
                <Column className='justify-center items-center'>
                  <Progress value={parseFloat(playerAttribute.attacking.toFixed(0))} />
                  <div className='text-sm mt-1'>Attacking</div>
                </Column>
                <Column className='justify-center items-center'>
                  <Progress value={parseFloat(playerAttribute.creativity.toFixed(0))} />
                  <div className='text-sm mt-1'>Creativity</div>
                </Column>
                <Column className='justify-center items-center'>
                  <Progress value={parseFloat(playerAttribute.defending.toFixed(0))} />
                  <div className='text-sm mt-1'>Defending</div>
                </Column>
                <Column className='justify-center items-center'>
                  <Progress value={parseFloat(playerAttribute.tactical.toFixed(0))} />
                  <div className='text-sm mt-1'>Tactical</div>
                </Column>
                <Column className='justify-center items-center'>
                  <Progress value={parseFloat(playerAttribute.technical.toFixed(0))} />
                  <div className='text-sm mt-1'>Technical</div>
                </Column>
              </div>
              <MyRadarChart chartData={attributeChart} />
            </section>
            {/* transfer */}
            <section className={`${styles.bgBlack}`}>
              <div className='text-xl font-bold text-center mb-3'>Transfer</div>
              <div>
                <TransferLineChart data={transferChat} />
              </div>
              <Column gap='1' className=''>
                {allData.transfer?.transferHistory?.length && allData.transfer.transferHistory.map((item: any, key: any) => (
                  <div key={key}>
                    <Row className='gap-6 justify-every w-full items-center'>
                      <div>
                        {/* {item.fromTeamName} */}
                        <FootAPIImage id={item.transferFrom?.id} w={20} type={'team'}
                        />
                      </div>
                      <div>{'>>'}</div>
                      <div>
                        {/* {item.toTeamName} */}
                        <FootAPIImage id={item.transferTo?.id} w={20} type={'team'}
                        />
                      </div>
                      <div>{item.transferFeeDescription !== '-' ? item.transferFeeDescription : 'Loan'}</div>
                    </Row>
                  </div>
                ))}
              </Column>
            </section>
          </div>




        </Column>
      )}
    </>
  )
}
export default PlayerDetailTemplate
