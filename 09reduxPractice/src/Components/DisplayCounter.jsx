import React from 'react'
import { useSelector } from 'react-redux'

function DisplayCounter() {

  const counter = useSelector(store => store.counter)

  return (
    <>
      <p className='text-center text-blue-500 text-lg font-semibold'>Counter current value: {counter}</p>
    </>
  )
}

export default DisplayCounter