"use client"


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
    <div className='p-4 brightness-90 bg-purple-500   '>
        
        <div className='flex gap-2 items-center justify-center '>
            {links.map((l, index) => (
                <div key={index} className='flex rounded-lg hover:shadow-2xl text-zinc-900 md:w-1/2 text-center font-extrabold items-center justify-center  border shadow-md p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  duration-300 '>
                    {pathname === l.href ? (
                        <Link href={l.href} className='text-sm sm:text-lg text-red-800 font-semibold animate-pulse'>
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