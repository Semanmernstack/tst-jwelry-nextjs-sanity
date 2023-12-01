
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
    <div className='w-[-60%] h-[60%] '>
       

        <Carousel {...settings}>
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