import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { useRefContext } from "../../context/RefContext";
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
      className="pt-[2.6rem] md:pt-[3.23rem] pb-[6.3rem] md:px-[10.23rem] px-5 lg:px-[19.68rem] bg-[#1a1a1c] relative overflow-hidden z-20"
    >
      <div className="flex flex-col gap-6 relative z-20">
        <div className="flex flex-col gap-8">
          <h5 className="text-[1.47rem] font-bold text-white tracking-[2%]">
            Contact
          </h5>
          <div className="flex gap-4 flex-col">
            <p className="text-[#C5C5C5] tracking-[2%] font-light text-[0.90rem]">
              Seasoned Full Stack Software Engineer with over 8 years of
              hands-on experience in designing and implementing robust,
              scalable, and innovative web solutions. Adept at leveraging a
              comprehensive skill set encompassing front-end and back-end
              technologies
            </p>
            <p className="flex text-[#C5C5C5] text-[0.90rem] font-semibold items-center  gap-2">
              <FaEnvelope />
              <span>amraymondjoseph@gmail.com</span>
              <button
                className="cursor-pointer p-2 filter backdrop-blur-lg  brightness-110 bg-[#545252] rounded-md hover:brightness-90 transition-all ease-linear duration-300"
                onClick={handleCopyToclipBoard}
              >
                {!isCopied ? (
                  <MdContentCopy className="text-white size-5 " />
                ) : (
                  <IoMdCheckmark className="text-white size-5 " />
                )}
              </button>
            </p>
          </div>
        </div>
        <div className="flex gap-6 md:gap-8 ">
          <a href="www.google.com" className="group cursor-pointer">
            <FaLinkedin className="text-white size-6 md:size-7 group-hover:text-[#31a5f3]  transition-colors duration-200 ease-linear" />
          </a>
          <a href="/" className="group cursor-pointer">
            <FaXTwitter className="text-white size-6 md:size-7 group-hover:text-[#31a5f3] transition-colors duration-200 ease-linear" />
          </a>
          <a href="/" className="cursor-pointer group">
            <FaGithub className="text-white size-6 md:size-7 group-hover:text-[#31a5f3] transition-colors duration-200 ease-linear" />
          </a>
        </div>
      </div>
      <div className="circle-grandient absolute z-10 "></div>
      {isCopied ? (
        <p className="fixed text-lg italic nova_cut bottom-3 left-1/2 -translate-x-1/2 z-100 text-white">
          copied
        </p>
      ) : null}
    </footer>
  );
}

export default Footer;
