import { Icon } from "@iconify/react/dist/iconify.js";
import { FaGithub } from "react-icons/fa";

export const projects = [
  {
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
