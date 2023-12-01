
import React from 'react'


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const settings = {
    showArrows: false,
    interval: 2500,
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
    
    <div> 

        <Carousel className='w-full  ' {...settings}>
                <div>
                    <img className='w-full' src="/slideone.png" alt='picone' />
                    
                </div>
                <div>
                    <img className='w-full' src="/slidefour.png" alt='pictwo' />
                    
                </div>
                <div>
                    <img className='w-full' src="/slidethree.png" alt='picthree' />
                  
                </div>
                
                <div>
                    <img className='w-full' src="/slidefive.png" alt='picfoo' />
                    
                </div>
                <div>
                    <img className='full' src="/slidetwo.png" alt='picfiv' />
                   
                </div>
            </Carousel> 
        </div>


        
            
        
    
   
   
  )
}

export default Hero