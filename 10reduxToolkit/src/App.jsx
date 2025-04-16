import React from 'react'
import Header from './Components/Header'
import DisplayCounter from './Components/DisplayCounter'
import Controls from './Components/Controls'
import PrivacyMessage from './Components/PrivacyMessage'
import { useSelector } from 'react-redux'

function App() {
  const privacy = useSelector(store => store.privacy)

  return (
    <div className='flex items-center justify-center h-100 w-full'>
      <div className='flex flex-col items-center w-100 p-6 gap-5 bg-gray-300 rounded-lg'>
        <Header />
        {privacy ? <PrivacyMessage /> : <DisplayCounter />}
        <Controls />
      </div>
    </div>
  )
}

export default App
