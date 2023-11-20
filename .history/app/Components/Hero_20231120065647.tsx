"use client"
import React from 'react'
import { client, urlFor } from '../lib/sanity'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



 function Hero() {
    
    
    
  return (
    <div className='w-full h-[80%] '>
       

        <Carousel   autoPlay  infiniteLoop  >
                <div>
                    <img src="slideone.png" />
                    
                </div>
                <div>
                    <img src="slidefour.png" />
                    
                </div>
                <div>
                    <img src="slidethree.png" />
                  
                </div>
                <div>
                    <img src="slidefive.png" />
                    
                </div>
                <div>
                    <img src="slidetwo.png" />
                   
                </div>
            </Carousel> 


        
            
        
        
        
       
        
        
      
   
     

    

    </div>
    
   
   
  )
}

export default Hero