import {useState} from 'react'
import { smallProjects } from '../../constants'

function BgChanger() {
  const [bgClr,setbgClr] = useState("")
  const Colors = [
    {
      name : "Original",
      class : "bg-primary"
    },
    {
      name : "Orange",
      class : "bg-orange-700"
    },
    {
      name : "Amber",
      class : "bg-amber-600"
    },
    {
      name : "Yellow",
      class : "bg-yellow-700"
    },
    {
      name : "Lime",
      class : "bg-lime-900"
    },
    {
      name : "Green",
      class : "bg-green-800"
    },
    {
      name : "Emerald",
      class : "bg-emerald-600"
    },
    {
      name : "Teal",
      class : "bg-teal-600"
    },
    {
      name : "Cyan",
      class : "bg-cyan-600"
    },
    {
      name : "Sky",
      class : "bg-sky-600"
    },
    {
      name : "Purple",
      class : "bg-purple-600"
    },
    {
      name : "Fuchsia",
      class : "bg-fuchsia-600"
    },
    {
      name : "Pink",
      class : "bg-pink-600"
    },
    {
      name : "Rose",
      class : "bg-rose-600"
    },
  ]
  return (
    <>
    <div className={`min-h-screen py-[5rem] flex flex-col items-center justify-center ${bgClr} px-[2rem]`}>
      <h1 className='text-center font-semibold text-[2rem]'>Background Changer</h1>
      <p className='text-center mb-4'>{smallProjects[0].desc}</p>
      <div className='bg-slate-900 flex flex-wrap items-center justify-center gap-4 rounded-xl p-[1rem] mx-[1rem] mb-[2rem]'>
        {Colors.map((clr)=>(
          <div className="flex flex-col flex-1 gap-1 items-center justify-center flex-wrap flex-grow-0">
          <span onClick={()=>{setbgClr(clr.class)}} className={`${clr.class} w-[4rem] sm:w-[3rem] aspect-square rounded-[50%] cursor-pointer mx-1`}></span>
          <p>{clr.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default BgChanger
