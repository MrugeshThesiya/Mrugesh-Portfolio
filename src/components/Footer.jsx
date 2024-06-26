import React from 'react'
import { socials } from '../constants'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-1 py-[20px] sm:flex-row'>
       <p className='text-center'>
         Explore my socials here :
       </p>
       <div className="flex gap-[10px] items-center justify-center ">
            {socials.map((Element,index)=>(
                <a key={index} className={`text-[20px] ${Element.color}`} target="_blank" href={Element.link}>{Element.title}</a>
            ))}
        </div>
    </div>
  )
}

export default Footer
