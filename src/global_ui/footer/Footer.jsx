import { FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
// import glow from "../../assets/images/glow.png";
function Footer() {
  return (
    <footer className="pt-[2.6rem] md:pt-[3.23rem] pb-[6.3rem] md:px-[10.23rem] px-5 lg:px-[19.68rem] bg-[#1a1a1c] relative overflow-hidden z-20">
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
            </p>
          </div>
        </div>
        <div className="flex gap-6 md:gap-8 ">
          <div>
            <FaLinkedin className="text-white size-6 md:size-7" />
          </div>
          <div>
            <FaXTwitter className="text-white size-6 md:size-7" />
          </div>
          <div>
            <FaGithub className="text-white size-6 md:size-7" />
          </div>
        </div>
      </div>
      <div className="circle-grandient absolute z-10 "></div>
    </footer>
  );
}

export default Footer;
