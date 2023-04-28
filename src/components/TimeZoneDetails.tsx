import useCurrentTime from "../hooks/useTime";
import IRegionTime from "../types/IRegionTime";
import { determineDayOrNight } from "../utils";

interface ITimeZoneDetailsProps {
  isOpen: boolean
  regionTime: IRegionTime
}

function TimeZoneDetails({
  isOpen = false,
  regionTime,
}: ITimeZoneDetailsProps) {
  const { currentTime } = useCurrentTime()
  const timeDetails = [
    {
      title: "Current Timezone",
      value: regionTime.timezone || "-",
    },
    {
      title: "Day of the Year",
      value: regionTime.day_of_year || "-",
    },
    {
      title: "Day of the Week",
      value: regionTime.day_of_week || "-",
    },
    {
      title: "Week Number",
      value: regionTime.week_number || "-",
    },
  ]

  const isDay = determineDayOrNight(currentTime) === "day"

  const mainComponentStyle = {
    color: isDay ? "#303030" : "#fff",
    backgroundColor: isDay ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)",
  }

  return (
    <div
      className={`grid grid-rows-4 gap-y-4 px-[1.625rem] py-12 text-[#303030] backdrop-blur-lg md:grid-flow-col md:grid-cols-[60%_40%] md:grid-rows-2 md:gap-y-10 md:px-16 md:py-[7.5rem] lg:gap-y-16 lg:py-[4.625rem] ${
        isOpen ? "block" : "hidden"
      }`}
      style={mainComponentStyle}
    >
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
    </div>
  )
}

export default TimeZoneDetails;
