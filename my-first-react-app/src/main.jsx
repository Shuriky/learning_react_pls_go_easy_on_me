import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KeyTest from './KeyTest.jsx'
import Greeting from "./Greeting.jsx"
import Months from "./Months.jsx"
import Buttons from "./Button.jsx"
import StateTest from './StateTest.jsx'
import Person from './Person.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>,
)
