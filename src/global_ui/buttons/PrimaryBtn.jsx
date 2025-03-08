import PropTypes from "prop-types";
import { cubicBezier, motion } from "framer-motion";
const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);

const beforeAnimation = {
  hidden: { scaleX: 0 }, // Start small and round
  visible: {
    scaleX: 3,
  }, // Expand to full size
};

const PrimaryBtn = ({ buttonType }) => {
  const btnType = {
    getInTouchBtn: {
      text: "Get In Touch",
      classes: "bg-[#FFFFFF] text-[#161513] border-[0.32px] border-[#ffffff]",
      action: () => {},
    },
    downloadCvBtn: {
      text: "Download CV",
      classes:
        "bg-[#000000] text-[#FFFFFF] border-[2px] border-[#ffffff] relative overflow-hidden",
      link: "https://docs.google.com/document/d/15nqiZovoI_GUGg3iSMzxOjE52pcdPjNFEUCBhhBqMaY/edit?tab=t.0",
    },
  };
  const { text, classes } = btnType[buttonType];

  return (
    <motion.button
      initial="hidden"
      whileHover="visible"
      className={`py-4 px-8 rounded-lg font-medium w-full md:font-semibold text-base md:text-[1.33rem] ${classes} group`}
    >
      <span className="relative z-30 group-hover:text-[#000000]">{text}</span>
      {buttonType === "downloadCvBtn" && (
        <motion.div
          variants={beforeAnimation}
          transition={{ duration: 0.98, ease: easing }}
          style={{
            originX: 0,
          }}
          className="absolute inset-0 z-0 w-full h-full bg-white"
        />
      )}
    </motion.button>
  );
};

PrimaryBtn.propTypes = {
  buttonType: PropTypes.string.isRequired,
};

export default PrimaryBtn;
