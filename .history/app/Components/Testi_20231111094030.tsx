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
    <div>
        <h1>Our Client Testimony</h1>
        <div>
            {datas.map((t: any) => (
                <div key={t._id}>
                     <Image
                        src={urlFor(t.piccc).url()}
                        alt='test image'
                        width={50}
                        height={50}
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