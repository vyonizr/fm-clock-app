import React from 'react'
import { fetchIPAdress, fetchRegion, fetchRegionTime } from './utils'
import TimeDisplay from './components/TimeDisplay'
import Greeting from './components/Greeting'
import { IRegion, IRegionTime } from './types'

const DAY_BG_URL = '/assets/mobile/bg-image-daytime.jpg'
const NIGHT_BG_URL = '/assets/mobile/bg-image-nighttime.jpg'

function App() {
  const [isMore, setIsMore] = React.useState(false)
  const [ipAddress, setIpAddress] = React.useState('')
  const [region, setRegion] = React.useState<IRegion>({})
  const [regionTime, setRegionTime] = React.useState<IRegionTime>({})

  const timeDetails = [
    {
      title: 'Current Timezone',
      value: regionTime.timezone || '-',
    },
    {
      title: 'Day of the Year',
      value: regionTime.day_of_year || '-',
    },
    {
      title: 'Day of the Week',
      value: regionTime.day_of_week || '-',
    },
    {
      title: 'Week Number',
      value: regionTime.week_number || '-',
    },
  ]

  React.useEffect(() => {
    const getIPAddress = async () => {
      const { ip } = await fetchIPAdress()
      setIpAddress(ip)
    }

    getIPAddress()

    if (ipAddress.length > 0) {
      const getRegion = async () => {
        const data = await fetchRegion(ipAddress)
        setRegion(data)
      }

      const getRegionTime = async () => {
        const data = await fetchRegionTime(ipAddress)
        setRegionTime(data)
      }

      getRegion()
      getRegionTime()
    }
  }, [ipAddress])

  return (
    <div
      className={`h-screen bg-cover bg-no-repeat font-inter text-white transition-all`}
      style={{
        backgroundImage: `url('${isMore ? NIGHT_BG_URL : DAY_BG_URL}')`,
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-[#000] bg-opacity-40">
        <main className="relative z-10 flex h-full w-full flex-col">
          <div className="flex h-full flex-col justify-between px-[1.625rem] pb-10 pt-8">
            <div
              className={`grid grid-cols-[1fr_max-content] items-start gap-x-4 transition-all ${
                isMore ? "collapse opacity-0" : "visible"
              }`}
            >
              <div className="text-xs">
                <p className="leading-[1.375rem]">
                  “The science of operations, as derived from mathematics more
                  especially, is a science of itself, and has its own abstract
                  truth and value.”
                </p>
                <p className="mt-2 font-bold">Ada Lovelace</p>
              </div>
              <button>
                <img src="/assets/desktop/icon-refresh.svg" alt="refresh" />
              </button>
            </div>
            <div>
              <Greeting />
              <div className="mt-4 flex items-end">
                <TimeDisplay />
                <p className="font-light">{regionTime.abbreviation || "-"}</p>
              </div>
              <p className="mt-4 text-[0.938rem] font-bold uppercase tracking-[0.25rem]">
                In {region.geoplugin_city || "-"},{" "}
                {region.geoplugin_countryCode || "-"}
              </p>
              <button
                className="mt-12 flex items-center rounded-full bg-white py-1 pl-4 pr-1 font-bold"
                onClick={() => setIsMore((prevState: boolean) => !prevState)}
              >
                <p className="text-xs uppercase tracking-[0.234rem] text-[#000] opacity-50">
                  {isMore ? "Less" : "More"}
                </p>
                <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#303030]">
                  <img
                    src="/assets/desktop/icon-arrow-down.svg"
                    alt="arrow down"
                    className={`transition duration-300 ease-out ${
                      isMore ? "-scale-100" : "scale-100"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
          <div
            className={`mb-10 bg-[rgb(255,255,255)]/80 px-[1.625rem] py-12 text-[#303030] backdrop-blur-2xl ${
              isMore ? "block" : "hidden"
            }`}
          >
            {timeDetails.map((timeDetail, i) => (
              <div
                className="time-detail-item grid grid-cols-2 items-center"
                key={i}
              >
                <p className="text-[0.625rem] uppercase">{timeDetail.title}</p>
                <p className="text-right text-xl font-bold">
                  {timeDetail.value}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App
