import { useState, useEffect } from "react";

function CustomHook() {
  let [windim, setwindim] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const hresize = () => {
      setwindim({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", hresize);
    return () => {
      window.removeEventListener("resize", hresize);
    };
  }, []);
  return windim;
}

export default CustomHook;
