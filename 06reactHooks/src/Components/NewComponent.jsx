import React from 'react'
import { memo } from 'react'

function NewComponent(props) {

  console.log("NewComponent render")

  return (
    <div>
      <h1>New Component: {props.newCount}</h1>
    </div>
  )
}

export default memo(NewComponent)