import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import Design from './Design'

function Navbar() {
  return (
    <div className='flex flex-col '>
        <div className='flex  items-center animate-accordion-down  justify-between p-4 shadow-2xl bg-purple-700   rounded-md   hover:bg-purple-600  h-24'>
            <Link href={'/'} className='flex  animate-wiggle animate-thrice  '>
                <h1 className='text-xl sm:text-2xl  text-purple-950 font-serif italic'>TST Jwellery</h1>
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
            <Design/>
        </div>
    </div>
  )
}

export default Navbar