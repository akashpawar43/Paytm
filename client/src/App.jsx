import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Send from './pages/Send';
import Alert from './components/Alert';
import { useRecoilState } from 'recoil';
import { alertAtom } from './store/atoms/user';
import UserLoading from './Loader/UserLoading';
import Users from './components/Users';
import TransactionHistory from './pages/TransactionHistory';

export default function App() {
  const [alert, setAlert] = useRecoilState(alertAtom);
  useEffect(() => {
    let timeoutId;
    if (alert.display) {
      setTimeout(() => {
        setAlert({ ...alert, display: false })
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [alert, setAlert])
  return (
    <BrowserRouter>
      <Alert />
      <Routes>
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Suspense fallback={<UserLoading />}><Users /> </Suspense>} />
          <Route path='history' element={<TransactionHistory />} />
        </Route >
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
        <Route path='sendmoney' element={<Send />} />
      </Routes>
    </BrowserRouter>
  )
}
