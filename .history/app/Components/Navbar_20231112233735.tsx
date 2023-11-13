import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import Design from './Design'

function Navbar() {
  return (
    <div className='flex flex-col '>
        <h1 className='item-center   text-center text-white justify-center text-sm shadow-lg p-2 w-full bg-green-500'>Free delivery for over N100000 purchace</h1>
        <div className='flex  items-center animate-accordion-down  justify-between brightness-100 p-4 shadow-lg shadow-purple-700 bg-purple-400    hover:bg-purple-600  h-24'>
          
            <Link href={'/'} className='flex  brightness-75 drop-shadow-lg  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300    '>
                <h1 className='text-2xl md:text-4xl  font-extrabold text-white font-serif italic'>TST Jwelery</h1>
            </Link>
           
           
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar