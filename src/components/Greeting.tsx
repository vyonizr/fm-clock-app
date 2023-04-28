import useCurrentTime from '../hooks/useTime'

const SUN_ICON_URL = '/assets/desktop/icon-sun.svg'
const MOON_ICON_URL = '/assets/desktop/icon-moon.svg'

const GREETING = {
  MORNING: 'Good Morning',
  AFTERNOON: 'Good Afternoon',
  EVENING: 'Good Evening',
}

function Greeting() {
  const { currentTime } = useCurrentTime()

  function formatGreeting(currentTime: Date): string {
    const hours = currentTime.getHours()

    if (hours < 5) {
      return GREETING.EVENING
    } else if (hours < 12) {
      return GREETING.MORNING
    } else if (hours < 18) {
      return GREETING.AFTERNOON
    }

    return GREETING.EVENING
  }

  function handleIcon(greeting: string) {
    switch (greeting) {
      case GREETING.EVENING:
        return { alt: 'moon', url: MOON_ICON_URL }
      case GREETING.MORNING:
      case GREETING.AFTERNOON:
      default:
        return { alt: 'sun', url: SUN_ICON_URL }
    }
  }

  const imageProps = handleIcon(formatGreeting(currentTime))

  return (
    <div className="grid grid-cols-[24px_1fr] gap-x-4">
      <img src={imageProps.url} alt={imageProps.alt} />
      <p className="text-[0.938rem] uppercase tracking-[0.188rem] md:text-lg md:tracking-[0.225rem] lg:text-xl lg:tracking-[0.25rem]">
        {formatGreeting(currentTime)}
        <span className="hidden md:inline-block">{", It's currently"}</span>
      </p>
    </div>
  )
}

export default Greeting
