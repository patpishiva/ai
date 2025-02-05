import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Speech from './Speech.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Speech></Speech>
  </StrictMode>
)
