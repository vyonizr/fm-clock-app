import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-900 text-white'>
      <p>
        “The science of operations, as derived from mathematics more especially,
        is a science of itself, and has its own abstract truth and value.”
      </p>
      <p>Ada Lovelace</p>
      <div className='flex'>
        <img
          src='/assets/desktop/icon-sun.svg'
          alt='sun'
          // width={24}
          // height={24}
        />
        <p>Good Morning</p>
      </div>
      <div className='flex'>
        <p>11:37</p>
        <p>BST</p>
      </div>
      <p>In London, UK</p>
      <button className='flex'>
        <span>More</span>
        <div>
          <img
            src='/assets/desktop/icon-arrow-down.svg'
            alt='arrow down'
            // width={9.6}
            // height={4.8}
          />
        </div>
      </button>
    </main>
  )
}

export default App
