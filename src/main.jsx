import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/style.css'
import './scss/new.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
