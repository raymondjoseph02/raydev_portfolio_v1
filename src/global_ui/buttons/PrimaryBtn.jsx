import PropTypes from "prop-types";
import { cubicBezier, motion } from "framer-motion";
import { useRef, useState } from "react";
const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);

const beforeAnimation = {
  hidden: { scaleY: 0.3, scaleX: 0.1, opacity: 0.064, borderRadius: "50%" }, // Start small and round
  visible: {
    scale: 19,
    opacity: 1,
    borderRadius: "0%",
  }, // Expand to full size
};

const PrimaryBtn = ({ buttonType }) => {
  const btnRef = useRef(null);
  const [origin, setOrigin] = useState({ x: 0.5, y: 0.5 });

  const btnType = {
    getInTouchBtn: {
      text: "Get In Touch",
      classes: "bg-[#FFFFFF] text-[#161513] border-[0.32px] border-[#ffffff]",
    },
    downloadCvBtn: {
      text: "Download CV",
      classes:
        "bg-[#000000] text-[#FFFFFF] border-[2px] border-[#ffffff] relative overflow-hidden",
    },
  };
  const { text, classes } = btnType[buttonType];

  const handleMouseEnter = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // Normalize to [0,1]
    const y = (e.clientY - rect.top) / rect.height; // Normalize to [0,1]
    setOrigin({ x, y });
  };

  return (
    <motion.button
      ref={btnRef}
      initial="hidden"
      whileHover="visible"
      className={`py-4 px-8 rounded-full font-medium md:font-semibold text-base md:text-[1.33rem] ${classes}`}
      onMouseEnter={handleMouseEnter}
    >
      <span className="relative z-30">{text}</span>
      {buttonType === "downloadCvBtn" && (
        <motion.div
          variants={beforeAnimation}
          transition={{ duration: 0.98, ease: easing }}
          style={{
            originX: origin.x,
            originY: origin.y,
          }}
          className="absolute inset-0 w-full h-full bg-gradient-to-t from-red-200 to-red-400 z-0"
        />
      )}
    </motion.button>
  );
};

PrimaryBtn.propTypes = {
  buttonType: PropTypes.string.isRequired,
};

export default PrimaryBtn;
