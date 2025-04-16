import React, {useMemo, useState} from 'react'

function UseMemo() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  const result = useMemo(function slowFunction(){
    let sum = 0
    for(let i=1; i<=1000000; i++){
      sum += i
    }
    console.log("I am slow function.")
    return sum
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>+1</button>
      <br />
      <br />
      <hr />
      <br />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <h1>Input: {input}</h1>
      <hr />
      {result}
    </div>
  )
}

export default UseMemo