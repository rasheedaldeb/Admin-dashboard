import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContextProvider } from './Context/darkModeContext.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </DarkModeContextProvider>
  </React.StrictMode>,
)
