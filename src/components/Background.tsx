import useCurrentTime from "../hooks/useTime"
import { formatGreeting } from "../utils"
import { GREETING } from "../constants"

function Background() {
  const { currentTime } = useCurrentTime()

  const handleBackground = () => {
    const greeting = formatGreeting(currentTime)
    switch (greeting) {
      case GREETING.MORNING:
        return "bg-mobile-day md:bg-tablet-day lg:bg-desktop-day"
      case GREETING.AFTERNOON:
        return "bg-mobile-afternoon md:bg-tablet-afternoon lg:bg-desktop-afternoon"
      case GREETING.EVENING:
      default:
        return "bg-mobile-night md:bg-tablet-night lg:bg-desktop-night"
    }
  }

  return (
    <div
      className={`h-screen bg-cover bg-center bg-no-repeat transition-all ${handleBackground()}`}
    />
  )
}

export default Background
