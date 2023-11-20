"use client"
import React from 'react'
import { client, urlFor } from '../lib/sanity'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';



 function Hero() {
    
    
    
  return (
    <div className=' w-full h-full '>
       

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


        
            
        
        
        
       
        
        
      
   
     

    

    </div>
    
   
   
  )
}

export default Hero