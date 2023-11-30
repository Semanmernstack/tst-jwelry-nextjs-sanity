"use client"
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
        <title>beautiful jewelery set in lagos - Big Discounts | tst-jewelry </title>
        
        <meta
          name='description'
          content='best jewelries in Lagos. Make contact today'
          key=" lagos"

        />
        <meta
          name='tst-jewelry, lagos jewelry nigeria jewelry'
          content='https://tst-jewelry.com, WOMEN, MEN, LATEST PRODUCT'

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
