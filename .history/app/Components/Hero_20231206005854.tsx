"use client"
import React from 'react'
import one from "../../public/one.png"
import two from "../../public/two.png"
import three from "../../public/three.png"
import four from "../../public/four.png"
import five from "../../public/five.png"





import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'


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
                    <Image className='w-full object-cover  ' src={one} alt='picone' fill  />
                    
                </div>
                <div>
                    <Image className='w-full object-cover   ' src={four} alt='pictwo' fill  />
                    
                </div>
                <div>
                    <Image className='w-full object-cover   ' src={three} alt='picthree ' fill />
                  
                </div>
                
                <div>
                    <Image className='w-full object-cover  ' src="/five" alt='picfoo' fill />
                    
                </div>
                <div>
                    <Image className='w-full object-cover   ' src="/two" alt='picfiv' fill  />
                   
                </div>


              
                
        </Carousel> 
    </div>


        
            
        
    
   
   
  )
}

export default Hero