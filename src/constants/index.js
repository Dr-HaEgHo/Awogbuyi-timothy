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
  astro,
  next,
  astrolanding1,
  oldfoliothumb,
  oldfolio,
  metaforeign,
  metalanding,
  avidmall,
  avidmallthumb,
  newfoliothumb,
  avidtodo,
  avidadmin,
  eatery,
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
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: next,
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
    title: "Frontend VueJs Developer",
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
    title: "React.js Developer",
    company_name: "Flip Labs",
    icon: Flip,
    iconBg: "#1e469e",
    date: "Jan 2023 - August 2023",
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
    number: "01",
    name: "Portfolio",
    description:
      "A portfolio website built with ReactJs, ThreeJs, TailwindCss, TiltJs and other cool packages, to showcase skills, and projects for front-end developers",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "Tilt Js",
        color: "pink-text-gradient",
      },
      {
        name: "Three Js",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "css animation",
        color: "pink-text-gradient",
      },
    ],
    image: newfoliothumb,
    source_code_link: "https://github.com/Dr-HaEgHo/portfolio_23",
    live_link: "https://portfolio-23-mu.vercel.app",
  },
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
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: astrolanding1,
    // video: astro,
    source_code_link: "",
    live_link: "https://astroafrica.site/",
  },
  {
    number: "03",
    name: "Portfolio 1",
    description:
      "A simple portfolio built to showcase a developer's skills, services, experience and projects, making it easier to present to clients and employers. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typewriter",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: oldfoliothumb,
    // video: oldfolio,
    source_code_link: "https://github.com/Dr-HaEgHo/portfolio2022",
    live_link: "https://portfolio-dr-haegho.vercel.app/",
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
    image: metalanding,
    // video: metaforeign,
    source_code_link: "https://github.com/Dr-HaEgHo/meta-foreign-options",
    live_link: "https://meta-foreign-options.vercel.app/",
  },
  {
    number: "05",
    name: "Avid Mall",
    description:
      "This is an ecommerce website I built using React Js library and styled using CSS, JSX styling and MUI styles. Here, I managed the global states like cart, products, addToCart, removeFromCart, incrementQuantity, e.t.c. using reducer technique from Redux ToolKit, and also handled API requests with createAsyncThunk from ReduxToolkit. Handled form input and validation using formik & Yup and I consumed a dummy products' API which I used through out the website. I collaborated with a skilled backend developer to build this web application using a combination of React.js, HTML, CSS, Redux Toolkit and REST APIs.",
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
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: avidmallthumb,
    // video: avidmall,
    source_code_link: "https://github.com/Dr-HaEgHo/avid-store",
    live_link: "https://avid-store.vercel.app/",
  },
  {
    number: "06",
    name: "Todo App",
    description:
      "A simple to-do app to handle daily tasks. All the data are handles in the local storage and all the data were made accessible within components through the use of props. I used ReactJs to build this along with CSS and conditional style rendering with JSX styling, to style the app.",
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
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: avidtodo,
    // video: avidmall,
    source_code_link: "https://github.com/Dr-HaEgHo/avid-todo",
    live_link: "https://avid-todo.vercel.app/",
  },
  {
    number: "07",
    name: "Admin App",
    description:
      "Admin panel for tracking statistics of a company's employees and clients, And a small store to display the company's products. This was achieved with the use of Reactjs, Css, MUI styling for the layout and styling. Consumed data from a dummy API to which a request was made using Axios. Implemented a dynamic data chart with the use of Recharts. Routing with react router dom.",
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
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: avidadmin,
    // video: avidmall,
    source_code_link: "https://github.com/Dr-HaEgHo/admin-panel",
    live_link: "https://admin-panel-lyart.vercel.app/",
  },
  {
    number: "08",
    name: "41-Eatery",
    description:
      "A simple single page application (SPA) that displays all the dishes available. Navigate through routes using React router dom, Consumed data from an API server which was requested using react fetch. Simple search feature on the products page, to get a new filtered array of products. Site built with React Js and JavaScript.",
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
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: eatery,
    // video: avidmall,
    source_code_link: "https://github.com/Dr-HaEgHo/41-Eatery",
    live_link: "https://41-eatery.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects, skills };
