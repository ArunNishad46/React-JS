import React, { useState } from 'react'
import NewComponent from '../Components/NewComponent'

function Memo() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>+1</button>
      <br />
      <br />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <hr />
      <NewComponent newCount={count} />
    </div>
  )
}

export default Memo