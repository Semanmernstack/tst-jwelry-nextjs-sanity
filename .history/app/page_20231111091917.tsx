import Image from 'next/image'
import Hero from './Components/Hero'
import Design from './Components/Design'
import Product from './Components/Product'
import Testi from './Components/Testi'

export default function Home() {
  return (
    <main className="flex flex-col">
      
      <Hero/>
      <Design/>
      <Product/>
      <Testi/>


      
    </main>
  )
}
