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
  { name: "PHP", imgURL: "/icons_php.svg" },
  { name: "React", imgURL: "/logos_react.svg" },
  { name: "Angular", imgURL: "/icons_angular.svg" },
  { name: "Next.js", imgURL: "/logo_next.svg" },
  { name: "Laravel", imgURL: "/icons_laravel.svg" },
  { name: "CodeIgniter", imgURL: "/icons_codeigniter.svg" },
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
    projectURL: "https://krisdan.vercel.app/",
    githubURL: `${githubProfile}/kris_portfolio`,
    imgURL: "/portfolio.png",
  },
  {
    name: "TinnitusHelp",
    description:
      "Built with Next.js, TypeScript, and Material UI, this blogs features in-depth articles, tips, and advice to better understand and manage tinnitus. The blog site is responsive, ensuring seamless navigation on all devices.",
    projectURL: "https://www.tinnitushelp.me/",
    githubURL: `${githubProfile}/blog-of-tinnitus`,
    imgURL: "/tinnitus.png",
  },
  {
    name: "Ogno",
    description:
      "Ogno is marketing dashboard that is developed by React, Strapi.js. Built overview, Summary, Analytics, Campaigns, Users, Chat, Calendar, Videocall, Board, Files and Profile.",
    projectURL: "https://ogno.netlify.app/analytics",
    githubURL: `${githubProfile}/ogno`,
    imgURL: "ogno.png",
  },
  {
    name: "AmazeTalk",
    description:
      "Amazetalk is a real-time chat web app built with the MERN stack and Socket.IO, providing users with an intuitive platform for instant messaging using modern web technologies",
    projectURL: "https://amaze-talk.web.app/",
    githubURL: `${githubProfile}/AmazeTalk`,
    imgURL: "amazetalk.png",
  },
  {
    name: "Resumebuilder",
    description:
      "Web based editor to create Resume in a customizable template with the facility to save the file in .pdf formate.",
    projectURL: "https://krisdan.github.io/Resume-Builder/",
    githubURL: `${githubProfile}/Resumebuilder`,
    imgURL: "resumebuilder.png",
  },
  {
    name: "NewsMagier",
    description:
      "A news web application developed using React.js and hooks, integrated with the New York Times API for real-time news updates",
    projectURL: "https://newsmagier.web.app/",
    githubURL: `${githubProfile}/News-Magier`,
    imgURL: "newsmagier.png",
  },
]

export const experience = (
  (new Date().getTime() - new Date("2016-12-04").getTime()) /
  (1000 * 60 * 60 * 24 * 365.25)
).toLocaleString("en", {
  maximumFractionDigits: 1,

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
