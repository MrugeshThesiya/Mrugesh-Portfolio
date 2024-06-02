import React from 'react'
import { Link } from 'react-router-dom'

function Card({proj}) {
  return (
    <Link to={proj.link}>
    <div className='flex flex-col flex-1 items-center justify-between gap-2 w-[20rem] bg-tertiary min-h-[25rem] rounded-xl py-[1rem] px-[1rem]'>
      <p className='font-semibold text-[1.5rem]'>{proj.name}</p>
      <img className='w-[20rem] h-[11rem] rounded-lg' alt={`${proj.name}'s image`} src={proj.img}></img>
      <p className='text-center'>{proj.desc}</p>
    </div>
    </Link>
  )
}

export default Card
