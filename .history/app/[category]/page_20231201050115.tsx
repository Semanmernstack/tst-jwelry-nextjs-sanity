import React from 'react'
import { client } from '../lib/sanity'
import { Cat } from '../type'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../Components/Icon'
async function getCat(category: string) {
    const query = `*[_type == "product" && category->name == "${category}"]{
      _id,
         price,
         name,
         "slug": slug.current,
         "category": category ->name,
         "images": images[0].asset->url
   }
    `
    const data = await client.fetch(query, {cache: 'no-store'})
    return data
}

async function page({params}: {params: {category: string}}) {
    const datas: Cat[] = await getCat(params.category)
    console.log(datas)
  return (
    <div className=' flex flex-col bg-transparent  p-2        '>
        
         <div className='grid grid-cols-1 p-4 max-w-2xl mx-auto sm:max-w-3xl lg:max-w-5xl    gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid'>
          {datas.map((p ) => (
            <div key={p._id}  className='flex border-4 transform     rounded-lg p-3  flex-col  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300 ' >
              
              <div >
                {p.images && 

                    <Image
                    src={p.images}
                    alt="pic"
                    width={150}
                    height={150}
                    className='flex bg-transparent'
                    />

                }
               
              </div >
             
              
              <Link  className="text-center items-center shadow-lg p-2 justify-center"    href={`/product/${p.slug}`}> 
                <h1 className='font-bold tracking-wider text-gray-400' >{p.name}</h1>
                
                <div className='text-center text-blue-500 items-center justify-center p-2 flex flex-col'>
                <h2 className='font-bold' >View Product</h2>
                <Icon/>
              </div>
              </Link>
              
              

            </div>
          ))}
         
        </div>
        <Link href='/'>
          <p className='flex text-center cursor-pointer justify-center'>Back</p>
          </Link>
    </div>
  )
}

export default page