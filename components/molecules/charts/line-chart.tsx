import FootAPIImage from '@/components/atoms/images/footapi-image';
import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


interface IDataItem {
  date: string;
  price: number;
  displayPrice: string;
  currentTeam: any
  timeStamp: number;
}
type Props = {
  data: IDataItem[]
}

const MyLineChart = ({ data }: Props) => {
  const [maxPrice, setMaxPrice] = useState(0)


  // function zone 
  const onFindMaxPrice = (dat: any) => {
    const max = Math.max(...data.map((item) => item.price))
    return setMaxPrice(max)
  }
  const CustomizedDot = (props: any) => {
    const { cx, cy, stroke, payload, value } = props;
    return (
      <FootAPIImage x={payload.price != maxPrice ? cx - 20 : cx - 20} y={payload.price != maxPrice ? cy - 40 : cy - 0} id={payload.currentTeam?.id} w={20} type={'team'} renderType='chart' />
    )
  };

  useEffect(() => {
    if (data) {
      onFindMaxPrice(data)
    }
  }, [data])

  return (
    <div className='h-[400px]'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="" /> */}
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#f24171" isAnimationActive={false}
            dot={<CustomizedDot />} />
          {/* <Line type="monotone" dataKey="uv" stroke="#f24534" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MyLineChart