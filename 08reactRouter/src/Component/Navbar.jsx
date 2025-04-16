import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './react.svg'

function Navbar() {

  return (
    <nav className='flex items-center justify-between w-full h-15 bg-gray-800 text-gray-300 text-lg font-bold font-sans'>
      <div className='pl-10'>
        <Link to='/'><img className='w-12' src={Logo} alt="Logo" /></Link>
      </div>
      <ul className='flex gap-15'>
        <li>
          <Link className='px-4 py-2 hover:text-gray-800 rounded-lg hover:bg-gray-300' to='/'>Home</Link>
        </li>
        <li>
          <Link className='px-4 py-2 hover:text-gray-800 rounded-lg hover:bg-gray-300' to='/about'>About</Link>
        </li>
        <li>
          <Link className='px-4 py-2 hover:text-gray-800 rounded-lg hover:bg-gray-300' to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='pr-20'>
        <Link className='bg-gray-300 px-4 py-2 text-gray-800 rounded-lg hover:bg-white' to='/login'>Login</Link>
      </div>
    </nav>
  )
}

export default Navbar