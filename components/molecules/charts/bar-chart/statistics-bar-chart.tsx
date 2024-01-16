import FootAPIImage from '@/components/atoms/images/footapi-image';
import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, BarChart, Bar } from 'recharts';


interface IDataItem {
  date: string;
  rating: number;

}
type Props = {
  data: IDataItem[]
}

const StatisticsBarChart = ({ data }: Props) => {
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
        
        
        <BarChart width={10} height={40} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="rating" fill="#f24171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StatisticsBarChart