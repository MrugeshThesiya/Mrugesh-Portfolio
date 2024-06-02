import { motion } from "framer-motion";
import { useState,useEffect} from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Model = ({isMobile})=>{

  if(isMobile){
    return <>
    </>
  }

  return (<>

  <ComputersCanvas />
  
  </>)
}

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={ isMobile ? `relative w-full h-[250px] mx-auto` : `relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#0088FF]'>Mrugesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am proficient in designing <br className='sm:block hidden' />
            and developing web applications
          </p>
        </div>
      </div>

    <Model isMobile = {isMobile}/>      
    </section>
  )
}

export default Hero