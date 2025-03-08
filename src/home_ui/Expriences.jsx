import Company from "./Company";
import google_logo from "../assets/images/google-logo.png";
import defifundr_logo from "../assets/images/defifundr.png";
import smartFiling_logo from "../assets/images/mobile-logo.png";
import { useRefContext } from "../context/RefContext";
const companies = [
  {
    position: "Front-End Developer Intern at Keeb",
    duration: "October 2024 - Present",
    logo: google_logo, // Replace with actual logo variable
    description:
      "Assisted in building and optimizing responsive web applications using React, TypeScript, and Tailwind CSS. Collaborated with an experienced developer to integrate APIs, debug issues, and improve performance. Gained hands-on experience in real-world problem-solving and best practices in front-end development.",
  },
  {
    position: "Frontend Developer at Defifundr (Open Source)",
    duration: "February 2025 - March 2025",
    logo: defifundr_logo, // Replace with actual logo variable
    description:
      "Built and optimized responsive websites using HTML, Tailwind CSS, and TypeScript. Worked closely with senior developers to deliver user-friendly interfaces and improve UX design.",
  },
  {
    position: "Frontend Developer at Smart Filing (Contract)",
    duration: "October 2024 - November 2024",
    logo: smartFiling_logo, // Replace with actual logo variable
    description:
      "Built and optimized responsive websites using React, Tailwind, and JavaScript. Collaborated with senior back-end developers to integrate APIs into front-end applications using Axios to ensure dynamic content updates.",
  },
];
function Expriences() {
  const { experienceRef } = useRefContext();

  return (
    <section ref={experienceRef} className="py-20">
      <div className="flex flex-col md:items-center gap-14">
        <h3 className="text-[1.8rem] md:text-[2.18rem] font-extrabold leading-[35.7px] bg-gradient-to-b from-[#5BADFF] from-[0%] to-[#1373D1]  bg-clip-text text-transparent uppercase">
          Experience
        </h3>
        <div className="flex flex-col w-full gap-12">
          {companies.map((company, i) => (
            <Company
              key={i}
              position={company.position}
              logo={company.logo}
              duration={company.duration}
              description={company.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expriences;
