import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import RootRouter from './components/Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RootRouter />
  </React.StrictMode>,
)
