import { motion } from "framer-motion";
import { useState,useEffect} from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const SideBar = ({isMobile}) =>{
  if(isMobile){
    return <>
    </>
  }

  return (<>

    <div className='flex flex-col justify-center items-center mt-5'>
     <div className='w-5 h-5 rounded-full bg-[#0088FF]' />
     <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#0088FF] to-slate-900' />
    </div>
    
    </>)
}

const Model = ({isMobile})=>{

  if(isMobile){
    return <>
    </>
  }

  return (<>

  <ComputersCanvas />

  <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
    <a href='#about'>
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='w-3 h-3 rounded-full bg-secondary mb-1'
        />
      </div>
    </a>
  </div>
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