import { FaArrowRight } from "react-icons/fa";
import pay4me_cover from "../assets/images/Pay4me Cover.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const ProjectCard = () => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end center"], // Adjusts animation trigger points
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.89]); // Smooth scaling

  useEffect(() => {
    console.log(scrollYProgress.current);
  }, [scrollYProgress.current]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scaleX, transformOrigin: "center" }}
      className="bg-[#2A2A2A] rounded-[18px] overflow-hidden "
    >
      <div>
        <img src={pay4me_cover} alt="Pay4Me Cover" />
      </div>
      <div className="px-6 py-3 flex justify-between items-center hover:bg-gradient-to-r group from-[#ad00fe] to-[#00e0ee] transition-colors ease-linear duration-500 cursor-pointer ">
        <div>
          <p className="text-[#C5C5C5] text-[0.6rem] leading-[19px]">
            CLICK HERE TO VISIT
          </p>
          <p className="text-[#FFFFFF] text-[1.18rem] font-extrabold uppercase leading-[20px]">
            pay4me dashboard
          </p>
        </div>
        <div>
          <FaArrowRight className="text-white -rotate-45 group-hover:rotate-[5deg] transition-transform ease-linear duration-100" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
