import React from 'react'
import { Mrugesh } from '../assets'
import { socials } from '../constants'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-[2rem] pb-[20px] md:flex-row'>
      <img src={Mrugesh} alt="Image of Mrugesh Thesiya" className='w-[10rem] rounded-[50%]' />
       <div>
       <p>
         Contact me through my socials here : 
       </p>
       <div className="flex gap-[10px] items-center justify-center ">
            {socials.map((Element,index)=>(
                <a key={index} className='text-[20px] hover:text-gray-400' target="_blank" href={Element.link}>{Element.title}</a>
            ))}
        </div>
       </div>
    </div>
  )
}

export default Footer
