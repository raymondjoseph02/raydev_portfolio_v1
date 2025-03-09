import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useRefContext } from "../../context/RefContext";
import { Tooltip } from "@material-tailwind/react";
// import glow from "../../assets/images/glow.png
function Footer() {
  const { contactRef } = useRefContext();

  const [isCopied, setIscopied] = useState(false);
  const handleCopyToclipBoard = async () => {
    try {
      await navigator.clipboard.writeText("amraymondjoseph@gmail.comt");
      setIscopied(true);
      setTimeout(() => {
        setIscopied(false);
      }, 2000);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <footer
      ref={contactRef}
      className="pt-[2.6rem] md:pt-[3.23rem] pb-[5.3rem]  bg-[#1a1a1c] relative overflow-hidden z-20"
    >
      <div className="relative z-20 flex flex-col gap-10 container">
        <div className="flex flex-col gap-8">
          <h5 className="text-[1.47rem] font-bold text-white tracking-[2%]">
            Contact
          </h5>
          <div className="flex flex-col gap-10">
            <p className="text-[#C5C5C5] tracking-[2%] font-light text-sm sm:text-[0.99rem] ">
              Creative and Detail-Oriented Front-End Developer with a strong
              focus on user experience and interface design. Passionate about
              building solution-centered applications that prioritize
              performance, accessibility, and modern UI interactions. Adept at
              leveraging React, Next.js, TypeScript, and Tailwind CSS to craft
              visually engaging, highly interactive, and scalable web solutions.
              With hands-on experience collaborating with teams, integrating
              APIs, and optimizing front-end performance, I thrive in
              challenging environments that push me to solve real-world problems
              through code. Constantly exploring new technologies like Framer
              Motion, GSAP, and Three.js, I aim to create intuitive and
              immersive digital experiences.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="cursor-pointer p-2 filter backdrop-blur-lg  brightness-110 bg-transparent text-white border-[#ffffff18] border-2 justify-center w-full sm:w-fit rounded-md hover:brightness-90 transition-all ease-linear duration-300 flex items-center gap-5 "
            onClick={handleCopyToclipBoard}
          >
            <FaEnvelope />
            {isCopied ? (
              <span className="capitalize"> email copied to clipboard </span>
            ) : (
              <span>amraymondjoseph@gmail.com</span>
            )}
          </button>
          <div className="flex gap-6 md:gap-8 ">
            <Tooltip placement="top" content="LinkedIn">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/raydev02"
                className="p-1.5 border-[#ffffff16] border rounded-md cursor-pointer group shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,rgba(50,50,93,0.3)_0px_30px_60px_-12px_inset hover:scale-[1.1] transition-all ease-linear duration-20"
              >
                <FaLinkedin className="text-white size-6 md:size-7   transition-all duration-200 ease-linear" />
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
        {/* <p className="text-[#ffffff89] font-medium pt-10">&copy; Raydev 2023</p> */}
      </div>
      <div className="absolute z-10 circle-grandient " />
    </footer>
  );
}

export default Footer;
