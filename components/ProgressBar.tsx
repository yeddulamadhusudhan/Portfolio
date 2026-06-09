"use client";

import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-[999]"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
}