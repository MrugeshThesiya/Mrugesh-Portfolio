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
    figma,
    docker,
    PDEU,
    CK,
    threejs,
    BhartiyaDharohar,
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
      title: "Web Developer",
      icon: web,
    },
  {
    title: "React Developer",
    icon: mobile,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
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
        "I lead a vibrant programmer community where my mission is to cultivate an environment that fosters both growth and healthy competition.","I put efforts in creating a supportive space where everyone feels comfortable in learning, collaborating, and pushing each other to new heights.","My Team achieves this by offering opportunities to challenge their skills and showcase talent, all while fostering a spirit of continuous development for our members. ",
      ],
    },
  ];
  
  const socials = [
    {
      title: "GitHub",
      link : "https://github.com/MrugeshThesiya"
    },
    {
      title: "Linkedin",
      link : "https://www.linkedin.com/in/mrugesh-thesiya-9b3ba32a2/"
    },
    {
      title: "X",
      link : "https://twitter.com/SSanatan108"
    },
    {
      title: "Instagram",
      link : "https://www.instagram.com/sanatani_storyteller_108/"
    },
  ]
  
  const projects = [
    {
      name: "Bhartiya Dharohar",
      description:
        "A website that showcases the rich and varied heritage of india.",
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