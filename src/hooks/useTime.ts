import React from 'react'

function useCurrentTime() {
  const [currentTime, setCurrentTime] = React.useState(new Date())

  React.useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      setCurrentTime(date)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return { currentTime }
}

export default useCurrentTime
