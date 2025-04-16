import React from 'react'
import B from './B'

function A() {
  const greet = 'Hello'
  const greet2 = 'Namaste'

  return (
    <div>
      <B value={{greet, greet2}}/>
    </div>
  )
}

export default A