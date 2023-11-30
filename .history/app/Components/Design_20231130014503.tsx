"use client"

import Head from 'next/head'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface P {
    name: string,
    href: string
}

const links: P[] = [
    {
        name: 'Home', href: "/"
    },
    {
        name: 'Women', href: "/Women"
    },
    {
        name: 'Men', href: "/Men"
    },
    {
        name: 'Latest', href: "/Latest"
    },
]

function Design() {
    const pathname = usePathname()
  return (
    <div className='p-4 bg-purple-500   '>
        <Head>
            <title>tst-jewelry.com, |Home of luxrious jewelries|watches|Weddimg ring</title>
            <title>tst-jewelry.com/women, women customes and jewelry, complete set jewelry</title>
            <title>tst-jewelry.com/men, Men Watches, Men jewelry</title>
            <title>tst-jewelry.com/latest</title>

            <meta
                property='og:title'
                content='tst-jewelry.com |Home of Luxirous jewelries |Owanbe |Naija party, width=device-width'

            />
            <meta
                property='og:URL'
                content="https://www.tst-jewelry.com"
               

            />
            <meta
                property='og:description'
                content='tst-jewelry.com, Fast delivery, jewery in ikeja'

            />

            <meta
                name='description'
                content='where to get latest jewelry online, when can buy jewelry in lagos, naija jewelry, owanbe'

            />

            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'

            />
        </Head>
        <div className='flex gap-2 items-center justify-center '>
            {links.map((l, index) => (
                <div key={index} className='flex rounded-lg hover:shadow-2xl  md:w-1/2 text-center items-center justify-center  border shadow-md p-2 '>
                    {pathname === l.href ? (
                        <Link href={l.href} className='text-sm sm:text-lg text-red-500 font-semibold animate-pulse'>
                            {l.name}
                        </Link>

                    ):(
                        <Link href= {l.href }
                        className="text-sm sm:text-lg font-semibold text-gray-800 transition duration-100 ease-in-out animate-pulse "
                        >
                            {l.name}
                        </Link>

                    )}

                </div>
            ))}
        </div>
    </div>
  )
}

export default Design