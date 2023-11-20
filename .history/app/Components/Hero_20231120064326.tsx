import React from 'react'
import { client, urlFor } from '../lib/sanity'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
async function getPic() {
    const query = "*[_type == 'picone'][0]" 
    
    const data = await client.fetch(query)
    return data

}


async function Hero() {
    const data = await getPic()
    console.log(data)
    
    
  return (
    <div className=' w-full h-[80%] '>
        <div className='flex  flex-col  items-center '>

        <Carousel     >
                <div>
                    <img src="slideone.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="slidefour.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="slidethree.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="slidefive.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="slidetwo.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> 


        
            
        
        
        <div className=' w-full hidden h-[80%] '>
           
           <Image
            src={urlFor(data.first).url()}
            alt="second"
            width={700}
            height={700}
           
           
            
            className=" h-full w-full  rounded-lg object-cover object-center"
            />
            
        </div> 
       
        
        
      
   
     

    </div>

    </div>
    
   
   
  )
}

export default Hero