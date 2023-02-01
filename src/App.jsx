import React from 'react'
import './index.css'
import Herosection from './components/main/herobanner'
import Header from './components/header/Header'

function App() {
  return (
    <div className="m-0 flex w-screen flex-col md:flex-row">
      <Header />
      <div id="main" className="md:fixedWidth flex h-full w-full flex-col">
        <Herosection />
      </div>
    </div>
  )
}

export default App
