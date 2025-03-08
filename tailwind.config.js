import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "320px",
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "1920px",
      },
      spacing: {
        // change 863 to whatever half of the max content width you want for wide screens is
        contained: "calc(50vw - 863px)",
        // fullheight: "calc(var(--vh, 1vh) * 100)", // --vh var set on html tag by setDocHeight() in app.js
        gutter: "5vw",
      },
    },
  },
  plugins: [],
});
