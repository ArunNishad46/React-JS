import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'
import { counterActions, privacyActions } from '../store';

function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());  
  }
  const handleDecrement = () => {
    dispatch(counterActions.decrement());  
  }
  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle())
  }
  const handleAdd = () => {
    if(inputElement.current.value !== ''){
      dispatch(counterActions.add(inputElement.current.value));
      inputElement.current.value = ""
    }
  } 
  const handleSubtract = () => {
    if(inputElement.current.value !== ''){
      dispatch(counterActions.subtract(inputElement.current.value));
      inputElement.current.value = ""
    }
  }

  return (
    <>
      <div className='flex gap-5'>
        <button className='bg-green-600 text-gray-100 text-lg font-bold font-sans px-2.5 py-1.5 rounded-lg cursor-pointer' onClick={handleIncrement}>+1</button>
        <button className='bg-red-600 text-gray-100 text-lg font-bold font-sans px-2.5 py-1.5 rounded-lg cursor-pointer' onClick={handleDecrement}>-1</button>
        <button className='bg-yellow-600 text-gray-100 text-lg font-bold font-sans px-2.5 py-1.5 rounded-lg cursor-pointer' onClick={handlePrivacyToggle}>Privacy Toggle</button>
      </div>
      <div className='flex gap-2'>
        <input type="text" placeholder='Enter number' className='bg-white rounded-lg outline-none px-1 border-2 border-gray-400' ref={inputElement} />
        <button className='bg-sky-600 text-gray-100 text-lg font-bold font-sans px-2.5 py-1.5 rounded-lg cursor-pointer' onClick={handleAdd}>Add</button>
        <button className='bg-red-600 text-gray-100 text-lg font-bold font-sans px-2.5 py-1.5 rounded-lg cursor-pointer' onClick={handleSubtract}>Subtract</button>
      </div>
    </>
  )
}

export default Controls