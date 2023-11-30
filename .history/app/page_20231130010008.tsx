import Image from 'next/image'
import Hero from './Components/Hero'
import Design from './Components/Design'
import Product from './Components/Product'
import Testi from './Components/Testi'
import Newslet from './Components/Newslet'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col p-2">
      <Head>
        <title>tst-jewelry</title>
        <meta
          name='tst-jewelry.com'
          content='best custome jewelries in lagos'

        />
        <meta
          name='ecommerce'
          content='latest jewelry in nigeria'

        />
      </Head>
       <Design/>
      <Hero/>
     
      <Product/>
      <Testi/>
      <Newslet/>


      
    </div>
  )
}
