import React from 'react'
import { client, urlFor } from '../lib/sanity'
import Image from 'next/image'

async function getPic() {
    const query = "*[_type == 'picone'][0]" 
    
    const data = await client.fetch(query)
    return data

}


async function Hero() {
    const data = await getPic()
    console.log(data)
    
    
  return (
    <div className='   '>
        <div className='flex  flex-col  items-center '>
            <h1 className='p-2 font-semibold text-xl'>Flow with styles with tst jwelery</h1>
        
        
        <div className=''>
           
           <Image
            src={urlFor(data.first).url()}
            alt="second"
            fill
           
           
            
            className=" h-full w-full  rounded-lg object-cover object-center"
            />
        </div> 
       
        
        
      
   
     

    </div>

    </div>
    
   
   
  )
}

export default Hero