import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Data from './Data.jsx'
import Form from './Form.jsx'
import UseEffect from './UseEffect.jsx'
import Fetch from './Fetch.jsx'
import MultipleReturn from './MultipleReturn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleReturn />
  </StrictMode>,
)
