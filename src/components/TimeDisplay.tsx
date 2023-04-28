import useCurrentTime from "../hooks/useTime";

function TimeDisplay() {
  const { currentTime } = useCurrentTime()

  function formatTime(currentTime: Date): string {
    const hours = currentTime.getHours().toString().padStart(2, "0")
    const minutes = currentTime.getMinutes().toString().padStart(2, "0")
    const time = `${hours}:${minutes}`
    return time
  }

  return (
    <p className="text-[6.25rem] font-bold leading-[5.15rem] md:text-[10.938rem] md:leading-[9.5rem] lg:text-[12.5rem] lg:leading-[11rem] lg:-tracking-[0.313rem]">
      {formatTime(currentTime)}
    </p>
  )
}

export default TimeDisplay;
