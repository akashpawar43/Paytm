import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Send from './pages/Send'
import { RecoilRoot } from 'recoil'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<RecoilRoot><Signup /></RecoilRoot>} />
        <Route path='/signin' element={<RecoilRoot><Signin /></RecoilRoot>} />
        <Route path='/sendmoney' element={<Send />} />
      </Routes>
    </BrowserRouter>
  )
}
