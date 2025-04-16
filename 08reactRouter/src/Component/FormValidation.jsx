import React, {useState} from 'react'

function FormValidation() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [DOB, setDOB] = useState('')
  const [gender, setGender] = useState('')
  const [errors, setErrors] = useState('')

  const validateForm = () => {
    const errors = {}

    if(!name){
      errors.name = 'Name is Required'
    }
    if(!email){
      errors.email = 'Email is Required'
    }else if(!/\S+@\S+\.\S+/.test(email)){
      errors.email = 'Email is Invalid'
    }
    if(!password){
      errors.password = 'Password is Required'
    }else if(password.length < 6){
      errors.password = 'Password must be 6 characters'
    }
    if(!confirmPassword){
      errors.confirmPassword = 'Confirm Password is Required'
    }else if(password !== confirmPassword){
      errors.password = 'Confirm Password do not Match'
    }
    if(!DOB){
      errors.DOB = 'DOB is Required'
    }
    if(!gender){
      errors.gender = 'Gender is Required'
    }
    
    console.log(errors)
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors)
    }else{  
      alert('Form Submitted Successfully')
    }
  }

  return (
    <div className='flex flex-col items-center h-122'>
      <h1 className='text-3xl text-slate-800 font-bold font-sans'>WELCOME TO LOGIN PAGE</h1>
      <div className='bg-sky-600 rounded-xl font-sans p-4'>
        <h1 className='text-2xl text-gray-100 font-bold text-center pb-2'>Form Validation</h1>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>Name:</label>
            <input className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
            <p className='text-red-600 font-bold'>{errors.name}</p>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>Email:</label>
            <input className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className='text-red-600 font-bold'>{errors.email}</p>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>Password:</label>
            <input className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <p className='text-red-600 font-bold'>{errors.password}</p>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>Confirm Password:</label>
            <input className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' type="password" placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <p className='text-red-600 font-bold'>{errors.confirmPassword}</p>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>DOB:</label>
            <input className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' type="date" value={DOB} onChange={(e) => setDOB(e.target.value)} />
            <p className='text-red-600 font-bold'>{errors.DOB}</p>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>Gender:</label>
            <select className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">--select gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className='text-red-600 font-bold'>{errors.gender}</p>
          </div>
          <button className='bg-gray-200 text-lg font-bold text-blue-600 p-1 cursor-pointer rounded-lg mt-4' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormValidation