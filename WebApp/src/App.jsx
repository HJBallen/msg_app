import { useEffect, useState } from 'react'
import { Board } from './Components/Board'
import './App.css'
import { Login } from './Components/Login'
import { Register } from './Components/Register'

function App() {


  return (
    <main className='flex justify-center items-center bg-slate-700 h-full'>
      <Login/>
      <Register/>
      {
      //<Board/>
      }
    </main>
  )
}

export default App
