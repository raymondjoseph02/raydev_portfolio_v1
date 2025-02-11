import PrimaryBtn from "../global_ui/buttons/PrimaryBtn";
import ExperienceWith from "./ExperienceWith";
import { useMousePosition } from "../utils/useMousePosition";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useRefContext } from "../context/RefContext";
const HeroSection = () => {
  const [isHover, setIsHover] = useState(false);
  const maskRef = useRef(HTMLParagraphElement);
  const maskSize = isHover ? 200 : 40;
  const { x, y } = useMousePosition(maskRef);
  const { heroRef } = useRefContext();
  return (
    <section ref={heroRef} className="md:pt-72 pt-40 pb-40">
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex justify-center flex-col items-center gap-10">
          <div className="flex flex-col items-center justify-center gap-5  lg:w-[67ch]">
            <div className="size-28 rounded-full bg-orange-400">
              <img src="" alt="" />
            </div>
            <motion.div
              initial={{
                x: 150,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{ ease: "easeInOut", duration: 0.6 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl text-white font-semibold">
                <span>Hi i&#39;m Raymond Joseph</span>
              </p>
              <motion.h1 className="capitalize lg:text-[3.43rem] text-3xl font-extrabold md:text-[2.43rem] md:font-bold lg:font-extrabold text-white text-center leading-normal">
                Front-end
                <span className="bg-gradient-to-r  from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
                  {" "}
                  &#123; developer &#125;
                </span>
              </motion.h1>
            </motion.div>
            <div className="relative">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
                className="text-[#C5C5C5] text-base md:text-lg  text-center nova_cut font-light"
              >
                As a Frontend Developer, I prioritize precision in design,
                ensuring pixel-perfect alignment and seamless user interactions
                while optimizing components for enhanced performance.
              </motion.p>
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
            <a href="mailto:amraymondjoseph@gmail.com">
              <PrimaryBtn buttonType="getInTouchBtn" />
            </a>
            <div>
              <a
                target="_blank"
                href="https://docs.google.com/document/d/15nqiZovoI_GUGg3iSMzxOjE52pcdPjNFEUCBhhBqMaY/edit?usp=sharing"
                download={"Raydev CV"}
              >
                <PrimaryBtn buttonType="downloadCvBtn" />
              </a>
            </div>
          </div>
        </div>

        <ExperienceWith />
      </div>
    </section>
  );
};

export default HeroSection;
