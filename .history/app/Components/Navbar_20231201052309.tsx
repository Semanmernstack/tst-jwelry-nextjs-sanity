import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import Design from './Design'
import Image from 'next/image'




function Navbar() {
  return (
    <div className='flex flex-col '>
      
      <div className='flex flex-col '>
          <h1 className='item-center   text-center text-white justify-center text-sm shadow-lg p-2 w-full bg-green-500'>Free delivery for over N100000 products</h1>
          <div className='flex h-[100px] sm:[130px]  items-center bg-purple-950 animate-accordion-down bg:from-slate-800 bg:via-black bg:to-zinc-900 justify-between  p-2 sm:p-4     hover:shadow-2xl  '>
            
              <Link href={'/'} className='flex  brightness-75  transition ease-in delay-150  hover:-translate-y-1 hover:scale-90 duration-300    '>
                 <Image
                  src='/tstlogo.jpg'
                  alt='logoo'
                  width={70}
                  height={70}
                  className='  object-contain rounded-md brightness-15  '
                 />
              </Link>
              <div className='flex flex-col items-center'>
                <div>
                  <h1 className='italic text-sm font-extrabold sm:text-xl md:text-2xl  text-white brightness-15  '>Home of luxurious jewelery</h1>
                </div>

                <div className='flex gap-1 sm:gap-2 text-xs md:text-lg brightness-150 text-gray-500  font-semibold items-center'>
                  <p>Owanbe |</p>
                  <p>Coperate |</p>
                  <p>Classic</p>
                </div>
              

              </div>
              
            
            
          </div>
        </div>
        
              
        
        
         
        
    </div>
  )
}

export default Navbar