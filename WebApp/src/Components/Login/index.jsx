import { useContext, useState } from 'react'
import { loginContext } from '../../context/loginContext'
import {config} from "../../config"
import {LoginNormalView} from './LoginNormalView'
import { LoginErrView } from './LoginErrView'

export function Login() {
  const [loginErr, setLoginErr] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const {setUsername, setUserImg, setIsLogin} = useContext(loginContext)
  async function postLogin(data) {
    try {
      const res = await fetch(config.BASE_API_URL+"/auth/login",{
        method:"POST", 
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      })
      const jsonRes = await res.json()
      console.log(jsonRes);
      
      if (jsonRes.statusCode !== undefined){
        console.log(jsonRes);
        setErrMsg(jsonRes.message)
        setLoginErr(true)
        return false
      }
      setUsername(jsonRes.username)
      setUserImg(jsonRes.user_img??"")
      setIsLogin(true)
    } catch (e) {
      console.log(e);
      return false
    }
  }
  async function login(event) {
    event.preventDefault()
    const username =event.target.username.value , password = event.target.password.value
    console.log(username)
    console.log(password)
    const res = await postLogin({username,password})
    console.log(res);
  }

  return <>
  {! loginErr ? <LoginNormalView login = {login}/>: <LoginErrView login={login} errMsg={errMsg}/>}
  </>
}