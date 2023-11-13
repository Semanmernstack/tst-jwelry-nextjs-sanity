import React from 'react'
import { client } from '../lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Pro } from '../type'


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
    const data = await client.fetch(query)
    return data

}

async function Product() {

    const datas: Pro[] = await getProduct()

  return (
    <div className='flex flex-col '>
        <h1 className=' items-center text-center justify-center p-4 text-2xl md:text-3xl text-gray-700'>Our Products</h1>
         <div className='grid grid-cols-1 p-4     gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid'>
            
          {datas.map((p ) => (
            <div className='flex space-y-2 border-4 transform  duration-75 items-center justify-center hover:ease-out  hover:bg-purple-200 rounded-lg p-3  flex-col' key={p._id}>
              <h1 className="items-center  p-2 justify-center font-extrabold text-2xl text-blue-700 text-center">{p.category}</h1>
              <div >
                <Image
                src={p.images}
                alt="pic"
                width={180}
                height={180}
                className='flex items-center justify-center'
                />
              </div >
              
              <Link className="text-center items-center shadow-lg p-2 justify-center"    href={`/product/${p.slug}`}> 
                <h1 className='font-bold tracking-wider text-gray-400' >{p.name}</h1>
                <h1 className='font-bold text-gray-800'>N {p.price}</h1>
              </Link>
              

            </div>
          ))}
        </div>
    </div>
  )
}

export default Product