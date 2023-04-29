import useCurrentTime from "../hooks/useTime"
import { determineDayOrNight } from "../utils"

function Background() {
  const { currentTime } = useCurrentTime()
  const isDay = determineDayOrNight(currentTime) === "day"

  return (
    <div
      className={`h-screen bg-cover bg-no-repeat transition-all ${
        isDay
          ? "bg-mobile-day md:bg-tablet-day lg:bg-desktop-day"
          : "bg-mobile-night md:bg-tablet-night lg:bg-desktop-night"
      }`}
    />
  )
}

export default Background
