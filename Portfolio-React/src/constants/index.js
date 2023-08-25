import {
  LandingPage1,
  CoffeeHaus,
  Dotty,
  microverse,
  coverhunt,
  kelhel,
  Therm,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Claystone Tech",
    icon: coverhunt,
    iconBg: "#333333",
    date: "April 2023 - August 2023",
  },
  {
    title: "Software Developer",
    company_name: "Thermcity",
    icon: microverse,
    iconBg: "#333333",
    date: "Jun 2023 - August 2023",
  },
  {
    title: "Full Stack Web Developer",
    company_name: "CodSoft",
    icon: kelhel,
    iconBg: "#333333",
    date: "August 2023 - Sept 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "The SquadServices",
    description: "A landing Page for a tech startup",
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
    image: LandingPage1,
    demo: "https://thesquadservices.com/",
  },
  {
    id: "project-2",
    name: "Company Database",
    description:
      "A CRUD webapp to handle a database holding name and contact information of various companies using React and Firebase",
    tags: [
      {
        name: "firebase",
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
    image: Therm,
    demo: "https://github.com/MZYXPLX/ReactProjects.git",
  },
  {
    id: "project-3",
    name: "CoffeeHaus",
    description: "A Self Ordering kiosk for a small cafe",
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
    image: CoffeeHaus,
  },
  {
    id: "project-4",
    name: "Dotty",
    description: "A connect the dots candy crush inspired android game",
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
    image: Dotty,
  },
];

export { experiences, projects };
