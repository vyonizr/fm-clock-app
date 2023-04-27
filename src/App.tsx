import React from 'react'

function App() {
  const [isMore, setIsMore] = React.useState(false)

  const timeDetails = [
    {
      title: 'Current Timezone',
      value: 'Europe/London',
    },
    {
      title: 'Day of the Year',
      value: '295',
    },
    {
      title: 'Day of the Week',
      value: '5',
    },
    {
      title: 'Week Number',
      value: '42',
    },
  ]

  return (
    <main className='text-white h-full absolute z-10 flex flex-col justify-between px-[1.625rem] pt-8 pb-10'>
      <div
        className={`transition-all grid grid-cols-[1fr_max-content] items-start gap-x-4 ${
          isMore ? 'collapse opacity-0' : 'visible'
        }`}
      >
        <div className='text-xs'>
          <p className='leading-[1.375rem]'>
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <p className='mt-2 font-bold'>Ada Lovelace</p>
        </div>
        <button>
          <img src='/assets/desktop/icon-refresh.svg' alt='refresh' />
        </button>
      </div>
      <div>
        <div className='flex'>
          <img src='/assets/desktop/icon-sun.svg' alt='sun' />
          <p className='text-[0.938rem] uppercase tracking-[0.188rem] ml-4'>
            Good Morning
          </p>
        </div>
        <div className='flex items-end mt-4'>
          <p className='font-bold text-[6.25rem] leading-[5.15rem]'>11:37</p>
          <p className='font-light'>BST</p>
        </div>
        <p className='mt-4 text-[0.938rem] font-bold uppercase tracking-[0.25rem]'>
          In London, UK
        </p>
        <button
          className='flex items-center mt-12 bg-white rounded-full font-bold pl-4 pr-1 py-1'
          onClick={() => setIsMore((prevState: boolean) => !prevState)}
        >
          <p className='uppercase text-[#000] opacity-50 tracking-[0.234rem] text-xs'>
            {isMore ? 'Less' : 'More'}
          </p>
          <div className='h-8 w-8 bg-[#303030] rounded-full flex items-center justify-center ml-4'>
            <img src='/assets/desktop/icon-arrow-down.svg' alt='arrow down' />
          </div>
        </button>
      </div>
      <div
        className={`bg-[#E5E9EB] px-[1.625rem] -mx-[1.625rem] -mb-10 text-[#303030] py-12 ${
          isMore ? 'block' : 'hidden'
        }`}
      >
        {timeDetails.map((timeDetail, i) => (
          <div
            className='grid grid-cols-2 items-center time-detail-item'
            key={i}
          >
            <p className='uppercase text-[0.625rem]'>{timeDetail.title}</p>
            <p className='text-right font-bold text-xl'>{timeDetail.value}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
