import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  meta,
  starbucks, 
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Flip,
  dimension11,
  JAM,
  bivest,
  next,
  tzk,
} from "../assets";
import { Icon } from "@iconify/react";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Development",
    icon: "tabler:code",
  },
  {
    title: "Pixel-perfect development",
    icon: "icon-park-twotone:anchor-round",
  },
  {
    title: "Responsive Design",
    icon: "mdi:responsive",
  },
  {
    title: "Deployment and Debugging",
    icon: "codicon:debug-all",
  },
];

const skills = [
  {
    name: "HTML 5",
    icon: html,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Tzk Creatives | Canada",
    icon: tzk,
    iconBg: "#000000",
    date: "Aug 2024 - Present",
    points: [
      "Pioneered the frontend engineering for two projects simultaneously",
      "Converting comples UI into clean, reusable and clean code",
      "Maintaining web applications using NextJs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Dimension11 Studios",
    icon: dimension11,
    iconBg: "#000000",
    date: "Sep 2022 - Present",
    points: [
      "Maintaining web applications using Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Flip Labs",
    icon: Flip,
    iconBg: "#1e469e",
    date: "Jan 2023 - August 2024",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ], 
  },
  {
    title: "Frontend Developer",
    company_name: "JAM-Forte Technologies ltd",
    icon: JAM, 
    iconBg: "#fff",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "BivestCoin",
    icon: bivest,
    iconBg: "#f5f5f5",
    date: "Apr 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and receiving constructive feedback from senior developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    number: "02",
    name: "Astro Africa",
    description:
      "Web-based platform that allows users to trade giftcards, crypto currency and make everyday transactions like pay bills, buy airtime, make data subscription, cable, e.t.c.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "./Astro.png",
    video: "astro.mp4",
    source_code_link: "",
    live_link: "https://astroafrica.site/",
  },
  {
    number: "02",
    name: "Stac Fx",
    description:
      "Web-based platform that allows users to pay for courses and watch courses, Rquipped with websockets for chat functionality, backend powered by node js, using REST APIs",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "./StacFx.png",
    video: "stacfx.mp4",
    source_code_link: "",
    live_link: "https://astroafrica.site/",
  },
  {
    number: "01",
    name: "SP Logistics",
    description:
      "Powerful tool driven by next js to handle very large scale logistic business. Multiple endpoint calls, use of redux and reduxToolKit for large state management handling",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "css animation",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient"
      },
      {
        name: "charts",
        color: "pink-text-gradient",
      },
    ],
    image: "./splogistics.png",
    video: "splogistics.mp4",
    source_code_link: "",
    live_link:
      "",
  },
  // {
  //   number: "01",
  //   name: "Portfolio",
  //   description:
  //     "A portfolio website built with ReactJs, ThreeJs, TailwindCss, TiltJs and other cool packages, to showcase skills, and projects for front-end developers",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "reduxtoolkit",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Tilt Js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Three Js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Framer Motion",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "css animation",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: newfoliothumb,
  //   source_code_link: "https://github.com/Dr-HaEgHo/portfolio_23",
  //   live_link: "https://portfolio-23-mu.vercel.app",
  // },
  {
    number: "03",
    name: "OneBot",
    description:
      "Powerful web app used for social media automations, monitoring and strategy. Supports Facebook, Instagram, google, Temegram, Whatsapp, e.t.c.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "typeScript",
        color: "pink-text-gradient",
      },
    ],
    image: "./onebot.png",
    video: "",
    source_code_link: "https://github.com/Dr-HaEgHo/portfolio2022",
    live_link: "https://portfolio-dr-haegho.vercel.app/",
  },
  {
    number: "04",
    name: "Talk60Seconds",
    description:
      "A beautiful landing page for a social media company used for marketing purposes to enhance company visibility and increase conversion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "cpanel",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: "./Talk60Seconds.png",
    video: "talk.mp4",
    source_code_link: "",
    live_link: "https://www.talk60Seconds.com/",
  },
  {
    number: "04",
    name: "WSquare Digital",
    description:
      "An attractive responsive landing page to showcase the services of the client's company.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "NextAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Email",
        color: "pink-text-gradient",
      },
    ],
    image: "./wSquare.png",
    video: "wsquare.mp4",
    source_code_link: "",
    live_link: "https://www.talk60Seconds.com/",
  },
  {
    number: "04",
    name: "Meta Foreign Options",
    description:
      "A sophisticated web app for options trading, chart analysis, and seamless forex and cryptocurrency trading. Our intuitive interface and robust charting capabilities empower users to make informed trade decisions. With cutting-edge technology and rigorous testing, our secure and high-performance platform ensures a seamless trading experience. It's a powerful tool for options traders in the forex and cryptocurrency markets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "cpanel",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: "./Meta.png",
    video: "meta.mp4",
    source_code_link: "https://github.com/Dr-HaEgHo/meta-foreign-options",
    live_link: "https://meta-foreign-options.vercel.app/",
  }
];

export { services, technologies, experiences, testimonials, projects, skills };