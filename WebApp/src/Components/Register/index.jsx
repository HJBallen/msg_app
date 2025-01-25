import { useContext, useState } from 'react'
import { loginContext } from '../../context/loginContext'
import { RegisterNormalView } from './RegisterNormalView'
import { RegisterErrView } from './RegisterErrView'
import { config } from '../../config'

export function Register() {
  const [errMsg, setErrMsg] = useState('')
  const [registerErr, setRegisterErr] = useState(false)
  const {setUsername, setUserImg, setIsLogin} = useContext(loginContext)
  const registerSubmit = async function(data) {
    try {
      const fetchOptions = {
        method:"POST", 
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      }
      const res  = await fetch(config.BASE_API_URL+"/users/create",fetchOptions)
      const jsonRes = await res.json()

      if (jsonRes.statusCode) {
        setErrMsg(jsonRes.message)
        setRegisterErr(true)
      }

    } catch (error) {
      console.log(error);
      return false
    }
  }

  const passwordConfirm = (e)=>{
    e.preventDefault()
    const password = e.target.previousSibling.value
    const passwordConfirm = e.target.value
    if (password !== passwordConfirm){
      e.target.style.border = '2px solid red'
    }else{
      e.target.style.border = '2px solid green'
    }
  
      
  }

  const register = async (e)=>{
    e.preventDefault()
    const newUser = {username: e.target.username.value, password: e.target.password.value, user_img:e.target.user_img.value}
    console.log(newUser);
    
    const res = await registerSubmit(newUser)

    if (!res) return false

    setUsername(res.username)
    setUserImg(res.user_img??"")
    setIsLogin(true)
  }

  return (
    <>
      {!registerErr 
        ? <RegisterNormalView register = {register} passwordConfirm={passwordConfirm}/> 
        : <RegisterErrView register={register} passwordConfirm={passwordConfirm} errMsg={errMsg}/>
      }
    </>
    
  )
}