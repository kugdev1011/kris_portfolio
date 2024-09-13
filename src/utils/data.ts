import { About, Project, Skill } from "../App.props"
import { githubProfile } from "./constants"

export const skillData: Skill[] = [
  { name: "HTML", imgURL: "/icons_html.svg" },
  { name: "CSS", imgURL: "/icons_css.svg" },
  { name: "Tailwind", imgURL: "/icons_tailwind.svg" },
  { name: "Javascript", imgURL: "/icons_js.svg" },
  { name: "Typescript", imgURL: "/icons-typescript.svg" },
  { name: "Python", imgURL: "/icons_python.svg" },
  { name: "Diango", imgURL: "/icons_diango.svg" },
  { name: "Nodejs", imgURL: "/icons_nodejs.svg" },
  { name: "React", imgURL: "/logos_react.svg" },
  { name: "Angular", imgURL: "/icons_angular.svg" },
  { name: "Next.js", imgURL: "/logo_next.svg" },
  { name: "Material UI", imgURL: "/logo_mui.svg" },
  { name: "Bootstrap", imgURL: "/logos_bootstrap.svg" },
  { name: "React Query", imgURL: "/react-query.svg" },
  { name: "MySQL", imgURL: "/icons_mysql.svg" },
  { name: "MongoDB", imgURL: "/icons_mongodb.svg" },
  { name: "Axios", imgURL: "/axios-logo.png" },
  { name: "Apache Echarts", imgURL: "/echarts-logo.svg" },
  { name: "Git", imgURL: "/logos_git.svg" },
  { name: "Jira", imgURL: "/icons_jira.svg" },
]

export const projectData: Project[] = [
  {
    name: "Portfolio Website",
    description:
      "This is my personal portfolio website which features some of my github projects as well. It is fully responsive & user friendly website, also it supports both dark mode and light mode.",
    projectURL: "https://nilkanthpatadiya.vercel.app/",
    githubURL: `${githubProfile}/My-Portfolio`,
    imgURL: "/portfolio.png",
  },
  {
    name: "Pokédex",
    description:
      "A pokedex website that allows users to search and view information about various Pokémon characters. A fuzzy search feature is present on the home page. User can view more details by clicking on the particular pokémon.",
    projectURL: "https://my-pokedex-nilkanth.vercel.app/",
    githubURL: `${githubProfile}/my-pokedex`,
    imgURL: "/pokedex.png",
  },
  {
    name: "Pizzeria",
    description:
      "Pizzeria is a MEAN Stack web application, where users order pizza online. Users can choose from the existing menu and order pizzas, also they can also customize their pizza by choosing ingredients.",
    projectURL: "",
    githubURL: `${githubProfile}/Pizzeria`,
    imgURL: "pizzeria.jpg",
  },
]

export const experience = (
  (new Date().getTime() - new Date("2016-12-04").getTime()) /
  (1000 * 60 * 60 * 24 * 365.25)
).toLocaleString("en", {
  maximumFractionDigits: 2,

  style: "unit",
  unit: "year",
  unitDisplay: "long",
})

export const aboutData: About = {
  badges: [
    {
      imgURL: "/aws-certified-cloud-practitioner.png",
      badgeURL:
        "https://www.credly.com/badges/41330447-cc91-4cab-b2ce-82d29552d72f/public_url",
    },
    {
      imgURL: "/microsoft-certified-power-platform-fundamentals.png",
      badgeURL:
        "https://www.credly.com/badges/1cb3e5da-1a8a-4c9a-81d0-aeb9b2a473f5/public_url",
    },
  ],
  education: {
    title: "Bachelor Of Engineering in Computer Engineering",
    grade: "9.0 CGPA",
    subtitle: "From Asia Pacific University of Technology and Innovation (APU), Kuala Lumpur",
  },
}
