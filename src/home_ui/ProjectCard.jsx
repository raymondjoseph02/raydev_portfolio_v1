import pay4me_cover from "../assets/images/Pay4me Cover.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import PropTypes from "prop-types";

const ProjectCard = ({
  title,
  description,
  techStack, // Uncommented this prop
  liveLink,
  githubLink,
  links,
  id,
}) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end center"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scaleX, transformOrigin: "center", top: `${90 * id}px` }}
      className="bg-[#2A2A2A] rounded-[18px] grid grid-cols-1 md:grid-cols-2 overflow-hidden md:sticky  shadow-[rgba(0,0,0,0.2)_0px_-60px_40px_-7px] "
    >
      <div className="basis-1/2">
        <img
          src={pay4me_cover}
          alt="Pay4Me Cover"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="px-4 md:px-8 py-10 basis-1/2 space-y-10">
        <div className="space-y-6">
          <h4 className="sm:text-2xl lg:text-3xl sm:font-semibold lg:font-bold text-white">
            {title}
          </h4>
          <p className="text-base sm:text-lg text-[#ffffff70]">{description}</p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold  text-[#dcd5d5]">
            Technologies used
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-6">
            {techStack.map((tech) => (
              <p
                key={tech} // Better to use the actual value as key if possible
                className="py-2 px-4 text-white rounded-md bg-[#ffffff12] shadow-md capitalize "
              >
                {tech}
              </p>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap  pt-6">
            {links.liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm lg:text-base flex gap-3 text-[#000000] bg-[#ffffff] px-2.5 py-1.5 rounded-md hover:bg-[#ffffffa1] group cursor-pointer transition-colors ease-in-out duration-100 w-full  justify-center md:w-fit"
              >
                <CiGlobe className="size-5 " />
                <span>View on Web</span>
              </a>
            )}
            {links.githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 text-[#000000] bg-[#ffffff] px-2.5 py-1.5 rounded-md hover:bg-[#ffffffa1] group cursor-pointer transition-colors ease-in-out duration-100 w-full justify-center md:w-fit"
              >
                <FaGithub className="size-5 " />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  techStack: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,
};

export default ProjectCard;
