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
import { getPlayerDetail, getImage } from '@/services/foot-api/player'
import PlayerImage from '../atoms/images/player-image'
import { AppContext } from '@/stores/context/app-state'
import MyRadarChart from '../molecules/charts/radar-chart'
import Progress from '../atoms/progasse'
import FootAPIImage from '../atoms/images/footapi-image'
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
  const [dataPlayerDetail, setDataPlayerDetail] = useState<any>()
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
  const data = playerDetail_m_data.response[0]


  const onGetDatePlayerDetail = async (playerId: any) => {
    setShowLoading(true)
    // const res: any = false
    const res: any = await getPlayerDetail({ playerId })
    if (res) {
      setDataPlayerDetail(res.data)
      setShowLoading(false)
    } else {
      setDataPlayerDetail(data)
      setShowLoading(false)
    }
  }
  const onGetALlData = async (playerId: string) => {
    let result;
    setShowLoading(true)

    const detail: any = await getPlayerDetail({ playerId })
    const media: any = await getPlayerDetail({ playerId, type: 'media' })
    const transfer: any = await getPlayerDetail({ playerId, type: 'transfer' })
    const attribute: any = await getPlayerDetail({ playerId, type: 'attribute' })
    if (detail && media && transfer && attribute) {
      result = {
        detail: detail.data,
        media: media.data,
        transfer: transfer.data,
        attribute: attribute.data
      }
      setAllData(result)
      setShowLoading(false)
      summaryAttribute(attribute?.data?.playerAttributeOverviews)

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



  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // onGetDatePlayerDetail(playerId)
    onGetALlData(playerId)
  }, [playerId])



  return (
    <>
      <Text value='PLAYER DETAIL' className='font-bold mb-3' />
      {allData && (
        <Column gap='6'>
          <section className='p-3 rounded-lg bg-black_bg'>
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

          {/* attribute */}
          <section>
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
                <Progress value={parseFloat(playerAttribute.technical.toFixed(0))} />
                <div className='text-sm mt-1'>Technical</div>
              </Column>
              <Column className='justify-center items-center'>
                <Progress value={parseFloat(playerAttribute.technical.toFixed(0))} />
                <div className='text-sm mt-1'>Technical</div>
              </Column>
            </div>
            {/* <div>
              <div>attacking:{playerAttribute.attacking.toFixed(0)}</div>
              <div>creativity:{playerAttribute.creativity.toFixed(0)}</div>
              <div>defending:{playerAttribute.defending.toFixed(0)}</div>
              <div>technical:{playerAttribute.technical.toFixed(0)}</div>
              <div>technical:{playerAttribute.tactical.toFixed(0)}</div>
            </div> */}
            <MyRadarChart chartData={attributeChart} />
          </section>
          <section>
            <div className='text-xl font-bold text-center mb-3'>Transfer</div>
            <Column gap='1'>
              {allData.transfer?.transferHistory?.length && allData.transfer.transferHistory.map((item: any, key: any) => (
                <div key={key}>
                  <Row className='gap-6'>
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
        </Column>
      )}
    </>
  )
}
export default PlayerDetailTemplate
