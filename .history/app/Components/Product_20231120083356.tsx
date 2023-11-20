import React from 'react'
import { client } from '../lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Pro } from '../type'
import Icon from './Icon'


const getProduct = async()=> {
    const query = `*[_type == 'product'] [0...3] |order(_createdAt desc) {
        _id,
          price,
          name,
          "slug": slug.current,
          "category": category -> name,
          "images": images[0].asset->url
          
      }
    `
    const data = await client.fetch(query, {cache: 'no-store'})
    return data

}

async function Product() {

    const datas: Pro[] = await getProduct()

  return (
    <div className='flex flex-col transition ease-in-out delay-150 hover:-translate-y-1   duration-300  '>
        <h1 className=' items-center text-center font-serif font-extrabold justify-center p-4 text-2xl md:text-3xl text-gray-700'>Our Products</h1>
         <div className='grid grid-cols-1 p-4     gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid'>
            
          {datas.map((p ) => (
            <div className='flex space-y-2 border-4  items-center justify-center hover:ease-out  hover:bg-purple-200 rounded-lg p-3  flex-col  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300   ' key={p._id}>
              
              <div >
                <Image
                src={p.images}
                alt="pic"
                width={180}
                height={180}
                className='flex items-center justify-center'
                />
              </div >
              
              <Link className="text-center items-center  cursor-pointer p-2 justify-center"    href={`/product/${p.slug}`}> 
                <h1 className='font-bold tracking-wider text-gray-400' >{p.name}</h1>
                <h1 className='font-bold text-sm transition ease-in-out delay-150  hover:translate-y-1 hover:scale-95  duration-300    text-gray-800'>View Product </h1>
              </Link>

              <Icon/>


              

            </div>
          ))}
        </div>
        <Link className='flex p-4 items-center hover:text-xl cursor-pointer text-blue-600 gap-2' href={'/Latest'}>
        <h1 className='flex font-semibold'>See More Products</h1>
        <Icon/>
        
        </Link>

    </div>
  )
}

export default Product