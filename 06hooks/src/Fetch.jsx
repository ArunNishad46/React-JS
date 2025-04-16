import React, {useEffect, useState} from 'react'

function Fetch() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error(error))
  },[])

  return (
    <div>
      <h1>Github User List</h1>
      <ol>
        {
          users.map(user => {
            return <li style={{fontSize: '30px', fontFamily: 'sans-serif'}}>
              <a href={user.html_url}>{user.login}</a>
            </li>
          })
        }
      </ol>
    </div>
  )
}

export default Fetch