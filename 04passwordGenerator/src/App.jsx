import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(symbolAllowed) str += "@#$&*!?%+="

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, symbolAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, symbolAllowed, generatePassword])

  return (
    <>
      <div className="flex justify-center w-full h-screen bg-gray-900">
        <div className="w-md h-40 bg-slate-800 mt-10 rounded-lg shadow-lg">
          <h1 className='text-white text-xl text-center font-bold font-sans my-4'>Random Password Generator</h1>
          <div className="flex items-center shadow rounded-lg bg-white mb-4 mx-5">
            <input 
              type="text" 
              value={password} 
              className='text-yellow-600 text-xl font-bold w-full outline-none py-1 px-1' 
              placeholder='Password' 
              readOnly 
              ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-600 hover:bg-blue-500 text-white cursor-pointer font-semibold text-xl px-2 py-1 rounded-r-lg">copy</button>
          </div>
          <div className="flex justify-center items-center gap-x-5">
            <div className="flex items-center gap-x-1">
              <input 
                type="range" 
                min={6}
                max={50}
                value={length}
                className='cursor-pointer'
                id="lengthInput"
                onChange={(e) => setLength(e.target.value)} 
              />
              <label htmlFor="lengthInput" className='text-yellow-600 text-md font-bold'>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
                type="checkbox" 
                defaultChecked={numberAllowed}
                className='cursor-pointer'
                id="numberInput"
                onChange={() => setNumberAllowed((prev) => !prev)} 
              />
              <label htmlFor="numberInput" className='text-yellow-600 text-md font-bold'>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
                type="checkbox" 
                defaultChecked={symbolAllowed}
                className='cursor-pointer'
                id="symbolInput"
                onChange={() => setSymbolAllowed((prev) => !prev)} 
              />
              <label htmlFor="symbolInput" className='text-yellow-600 text-md font-bold'>Symbols</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
