import { createContext, useContext, useRef } from "react";
import PropTypes from "prop-types";

const RefContext = createContext();
export const useRefContext = () => useContext(RefContext);

export const RefProvider = ({ children }) => {
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const heroRef = useRef(null);

  return (
    <RefContext.Provider
      value={{ contactRef, projectRef, experienceRef, heroRef }}
    >
      {children}
    </RefContext.Provider>
  );
};

RefProvider.propTypes = {
  children: PropTypes.node.isRequired, // Supports any renderable content
};
