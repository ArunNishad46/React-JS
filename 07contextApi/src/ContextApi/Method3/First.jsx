import React, { createContext } from 'react'
import Second from './Second';


const GreetContext = createContext();

export default function First() {
  const greet = "Hello"
  const greet2 = "Namaste"

  return (
    <div>
      <GreetContext.Provider value={{greet, greet2}} >
        <Second />
      </GreetContext.Provider>
    </div>
  )
}

export {GreetContext}