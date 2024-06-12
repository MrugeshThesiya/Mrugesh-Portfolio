import React from "react";
import { smallProjects,credits} from "../constants";
import { Card } from "./Small Projects";
import { react } from "../assets";

function SmallProj() {
  return (
    <>
      <div className="text-center pt-[5rem] pb-[2rem] px-[1rem]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1">
          <img className="h-10 rounded-sm" src={react} alt="react logo" />
          <h1 className="text-[2rem] md:text-[3rem] font-semibold ">React Projects</h1>
        </div>
        <p className="mt-[1rem] text-[1.1rem] text-center mx-[2rem] w-[90%] lg:w-[60%]">
          These are the small projects that I have build through my journey of
          learning React . They showcase my journey of learning and at the same time
          display my depth of knowledge in react.
        </p>
      </div>
      </div>
      <div className="flex items-center justify-center min-h-full pb-[2rem] gap-[2rem] flex-wrap mx-[2rem]">
        {smallProjects.map((proj) => (
          <Card key={proj.name}  proj={proj} />
        ))}
      </div>
      <div className="mb-[2rem] flex items-center justify-center flex-col md:w-full ml-[3rem] mr-[2rem]">
        <p className="text-center text-xl font-bold w-[6rem]">Credits :</p>
        <ol className="list-decimal">
        {credits.map((obj)=>(
          <li key={obj.item}>{`${obj.item} is taken from : `}
          <a target="_blank" className="hover:underline hover:text-white text-secondary" href={obj.link}>{obj.owner}</a></li>
        ))}
        </ol>
      </div>
    </>
  );
}

export default SmallProj;
