import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Link from "@mui/material/Link"
import { CommonProps } from "../App.props"
import { BlueSpan } from "../styles/styledComponents"
import { aboutData, experience } from "../utils/data"
import SchoolIcon from "@mui/icons-material/School"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import { Player } from "@lottiefiles/react-lottie-player"
import { Variants, m } from "framer-motion"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Theme } from "@mui/material/styles"

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = ({ secHeight, navID }: CommonProps) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  )
  let variants: Variants = isSmallScreen
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, x: 50 },
        whileInView: {
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        },
      }

  return (
    <section id={navID}>
      <Typography variant="h4" textAlign={"center"}>
            <BlueSpan>Experience</BlueSpan>
          </Typography>
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <h1>Senior Front-End Developer( 2020 – 2024)</h1>
            <h3>XO IT Services, Canada : remote</h3>
            ● Led development team of 5 persons to create homepages, which allows all new and existing customers to have their repositories hosted.
            <br></br>● Implemented AWS to allow easy iteration in company cloud infrastructure.
            <br></br>● Created new documentation for MaterialUI that prevented the need for a 3-week onboarding course.
            <br></br>● Mentored 8 new junior front-end developers on team in expanding JavaScript, React, and Angular skillset.
            <br></br>● Worked with PM/IM to keep on track with the project plan, timeline, and billing. On average, this saved 4 days of communication per project.
            <br></br>● Led bi-weekly stand-up to ensure team worked effectively, using coaching strategies to increase efficiency by 10%.
            <br></br>● Worked with Quality Assurance to get new pages/products tested, and addressed any issues within 48 hours.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent align="left">
        <h1>Front-End Developer Intern( 2018 – 2020 )</h1>
            <h3>Roweb Development, Canada : hybird</h3>
            ● Participated in the initial wave of developers learning and implementing the React.JS library.
            <br></br>● Rewrote HTML to meet industry and company standards for SEO and Accessibility. This drove a 600% increase in users by appearing on the first page of Google search results.
            <br></br>● Tested, debugged, and shipped 10s of 1000s of lines of code to various development teams. This lead to 100% bug-free deployment.
            <br></br>● Introduced Kanban Board style ticketing system to promote highly efficient asynchronous and synchronous work, increasing efficiency by 12%.
            <br></br>● Utilized HTML, CSS, and JavaScript to create 100+ responsive landing pages for both company and client.
            <br></br>● Maintained graphic standards and branding throughout the product’s interfaces.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <h1>Junior Front-End Developer( 2017 – 2018 )</h1>
            <h3>CHES Special Risk Inc., Canada : remote</h3>
            ● Assisted the development team in maintaining 8 websites.
            <br></br>● Implemented front-end technical solutions to meet project requirements for creation of 5 new web pages.
            <br></br> ● Ensured 6 unique projects complied with correct technology processes, industry best practices, and company standards.
            <br></br>● Conducted research and assisted with new business scoping efforts, resulting in the acquisition of 4 clients.
            <br></br>● Partnered with 2 designer teams to take client wireframes from conception to implementation.
            <br></br>● Worked in an Agile, collaborative environment to receive design requirements, peer program, and test applications.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
        <h1>Entry-level Front-end Developer( 2016 - 2017 )</h1>
            <h3>Infinite Code, Malaysia : on site</h3>
            ● Developed responsive UI using HTML, CSS, and JavaScript
            <br></br>● Implemented wireframes and mockups with UX designers
            <br></br>● Optimized web pages for maximum speed and scalability
            <br></br>● Debugged and resolved cross-browser compatibility issues
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </section>
  )
}

export default Experience
