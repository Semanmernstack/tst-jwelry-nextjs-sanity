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
    <div className='max-w-2xl gap-3 mx-auto sm:max-w-3xl     p-5'>
        <h1 className='text-center justify-cente font-extraboldr text-xl md:text-2xl'>Our Client </h1>
        <div className=' p-2  grid grid-cols-1 gap-3 bg-zinc-600  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   '>
            {datas.map((t: any) => (
                <div  className=' borde-2 flex flex-col shadow-md gap-2 p-2 rounded-md border-purple-900  ' key={t._id}>
                    <div className='text-center flex items-center justify-center'>
                     <Image
                        src={urlFor(t.piccc).url()}
                        alt='test image'
                        width={80}
                        height={80}
                        className='rounded-full  object-contain '
                    />
                    </div>
                   
                    <div className='gap-2 text-white'>
                        <h2 className='font-extrabold text-center italic text-lg'>{t.name}</h2>
                        <h2 className='text-xs sm:text-sm font-mono'>{t.desc}</h2>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Testi