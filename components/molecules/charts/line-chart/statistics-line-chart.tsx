import FootAPIImage from '@/components/atoms/images/footapi-image';
import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';


interface IDataItem {
  date: string;
  rating: number;

}
type Props = {
  data: IDataItem[]
}

const StatisticsLineChart = ({ data }: Props) => {
  console.log('%cMyProject%cline:15%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(251, 178, 23);padding:3px;border-radius:2px', data)
  const [maxPrice, setMaxPrice] = useState(0)


  // function zone 
  const onFindMaxPrice = (dat: any) => {
    const max = Math.max(...data.map((item) => item.rating))
    return setMaxPrice(max)
  }
  const CustomizedDot = (props: any) => {
    const { cx, cy, stroke, payload, value } = props;
    return (
      <FootAPIImage x={payload.rating != maxPrice ? cx - 20 : cx - 20} y={payload.rating != maxPrice ? cy - 40 : cy - 0} id={payload.currentTeam?.id} w={20} type={'team'} renderType='chart' />
    )
  };

  useEffect(() => {
    if (data) {
      onFindMaxPrice(data)
    }
  }, [data])

  return (
    <div className='h-[400px] '>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f24171" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f24171" stopOpacity={0} />
            </linearGradient>
          
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Area type="monotone" dataKey="rating" stroke="#f24171" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StatisticsLineChart