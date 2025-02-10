import { motion } from "framer-motion";
import { useState } from "react";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const links = [
    {
      linkTitle: "Home",
    },
    {
      linkTitle: "Projects",
    },
    {
      linkTitle: "Experience",
    },
    {
      linkTitle: "Contact",
    },
  ];
  return (
    <header className=" fixed w-screen z-[999] drop-shadow-lg min-h-16 flex items-center justify-center py-2">
      <nav className="flex w-full md:w-[70%] justify-between items-center px-4 md:px-0">
        <div className="text-2xl tulpen_one text-white font-semibold rounded-full p-4 border-[#4b4848] border">
          RJ
        </div>
        <div className=" hidden md:block">
          <ul className="flex justify-between gap-5 lg:gap-20 ">
            {links.map((link, i) => (
              <div
                onClick={() => setActiveLink(link.linkTitle)}
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
        <div className="w-[24px] flex flex-col justify-between h-[24px] items-end md:hidden">
          <span className="h-[2px] w-full bg-gray-200 block"></span>
          <span className="h-[2px] w-[80%] bg-gray-200 block"></span>
          <span className="h-[2px] w-[60%] bg-gray-200 block"></span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
