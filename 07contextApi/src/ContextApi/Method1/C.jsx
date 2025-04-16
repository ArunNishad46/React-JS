import React from 'react'

function C(props) {
  console.log(props)

  return (
    <div>
      <h1>Greet: {props.value.greet} {props.value.greet2}</h1>
    </div>
  )
}

export default C