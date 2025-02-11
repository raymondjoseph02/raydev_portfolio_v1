import { useRefContext } from "../context/RefContext";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { projectRef } = useRefContext();

  return (
    <section ref={projectRef}>
      <div className="flex flex-col justify-center items-center gap-20">
        <h3 className="text-[1.87rem] md:text-[2.18rem] font-extrabold leading-[35.7px] bg-gradient-to-b from-[#FF8660] from-[0%] to-[#D5491D]  bg-clip-text text-transparent uppercase">
          Projects
        </h3>
        <div className="grid grid-cols-1 gap-y-8 lg:gap-8 lg:grid-cols-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
