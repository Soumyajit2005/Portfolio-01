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
  c,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "c",
    icon: c,
  },
];

const experiences = [
  {
    title: "Programming skills",
    company_name: "Web Developer",
    icon: web,
    iconBg: "#383E56",
    date: "January 2020 - Present",
    points: [
      "Programming languages: I am proficient in Python, Java, and C++. I have experience with a variety of other programming languages, including JavaScript, PHP, and Ruby.",
      "Data structures and algorithms: I am familiar with a variety of data structures and algorithms. I have used these data structures and algorithms to solve a variety of problems in my projects.",
      "Software development principles: I am familiar with a number of software development principles, such as the Agile Manifesto and the Clean Code principles. I have applied these principles to my projects to create high-quality software.",
      "Version control systems: I am familiar with Git and GitHub. I have used these version control systems to manage my code and to collaborate with others on projects.",
      "Testing: I am familiar with a variety of testing techniques, such as unit testing, integration testing, and system testing. I have used these testing techniques to ensure the quality of my projects.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Web Developer",
    icon: web,
    iconBg: "#383E56",
    date: "January 2020 - Present",
    points: [
      "HTML: I am proficient in HTML and I have a strong understanding of the HTML5 standard. I am able to use HTML to create well-structured and semantic web pages.",
      "CSS: I am proficient in CSS and I have a strong understanding of CSS3. I am able to use CSS to style web pages in a way that is both visually appealing and user-friendly.",
      "JavaScript: I am proficient in JavaScript and I have a strong understanding of the ES6 standard. I am able to use JavaScript to add interactivity to web pages.",
      "Front-end frameworks: I am familiar with a number of front-end frameworks, including React, Angular, and Vue.js. I have used these frameworks to create complex web pages with minimal code.",
      "Web design principles: I have a strong understanding of web design principles and I am able to apply these principles to create visually appealing and user-friendly web pages.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - Present",
    points: [
      "Programming languages: I am proficient in Python, Java, and C#. I have experience with a variety of other programming languages, including JavaScript, PHP, and Ruby.",
      "Web frameworks: I am familiar with Django, Flask, and Spring Boot. I have used these web frameworks to create complex web applications.",
      "APIs: I am familiar with a variety of APIs, including the Google Maps API and the Twitter API. I have used these APIs to integrate with other services in my projects.",
      "Cloud computing: I am familiar with AWS and Azure. I have used these cloud computing platforms to deploy and manage my projects.",
      "Cloud computing: I am familiar with AWS and Azure. I have used these cloud computing platforms to deploy and manage my projects.",
      "DevOps: I am familiar with the DevOps tools and techniques, such as Jenkins and Docker. I have used these tools to automate the deployment and management of my projects.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
