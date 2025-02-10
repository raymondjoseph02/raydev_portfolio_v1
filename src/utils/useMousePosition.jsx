import { useState, useEffect } from "react";

export const useMousePosition = (elementRef = null) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const targetElement = elementRef?.current || window; // Default to `window` if no ref is provided
    if (targetElement.current) {
      console.log("testing");
    } else {
      console.log("window");
    }
    targetElement.addEventListener("mousemove", updateMousePosition);

    return () => {
      targetElement.removeEventListener("mousemove", updateMousePosition);
    };
  }, [elementRef]);

  return mousePosition;
};
