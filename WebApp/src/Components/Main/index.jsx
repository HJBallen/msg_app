import { useEffect } from 'react'

import { Routes, Route, useNavigate } from "react-router"
import { Board } from '../Board'
import { Login } from '../Login'
import { Register } from '../Register'

export function MainApp({isLogin}) {
  const navigate = useNavigate()

  useEffect(()=>{
      if (isLogin) {
        navigate('/board')
      }
    },[isLogin, navigate])

  return (
  <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/board' element={<Board/>}/>
    </Routes>
  </>
  )

}