import React from 'react'
import { client } from '../lib/sanity'
import { Cat, ProId } from '../type'
import Image from 'next/image'
import Link from 'next/link'
async function getCat(category: string) {
    const query = `*[_type == "product" && category->name =="${category}"]{
      _id,
         price,
         name,
         "slug": slug.current,
         "category": category ->name,
         "images": images[0].asset->url
   }
    `
    const data = await client.fetch(query)
    return data
}

async function page({params}: {params: {category: string}}) {
    const datas: Cat[] = await getCat(params.category)
    console.log(datas)
  return (
    <div>
         <div className='grid grid-cols-1 bg-purple-100      gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid'>
          {datas.map((p ) => (
            <div key={p._id}  className='flex border-4 transform  duration-75  hover:ease-out hover:shadow-lg rounded-lg p-3  flex-col' >
              <h1 className="items-center animate-pulse p-2 justify-center font-extrabold text-2xl text-blue-700 text-center">{p.category}</h1>
              <div >
                <Image
                src={p.images}
                alt="pic"
                width={220}
                height={220}
                className='flex'
                />
              </div >
             
              
              <Link  className="text-center items-center shadow-lg p-2 justify-center"    href={`/product/${p.slug}`}> 
                <h1 className='font-bold tracking-wider text-gray-400' >{p.name}</h1>
                <h1 className='font-bold text-gray-800'>N {p.price}</h1>
              </Link>
              

            </div>
          ))}
        </div>
    </div>
  )
}

export default page