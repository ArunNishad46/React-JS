import React, { useState } from 'react'

function UserInput() {
  const [userInput, setUserInput] = useState('')

  return (
    <div className='m-4'>
      <input className='border-2 rounded-sm outline-none p-1 text-xl' type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <h1 className='text-xl'>User Input: {userInput}</h1>
    </div>
  )
}

export default UserInput