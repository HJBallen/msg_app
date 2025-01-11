export function MessageCard({username, userImg, msgBody, createdAt, updatedAt }){
  return (
  <article className='flex bg-cyan-300 rounded-md gap-x-2 py-2 px-3'>
    <div className='flex items-center gap-x-1'>
      <img src="https://placehold.co/10x10" alt="user_img"  className='size-14 border-solid border-2  border-blue-500 rounded-full'/>
    </div>
    <div>
      <div>
        <h3 className='font-semibold text-lg'>{username}</h3>
      </div>
      <div className='text-xl'>
        {msgBody}
      </div>
    </div>
    
  </article>
  )
}