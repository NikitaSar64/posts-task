import { useEffect, useState } from "react";

export const useCheckScroll = (scrollValue: number) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= scrollValue) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return scroll;
};
