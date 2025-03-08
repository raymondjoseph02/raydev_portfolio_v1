import { AnimatePresence, motion } from "framer-motion";
import { useRefContext } from "../../context/RefContext";
import MobileNav from "./MobileNav";
import PrimaryBtn from "../buttons/PrimaryBtn";
const NavBar = () => {
  const { links, activeLink, isNavOpen, setIsNavOpen } = useRefContext();

  return (
    <header className=" fixed w-screen z-[999] drop-shadow-lg min-h-10 flex items-center justify-center py-2 bg-[#27272A]  ">
      <nav className="w-full">
        <div className="container flex items-center justify-between w-full">
          <a
            href="/"
            className="text-2xl tulpen_one text-white font-semibold rounded-full p-4 border-[#4b4848] border"
          >
            RJ
          </a>
          <div className=" hidden md:flex  bg-red-300  justify-center">
            <ul className="flex gap-20 [&-li]:font-bold">
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
          <div className="flex gap-6 bg-red-200">
            <div>
              <PrimaryBtn buttonType={"downloadCvBtn"}></PrimaryBtn>
            </div>
            <div>
              <PrimaryBtn buttonType={"getInTouchBtn"}></PrimaryBtn>
            </div>
          </div>

          <div className="">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="handburger menu"
              className={`relative z-50 w-[24px] flex flex-col ${
                isNavOpen ? "justify-center " : "justify-between"
              }  h-[24px] items-end md:hidden`}
            >
              <motion.span
                initial={{ width: "100%", rotate: 0 }}
                animate={
                  isNavOpen
                    ? { width: "100%", rotate: -45 }
                    : { width: "100%", rotate: 0 }
                }
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                className="h-[2px] w-full bg-gray-200 block"
              ></motion.span>
              <motion.span
                initial={{
                  opacity: 1,
                  x: 0,
                }}
                animate={
                  isNavOpen
                    ? { opacity: 0, x: -20 }
                    : {
                        opacity: 1,
                        x: 0,
                      }
                }
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                className="h-[2px] w-[80%] bg-gray-200 block"
              ></motion.span>
              <motion.span
                initial={{ width: "60%", rotate: 0 }}
                animate={
                  isNavOpen
                    ? { width: "100%", rotate: 45 }
                    : { width: "60%", rotate: 0 }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-[2px]  bg-gray-200 block"
              ></motion.span>
            </button>
          </div>
          {isNavOpen ? (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ x: "100vw" }}
                animate={isNavOpen ? { x: 0 } : { x: "100vw" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ x: "100vw" }}
                className="w-screen !h-screen !absolute inset-0  flex"
              >
                <MobileNav />
              </motion.div>
            </AnimatePresence>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
