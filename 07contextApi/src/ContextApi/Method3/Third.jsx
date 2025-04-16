import React, { useContext } from 'react'
import { GreetContext } from './First'


function Third() {
  const useCon = useContext(GreetContext)
  console.log(useCon)
  
  return (
    <div>
      <h1>Greet: {useCon.greet}</h1>
      <h1>Greet: {useCon.greet2}</h1>
    </div>
  )
}

export default Third

