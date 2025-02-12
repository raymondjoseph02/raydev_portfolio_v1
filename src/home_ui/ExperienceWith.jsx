import { FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFramerLogoFill } from "react-icons/pi";
import { SiTypescript } from "react-icons/si";
import { useState } from "react";
import { motion } from "framer-motion";
const ExperienceWith = () => {
  const [isHoverTool, setIsHoverTool] = useState();
  const [isActive, setIsActive] = useState(false);
  const handleOnHover = (name) => {
    setIsHoverTool(name);
    setIsActive(true);
  };
  const handleOnMouseLeave = () => {
    setIsActive(false);
  };
  const tools = [
    {
      name: "javascript",
      icon: (
        <FaJs className="text-[#90908F] size-[2.93rem] md:size-[3rem] hover:text-[#F0DB4F] rounded-md transition-colors ease-in-out duration-150 cursor-pointer" />
      ),
    },
    {
      name: "React",
      icon: (
        <FaReact className="text-[#90908F] size-[2.93rem] md:size-[3rem] hover:text-[#61DBFB] rounded-md transition-colors ease-in-out duration-150 cursor-pointer" />
      ),
    },
    {
      name: "Node",
      icon: (
        <FaNode className="text-[#90908F] size-[2.93rem] md:size-[3rem] hover:text-[#68A063] rounded-md transition-colors ease-in-out duration-150 cursor-pointer" />
      ),
    },
    {
      name: "Html",
      icon: (
        <FaHtml5 className="text-[#90908F] size-[2.93rem] md:size-[3rem] hover:text-[#e34c26] rounded-md transition-colors ease-in-out duration-150 cursor-pointer" />
      ),
    },

    {
      name: "Tailwind css",
      icon: (
        <RiTailwindCssFill className="text-[#90908F] size-[2.93rem] md:size-[3rem] hover:text-[#06b6d4] rounded-md transition-colors ease-in-out duration-150 cursor-pointer" />
      ),
    },
    {
      name: "Framer Motion",
      icon: (
        <PiFramerLogoFill className="text-[#90908F] size-[2.93rem] md:size-[3rem] hover:text-[#F0DB4F] rounded-md transition-colors ease-in-out duration-150 cursor-pointer" />
      ),
    },
    {
      name: "Typescript",
      icon: (
        <SiTypescript className="text-[#90908F] size-[2.93rem] md:size-[3rem] hover:text-[#007acc] rounded-md transition-colors ease-in-out duration-150 cursor-pointer" />
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="h-7  overflow-hidden relative w-full text-center">
        <motion.h3
          initial={{ y: 0 }}
          animate={isActive ? { y: -50 } : { y: 0 }}
          transition={{ type: "spring", damping: 9 }}
          className=" text-lg md:text-xl text-[#C5C5C5] font-semibold tracking-[12%] absolute inset-0 "
        >
          EXPERIENCE WITH
        </motion.h3>
        <motion.h3
          initial={{ y: 50 }}
          animate={isActive ? { y: 0 } : { y: 50 }}
          transition={{ type: "spring", damping: 9 }}
          className={` text-lg md:text-xl nova_cut ${
            isHoverTool === "javascript"
              ? "text-[#F0DB4F]"
              : isHoverTool === "React"
              ? "text-[#61DBFB]"
              : isHoverTool === "Node"
              ? "text-[#68A063]"
              : isHoverTool === "Html"
              ? "text-[#e34c26]"
              : isHoverTool === "Tailwind css"
              ? "text-[#06b6d4]"
              : isHoverTool === "Framer motion"
              ? "text-[#F0DB4F]"
              : "text-[#007acc]"
          } font-semibold tracking-[12%] absolute inset-0  uppercase`}
        >
          {isHoverTool}
        </motion.h3>
      </div>
      <div className="flex gap-5 md:gap-12 lg:gap-16 flex-wrap items-center justify-center">
        {tools.map((tool, i) => (
          <div
            onMouseEnter={() => handleOnHover(tool.name)}
            onMouseLeave={handleOnMouseLeave}
            key={i}
            className="flex flex-col items-center justify-center"
          >
            {tool.icon}
            <p className="text-[#ffffff] capitalize">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceWith;
