import { useCallback } from "react";
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
  password
} from "../assets";

const navLinks = [
  {
    id: "Home",
    link: "/",
    title: "Home",
  },
  {
    id: "SP",
    link: "/SmallProjects",
    title: "Small Projects",
  },
]
const subNavLinks = [
  {
    id: "about",
    link: "/",
    type: "sub",
    title: "About",
  },
  {
    id: "work",
    link: "/",
    type: "sub",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Framer Motion",
  //   icon: framerMotion,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  //  
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
      "I lead a vibrant community of programmers where my mission is to cultivate an environment that fosters both growth and healthy competition.", "My Team achieves our goals by offering opportunities to challenge their skills and showcase talent, all while fostering a spirit of continuous development for our members. ",
    ],
  },
  {
    title: "Tech Head",
    company_name: "Mind Ripple , PDEU",
    icon: webdev,
    date: "May 2024 - present",
    points: [
      "As the Tech Lead at Mind Ripple, I am responsible for developing and maintaining their web application/quiz platform. This is a full MERN stack application developed by my team.", "The Platform is currently under development and will be live soon.",
    ],
  },
];

const socials = [
  {
    title: "GitHub",
    color: "green-text-gradient",
    link: "https://github.com/MrugeshThesiya"
  },
  {
    title: "Linkedin",
    color: "blue-text-gradient",
    link: "https://www.linkedin.com/in/mrugesh-thesiya-9b3ba32a2/"
  },
  {
    title: "X",
    color: "orange-text-gradient",
    link: "https://twitter.com/SSanatan108"
  },
  {
    title: "Instagram",
    color: "pink-text-gradient",
    link: "https://www.instagram.com/mrugesh_thesiya/"
  },
]

const smallProjects = [
  {
    name : "Background Changer",
    link : "/BgChanger",
    img : "https://media.geeksforgeeks.org/wp-content/uploads/20230602152909/backgroundchangerGIF.gif",
    desc : "A Basic React Project that thaught me how to manipulate basic properties like background Colour and how to manage a react project.",
    
  },
  {
    name : "Password Generator",
    link : "/PassWordGen",
    img : "https://media1.tenor.com/m/-In2pFP1yxYAAAAC/password.gif",
    desc : `Through this project, I learned how to use various hooks such as "useCallback", "useEffect", "useState", and "useId". A major learning point was using useCallback for memoization. Additionally, I utilized Clipboard.js to implement copy functionality, which was not possible with the Clipboard API alone as it was not functional in mobile devices .`,
    
  }, 
  {
    name : "Currency Converter",
    link : "/CurrencyConverter",
    img : "https://media1.tenor.com/m/6Hixx4SFAeQAAAAd/backing-you-get-yours.gif",
    desc : `Through this project, I learned how to use various hooks such as "useCallback", "useEffect", "useState", and "useId". A major learning point was using useCallback for memoization. Additionally, I utilized Clipboard.js to implement copy functionality, which was not possible with the Clipboard API alone as it was not functional in mobile devices . It was also insightful to use setTimeout inside useEffect to make the copied message disappear a few seconds after the button is pressed.`,
    
  }, 
  {
    name : "Todo App",
    link : "/Todo",
    img : "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHQyMzhxdHVhMml0d2pjOXY2d3k5bGNzbmN0anQwcHN1ZWJ3d3FneiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kLOkqcrdC5mrCE7k7G/giphy.webp",
    desc : `Through this project, I learned how to use various hooks such as "useCallback", "useEffect", "useState", and "useId". A major learning point was using useCallback for memoization. Additionally, I utilized Clipboard.js to implement copy functionality, which was not possible with the Clipboard API alone as it was not functional in mobile devices . It was also insightful to use setTimeout inside useEffect to make the copied message disappear a few seconds after the button is pressed.`,
    
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

const credits = [
  {
    item : "Spining react symbol",
    owner : "Linkedin",
    link : "https://media.licdn.com/dms/image/C4D12AQF2MttBy-Zacw/article-cover_image-shrink_720_1280/0/1580259000041?e=1722470400&v=beta&t=-SY0VbLnLhDWFZFK1RQ11elbYcEh_H-tPfrzicBAClA"
  },
  {
    item : "BgChanger Gif",
    owner : "Geeks For Geeks",
    link : "https://media.geeksforgeeks.org/wp-content/uploads/20230602152909/backgroundchangerGIF.gif"
  },
  {
    item : "PasswordGenerator Gif",
    owner : "Tenor",
    link : "https://tenor.com/view/password-gif-10632339"
  },
  {
    item : "Money Gif",
    owner : "Tenor",
    link : "https://tenor.com/view/backing-you-get-yours-danny-devito-danny-devito-gif-13052176"
  },
  {
    item : "Todo Context Gif",
    owner : "Giphy",
    link : "https://giphy.com/gifs/drawify-kLOkqcrdC5mrCE7k7G"
  },
]

export { navLinks, subNavLinks, services, technologies, experiences, socials, projects, smallProjects,credits};