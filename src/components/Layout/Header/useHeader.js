import { useEffect, useState } from "react";

const useHeader = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    setScroll(window.scrollY > 45);
  };

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      isActive = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { scroll };
};

export default useHeader;
