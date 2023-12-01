import React from 'react'
import { client, urlFor } from '../lib/sanity'
import Image from 'next/image'

async function getTest() {
    const query = `*[_type == 'testimonia'] [0...4] {
        _id,
          name,
          piccc,
          desc,
      } 
         
    `
    const data = await client.fetch(query)
    return data
}

async function Testi() {
    const datas = await getTest()
  return (
    <div className='max-w-2xl gap-3 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-5xl     p-5'>
        <h1 className='text-center  p-2 rounded-md text-blue-500 font-sans justify-cente font-extrabold text-xl sm:text-2xl'>Our Client </h1>
        <div className=' p-2  grid grid-cols-1 gap-3   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   '>
            {datas.map((t: any) => (
                <div  className=' borde-2 flex bg-slate-500 hover:bg-purple-600 flex-col shadow-lg gap-3 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  duration-300  ' key={t._id}>
                    <div className='text-center flex items-center justify-center'>
                     <Image
                        src={urlFor(t.piccc).url()}
                        alt='test image'
                        width={200}
                        height={200}
                        priority={true}
                        className='rounded-full shadow-md  object-cover '
                    />
                    </div>
                   
                    <div className='gap-2 text-white'>
                        <h2 className='font-extrabold text-center italic text-lg'>{t.name}</h2>
                        <h2 className='text-xs sm:text-sm font-serif'>{t.desc}</h2>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Testi