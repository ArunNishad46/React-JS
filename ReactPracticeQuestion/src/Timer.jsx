import React, { useEffect, useState } from 'react'

function Timer() {
  const [time, setTime] = useState(60)

  useEffect(() => {
    if(time > 0){
      const timer = setTimeout(() => setTime(time-1), 1000)
      return () => clearTimeout(timer)
    }
  }, [time])

  return (
    <div>
      <h1 className='text-xl'>Time Left: {time} second</h1>
    </div>
  )
}

export default Timer