
import React from 'react'
import slidefive from "../../public/slidefive.png"
import slideone from "../../public/slideone.png"
import slidetwo from "../../public/slidetwo.png"
import slidethree from "../../public/slidethree.png"
import slidefour from "../../public/slidefour.png"




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
    
    <div> 

        <Carousel {...settings}>
                <div>
                    <Image className='w-full object-cover h-[60%] fill' src={slideone} alt='picone' />
                    
                </div>
                <div>
                    <Image className='w-full object-cover  h-[60%] fill' src={slidefour} alt='pictwo' />
                    
                </div>
                <div>
                    <Image className='w-full object-cover  h-[60%] fill' src={slidethree} alt='picthree' />
                  
                </div>
                
                <div>
                    <Image className='w-full object-cover fill  h-[60%] fill' src={slidefive} alt='picfoo' />
                    
                </div>
                <div>
                    <Image className='full object-cover  h-[60%] fill' src={slidetwo} alt='picfiv' />
                   
                </div>
            </Carousel> 
        </div>


        
            
        
    
   
   
  )
}

export default Hero