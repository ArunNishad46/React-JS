import React, {useState} from "react"

// const Form = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault()
//     }}>
//       <label htmlFor="name">
//         Name:
//         <input 
//           type="text" 
//           value={name} 
//           id="name" 
//           onChange={(e) => {
//             setName(e.target.value)
//           }}
//         />
//       </label>
//       <br/>
//       <label htmlFor="email">
//         Email:
//         <input 
//           type="email" 
//           value={email} 
//           id="email" 
//           onChange={(e) => {
//             setEmail(e.target.value)
//           }}
//         />
//       </label>
//       <br/>
//       <label htmlFor="password">
//         Password:
//         <input 
//           type="password" 
//           value={password} 
//           id="password" 
//           onChange={(e) => {
//             setPassword(e.target.value)
//           }}
//         />
//       </label>
//       <br/>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    const {name, value} = e.target

    setFormData({...formData, [name]: value})
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
    }}>
      <label>
        Name:
        <input 
          type="text" 
          value={formData.name} 
          name="name" 
          onChange={handleInput}
        />
      </label>
      <br/>
      <label>
        Email:
        <input 
          type="email" 
          value={formData.email} 
          name="email" 
          onChange={handleInput}
        />
      </label>
      <br/>
      <label>
        Password:
        <input 
          type="password" 
          value={formData.password} 
          name="password" 
          onChange={handleInput}
        />
      </label>
      <br/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form