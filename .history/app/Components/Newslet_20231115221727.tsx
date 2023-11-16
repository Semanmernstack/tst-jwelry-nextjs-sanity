import React from 'react'
import Mail from './Mail'

function Newslet() {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-center  p-2 rounded-md text-blue-500 font-sans justify-cente font-extrabold text-xl sm:text-2xl'>Get tips and product discount</h1>
        <Mail/>

    </div>
  )
}

export default Newslet