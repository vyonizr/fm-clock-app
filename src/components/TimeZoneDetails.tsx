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
    backgroundColor: isDay ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)",
  }

  return (
    <div
      className={`mb-10 px-[1.625rem] py-12 text-[#303030] backdrop-blur-2xl ${
        isOpen ? "block" : "hidden"
      }`}
      style={mainComponentStyle}
    >
      {timeDetails.map((timeDetail, i) => (
        <div className="time-detail-item grid grid-cols-2 items-center" key={i}>
          <p className="text-[0.625rem] uppercase tracking-[0.125rem]">
            {timeDetail.title}
          </p>
          <p className="text-right text-xl font-bold">{timeDetail.value}</p>
        </div>
      ))}
    </div>
  )
}

export default TimeZoneDetails;
