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
       
        
    }

    
  return (
    <div>
        <form className="flex sm:flex-col p-3 shadow-2xl" onSubmit={handleSubmit}>
            <div>
                <input type="email"
                    placeholder='enter your email for news letter'
                    value={input}

                    onChange={(e) => setInput(e.target.value)}
                    required
                    className="outline-none text-white bg-purple-700 h-7 md:h-12  mb-3 p-2 rounded-lg mr-10 border-none from-fuchsia-400 "

                 />
                 <button className="cursor-pointer mt-3 text-white bg-zinc-950 p-1 md:p-2  rounded-xl md:rounded-3xl " type='submit' disabled={!input}    >
                    Subscribe
                 </button>
            </div>
            
        </form>
    </div>
  )
}

export default Mail