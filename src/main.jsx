import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import NavBar from './Components/navBar/NavBar.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <HashRouter>
    <NavBar />
    <App />
    </HashRouter>
  </StrictMode>,
)
