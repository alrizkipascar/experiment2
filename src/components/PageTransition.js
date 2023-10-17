"use client";
// components/PageTransition.js
import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
    }, 500); // Adjust the duration as needed
  }, []);

  return (
    <div className={`page-transition ${isAnimating ? "enter" : "exit"}`}>
      {children}
    </div>
  );
};

export default PageTransition;
