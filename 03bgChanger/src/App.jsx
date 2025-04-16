import { useState } from "react"

function App() {
  const [color, setColor] = useState("#000")

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-10">
          <div className="flex flex-wrap justify-center gap-6 bg-white rounded-lg px-4 py-2">
            <button onClick={() => setColor("red")} className="bg-red-600 text-white font-medium text-lg px-3 py-1 rounded-lg cursor-pointer">Red</button>
            <button onClick={() => setColor("blue")} className="bg-blue-600 text-white font-medium text-lg px-3 py-1 rounded-lg cursor-pointer">Blue</button>
            <button onClick={() => setColor("green")} className="bg-green-600 text-white font-medium text-lg px-3 py-1 rounded-lg cursor-pointer">Green</button>
            <button onClick={() => setColor("orange")} className="bg-orange-600 text-white font-medium text-lg px-3 py-1 rounded-lg cursor-pointer">Orange</button>
            <button onClick={() => setColor("purple")} className="bg-purple-600 text-white font-medium text-lg px-3 py-1 rounded-lg cursor-pointer">Purple</button>
            <button onClick={() => setColor("cyan")} className="bg-cyan-600 text-white font-medium text-lg px-3 py-1 rounded-lg cursor-pointer">Cyan</button>
            <button onClick={() => setColor("violet")} className="bg-violet-800 text-white font-medium text-lg px-3 py-1 rounded-lg cursor-pointer">Violet</button>
            <button onClick={() => setColor("yellow")} className="bg-yellow-600 text-white font-medium text-lg px-3 py-1 rounded-lg cursor-pointer">Yellow</button>
            <button onClick={() => setColor("pink")} className="bg-pink-600 text-white font-medium text-lg px-3 py-1 rounded-lg cursor-pointer">Pink</button>
            <button onClick={() => setColor("gray")} className="bg-gray-600 text-white font-medium text-lg px-3 py-1 rounded-lg cursor-pointer">Gray</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
