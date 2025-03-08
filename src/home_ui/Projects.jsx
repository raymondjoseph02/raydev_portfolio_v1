import { useRefContext } from "../context/RefContext";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/project";
import { FaArrowRight } from "react-icons/fa6";

const Projects = () => {
  const { projectRef } = useRefContext();

  return (
    <section ref={projectRef}>
      <div className="flex flex-col justify-center items-center gap-20">
        <div className="flex justify-between items-start gap-6 w-full flex-col sm:flex-row">
          <h3 className="text-[.87rem] md:text-[1.92rem] font-extrabold leading-[35.7px] bg-gradient-to-b from-[#FF8660] from-[0%] to-[#D5491D]  bg-clip-text text-transparent uppercase">
            Selected Projects{" "}
          </h3>
          <a
            target="_blank"
            href="https://github.com/raymondjoseph02?tab=repositories"
            className="text-green-300 nova_cut text-base font-bold cursor-pointer flex items-center justify-center gap-1.5 view_more_link"
          >
            <span> view more on github</span>
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-y-8 ">
          {projects.map((project, i) => (
            <ProjectCard {...project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
