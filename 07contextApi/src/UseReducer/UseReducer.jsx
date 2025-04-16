import React, { useReducer } from 'react'

const reducer = (state, action) => {
  console.log(state, action)
  if(action.type === 'incr'){
    return {count: state.count+1}
  }else if(action.type === 'decr'){
    return {count: state.count-1}
  }
}

function UseReducer() {
  // const [state, dispatch] = useState(reducer, initialState)
  //reducer function
  //it is pure function
  //state and action

  //pure function
  // 10+10 = 20
  //no side effect

  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: 'incr'})}>+</button>
      <button onClick={() => dispatch({type: 'decr'})}>-</button>
    </div>
  )
}

export default UseReducer