import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosExample() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect( () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => setData(response.data))
    .catch(error => console.log('Error fetching data: ', error))
  }, [])

  const newItem = {
    id: Date.now(),
    title: name,
    body: name
  }

  console.log(data)

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/posts', newItem)
        .then(response => setData([...data, response.data]))
        .catch(error => console.log('Error adding item: ', error))
        setName('')
      }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Add item</button>
      </form>
      {
        data.map(user => {
          return <li key={user.id}>{user.title}</li>
        })
      }
    </div>
  )
}

export default AxiosExample