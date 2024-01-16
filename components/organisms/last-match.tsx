import React from 'react'
import Row from '../atoms/row'
import FootAPIImage from '../atoms/images/footapi-image'
import Column from '../atoms/col'
import Text from '../atoms/text'

type Props = {
  data: any
}

const LastMatch = ({ data }: Props) => {
  console.log('%cMyProject%cline:7%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(89, 61, 67);padding:3px;border-radius:2px', data)
  return (
    <>
      <Text value="LAST MATCH" size="xl" className='font-bold text-center mt-10 mb-3' />

      {data ? (
        <div className='grid  grid-cols-1 lg:grid-cols-3 gap-3'>
          {data.events.map((item: any, key: any) => (
            <div key={key} className='bg-black_bg p-3 rounded-lg'>
              <Row className='justify-center'>
                <Row className=' justify-center  w-[100px]'>
                  <Column className='!items-center'>
                    <FootAPIImage id={item.homeTeam.id} type={'team'}
                      w={20}
                      h={20}
                    />
                    <div className='text-xs'>{item.homeTeam.shortName}</div>
                  </Column>
                </Row>
                <Row className=' w-fit'>
                  <div>{item.homeScore.current}</div>
                  <div>-</div>
                  <div>{item.awayScore.current}</div>
                </Row>
                <Row className=' justify-center  w-[100px]'>
                  <Column className='!items-center'>
                    <FootAPIImage id={item.awayTeam.id} type={'team'}
                      w={20}
                      h={20}
                    />
                    <div className='text-xs'>{item.awayTeam.shortName}</div>
                  </Column>
                </Row>
              </Row>
            </div>
          ))}
        </div>
      ) : ''}
    </>
  )
}

export default LastMatch