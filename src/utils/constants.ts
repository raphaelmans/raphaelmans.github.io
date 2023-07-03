import type PageLink from "types/page-link";
import type SNS from "types/sns";
import type WorkExperience from "types/work-experience";

export const pageLinks: PageLink[] = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  // {
  //   title: "Work",
  //   link: "#work",
  // },
  // {
  //   title: "Contact",
  //   link: "#contact",
  // },
];

export const technologies = [
  "JavaScript (ES6+)",
  "Typescript",
  "ReactJs",
  "NodeJs",
  "NextJs",
  "AstroJs",
  "Flutter",
  "Solidity",
];

export const RESUME_LINK =
  "https://drive.google.com/file/d/1nTqkgmgSekWSMeMqqzTgsyV8D2UTOjVg/view?usp=share_link";

export const SNSList: SNS[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raphaelmansueto/",
  },
  {
    name: "Github",
    link: "https://github.com/raphaelmans",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/dev4names",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    company: "ReconnectIQ",
    start: "February 2022",
    end: "June 2023",
    title: "Software Engineer",
    experiences: [
      "Led the development of the entire front-end web application for ReconnectIQ which is a web app designed to safeguard and manage individuals' networks with multiple Gmail accounts, preserving relationships and offering practical functionalities for effective network management.",
    ],
  },
  {
    company: "Outliant",
    start: "June 2022",
    end: "November 2022",
    title: "React Full Stack Developer",
    experiences: [
      `Developed and made significant contributions to the creation of "Chaos," a social media web app designed to facilitate brainstorming sessions and idea generation among users.`,
      "Assisted in various other web app projects, including the development of admin panels and a music contract generator.",
    ],
  },
  {
    company: "Vibravid",
    start: "June 2021",
    end: "March 2022",
    title: "Junior Software Engineer",
    experiences: [
      "Improved web app bugs and resolved user interface.",
      "Integrated multiple APIs into the web app.",
      "Implemented blockchain libraries for cryptocurrency transactions.",
      "Developed a crypto telegram bot for seamless Syscoin transactions.",
    ],
  },
  {
    company: "HatchIt Solutions",
    start: "April 2021",
    end: "June 2021",
    title: "Web Developer Intern",
    experiences: [
      "Made the company’s internal announcement management system that utilized email and text messaging blast services.",
      "Used ReactJs, Material UI, and Redux in developing the web app.",
    ],
  },
  {
    company: "Freelancer",
    start: "July 2020",
    end: "Present",
    title: "Software Developer",
    experiences: [
      "Made automation testing for Intelliriver Horizon mobile app utilizing Java, Appium, and TestNG. (July, 2020)",
      "Developed an NFT-based anagram word game using NextJs, NestJs, TypeORM, and Solidity.(November 2022)",
    ],
  },
];
