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
          name='description'
          content='best custome jewelries in lagos'

        />
        <meta
          name='ecommerce'
          content='https://tst-jewelry.com'

        />
        <meta
          name='author'
          content='tst-jewelry'

        />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'

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
