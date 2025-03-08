import { FaEnvelope } from "react-icons/fa";
import { useRefContext } from "../../context/RefContext";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import PrimaryBtn from "../buttons/PrimaryBtn";
function MobileNav() {
  const { links, activeLink, isNavOpen, setIsNavOpen } = useRefContext();

  return (
    <div className="w-screen h-svh bg-[#27272A] pt-20 pb-6 px-8 flex flex-col justify-between">
      <div className="space-y-40">
        <ul className="flex justify-between gap-8 lg:gap-20  [&-li]:font-bold flex-col">
          {links.map((link, i) => (
            <div
              onClick={() => {
                link.action(link.linkTitle);
                setIsNavOpen(!isNavOpen);
              }}
              key={i}
              className="relative cursor-pointer"
            >
              <li className="text-base nova_cut font-semibold text-white">
                {link.linkTitle}
              </li>
              {activeLink.toLowerCase() === link.linkTitle.toLowerCase() ? (
                <motion.div
                  transition={{ duration: 0.43, ease: "easeInOut" }}
                  id="underline"
                  layoutId="underline"
                  className=" h-[2px] w-full z-30 bg-[#c4c2c2] bottom-0"
                ></motion.div>
              ) : (
                ""
              )}
            </div>
          ))}
        </ul>
        <div className="space-y-6">
          <div>
            <PrimaryBtn buttonType={"downloadCvBtn"}></PrimaryBtn>
          </div>
          <div>
            <PrimaryBtn buttonType={"getInTouchBtn"}></PrimaryBtn>
          </div>
        </div>
      </div>

      <div className="text-white flex flex-col justify-center items-center gap-5">
        <a
          href="mailto:amraymondjoseph@gmail.com"
          className="flex text-[#C5C5C5] text-[0.90rem] font-semibold items-center  gap-2"
        >
          <FaEnvelope />
          <span>amraymondjoseph@gmail.com</span>
        </a>
        <div className="flex gap-6 md:gap-8 ">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/raydev02"
            className="group cursor-pointer"
          >
            <FaLinkedin className="text-white size-6 md:size-7 group-hover:text-[#31a5f3]  transition-colors duration-200 ease-linear" />
          </a>
          <a
            target="_blank"
            href="http://twitter.com/Raydev02"
            className="group cursor-pointer"
          >
            <FaXTwitter className="text-white size-6 md:size-7 group-hover:text-[#31a5f3] transition-colors duration-200 ease-linear" />
          </a>
          <a
            target="_blank"
            href="http://github.com/raymondjoseph02"
            className="cursor-pointer group"
          >
            <FaGithub className="text-white size-6 md:size-7 group-hover:text-[#31a5f3] transition-colors duration-200 ease-linear" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
