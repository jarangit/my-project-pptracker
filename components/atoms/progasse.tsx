import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
type Props = {
  value: number
}

const Progress = ({ value }: Props) => {
  const onCheckColor = (e: number) => {
    let result = ''
    switch (true) {
      case e >= 90:
        result = "#EF2F88"
        break;
      case e >= 80:
        result = "#77D970"
        break;
      case e >= 70:
        result = "#FFC764"
        break;
      case e >= 60:
        result = "#F37121"
        break;
      case e >= 50 || e < 50:
        result = "#F1F1F1"
        break;
      default:
        break;
    }
    return result

  }
  return (
    <>
      <div className='w-16'>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '20px',

            // How long animation takes to go from one value to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `${onCheckColor(value)}`,
            textColor: `${onCheckColor(value)}`,
            trailColor: '#161616',
            backgroundColor: '#f24171',
          })}
        />
      </div>
    </>
  )
}

export default Progress