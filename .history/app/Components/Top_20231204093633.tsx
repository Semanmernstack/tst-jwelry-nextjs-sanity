
import React from 'react'
import { client, urlFor } from '../lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Pro } from '../type'
import Icon from './Icon'

const getTop = async()=> {
    const query = `*[_type == 'top'] [0...5] |order(_createdAt desc) {
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


async function Top() {

    const datas: Pro[] = await getTop()



  return (
    <div className='flex flex-col transition ease-in-out delay-150 hover:-translate-y-1   duration-300  '>
        <h1 className=' items-center text-center font-serif font-extrabold justify-center p-4 text-2xl md:text-3xl text-gray-700'>Top Pick</h1>
         <div className='grid grid-cols-1 p-4     gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid'>
            
          {datas.map((p ) => (
            <div className='flex  border-4  items-center justify-between hover:ease-out bg-pink-500  hover:bg-purple-800 rounded-lg p-3   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300   ' key={p._id}>
              
              <div >
                
                <img
                src={urlFor(p.images).width(100).height(100).url()}
                alt='test image'
                className='object-cover rounded-md'
             
                />
              
              </div >
              <div className='flex flex-col items-center space-y-2 '>
              
              <Link className="text-center flex flex-col items-center  cursor-pointer p-2 justify-center"    href={`/product/${p.slug}`}> 
                <h1 className='font-bold tracking-wider text-gray-400' >{p.name}</h1>
                <h1 className='font-bold text-sm transition ease-in-out delay-150  hover:translate-y-1 hover:scale-95  duration-300    text-gray-800'>View Product </h1>
                <Icon/>
              </Link>
              
              </div>


              

            </div>
          ))}
        </div>
        

    </div>
  )
}

export default Top