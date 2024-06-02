import {useState} from 'react'

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
    <div className={`min-h-screen flex flex-col items-center justify-center ${bgClr}`}>
      <h1 className='text-center font-semibold my-[2rem] text-[2rem]'>Background Changer</h1>
      <div className='bg-slate-900 flex flex-wrap items-center justify-center gap-[2rem] rounded-xl px-[1rem] mx-[2rem] mb-[2rem]'>
        {Colors.map((clr)=>(
          <div className="flex flex-col flex-1 gap-1 my-[1rem] items-center justify-center flex-wrap flex-grow-0">
          <span onClick={()=>{setbgClr(clr.class)}} className={`${clr.class} w-[2rem] md:w-[2rem] aspect-square rounded-[50%] cursor-pointer`}></span>
          <p className='text-[0.75rem]'>{clr.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default BgChanger
