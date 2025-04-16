import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Homepage from './Component/Homepage/Homepage';   

const App = () => {
  const design = (
    <BrowserRouter>
      <Navbar />
        <div className='page'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/about' element={<h1>Welcome to About</h1>} />
              <Route path='/services' element={<h1>Welcome to Services</h1>} />
              <Route path='/teams' element={<h1>Welcome to Teams</h1>} />
              <Route path='/gallery' element={<h1>Welcome to Gallery</h1>} />
              <Route path='/contact-us' element={<h1>Welcome to Contact Us</h1>} />
            </Routes>
          </div>
        </div>
      <Footer />
    </BrowserRouter>
  );
  return design;
}

export default App;
