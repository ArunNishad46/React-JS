import React from 'react'
import C from './C'

function B(props) {
  console.log(props)

  return (
    <div>
      <C value={props.value}/>
    </div>
  )
}

export default B