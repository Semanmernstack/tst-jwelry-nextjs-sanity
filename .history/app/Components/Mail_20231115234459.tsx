"use client"
import React, { FormEvent, useState } from 'react'

function Mail() {
    const [input, setInput] = useState<string>("")
    const [mailError, setMailError] = useState<string> ("")
    const [mailOk, setMailOk] = useState<string>("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = input;
        
        
        const res = await fetch("/api/mailSub", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({email}),
          
        })
        
        const data = await res.json()
        if (data.error) {
            setMailError('Hey you already subscribe to trizzas cake')
            
            return
        }
        setMailOk(data.res)
        setInput("")
       
        
    }

    
  return (
    <div className='flex flex-col items-center  '>
        <form className="flex  flex-col p-3 " onSubmit={handleSubmit}>
            <div className='gap-2 flex w-full flex-col  items-center'>
                <input type="email"
                    placeholder='Subsribe for news letter'
                    value={input}

                    onChange={(e) => setInput(e.target.value)}
                    required
                    className="outline-none flex  w-full text-white bg-purple-700 h-7 md:h-12   p-1 rounded-lg  border-none from-fuchsia-400 "

                 />
                 <button className=" flex cursor-pointer  text-white bg-zinc-950 p-1 text-xs sm:text-lg rounded-xl md:rounded-3xl " type='submit' disabled={!input}    >
                    Subscribe
                 </button>
            </div>
            
        </form>
        {(mailOk || mailError ) && ( 
            <div className="mt-5 text-sm text-center justify-center font-extrabold">
             {mailOk ?(<p className=" bg-red-900 p-1"> Subscription Sucessful !! </p>):(<p className="bg-green-500 p-1">You already Subscribed</p>)}
            </div>
        )}    
       
    </div>
  )
}

export default Mail