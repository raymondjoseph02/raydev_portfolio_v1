import { motion } from "framer-motion";
import propTypes from "prop-types";

const Company = ({ logo, description, position, duration }) => {
  return (
    <div className=" w-ful flex flex-col gap-6">
      <motion.div className="flex justify-between lg:items-center gap-4 w-full flex-col lg:flex-row">
        <div className="flex items-center  gap-4 ">
          <div>
            <img src={logo} alt="" />
          </div>
          <motion.p
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "anticipate" }}
            viewport={{ amount: 0.23 }}
            className="md:text-[1.35rem] text-white font-bold text-base"
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
          className="text-[#8491A0] leading-[150%] font-normal text-[0.90rem]"
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
