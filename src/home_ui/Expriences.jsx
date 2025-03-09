import Company from "./Company";
import { companies } from "../data/companies";
import { useRefContext } from "../context/RefContext";

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
