import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 brightness-90'>
        <div className='flex flex-col text-center items-center justify-center gap-2 p-3 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  duration-300'>
            <p>Whatsapp</p>
            <SocialIcon className=" h-16 w-16" network='whatsapp' url="https://wa.me/2349068395803" />

        </div>
        <div className='flex flex-col text-center items-center justify-center gap-2 p-3 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  duration-300'>
            <p>Instagram</p>
            <SocialIcon className="h-16 w-16"   network="instagram" url=" https://github.com/Semanmernstack" />

        </div>
        <div className='flex flex-col text-center items-center justify-center gap-2 p-3 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  duration-300'>
            <p>Email</p>
            <SocialIcon className="h-16 w-16"  network="email" url="https://gmail.com" /> 
        </div>
        
                

               
                
                

            
         
           
            
    </div>
  )
}

export default Footer