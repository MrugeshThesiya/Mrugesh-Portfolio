import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    typescript,
    framerMotion,
    PDEU,
    CK,
    threejs,
    BhartiyaDharohar,
    webdev,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
  ];
  
  const services = [
  {
    title: "FullStack Web Developer",
    icon: web,
  },
  {
    title: "Hackathon Participant",
    icon: backend,
  },
  {
    title: "President of Code Kalaakars",
    icon: creator,
  },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Framer Motion",
      icon: framerMotion,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDb",
      icon: mongodb,
    },
    {
      name: "Git & GitHub",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "BTech. in CSE",
      company_name: "PDEU",
      icon: PDEU,
      date: "July 2023 - May 2027",
      points: [
        "I am currently pursuing Bachelor of Technology in Computer Science and Engineering from Pandit Deendayal Energy University , Gandhinagar.",
        "I got 9.82 SGPA (O Grade) in my First Semester."
      ],
    },
    {
      title: "President",
      company_name: "Code Kalakaars",
      icon: CK,
      date: "Feb 2024 - present",
      points: [
        "I lead a vibrant community of programmers where my mission is to cultivate an environment that fosters both growth and healthy competition.","My Team achieves our goals by offering opportunities to challenge their skills and showcase talent, all while fostering a spirit of continuous development for our members. ",
      ],
    },
    {
      title: "Tech Head",
      company_name: "Mind Ripple , PDEU",
      icon: webdev,
      date: "May 2024 - present",
      points: [
        "As the Tech Lead at Mind Ripple, I am responsible for developing and maintaining their web application/quiz platform. This is a full MERN stack application developed by my team.","The Platform is currently under development and will be live soon.",
      ],
    },
  ];
  
  const socials = [
    {
      title: "GitHub",
      color : "green-text-gradient",
      link : "https://github.com/MrugeshThesiya"
    },
    {
      title: "Linkedin",
      color: "blue-text-gradient",
      link : "https://www.linkedin.com/in/mrugesh-thesiya-9b3ba32a2/"
    },
    {
      title: "X",
      color: "orange-text-gradient",
      link : "https://twitter.com/SSanatan108"
    },
    {
      title: "Instagram",
      color: "pink-text-gradient",
      link : "https://www.instagram.com/sanatani_storyteller_108/"
    },
  ]
  
  const projects = [
    {
      name: "Bhartiya Dharohar",
      description:
        "A website that showcases the rich and varied heritage of india.This was my team's submission to SIH 2023 and was further developed by team code kalaakar.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: BhartiyaDharohar,
      source_code_link: "https://github.com/MrugeshThesiya/SIH2023",
    },
  ];
  
  export { services, technologies, experiences,projects , socials};