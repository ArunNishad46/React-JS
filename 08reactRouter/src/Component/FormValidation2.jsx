//Form validation using useForm hook => npm install react-hook-form

import React from 'react'
import {useForm} from 'react-hook-form'

function FormValidation2() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password');

  const onSubmit = data => console.log(data)

  return (
    <div className='flex flex-col items-center h-122'>
      <h1 className='text-3xl text-slate-800 font-bold font-sans'>WELCOME TO LOGIN PAGE</h1>
      <div className='bg-sky-600 rounded-xl font-sans p-4'>
        <h1 className='text-2xl text-gray-100 font-bold text-center pb-2'>Form Validation</h1>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>Name:</label>
            <input className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' type="text" placeholder='Enter name' name='name' {...register('name', {required: 'Name is Required'})} />
            <p className='text-red-600 font-bold'>{errors.name && errors.name.message}</p>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>Email:</label>
            <input className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' type="email" placeholder='Enter email' name='email' {...register('email', {required: 'Email is Required', pattern:{value: /\S+@\S+\.\S+/, message: 'Email is Invalid'}})} />
            <p className='text-red-600 font-bold'>{errors.email && errors.email.message}</p>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>Password:</label>
            <input className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' type="password" placeholder='Enter password' name='password' {...register('password', {required: 'Password is Required', minLength:{value: 6, message: 'Password must be 6 characters long'}})} />
            <p className='text-red-600 font-bold'>{errors.password && errors.password.message}</p>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>Confirm Password:</label>
            <input className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' type="password" placeholder='Confirm password' name='confirmPassword' {...register('confirmPassword', {required: 'Confirm Password is Required', validate: value => value === password || 'Confirm Password do not match'})} />
            <p className='text-red-600 font-bold'>{errors.confirmPassword && errors.confirmPassword.message}</p>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>DOB:</label>
            <input className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' type="date" name='DOB' {...register('DOB', {required: 'DOB is Required'})} />
            <p className='text-red-600 font-bold'>{errors.DOB && errors.DOB.message}</p>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg font-bold'>Gender:</label>
            <select className='bg-white text-lg font-bold text-blue-600 p-1 border-none outline-none rounded-lg w-50 my-2' name='gender' {...register('gender', {required: 'Gender is Required'})}>
              <option value="">--select gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className='text-red-600 font-bold'>{errors.gender && errors.gender.message}</p>
          </div>
          <button className='bg-gray-200 text-lg font-bold text-blue-600 p-1 cursor-pointer rounded-lg mt-4' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormValidation2