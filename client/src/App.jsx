import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Send from './pages/Send';
import Alert from './components/Alert';
import { useRecoilState } from 'recoil';
import { alertAtom } from './store/atoms/user';

export default function App() {
  const [alert, setAlert] = useRecoilState(alertAtom);
  useEffect(()=> {
    if(alert.display) {
      setTimeout(()=> {
        setAlert({...alert, display : false})
      }, 3000);
    }
  }, [alert])
  return (
    <BrowserRouter>
      <Alert />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/sendmoney' element={<Send />} />
      </Routes>
    </BrowserRouter>
  )
}
