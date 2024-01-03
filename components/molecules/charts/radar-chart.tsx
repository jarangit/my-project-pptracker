import React, { PureComponent } from 'react';
import { Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, RadarChart } from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 40,
    fullMark: 100,
  },
  {
    subject: 'Chinese',
    A: 98,
    fullMark: 100,
  },
  {
    subject: 'English',
    A: 86,
    fullMark: 100,
  },
  {
    subject: 'Geography',
    A: 99,
    fullMark: 100,
  },
  {
    subject: 'Physics',
    A: 85,
    fullMark: 100,
  },
  {
    subject: 'History',
    A: 65,
    fullMark: 100,
  },
];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
//           <PolarGrid />
//           <PolarAngleAxis dataKey="subject" />
//           <PolarRadiusAxis />
//           <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//         </RadarChart>
//       </ResponsiveContainer>
//     );
//   }
// }

interface IChart {
  subject: string,
  A: number,
  fullMark: number,
}
type Props = {
  chartData: IChart[]
}

const MyRadarChart = ({ chartData }: Props) => {
  return (
    <>
      {chartData && (
        <div className='h-[500px]'>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={18} label={10} orientation={'middle'} domain={[0, 100]} tick={false} />
              <Radar
                dataKey="A"
                stroke="#f24171"
                fill="#f24171"
                fillOpacity={0.7}
                legendType='diamond'
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  )
}

export default MyRadarChart
