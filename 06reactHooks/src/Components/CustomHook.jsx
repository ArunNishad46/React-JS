import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

function CustomHook() {
  const [users] = useFetch()

  return (
    <div>
      <h1>Github User List</h1>
      <ul>
        {
          users.map(user => {
            return <li key={user.id}>
              <a href={user.html_url}>{user.login}</a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default CustomHook