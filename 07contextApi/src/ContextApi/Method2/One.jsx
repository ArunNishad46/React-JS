import React from 'react'
import Two from './Two'
import { createContext } from 'react'

const GreetContext = createContext();
const Greet2Context = createContext();

export default function One() {
  const greet = 'Hello'
  const greet2 = 'Namaste'

  return (
    <div>
      <GreetContext.Provider value={greet}>
        <Greet2Context.Provider value={greet2}>
          <Two />
        </Greet2Context.Provider>
      </GreetContext.Provider>
    </div>
  )
}

export {GreetContext, Greet2Context}