import { useState } from 'react'

import './App.css'

import LoginPage from './components/LoginPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import Dashboard from './pages/Dashboard'
import ViewModal from './components/ViewModal'
import EditModal from './components/EditModal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/welcome" element={<HomePage />} /> */}
        <Route path='/view-detail' element={<ViewModal />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
