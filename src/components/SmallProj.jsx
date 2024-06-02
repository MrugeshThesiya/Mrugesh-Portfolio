import React from "react";
import { smallProjects,credits} from "../constants";
import { Card } from "./Small Projects";
let reactImg =
  "https://media.licdn.com/dms/image/C4D12AQF2MttBy-Zacw/article-cover_image-shrink_720_1280/0/1580259000041?e=1722470400&v=beta&t=-SY0VbLnLhDWFZFK1RQ11elbYcEh_H-tPfrzicBAClA";

function SmallProj() {
  return (
    <>
      <div className="text-center pt-[5rem] pb-[2rem] px-[1rem]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1">
          <img className="h-10 rounded-sm" src={reactImg} alt="react logo" />
          <h1 className="text-[2rem] md:text-[3rem] font-semibold ">React Projects</h1>
        </div>
        <h2 className="mt-[1rem] text-center mx-[2rem] w-[80%] lg:w-[60%]">
          These are the small projects that I have build through my journey of
          learning React . They showcase my journey of learning and at the same time
          display my depth of knowledge in react.
        </h2>
      </div>
      </div>
      <div className="flex items-center justify-center min-h-full pb-[2rem] gap-[2rem] flex-wrap mx-[2rem]">
        {smallProjects.map((proj,index) => (
          <Card key={index}  proj={proj} />
        ))}
      </div>
      <div className="mb-[2rem] flex items-center justify-center flex-col">
        <strong>Credits : </strong>
        <ol className="list-decimal">
        {credits.map((obj)=>(
          <li>{`${obj.item} is taken from : `}<a target="_blank" className="hover:underline hover:text-white text-secondary" href={obj.link}>{obj.owner}</a></li>
        ))}
        </ol>
      </div>
    </>
  );
}

export default SmallProj;
