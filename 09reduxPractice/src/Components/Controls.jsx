import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleAdd = () => {
    if(inputElement.current.value !== ""){
      dispatch({
        type: "ADD", 
        payload:{
          num: inputElement.current.value
        }
      });
      inputElement.current.value = ""
    }
  }
  const handleSubtract = () => {
    if(inputElement.current.value !== ""){
      dispatch({
        type: "SUBTRACT", 
        payload:{
          num: inputElement.current.value
        }
      });
      inputElement.current.value = "";
    }
  }
  
  return (
    <>
      <div className='flex gap-5'>
        <button className='bg-green-600 text-gray-100 text-lg font-bold font-sans px-2.5 py-1.5 rounded-lg cursor-pointer' onClick={() => dispatch({type: "INCREMENT"})}>+1</button>
        <button className='bg-red-600 text-gray-100 text-lg font-bold font-sans px-2.5 py-1.5 rounded-lg cursor-pointer' onClick={() => dispatch({type: "DECREMENT"})}>-1</button>
        <button className='bg-yellow-600 text-gray-100 text-lg font-bold font-sans px-2.5 py-1.5 rounded-lg cursor-pointer' onClick={() => dispatch({type: "PRIVACY_TOGGLE"})}>Privacy Toggle</button>
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