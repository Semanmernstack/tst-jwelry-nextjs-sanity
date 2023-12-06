"use client"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

function ImageComp({images}: any) {
   
  return (
    <div className=" flex flex-col bg-transparent">
        <div className="p-5 grid grid-cols-3  gap-2  sm:items-center md:justify-center ">
            {images?.map((ima: any, index: any) => (
                <div className=" items-center justify-center hover:bg-pink-200  boder shadow-lg" key={index}>
                    <img
                        
                         src={urlFor(ima).url()}
                         alt="sec"
                         width={150}
                         height={150}
                         className=" rounded-md w-full hover:bg-pink-200  object-contain  cursor-pointer"
                        
                    />
                     
                </div>

            ))}
        </div>
       
        
    </div>
  )
}

export default ImageComp