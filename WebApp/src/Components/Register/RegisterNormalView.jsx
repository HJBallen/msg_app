export function RegisterNormalView({register, passwordConfirm}) {
  return(
    <div className='flex flex-col bg-slate-400/55 0 w-1/3 h-1/3 justify-center items-center rounded-xl shadow-lg backdrop-blur-xl'>
      <a href="/" className='absolute top-8 left-10'>◀</a>
      <h1 className='text-purple-600/80 text-3xl mb-4 font-semibold'>Login</h1>
      <form onSubmit={register} className='flex flex-col items-center gap-y-3' >
        <input  name='username' type="text" placeholder='Username...' className='h-8 font-semibold rounded-lg items-center transition-transform hover:scale-105' required/>
        <input placeholder='Password...' name='password' type='password' minLength='6'className='h-8 font-semibold rounded-lg items-center transition-transform hover:scale-105 hover:border-2 border-yellow-600' required/>
        <input placeholder='Confirm Password...' onKeyUp={passwordConfirm} name='password_confirm' type='password' className='h-8 font-semibold rounded-lg items-center transition-transform hover:scale-105 hover:border-2 border-yellow-600' required/>
        <input placeholder='User img' type='text' name="user_img" className='h-8 font-semibold rounded-lg items-center transition-transform hover:scale-105 hover:border-2 border-yellow-600'/>
        <button className='rounded-full text-white font-semibold bg-purple-600/90 w-16 h-8 transition-transform hover:scale-110'>Enter</button>
      </form>
    </div>
  )
}

