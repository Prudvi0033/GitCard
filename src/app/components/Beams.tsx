"use client";
import React from "react";
import { motion } from "framer-motion";

const Beams = () => {
  return (
    <div className="relative">
      <svg
        width="1000"
        height="1000"
        viewBox="0 0 3000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <motion.linearGradient
            id="animatedGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientUnits="objectBoundingBox"
            animate={{
              x1: ["-100%", "100%"],
              x2: ["0%", "200%"],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0" />
            <stop offset="20%" stopColor="#3399FF" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#66CCFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="60%" stopColor="#66CCFF" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#3399FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
          </motion.linearGradient>
        </defs>

        <g transform="translate(400, 0)">
          <motion.path
            d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
            stroke="url(#animatedGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#strongGlow)"
            initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "linear" }}
          />
          <motion.path
            d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
            stroke="url(#animatedGradient)"
            strokeWidth="4"
            fill="none"
            filter="url(#glow)"
            initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "linear" }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Beams;