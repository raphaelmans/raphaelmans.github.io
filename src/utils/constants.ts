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
    company: "Outliant",
    start: "June 2022",
    end: "November 2022",
    title: "React Full Stack Developer",
    experiences: [
      "Developed and maintained web applications ranging from admin panels to community forums.",
      "The first project I developed was a wellness admin panel integrated with Algolia powered search.",
      "A music copyright contract generator web app was the second and most complex project that I have worked on. I was mainly involved in bug fixing and adding new features.",
      "The last project I worked on was a social media web app that mainly focused on generating new ideas for established brands. This project enabled me to experience integrating GraphQL APIs.",
    ],
  },
  {
    company: "Vibravid",
    start: "June 2021",
    end: "March 2022",
    title: "Junior Software Engineer",
    experiences: [
      "Handled web app bugs and user interface enhancements. Also implemented various APIs",
      "Integrated blockchain libraries for the web app’s cryptocurrency transactions.",
      "Developed a crypto telegram bot that enabled its users to easily transact Syscoin through chat.",
      "Utilized AngularJs, NodeJs, Web3Js, ExpressJs, Prisma, PlanetScale, MongoDB, and Docker.",
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
