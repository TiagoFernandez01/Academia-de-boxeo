import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import NavBar from './Components/navBar/NavBar.jsx'
import NewFooter from '../src/Components/footer/NewFooter.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <HashRouter>
    <NavBar />
    <App />
    <NewFooter/>
    </HashRouter>
  </StrictMode>,
)
