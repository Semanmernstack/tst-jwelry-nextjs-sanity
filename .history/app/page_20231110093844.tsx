import Image from 'next/image'
import Hero from './Components/Hero'
import Design from './Components/Design'

export default function Home() {
  return (
    <main className="flex flex-col">
      
      <Hero/>
      <Design/>

      
    </main>
  )
}
