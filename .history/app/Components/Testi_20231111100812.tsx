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
    <div className='max-w-2xl gap-3 mx-auto md:max-w-3xl    p-5'>
        <h1>Our Client Testimony</h1>
        <div className=' p-2  grid grid-cols-1 gap-3 bg-rose-400  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   '>
            {datas.map((t: any) => (
                <div  className=' borde-2 shadow-md gap-2 p-2 rounded-md border-purple-900  ' key={t._id}>
                     <Image
                        src={urlFor(t.piccc).url()}
                        alt='test image'
                        width={100}
                        height={100}
                        className='rounded-full items-center text-center justify-center object-contain '
                    />
                   
                    <div className='gap-2 text-white'>
                        <h2 className='font-extrabold italic text-xl'>{t.name}</h2>
                        <h2 className='text-xs sm:text-lg font-momo'>{t.desc}</h2>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Testi