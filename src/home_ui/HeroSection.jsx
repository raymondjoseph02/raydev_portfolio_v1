import PrimaryBtn from "../global_ui/buttons/PrimaryBtn";
import ExperienceWith from "./ExperienceWith";
import { useMousePosition } from "../utils/useMousePosition";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
const HeroSection = () => {
  const [isHover, setIsHover] = useState(false);
  const maskRef = useRef(HTMLParagraphElement);
  const maskSize = isHover ? 200 : 40;
  const { x, y } = useMousePosition(maskRef);

  return (
    <section className="pt-72  pb-40">
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex justify-center flex-col items-center gap-10">
          <div className="flex flex-col items-center justify-center gap-5  lg:w-[67ch]">
            <div className="size-28 rounded-full bg-orange-400">
              <img src="" alt="" />
            </div>
            <h1 className="lg:text-[3.43rem] text-3xl font-extrabold md:text-[2.43rem] md:font-bold lg:font-extrabold text-white text-center leading-normal">
              I do code and make content{" "}
              <span className="bg-gradient-to-r  from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
                about it!
              </span>
            </h1>
            <div className="relative">
              <p className="text-[#C5C5C5] text-base md:text-lg font-light text-center">
                I am a seasoned full-stack software engineer with over 8 years
                of professional experience, specializing in backend development.
                My expertise lies in crafting robust and scalable SaaS-based
                architectures on the Amazon AWS platform.
              </p>
              <motion.p
                ref={maskRef}
                initial={{
                  WebkitMaskSize: 300,
                  WebkitMaskPosition: "-100vw",
                }}
                whileHover={{
                  WebkitMaskPosition: `${x - maskSize / 2}px ${
                    y - maskSize / 2
                  }px`,
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                transition={{ type: "tween", ease: "backOut" }}
                className="absolute text-[#C5C5C5] font-medium md:text-lg text-center top-0 mask cursor-default"
              >
                A year ago, I dived into front-end development, and now I’m
                crafting sleek user interfaces like a pro. While my back-end
                knowledge is just enough to keep things running, I like to think
                of it as a review mode just skimming the surface while letting
                the real back-end experts do the deep dives!
              </motion.p>
            </div>
          </div>
          <div className=" flex-col md:flex-row gap-3 flex">
            <div>
              <PrimaryBtn buttonType="getInTouchBtn" />
            </div>
            <div>
              <PrimaryBtn buttonType="downloadCvBtn" />
            </div>
          </div>
        </div>

        <ExperienceWith />
      </div>
    </section>
  );
};

export default HeroSection;
