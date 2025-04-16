import React, {useState, useEffect} from 'react'

const MultipleReturn = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchUsers() {
      try{
        const response = await fetch('https://api.github.com/users')
        const data = await response.json()
        setUsers(data)
        setIsLoading(false)
      }catch(error){
        setError(error)
        setIsLoading(false)
      }
    }

    fetchUsers()
  },[])

  if(isLoading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Error: {error}</p>
  }

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

export default MultipleReturn