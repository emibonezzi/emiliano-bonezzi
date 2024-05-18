import { Icon } from "@iconify/react/dist/iconify.js";
import { FaGithub } from "react-icons/fa";

export const projects = [
  {
    id: 99,
    name: "New Work State",
    thumbnail: "/src/assets/guess_the_player2.mov",
    description:
      "Developed a full stack web application consisting of a serverless backend and a user-friendly frontend. The backend, built with Express.js and deployed on AWS Lambda, scrapes job listings from the New York State jobs website using Puppeteer and serves them through a REST API. The frontend, created with React, TypeScript, Chakra UI, React Query, and React Router, provides a responsive interface for users to explore job listings. Implemented advanced features such as query-based job searching and  integration with the backend API.",
    stack: ["Chakra UI", "React", "Typescript", "Puppeteer", "AWS Lambda"],
    links: [
      {
        icon: <Icon icon="mdi:external-link" />,
        title: "Live DEMO",
        url: "https://newworkstate-fe.vercel.app",
      },
      {
        icon: <Icon icon="mdi:github" />,
        title: "GitHub Repository",
        url: "https://github.com/emibonezzi/newworkstate-be",
      },
    ],
  },
  {
    id: 1,
    name: "Guess The Player",
    thumbnail: "/src/assets/guess_the_player2.mov",
    description:
      "Developed an interactive guessing game and integrated advanced game mechanics such as player randomization, score tracking, and a hint system. Enhanced functionality with React's hooks and context for state management, ensuring optimal performance and maintainability through type-safe coding practices and efficient data flow.",

    stack: ["Chakra UI", "React", "Typescript"],
    links: [
      {
        icon: <Icon icon="mdi:external-link" />,
        title: "Live DEMO",
        url: "https://guess-the-player-nine.vercel.app/",
      },
      {
        icon: <Icon icon="mdi:github" />,
        title: "GitHub Repository",
        url: "https://github.com/emibonezzi/guess-the-player",
      },
    ],
  },
  {
    id: 2,
    name: "Osteria Del Caccetta",
    thumbnail: "/src/assets/vederci_bene.mov",
    description:
      "Complete redesign of a Wordpress website, tailoring the site’s aesthetics and functionality to meet user preferences and enhance user engagement. This project required knowledge of PHP to customize backend functionalities and in CSS for responsive and visually appealing front-end designs. The redesign also involved improving SEO practices and ensuring the blog's compatibility across different browsers and devices.",
    stack: ["CSS", "Wordpress", "PHP"],
    links: [
      {
        icon: <Icon icon="mdi:external-link" />,
        title: "Live DEMO",
        url: "https://osteriadelcaccetta.it/",
      },
    ],
  },
  {
    id: 3,
    name: "Vederci Bene",
    thumbnail: "/src/assets/weather_app.mov",
    description:
      "I recently restyled a WordPress blog to better meet customer needs and ensure a more engaging layout. I revamped the design for improved navigation and readability, customized functionalities, and optimized the blog for responsiveness across all devices.",
    stack: ["CSS", "Wordpress", "PHP"],
    links: [
      {
        icon: <Icon icon="mdi:external-link" />,
        title: "Live DEMO",
        url: "https://www.vedercibene.com",
      },
    ],
  },
  {
    id: 3,
    name: "Weather App",
    thumbnail: "/src/assets/weather_app.mov",
    description:
      "Developed an experimental minimal weather app using React and TypeScript, leveraging OpenWeatherMap and IP Geo Location APIs for dynamic weather data retrieval, and utilized React hooks for robust state management and asynchronous operations.",
    stack: ["CSS", "React", "Typescript"],
    links: [
      {
        icon: <Icon icon="mdi:external-link" />,
        title: "Live DEMO",
        url: "https://weather-onscroll.vercel.app/",
      },
      {
        icon: <FaGithub />,
        title: "GitHub Repository",
        url: "https://github.com/emibonezzi/weather-onscroll",
      },
    ],
  },
];
