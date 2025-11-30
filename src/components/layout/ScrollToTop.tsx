// src/components/layout/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // jump to top on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // or "smooth" if you want animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
