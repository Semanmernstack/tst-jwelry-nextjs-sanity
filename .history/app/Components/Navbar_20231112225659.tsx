import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import Design from './Design'

function Navbar() {
  return (
    <div className='flex flex-col '>
        <h1 className='item-center   text-center text-white justify-center text-sm shadow-lg p-2 w-full bg-green-500'>Free delivery for over 100,000 product</h1>
        <div className='flex  items-center animate-accordion-down  justify-between brightness-100 p-4 shadow-lg shadow-purple-700 bg-purple-400    hover:bg-purple-600  h-24'>
          
            <Link href={'/'} className='flex  brightness-75 drop-shadow-lg  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300    '>
                <h1 className='text-2xl md:text-4xl  font-extrabold   text-red-400 font-serif italic'>TST Jwellery</h1>
            </Link>
           
            <div>
            <div className="gap-3 flex items-center">
                

                <SocialIcon className=" h-6 w-6" network='whatsapp' url="https://wa.me/2349068395803" />
                <SocialIcon className="h-6 w-6"   network="instagram" url=" https://github.com/Semanmernstack" />
                <SocialIcon className="h-6 w-6"  network="email" url="https://gmail.com" /> 

            </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar