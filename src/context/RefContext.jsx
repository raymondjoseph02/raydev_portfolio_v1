import { createContext, useContext, useRef, useState } from "react";
import PropTypes from "prop-types";

const RefContext = createContext();
export const useRefContext = () => useContext(RefContext);

export const RefProvider = ({ children }) => {
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const heroRef = useRef(null);
  const [activeLink, setActiveLink] = useState("Home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const links = [
    {
      linkTitle: "Home",
      action: (linkName) => {
        setActiveLink(linkName);
        if (heroRef.current) {
          heroRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Aligns the section to the top of the viewport
          });
        }
      },
    },
    {
      linkTitle: "Projects",
      action: (linkName) => {
        setActiveLink(linkName);
        if (projectRef.current) {
          projectRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Aligns the section to the top of the viewport
          });
        }
      },
    },
    {
      linkTitle: "Experience",
      action: (linkName) => {
        setActiveLink(linkName);
        if (experienceRef.current) {
          experienceRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Aligns the section to the top of the viewport
          });
        }
      },
    },
    {
      linkTitle: "Contact",
      action: (linkName) => {
        setActiveLink(linkName);
        if (contactRef.current) {
          contactRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Aligns the section to the top of the viewport
          });
        }
      },
    },
  ];

  return (
    <RefContext.Provider
      value={{
        contactRef,
        projectRef,
        experienceRef,
        heroRef,
        links,
        activeLink,
        setActiveLink,
        isNavOpen,
        setIsNavOpen,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

RefProvider.propTypes = {
  children: PropTypes.node.isRequired, // Supports any renderable content
};
