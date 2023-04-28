import React from 'react'
import useCurrentTime from '../hooks/useTime'

function TimeDisplay() {
  const { currentTime } = useCurrentTime()
  // const [currentTime, setCurrentTime] = React.useState(formatTime())

  function formatTime(currentTime: Date): string {
    const hours = currentTime.getHours().toString().padStart(2, '0')
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    const time = `${hours}:${minutes}`
    return time
  }

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(formatTime())
  //   }, 1000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  return (
    <p className="text-[6.25rem] font-bold leading-[5.15rem]">
      {formatTime(currentTime)}
    </p>
  );
}

export default TimeDisplay
