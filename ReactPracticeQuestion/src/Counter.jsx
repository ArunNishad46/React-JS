import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-2xl font-bold'>Counter: {count}</h1>
      <button className='text-2xl bg-green-600 w-10 rounded-sm m-3 cursor-pointer' onClick={ () => setCount(count+1)}>+</button>
      <button className='text-2xl bg-red-600 w-10 rounded-sm m-3 cursor-pointer' onClick={ () => setCount(count-1)}>-</button>
    </div>
  )
}

export default Counter