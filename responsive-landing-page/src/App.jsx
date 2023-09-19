import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
         <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App