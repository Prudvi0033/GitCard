import React from "react";
import { motion } from "framer-motion";

const OuterBeam = () => {
  return (
    <div className="absolute top-[3rem] -left-24">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="base_gradient"
            gradientUnits="userSpaceOnUse"
            x1="50"
            y1="100"
            x2="148"
            y2="150"
          >
            <stop offset="0%" stopColor="#2EB9DF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#2EB9DF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9E00FF" stopOpacity="0.3" />
          </linearGradient>
          
          <motion.linearGradient
            id="paint_linear"
            gradientUnits="userSpaceOnUse"
            x1="50"
            y1="100"
            x2="148"
            y2="150"
            animate={{
              x1: [0, 100, 250],
              x2: [100, 300, 500]
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            <stop offset="0%" stopColor="#2EB9DF" stopOpacity="0" />
            <stop offset="50%" stopColor="#2EB9DF" stopOpacity="1" />
            <stop offset="100%" stopColor="#9E00FF" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
        
        <path
          d="M 50 100 L 150 100 L 148 150"
          stroke="url(#base_gradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        <motion.path
          d="M 50 100 L 150 100 L 148 150"
          stroke="url(#paint_linear)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default OuterBeam;