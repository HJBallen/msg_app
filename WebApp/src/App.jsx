
import { useEffect, useState } from 'react'
import { BrowserRouter as Router} from "react-router"
import './App.css'
import { loginContext } from './context/loginContext'
import { MainApp } from './Components/Main'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [username, setUsername] = useState("")
  const [userImg, setUserImg] = useState("")

  return (
  <>
    <loginContext.Provider
      value={
            {
              username,
              setUsername,
              userImg,
              setUserImg,
              isLogin,
              setIsLogin
            }
          }
        >
      <main className='flex flex-col justify-center items-center bg-slate-700 h-full'>
      <Router>
        <MainApp isLogin={isLogin}/>
      </Router>
      </main>
    </loginContext.Provider>
  </>
  )
}

export default App
