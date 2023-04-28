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
      className={`transition-all text-white bg-cover h-screen bg-no-repeat font-inter`}
      style={{
        backgroundImage: `url('${isMore ? NIGHT_BG_URL : DAY_BG_URL}')`,
      }}
    >
      <div className='absolute top-0 left-0 h-full w-full bg-[#000] bg-opacity-40'>
        <main className='relative z-10 h-full w-full flex flex-col'>
          <div className='h-full flex flex-col justify-between px-[1.625rem] pt-8 pb-10'>
            <div
              className={`transition-all grid grid-cols-[1fr_max-content] items-start gap-x-4 ${
                isMore ? 'collapse opacity-0' : 'visible'
              }`}
            >
              <div className='text-xs'>
                <p className='leading-[1.375rem]'>
                  “The science of operations, as derived from mathematics more
                  especially, is a science of itself, and has its own abstract
                  truth and value.”
                </p>
                <p className='mt-2 font-bold'>Ada Lovelace</p>
              </div>
              <button>
                <img src='/assets/desktop/icon-refresh.svg' alt='refresh' />
              </button>
            </div>
            <div>
              <Greeting />
              <div className='flex items-end mt-4'>
                <TimeDisplay />
                <p className='font-light'>{regionTime.abbreviation || '-'}</p>
              </div>
              <p className='mt-4 text-[0.938rem] font-bold uppercase tracking-[0.25rem]'>
                In {region.geoplugin_city || '-'},{' '}
                {region.geoplugin_countryCode || '-'}
              </p>
              <button
                className='flex items-center mt-12 bg-white rounded-full font-bold pl-4 pr-1 py-1'
                onClick={() => setIsMore((prevState: boolean) => !prevState)}
              >
                <p className='uppercase text-[#000] opacity-50 tracking-[0.234rem] text-xs'>
                  {isMore ? 'Less' : 'More'}
                </p>
                <div className='h-8 w-8 bg-[#303030] rounded-full flex items-center justify-center ml-4'>
                  <img
                    src='/assets/desktop/icon-arrow-down.svg'
                    alt='arrow down'
                    className={`transition duration-300 ease-out ${
                      isMore ? '-scale-100' : 'scale-100'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
          <div
            className={`bg-[rgb(255,255,255)]/80 px-[1.625rem] mb-10 text-[#303030] py-12 backdrop-blur-2xl ${
              isMore ? 'block' : 'hidden'
            }`}
          >
            {timeDetails.map((timeDetail, i) => (
              <div
                className='grid grid-cols-2 items-center time-detail-item'
                key={i}
              >
                <p className='uppercase text-[0.625rem]'>{timeDetail.title}</p>
                <p className='text-right font-bold text-xl'>
                  {timeDetail.value}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
