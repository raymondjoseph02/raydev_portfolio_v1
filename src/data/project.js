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
      "Built an e-commerce platform focused on high-end audio products. Developed responsive pages for product listings and details using JavaScript and Firebase for data management. Implemented features like user authentication and dynamic cart functionality to enhance the user shopping experience.",
    techStack: ["html", "sass", "javascript", "Firebase"],
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
      "Redesigned and developed the Landing, Contact Us, Login/Sign-Up, and Terms & Conditions pages for Smart Filing. Focused on creating clean, responsive, and user-friendly interfaces using React, Tailwind CSS, and JavaScript, resulting in a modernized and cohesive user experience.",
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
      "Designed and developed a responsive landing page from scratch without any prior design reference. Focused on clean UI, intuitive layout, and optimized performance using React, Tailwind CSS, and Framer Motion for smooth interactions.",
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
      "A visually polished single-page website crafted to showcase refined attention to detail, modern aesthetics, and seamless user experience. This project demonstrates precision in layout, typography, and responsive design, with a focus on clean UI and subtle interactions. Built with React, Tailwind CSS, and Framer Motion to highlight smooth transitions and engaging visual appeal.",
    techStack: ["react", "tailwind", "typescript", "framer motion"],
    links: {
      githubLink: "https://github.com/raymondjoseph02/pay4me",
      liveLink: "Pay4me.netify.app",
    },
  },
];
