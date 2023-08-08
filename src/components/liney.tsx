"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LineY = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="line-y"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { height: "100%", transition: { duration: 1, delay: 0.3 } },
        hidden: { height: "0%" },
      }}
    ></motion.div>
  );
};

export default LineY;
