import { useEffect, useState } from 'react'
import { config } from '../../config'
import { MessageCard } from '../MessageCard'
import { MessageBar } from '../MessageBar'

export function Board() {
  const [messages, setMessages] = useState([])

  const getData = async () => {
    try {
      const URL = config.BASE_API_URL+"/messages"
      console.log(URL);
      
      const res = await fetch(URL)
      const newMessages = await res.json()
      console.log(newMessages)
      setMessages(newMessages)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getData()
  },[])




  return (
  <section className='flex flex-col bg-black w-2/3 h-5/6 py-3 px-1 rounded-lg overflow-hidden justify-center items-center gap-2'>
    <div className='flex flex-col gap-y-2 px-2 mt-1 w-11/12 h-4/5 overflow-y-scroll rounded-lg'>{messages.map((msg,_index)=><MessageCard key = {_index} username={msg.username} userImg={msg.user_img} msgBody={msg.body}/>)}
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    <MessageCard username="Jhon Doe" msgBody="AHHHHHHHHHHH"/>
    </div>
    <div className='flex flex-row w-11/12 px-2'>
      <MessageBar/>
    </div>
  </section>
  )
}