import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import Design from './Design'
import Image from 'next/image'



function Navbar() {
  return (
    <div className='flex flex-col '>
      <div className='flex flex-col '>
          <h1 className='item-center   text-center text-white justify-center text-sm shadow-lg p-2 w-full bg-green-500'>Free delivery for over N100000 products</h1>
          <div className='flex h-[122px]  items-center bg-slate-950 animate-accordion-down bg:from-slate-800 bg:via-black bg:to-zinc-900 justify-between sm:justify-around  p-2 sm:p-4     hover:shadow-2xl  '>
            
              <Link href={'/'} className='flex  brightness-75  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300    '>
                 <Image
                  src='/tstlogo.jpg'
                  alt='logoo'
                  width={120}
                  height={80}
                  className=' object-contain rounded-md brightness-15  '
                 />
              </Link>
              <h1 className='italic text-xs sm:text-lg text-white brightness-15  '>Home of luxirous jwelery</h1>
            
            
          </div>
        </div>
        <div className='flex gap-3 brightness-150 text-gray-500 p-5 bg-red-200 text-xl font-semibold items-center justify-center text-center'>
          <p>Owanbe |</p>
          <p>Coperate |</p>
          <p>Classic</p>
        </div>
              
        
        
         
        
    </div>
  )
}

export default Navbar