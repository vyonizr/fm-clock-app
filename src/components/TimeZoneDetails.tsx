import useCurrentTime from "../hooks/useTime"
import { IRegionTime } from "../types"
import { determineDayOrNight } from "../utils"

interface ITimeZoneDetailsProps {
  isOpen: boolean
  regionTime: IRegionTime | undefined
}

function TimeZoneDetails({
  isOpen = false,
  regionTime,
}: ITimeZoneDetailsProps) {
  const { currentTime } = useCurrentTime()

  const timeDetails = [
    {
      title: "Current Timezone",
      value: regionTime?.timezone ?? "-",
    },
    {
      title: "Day of the Year",
      value: regionTime?.day_of_year ?? "-",
    },
    {
      title: "Day of the Week",
      value: regionTime?.day_of_week ?? "-",
    },
    {
      title: "Week Number",
      value: regionTime?.week_number ?? "-",
    },
  ]

  const isDay = determineDayOrNight(currentTime) === "day"

  const mainStyle = {
    color: isDay ? "#303030" : "#fff",
    backgroundColor: isDay ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)",
  }

  return (
    <div
      className={`h-content flex w-full shrink-0 flex-col justify-center overflow-hidden backdrop-blur-lg transition-all duration-300 ${
        isOpen ? "basis-[256px] md:basis-[440px]" : "basis-0"
      }`}
      style={mainStyle}
    >
      <div className="relative grid w-full grid-rows-4 gap-y-4 px-[1.625rem] text-[#303030] md:grid-flow-col md:grid-cols-[60%_40%] md:grid-rows-2 md:gap-y-12 md:px-16 lg:gap-y-16 lg:px-[10.375rem]">
        {timeDetails.map((timeDetail, i) => (
          <div
            className="grid grid-cols-2 items-center md:mt-0 md:grid-cols-none md:grid-rows-2 md:gap-y-2 lg:gap-y-8"
            key={i}
          >
            <p className="text-[0.625rem] uppercase tracking-[0.125rem] md:text-xs md:tracking-[0.163rem] lg:text-base lg:tracking-[0.188rem]">
              {timeDetail.title}
            </p>
            <p className="text-right text-xl font-bold md:text-left md:text-[2.5rem] lg:text-[3.5rem]">
              {timeDetail.value}
            </p>
          </div>
        ))}
        <div
          className={`absolute inset-0 left-1/2 top-1/2 hidden h-[252px] w-[1px] -translate-x-1/2 -translate-y-1/2 lg:block ${
            isDay ? "bg-[#303030] opacity-25" : "bg-white"
          }`}
        />
      </div>
    </div>
  )
}

export default TimeZoneDetails
