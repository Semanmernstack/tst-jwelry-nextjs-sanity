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
    <div className='max-w-2xl gap-3 mx-auto md:max-w-3xl   bg-purple-200 p-5'>
        <h1>Our Client Testimony</h1>
        <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-3 '>
            {datas.map((t: any) => (
                <div  className=' border-purple-900' key={t._id}>
                     <Image
                        src={urlFor(t.piccc).url()}
                        alt='test image'
                        width={100}
                        height={100}
                        className='border-shadow-2xl object-contain items-center justify-center text-center rounded-full'
                    />
                   
                    <div>
                        <h2>{t.name}</h2>
                        <h2>{t.desc}</h2>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Testi