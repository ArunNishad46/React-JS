import React from 'react'
import './App.css'
import Card from './Components/Cards'

function App() {
  return (
    <>
      <p className='bg-blue-500 text-2xl font-bold p-2 mb-2 rounded-lg'>Tailwind CSS</p>
      <Card username="Alba" profession="Software Engineer" btnText='About me' />
      <Card username="Freja" profession="Product Manager" btnText='About me' />
    </>
  )
}

export default App
