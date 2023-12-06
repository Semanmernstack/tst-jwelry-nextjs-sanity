

import Hero from './Components/Hero'
import Design from './Components/Design'
import Product from './Components/Product'
import Testi from './Components/Testi'
import Newslet from './Components/Newslet'
import Top from './Components/Top'


export default function Home() {
  return (
    <div className="flex flex-col p-2">
      
       <Design/>
      <Hero/>
      <Top/>
     
      <Product/>
      <Testi/>
      <Newslet/>


      
    </div>
  )
}
