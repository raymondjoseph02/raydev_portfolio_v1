import smart_filing_image from "./../assets/images/social-graph.png";
import pay4me from "../assets/images/Pay4me Cover.png";
import audio_phile from "./../assets/images/audiophile.png";
import scaper_walkers from "./../assets/images/scape-walkers.png";
export const projects = [
  {
    id: 1,
    title: "Audiophile",
    imageUrl: audio_phile,

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam repellat vel assumenda alias nobis veniam totam architecto ratione autem, aliquid quae qui illo dolores quam nisi odio amet obcaecati.",
    techStack: ["html", "sass", "javascript"],
    links: {
      githubLink: "https://github.com/raymondjoseph02/audio-phile",
      liveLink: "https://rayaudio-phile.netlify.app/",
    },
  },
  {
    id: 2,
    title: "Smart filing",
    imageUrl: smart_filing_image,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam repellat vel assumenda alias nobis veniam totam architecto ratione autem, aliquid quae qui illo dolores quam nisi odio amet obcaecati.",
    techStack: ["react", "tailwind", "javascript", "fomik", "Google Recaptcha"],
    links: {
      githubLink: "private",
      liveLink: "https://smartfiling.com/",
    },
  },

  {
    id: 3,
    title: "scaper walkers",
    imageUrl: scaper_walkers,

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam repellat vel assumenda alias nobis veniam totam architecto ratione autem, aliquid quae qui illo dolores quam nisi odio amet obcaecati.",
    techStack: ["react", "tailwind", "typescript", "framer motion"],
    links: {
      githubLink: "https://github.com/raymondjoseph02/scapewalkers",
      liveLink: "https://www.scapewalkers.com/",
    },
  },
  {
    id: 4,
    title: "Pay4me Dashboard",
    imageUrl: pay4me,

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam repellat vel assumenda alias nobis veniam totam architecto ratione autem, aliquid quae qui illo dolores quam nisi odio amet obcaecati.",
    techStack: ["react", "tailwind", "typescript", "framer motion"],
    links: {
      githubLink: "https://github.com/raymondjoseph02/pay4me",
      liveLink: "Pay4me.netify.app",
    },
  },
];
