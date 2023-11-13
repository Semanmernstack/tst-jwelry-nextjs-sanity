
import ImageComp from '@/app/Components/ImageComp'
import { client } from '@/app/lib/sanity'
import { ProId } from '@/app/type'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
async function getId(slug: string) {
  const query =  `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          name,
          price,
          images,
          desc,
          "slug": slug.current,
          "category": category->name,
          
      }
    `
    const data = await client.fetch(query)
    return data
      

}

async function page({params}: {params: {slug: string}}) {
    const datas: ProId = await getId(params.slug)
    console.log(datas)
  return (
    <div className='flex p-3 flex-col max-w-2xl mx-auto md:max-w-5xl h-full overflow-hidden'>
        <div className='flex flex-col shadow-sm  text-center items-center justify-center'>
            <h2 className='text-2xl font-extrabold font-serif'>Categories</h2>
            <h1 className='text-xl italic font-bold text-gray-800'>{datas.category}</h1>

        </div>
       
        <div>
            <ImageComp images={datas.images} />
        </div>
        <div className='space-y-2 text-neutral-700 animate-pulse p-2'>
            <p className='text-center text-lg sm:text-xl justify-center font-extrabold text-gray-600 p-1'>{datas.name}</p>
            <h2 className=' italic font-normal'>{datas.desc}</h2>
        </div>
        <div className='flex  items-center justify-around sm:justify-between bg-green-500 p-2 rounded-lg transition ease-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 duration-300'>
           
            <p className='font-extrabold text-xl sm:text-2xl text-purple-900'>N {datas.price}</p>
            <div className='flex flex-col shadow-inner gap-1 items-center'>
                <h1 className='text-xs sm:text-xl lg:text-2xl'>Chat with Seller</h1>
                <SocialIcon className="  w-8 h-8 animate-bounce " network='whatsapp' url="https://wa.me/2349068395803" />
            </div>
            
        </div>
       
    </div>
  )
}

export default page