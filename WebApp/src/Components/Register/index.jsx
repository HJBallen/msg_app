export function Register() {
  const register = ()=>{}

  return (
  <>
    <div className='flex flex-col bg-slate-400/55 0 w-1/3 h-1/3 justify-center items-center rounded-xl shadow-lg backdrop-blur-xl'>
      <h1 className='text-purple-600/80 text-3xl mb-4 font-semibold'>Login</h1>
      <form onSubmit={register} className='flex flex-col items-center gap-y-3'>
        <input type="text" placeholder='Username...' className='h-8 font-semibold rounded-lg items-center transition-transform hover:scale-105'/>
        <input placeholder='Password...' className='h-8 font-semibold rounded-lg items-center transition-transform hover:scale-105 hover:border-2 border-yellow-600'/>
        <input placeholder='Confirm Password...' className='h-8 font-semibold rounded-lg items-center transition-transform hover:scale-105 hover:border-2 border-yellow-600'/>
        <input placeholder='User img' type='fyle' className='h-8 font-semibold rounded-lg items-center transition-transform hover:scale-105 hover:border-2 border-yellow-600'/>
        <button className='rounded-full text-white font-semibold bg-purple-600/90 w-16 h-8 transition-transform hover:scale-110'>Enter</button>
      </form>
    </div>
  </>
  )
}