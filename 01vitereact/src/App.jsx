import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My First React App</h1>
      <h3>Count is {count}</h3>
      <button onClick={ () => {
        if(count < 100){
          setCount((count) => count + 1)
        }
      }}>Add Value</button>
      
      <button onClick={ () => {
        if(count > 0){
          setCount((count) => count-1)
        }
      }}>Remove Value</button>
    </>
  )
}

export default App
