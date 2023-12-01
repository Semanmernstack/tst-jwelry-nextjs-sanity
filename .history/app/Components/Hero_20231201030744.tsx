
import React from 'react'




import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


const settings = {
    showArrows: false,
    interval: 2000,
    dynamicHeight: false,
    stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showThumbs: false,
    showIndicators: true,
    swipeable: true,
    emulateTouch: true,
    autoPlay: true,
  };



 function Hero() {
    
    
    
  return (
    
    <div className='w-full'> 

        <Carousel className='w-full' {...settings}>
                <div>
                    <Image className='w-full object-cover h-[60%] fill' src="/slide-one.png" alt='picone' />
                    
                </div>
                <div>
                    <Image className='w-full object-cover  h-[60%] fill' src="./slide-four.png" alt='pictwo' />
                    
                </div>
                <div>
                    <Image className='w-full object-cover  h-[60%] fill' src="/slide-three.png" alt='picthree' />
                  
                </div>
                
                <div>
                    <Image className='w-full object-cover fill  h-[60%] ' src="/slide-five.png" alt='picfoo' />
                    
                </div>
                <div>
                    <Image className='w-full object-cover  h-[60%] fill' src="/slide-two.png" alt='picfiv' />
                   
                </div>
                
            </Carousel> 
        </div>


        
            
        
    
   
   
  )
}

export default Hero