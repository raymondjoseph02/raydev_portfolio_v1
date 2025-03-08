import { motion } from "framer-motion";
import propTypes from "prop-types";

const Company = ({ logo, description, position, duration }) => {
  return (
    <div className="flex flex-col gap-6 w-ful">
      <motion.div className="flex flex-col justify-between w-full gap-4 lg:items-center lg:flex-row border-b border-b-[#ffffff20]">
        <div className="flex items-center gap-4 ">
          <div className="flex items-center justify-center w-12 h-12 overflow-hidden lg:w-16 lg:h-16 rounded-xl">
            <img src={logo} alt="" className="object-cover" />
          </div>
          <motion.p
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "anticipate" }}
            viewport={{ amount: 0.23 }}
            className="md:text-[1.35rem] text-white font-semibold md:font-bold text-base text-balance"
          >
            {position}
          </motion.p>
        </div>
        <motion.p
          initial={{
            y: -15,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.925,
            type: "spring",
            damping: 9,
            ease: "anticipate",
          }}
          className={`font-normal text-sm ${
            duration.includes("Present") ? "text-green-300" : " text-red-400"
          }`}
        >
          {duration}
        </motion.p>
      </motion.div>
      <div>
        <motion.p
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.492,
            delay: 0.207,
            ease: "linear",
          }}
          className="text-[#8491A0] leading-[150%] tracking-wide font-normal text-[0.90rem] md:max-w-[115ch]"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

Company.propTypes = {
  logo: propTypes.string.isRequired,
  position: propTypes.string.isRequired,
  duration: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default Company;
