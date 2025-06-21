import React from 'react'
import Header from './components/Header'
import Home from './views/Home'
//import './App.css'

function App() {
  
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
