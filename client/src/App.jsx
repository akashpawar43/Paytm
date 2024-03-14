import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Send from './components/Send'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/send' element={<Send />} />
      </Routes>
    </BrowserRouter>
  )
}
