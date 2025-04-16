import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import A from './ContextApi/Method1/A.jsx'
import One from './ContextApi/Method2/One.jsx'
import First from './ContextApi/Method3/First.jsx'
import UseReducer from './UseReducer/UseReducer.jsx'
import UseReducerEx from './UseReducer/UseReducerEx.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <A /> */}
    {/* <One /> */}
    {/* <First /> */}
    {/* <UseReducer /> */}
    <UseReducerEx />
  </StrictMode>,
)
