import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './Component/Homepage'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Contact from './Component/Contact'
import Login from './Component/Login'
import Footer from './Component/Footer'
import Error from './Component/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
