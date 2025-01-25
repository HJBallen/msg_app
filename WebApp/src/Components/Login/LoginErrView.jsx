export const LoginErrView = function( { login, errMsg } ) {
  return (<>
    <div className='flex flex-col bg-slate-400/55 0 w-1/3 h-1/3 justify-center items-center rounded-xl shadow-lg backdrop-blur-xl'>
      <h1 className='text-purple-600/80 text-3xl mb-4 font-semibold'>Login</h1>
      <form onSubmit={login} className='flex flex-col items-center gap-y-3'>
        <input type="text" name='username' placeholder='Username...' className='h-8 font-semibold rounded-lg items-center transition-transform hover:scale-105'/>
        <input type="password" name="password" placeholder='Password...' className='h-8 font-semibold rounded-lg items-center transition-transform hover:scale-105 hover:border-2 border-yellow-600'/>
        <label className='bg-red-400 w-40 text-center text-sm font-semibold rounded-md'>{errMsg}</label>
        <button className='rounded-full text-white font-semibold bg-purple-600/90 w-16 h-8 transition-transform hover:scale-110'>Enter</button>
      </form>
      <a href="/register">Register</a>
    </div>
  </>)
}