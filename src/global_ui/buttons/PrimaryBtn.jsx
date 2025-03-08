import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PrimaryBtn = ({ buttonType }) => {
  const btnType = {
    getInTouchBtn: {
      text: "Get In Touch",
      classes:
        "flex gap-3 text-[#000000] bg-[#ffffff] px-2.5 py-1.5 rounded-md hover:bg-[#ffffffa1] group cursor-pointer transition-colors ease-in-out duration-100",
      link: "mailto:amraymondjoseph@gmail.com?subject=Hello Raymond&body=I would like to connect with you.",
    },
    downloadCvBtn: {
      text: "View Resume",
      classes:
        "flex gap-3 text-[#000000] bg-[#ffffff] px-2.5 py-1.5 rounded-md hover:bg-[#ffffffa1] group cursor-pointer transition-colors ease-in-out duration-100",
      link: "https://docs.google.com/document/d/15nqiZovoI_GUGg3iSMzxOjE52pcdPjNFEUCBhhBqMaY/edit?usp=sharing",
    },
  };
  const { text, classes, link } = btnType[buttonType];

  return (
    <a href={link}>
      <motion.button
        initial="hidden"
        whileHover="visible"
        className={` rounded-lg font-medium w-full md:font-semibold  ${classes} group`}
      >
        <span className="relative z-30 group-hover:text-[#000000]">{text}</span>
      </motion.button>
    </a>
  );
};

PrimaryBtn.propTypes = {
  buttonType: PropTypes.string.isRequired,
};

export default PrimaryBtn;
