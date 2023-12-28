import Link from 'next/link'
import React from 'react'
import Row from '../atoms/row'
import Column from '../atoms/col'
import Text from '../atoms/text'

type Props = {
  data: any
}

const TopTransfer = ({ data }: Props) => {
  return (
    <>
      <Text value="Top Score" size="xl" className='font-bold' />
      <div>
        <ul>
          {data.data.map((item: any, key: any) => (
            <li key={key}>
              <Link href={{
                pathname: `/player-detail/${item.playerID}`,
                query: { playerName: 'waiting-get-name' }
              }} >
                <Row className='justify-between'>
                  <div>{item.playerID}</div>
                  <div>{Number(item.transferFee.value / 1000000)} M {item.transferFee.currency}</div>
                </Row>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TopTransfer