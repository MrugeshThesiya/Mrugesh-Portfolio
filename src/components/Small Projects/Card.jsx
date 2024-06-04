import React from 'react'
import { Link } from 'react-router-dom'

function Card({proj}) {
  return (
    <Link to={proj.link}>
    <div className={`flex flex-col w-[20rem] h-[16rem] flex-1 items-center justify-between gap-2 bg-tertiary rounded-xl pb-[2rem] p-[1rem] mx-[2rem] md:mx-0`}>
      <p className='font-semibold text-[1.5rem]'>{proj.name}</p>
      <img className='w-[20rem] h-[11rem] rounded-lg' alt={`${proj.name}'s image`} src={proj.img}></img>
    </div>
    </Link>
  )
}

export default Card
