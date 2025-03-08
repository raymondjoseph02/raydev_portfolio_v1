import ExperienceWith from "./ExperienceWith";
import advater from "../assets/images/WhatsApp_Image_2024-12-03_at_16.19.56-removebg-preview.png";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Tooltip } from "@material-tailwind/react";
const HeroSection = () => {
  return (
    <section className="pt-40 pb-40 md:pt-72 w-full">
      <div className="flex h-fit w-full overflow-hidden relative flex-col-reverse  xl:flex-row">
        <div className="absolute z-100 circle-grandient " />

        <div className=" xl:w-[60%] relative z-20 flex justify-center items-center overflow-hidden ">
          <div className="hero-sec-text-before bg-transparent" />

          <div className="relative z-20 flex flex-col gap-8 p-5 md:p-10 rounded-3xl    size-[99.85%]  bg-transparent">
            <div className="flex justify-between flex-col gap-3">
              <p className="text-base font-medium text-[#efeded] sm:text-xl">
                Hi, I&#39;m Raymond{" "}
              </p>
              <div className="flex gap-6 md:gap-8 ">
                <Tooltip
                  className="transition-all duration-[50ms] ease-linear"
                  placement="top"
                  content="LinkedIn"
                >
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/raydev02"
                    className="p-1.5 border-[#ffffff16] border rounded-md cursor-pointer group shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,rgba(50,50,93,0.3)_0px_30px_60px_-12px_inset hover:scale-[1.1] transition-all ease-linear duration-20"
                  >
                    <FaLinkedin className="text-white size-6 md:size-7   transition-all duration-200 ease-in-out group-hover:skew-x-6" />
                  </a>
                </Tooltip>
                <Tooltip placement="top" content="Twitter">
                  <a
                    target="_blank"
                    href="http://twitter.com/Raydev02"
                    className="p-1.5 border-[#ffffff16] border rounded-md cursor-pointer group shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,rgba(50,50,93,0.3)_0px_30px_60px_-12px_inset hover:scale-[1.1] transition-all ease-linear duration-20"
                  >
                    <FaXTwitter className="text-white size-6 md:size-7  transition-all duration-200 ease-linear" />
                  </a>
                </Tooltip>
                <Tooltip placement="top" content="Github">
                  <a
                    target="_blank"
                    href="http://github.com/raymondjoseph02"
                    className="p-1.5 border-[#ffffff16] border rounded-md cursor-pointer group shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,rgba(50,50,93,0.3)_0px_30px_60px_-12px_inset hover:scale-[1.1] transition-all ease-linear duration-20"
                  >
                    <FaGithub className="text-white transition-colors duration-200 ease-linear size-6 md:size-7" />
                  </a>
                </Tooltip>
              </div>
            </div>
            <h1 className="md:text-[2rem] text-3xl lg:text-[3.5rem] md:leading-[67.2px] md:max-w-[20ch] text-white font-semibold">
              Front-End Solutions for Seamless Experiences{" "}
            </h1>
            <p className="text-[#b6b5b5] text-base md:max-w-[60ch]">
              Building seamless, user-centric experiences that blend innovation,
              performance, and scalability
            </p>
            <ExperienceWith />
          </div>
        </div>
        <div className="w-full h-10 md:h-20 xl:h-full xl:w-[4%] bg-[#161618] relative z-50"></div>
        <div className="xl:h-full h-[26rem] w-full xl:w-[36%]  border-[1px] border-[#f5f4f421] rounded-3xl overflow-hidden ">
          <img
            src={advater}
            alt="raymond's advater"
            className="object-cover !size-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
