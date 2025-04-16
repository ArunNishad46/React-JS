import React, { useEffect, useState } from 'react'

function FetchData() {
  const [data, setData] = useState([])

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setData(data))
  }, [])

  return (
    <div>
      <ul>
        {
          data.map(item => {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default FetchData