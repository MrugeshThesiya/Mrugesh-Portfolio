import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Mrugesh } from "../assets";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  if(true){
    return <Tilt className="xs:w-[250px] w-[200px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
}
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div className="flex  justify-center items-center">
        <motion.div className="flex flex-col-reverse md:flex-row justify-around items-center w-full gap-4 mt-5">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Driven software developer with a strong foundation in Frontend Web
            Development with frameworks like ReactJS , ExpressJS , etc.
            Currently pursuing a Bachelor of Technology in Computer Science and
            Engineering at Pandit Deendayal Energy University (2023-2027) .
          </motion.p>

          <motion.img
            src={Mrugesh}
            className="rounded-md w-[10rem] "
          ></motion.img>
        </motion.div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
