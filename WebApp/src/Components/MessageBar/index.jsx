import { useContext } from 'react';
import { loginContext } from '../../context/loginContext';
import { config } from '../../config';

export function MessageBar() {

  const {username} = useContext(loginContext)

  async function sendMessage(message) {
    try {
      console.log(username);
      const res = await fetch(config.BASE_API_URL+"/messages/create",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          username,
          body:message
        })
      })
      if (res.status !== 201) throw new Error("Error al guardar el mensaje")
      return true
    }catch (error) {
      console.log(error)
      alert("Error al guardar el mensaje ")
    }
    
  }


  function  submitForm(e) {
    e.preventDefault()
    const $messageForm = e.target
    const message = $messageForm.message.value
    console.log(message);
    sendMessage(message)
  }

  return (
    <form className='w-11/12 flex gap-2' onSubmit={submitForm}>
      <input type="text" placeholder='Write your mesagge' className='bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#b9ccfa] border-[#2B3040]'name='message'/>
      <button >▶</button>
    </form>
  )
}