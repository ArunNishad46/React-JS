import React from 'react'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => setDarkMode(!darkMode)

  const buttons = [
    'C', '⌫', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+', 
    '.', '0', '=',
  ]

  const handleClick = (value) => {
    if(value === 'C'){
      setInput('');
      setOutput('');
    }else if(value === '⌫') {
      setInput((prev) => prev.slice(0, -1))
    }else if (value === '=') {
      try {
        setOutput(eval(input)) 
      } catch {
        setOutput('Error')
      }
    } else {
      setInput((prev) => prev + value)
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#e0e5ec]'}`}>
      <div className={`p-6 rounded-3xl w-[340px] ${darkMode ? 'bg-slate-800 shadow-[9px_9px_16px_#101828,-9px_-9px_16px_#101828]' : 'bg-[#e0e5ec] shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]'}`}>
        <div className={`mb-4 p-4 rounded-2xl shadow-inner ${darkMode ? 'bg-slate-900' : 'bg-[#d9dee6]'}`}>
          <input 
          type="text" 
          value={input}
          disabled 
          className={`w-full text-right text-2xl bg-transparent outline-none ${darkMode ? 'text-gray-200' : 'text-blue-500'}`} />
          <div className={`text-right mt-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            {output}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
        {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              className={`text-lg font-semibold p-2 rounded-lg cursor-pointer hover:shadow-inner transition duration-200 ${btn === 'C' ? 'col-span-2' : ''} ${btn === '=' ? 'col-span-2' : ''} ${darkMode ? 'bg-gray-900 shadow-[6px_6px_12px_#101828,-6px_-6px_12px_#1D293D] text-gray-300' : 'bg-[#e0e5ec] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] text-blue-400'}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <div>
        <button 
        onClick={toggleTheme} 
        className={`absolute top-[30px] right-[60px] text-lg font-bold px-3 py-1 rounded-lg cursor-pointer ${darkMode ? 'bg-white text-slate-800 shadow-[6px_6px_12px_#101828,-6px_-6px_12px_#101828]' : 'bg-gray-900 text-gray-100 shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]'}`}
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
    
  )
}

export default App