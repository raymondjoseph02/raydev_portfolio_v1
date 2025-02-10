import Company from "./Company";
import google_logo from "../assets/images/google-logo.png";
const companies = [
  {
    position: "Lead Software Engineer at Google",
    duration: "Nov 2019 - Present",
    logo: google_logo,
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&39;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    position: "Lead Software Engineer at Google",
    duration: "Nov 2019 - Oct 2023",
    logo: google_logo,
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&39;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
];
function Expriences() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center gap-14">
        <h3 className="text-[1.8rem] md:text-[2.18rem] font-extrabold leading-[35.7px] bg-gradient-to-b from-[#5BADFF] from-[0%] to-[#1373D1]  bg-clip-text text-transparent uppercase">
          Experience
        </h3>
        <div className="w-full flex flex-col gap-12">
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
