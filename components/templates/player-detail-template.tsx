import { playerDetail_m_data } from '@/mock-data/player-detail'
import { transferPlayer_m_data } from '@/mock-data/transfer-player'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Text from '../atoms/text'
import Row from '../atoms/row'
import Column from '../atoms/col'
import { IoFootball } from "react-icons/io5";
import { PiFootprintsFill } from "react-icons/pi";
import StatisticsCardOfSeason from '../organisms/cards/statistics-of-season'
import { MdOutlineDoubleArrow } from "react-icons/md";
import { getPlayerDetail, getImage } from '@/services/foot-api/player'
import PlayerImage from '../atoms/images/player-image'

type Props = {
  league: any;
  namePlayer: any
  playerId: any
}

const PlayerDetailTemplate = ({ league, namePlayer, playerId }: Props) => {
  const [dataPlayerDetail, setDataPlayerDetail] = useState<any>()
  const [playerImage, setPlayerImage] = useState('')
  const data = playerDetail_m_data.response[0]


  const onGetDatePlayerDetail = async (playerId: any) => {
    // const res: any = false
    const res: any = await getPlayerDetail(playerId)
    if (res) {
      setDataPlayerDetail(res.data)
    } else {
      setDataPlayerDetail(data)
    }
  }

  const onGetPlayerImage = async (id: string) => {
    const res = await getImage(id, 'player')
    if (res) {
      setPlayerImage(res.data)
    }
  }

  useEffect(() => {
    onGetDatePlayerDetail(playerId)
    onGetPlayerImage(playerId)
  }, [playerId]
  )


  console.log(transferPlayer_m_data)

  return (
    // <>
    //   <Text value='PLAYER DETAIL' className='font-bold mb-3' />
    //   {dataPlayerDetail && (
    //     <Column gap='6'>
    //       <section className='p-3 rounded-lg bg-black_bg'>
    //         <Row className=' !items-start' gap='6'>
    //           <div className='w-fit rounded-md overflow-hidden'>
    //             <Image
    //               alt=''
    //               src={dataPlayerDetail.player.photo}
    //               width={100}
    //               height={100}
    //             />
    //           </div>
    //           <Column gap="0">
    //             <Text size="xl" value={dataPlayerDetail.player.name} className='font-bold' />
    //             <Text size="xs" value={dataPlayerDetail.statistics[0].team.name} className='text-green' />
    //             <div className='text-xs mt-1'>
    //               <p>Age: {dataPlayerDetail.player.age}</p>
    //               <p>Height: {dataPlayerDetail.player.height}</p>
    //               <p>Weight: {dataPlayerDetail.player.weight}</p>
    //             </div>
    //           </Column>
    //         </Row>

    //         <Column gap='0' className='mt-6'>
    //           <p >Name:
    //             <span className='ml-3 text-gold'>
    //               {dataPlayerDetail.player.firstname} {dataPlayerDetail.player.lastname}
    //             </span>
    //           </p>
    //           <p >Nationality:
    //             <span className='ml-3 text-gold'>
    //               {dataPlayerDetail.player.nationality}
    //             </span>
    //           </p>
    //           <p >Birth:
    //             <span className='ml-3 text-gold'>
    //               {dataPlayerDetail.player.birth.date}
    //             </span>
    //           </p>
    //           <p >Age:
    //             <span className='ml-3 text-gold'>
    //               {dataPlayerDetail.player.age}
    //             </span>
    //           </p>
    //           <p >Height:
    //             <span className='ml-3 text-gold'>
    //               {dataPlayerDetail.player.height}
    //             </span>
    //           </p>
    //           <p >Weight:
    //             <span className='ml-3 text-gold'>
    //               {dataPlayerDetail.player.weight}
    //             </span>
    //           </p>
    //         </Column>
    //       </section>

    //       {/* static */}
    //       <StatisticsCardOfSeason data={data} />

    //       <section>
    //         <Text value='TRANSFERS' className='font-bold mb-3' />
    //         <Column gap='2'>
    //           {transferPlayer_m_data.response[0].transfers.map((item, key) => (
    //             <div key={key} className='bg-black_bg p-3 rounded-md'>
    //               <div className='grid grid-cols-3 justify-center'>
    //                 <Column className='items-center'>
    //                   <Image
    //                     alt=''
    //                     src={item.teams.out.logo}
    //                     width={30}
    //                     height={30}
    //                   />
    //                   <Text value={item.teams.out.name} size='xs' />
    //                 </Column>
    //                 <div className='text-gold flex justify-center'>
    //                   <MdOutlineDoubleArrow size={30} />
    //                 </div>
    //                 <Column className='items-center'>
    //                   <Image
    //                     alt=''
    //                     src={item.teams.in.logo}
    //                     width={30}
    //                     height={30}
    //                   />
    //                   <Text value={item.teams.in.name} size='xs' />
    //                 </Column>
    //               </div>
    //               <Column className='justify-center items-center text-xs mt-3'>
    //                 <div className='text-gold'>
    //                   {item.type !== 'N/A' ? item.type : '30 M'}
    //                 </div>
    //                 <div>{item.date}</div>
    //               </Column>
    //             </div>
    //           ))}
    //         </Column>
    //       </section>
    //     </Column>
    //   )}
    // </>
    <>
      <Text value='PLAYER DETAIL' className='font-bold mb-3' />
      {dataPlayerDetail && (
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
                <Text size="xl" value={dataPlayerDetail.player.shortName} className='font-bold' />
                <Text size="xs" value={dataPlayerDetail.player.team.name} className='text-green' />
                <div className='text-xs mt-1'>
                  <p>Age: {dataPlayerDetail.player.age}</p>
                  <p>Height: {dataPlayerDetail.player.height}</p>
                  <p>Weight: {dataPlayerDetail.player.weight}</p>
                </div>
              </Column>
            </Row>

            <Column gap='0' className='mt-6'>
              <p >Name:
                <span className='ml-3 text-gold'>
                  {dataPlayerDetail.player.name}
                </span>
              </p>
              <p >Nationality:
                <span className='ml-3 text-gold'>
                  {dataPlayerDetail.player.nationality}
                </span>
              </p>
              <p >Birth:
                <span className='ml-3 text-gold'>
                  {dataPlayerDetail.player.dateOfBirthTimestamp}
                </span>
              </p>
              <p >Age:
                <span className='ml-3 text-gold'>
                  {dataPlayerDetail.player.age}
                </span>
              </p>
              <p >Height:
                <span className='ml-3 text-gold'>
                  {dataPlayerDetail.player.height}
                </span>
              </p>
              {/* <p >Weight:
                <span className='ml-3 text-gold'>
                  {dataPlayerDetail.player.weight}
                </span>
              </p> */}
              <p >position:
                <span className='ml-3 text-gold'>
                  {dataPlayerDetail.player.position}
                </span>
              </p>
              <p >preferredFoot:
                <span className='ml-3 text-gold'>
                  {dataPlayerDetail.player.preferredFoot}
                </span>
              </p>
              <p >shirtNumber:
                <span className='ml-3 text-gold'>
                  {dataPlayerDetail.player.shirtNumber}
                </span>
              </p>
            </Column>
          </section>

          {/* static */}
          <StatisticsCardOfSeason data={data} />

          <section>
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
          </section>
        </Column>
      )}
    </>
  )
}
export default PlayerDetailTemplate
