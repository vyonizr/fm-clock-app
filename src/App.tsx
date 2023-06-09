import React from 'react'
import TimeDisplay from "./components/TimeDisplay"
import Greeting from "./components/Greeting"
import Quote from "./components/Quote"
import Background from "./components/Background"
import TimeZoneDetails from "./components/TimeZoneDetails"
import { IRegion, IRegionTime } from "./types"
import {
  fetchIPAdress,
  fetchRegion,
  fetchRegionTime,
  fetchRegionTimeCodetabs,
} from "./utils"

function App() {
  const [isMore, setIsMore] = React.useState(false)
  const [ipAddress, setIpAddress] = React.useState(
    localStorage.getItem("ip") || ""
  )
  const [region, setRegion] = React.useState<IRegion>()
  const [regionTime, setRegionTime] = React.useState<IRegionTime>()

  React.useEffect(() => {
    const getIPAddress = async () => {
      const { ip } = await fetchIPAdress()
      if (localStorage.getItem("ip") !== ipAddress) {
        setIpAddress(ip)
      }
    }

    getIPAddress()
  }, [ipAddress])

  React.useEffect(() => {
    const getRegion = async (ip: string) => {
      const data = await fetchRegion(ip)
      setRegion(data)
    }

    const getRegionTime = async (ip: string) => {
      try {
        const data = await fetchRegionTime(ip)
        setRegionTime(data)
      } catch (error) {
        try {
          const data = await fetchRegionTimeCodetabs(ip)
          setRegionTime(data)
        } catch (error) {
          console.error(error)
        }
      }
    }

    if (ipAddress.length > 0) {
      getRegion(ipAddress)
      getRegionTime(ipAddress)
    }
  }, [ipAddress])

  return (
    <>
      <Background />
      <div className="absolute left-0 top-0 h-full w-full font-inter text-white">
        <main className="relative z-10 flex h-full w-full flex-col">
          <div
            className={`flex h-full flex-col justify-between bg-black bg-opacity-40 px-[1.625rem] pb-10 pt-8 transition-all md:pb-16 md:pl-16 md:pr-[8.125rem] md:pt-20 lg:px-[10.375rem] ${
              isMore ? "lg:py-14" : "lg:pb-24 lg:pt-14"
            }`}
          >
            <Quote isVisible={!isMore} />
            <div className="lg:flex lg:items-end lg:justify-between">
              <div className="place-self-end">
                <Greeting />
                <div className="mt-4 flex items-end">
                  <TimeDisplay />
                  <p
                    className="ml-1.5 font-light transition-opacity md:ml-3 md:text-[2rem] lg:text-[2.5rem]"
                    style={{
                      opacity: regionTime !== undefined ? 1 : 0,
                    }}
                  >
                    {regionTime?.abbreviation || "-"}
                  </p>
                </div>
                <p
                  className="lg::tracking-[0.3rem] mt-4 text-[0.938rem] font-bold uppercase tracking-[0.188rem] transition-opacity md:text-lg md:tracking-[0.225rem] lg:text-2xl"
                  style={{
                    opacity: region !== undefined ? 1 : 0,
                  }}
                >
                  In {region?.city || "-"}, {region?.countryCode || "-"}
                </p>
              </div>
              <button
                className={`mt-12 flex w-fit items-center rounded-full bg-white py-1 pl-4 pr-1 font-bold transition-opacity md:py-2 md:pl-6 md:pr-2`}
                style={{ opacity: regionTime !== undefined ? 1 : 0 }}
                disabled={regionTime === undefined}
                onClick={() => setIsMore((prevState: boolean) => !prevState)}
              >
                <p className="text-xs uppercase tracking-[0.234rem] text-black opacity-50 md:text-base md:tracking-[0.313rem]">
                  {isMore ? "Less" : "More"}
                </p>
                <div className="circular-icon ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#303030] transition md:h-10 md:w-10">
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
          <TimeZoneDetails isOpen={isMore} regionTime={regionTime} />
        </main>
      </div>
    </>
  )
}

export default App
