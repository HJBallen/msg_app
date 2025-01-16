export function MessageBar() {
  return (
    <form className='w-11/12 flex gap-2'>
      <input type="text" placeholder='Write your mesagge' className='bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#b9ccfa] border-[#2B3040]'/>
      <button>▶</button>
    </form>
  )
}