"use client"

import Hero from './Components/Hero'
import Design from './Components/Design'
import Product from './Components/Product'
import Testi from './Components/Testi'
import Newslet from './Components/Newslet'


export default function Home() {
  return (
    <div className="flex flex-col p-2">
      
       <Design/>
      <Hero/>
     
      <Product/>
      <Testi/>
      <Newslet/>


      
    </div>
  )
}
