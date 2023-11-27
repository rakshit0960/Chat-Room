import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import SocketProvider from './contexts/socketProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SocketProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </SocketProvider>
)
