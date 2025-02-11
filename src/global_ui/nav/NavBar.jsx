import { motion } from "framer-motion";
import { useState } from "react";
import { useRefContext } from "../../context/RefContext";
const NavBar = () => {
  const { contactRef, projectRef, experienceRef, heroRef } = useRefContext();
  const [activeLink, setActiveLink] = useState("Home");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const links = [
    {
      linkTitle: "Home",
      action: (linkName) => {
        setActiveLink(linkName);
        if (heroRef.current) {
          heroRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Aligns the section to the top of the viewport
          });
        }
      },
    },
    {
      linkTitle: "Projects",
      action: (linkName) => {
        setActiveLink(linkName);
        if (projectRef.current) {
          projectRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Aligns the section to the top of the viewport
          });
        }
      },
    },
    {
      linkTitle: "Experience",
      action: (linkName) => {
        setActiveLink(linkName);
        if (experienceRef.current) {
          experienceRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Aligns the section to the top of the viewport
          });
        }
      },
    },
    {
      linkTitle: "Contact",
      action: (linkName) => {
        setActiveLink(linkName);
        if (contactRef.current) {
          contactRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Aligns the section to the top of the viewport
          });
        }
      },
    },
  ];
  return (
    <header className=" fixed w-screen z-[999] drop-shadow-lg min-h-10 flex items-center justify-center py-2 ">
      <nav className="flex w-full md:w-[70%] justify-between items-center px-4 md:px-0">
        <div className="text-2xl tulpen_one text-white font-semibold rounded-full p-4 border-[#4b4848] border">
          RJ
        </div>
        <div className=" hidden md:block">
          <ul className="flex justify-between gap-5 lg:gap-20  [&-li]:font-bold">
            {links.map((link, i) => (
              <div
                onClick={() => link.action(link.linkTitle)}
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
                    className=" h-[2px] w-full z-30 bg-white bottom-0"
                  ></motion.div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </ul>
        </div>

        <div className="relative">
          <button
            aria-label="handburger menu"
            className="absolute w-[24px] flex flex-col justify-between h-[24px] items-end md:hidden"
          >
            <span className="h-[2px] w-full bg-gray-200 block"></span>
            <span className="h-[2px] w-[80%] bg-gray-200 block"></span>
            <span className="h-[2px] w-[60%] bg-gray-200 block"></span>
          </button>
        </div>

        {/* <motion.div className="  w-screen bg-red-300 h-full ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            aliquam quas. Repudiandae animi architecto aliquam provident iste
            nisi numquam, rem vel velit esse veniam sunt ex beatae quos
            voluptatem? Molestias?
          </p>
        </motion.div> */}
      </nav>
    </header>
  );
};

export default NavBar;
