import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='flex flex-col p-5 '>
        <h1 className='text-center  p-2 rounded-md text-blue-500 font-sans justify-cente font-extrabold text-xl sm:text-2xl'>Get in touch</h1>
    <div className=' p-8 grid grid-cols-1 cursor-pointer gap-4 sm:grid-cols-2 md:grid-cols-3 bg-zinc-500 text-white brightness-90'>
        <div className='flex flex-col bg-green-500 text-center items-center justify-center gap-2 p-3 border-shadow-lg shadow-lg decoration:border-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  duration-300'>
            <p>Whatsapp</p>
            <SocialIcon className="  h-16 w-16" network='whatsapp' url="https://wa.me/2348023146651" />

        </div>
        <div className='flex flex-col text-center items-center justify-center gap-2 p-3 shadow-lg border decoration:border-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  duration-300'>
            <p>Instagram</p>
            <SocialIcon className="h-16 w-16"   network="instagram" url=" https://instagram.com/tstjewelrystore?igshid=YTQwZjQ0Nmio0A==" />

        </div>
        <div className='flex flex-col text-center items-center justify-center gap-2 p-3 shadow-lg border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  duration-300'>
            <p>Email</p>
            <SocialIcon className="h-16 w-16"  network="email" url="https://gmail.com" />
        </div>
        
                     
    </div>
    <div className='flex p-8 text-center items-center justify-center space-x-2'>
        <div className='flex space-x-1 text-2xl font-extrabold font-mono italic'>
            <h2 className='text-red-500'>Powered</h2>
            <h2 className='text-blue-500'>by</h2>
            <h2 className='text-zinc-500'>SemanStack </h2>

        </div>
       
        <p>2023</p>
    </div>
    </div>
  )
}

export default Footer