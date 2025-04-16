import React, {useState, useEffect} from 'react'

function UseEffect() {
  const [clicked, setClicked] = useState()
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect Working...")
  }, [clicked])

  return (
    <div>
      <button onClick={() => setClicked('JavaScript')}>JavaScript</button>
      <br/>
      <hr/>
      <button onClick={() => setClicked('React Js')}>React</button>
      <br/>
      <hr/>
      <button onClick={() => setClicked('Node Js')}>Node</button>
      <br/>
      <h1>{clicked}</h1>
      <br/>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <h1>{count}</h1>
    </div>
  )
}

export default UseEffect




//Notes: useEffect & useLayoutEffect are similar but
//1.useEffect => asynchronous
//2.useLayoutEffect => synchronous