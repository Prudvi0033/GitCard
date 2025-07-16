import React from "react";
import { motion } from "motion/react";
import { Raleway } from "next/font/google";

const monte = Raleway({ subsets: ["latin"] });

const Title = () => {
  return (
    <div>
      <div className="bg-neutral-900/90 border shadow-[0_0_8px_rgba(255,255,255,0.05)] border-neutral-900 py-2 px-3 rounded-b-2xl  backdrop-blur-2xl">
        <div
          className={`text-neutral-700 ${monte.className} font-extrabold border-x border-b px-2 text-[5rem] rounded-xl border-neutral-800/60 leading-none select-none`}
          style={{
            opacity: 0.9,
            textShadow: `
          0 1px 1px rgba(255, 255, 255, 0.4),
          0 2px 4px rgba(255, 255, 255, 0.15),
          0 4px 6px rgba(0, 0, 0, 0.1),
          0 8px 12px rgba(0, 0, 0, 0.15)
        `,
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          Github
        </div>
      </div>

      <div>
        {/* First Animated Beam */}
        <motion.svg
          className="absolute left-1/2 -translate-x-1"
          width="6"
          height="500"
          style={{ filter: "drop-shadow(0 0 6px rgba(14,165,233,0.5))" }}
        >
          <motion.line
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 1],
              opacity: [0, 1, 1, 0.8],
              stroke: ["#0f172a", "#334155", "#0ea5e9"], // neutral-900 to sky-500
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 0.8, 1],
              delay: 0.2,
            }}
            x1="3"
            y1="0"
            x2="3"
            y2="440"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Second Animated Beam */}
        <motion.svg
          className="absolute left-[48%] -translate-x-1"
          width="6"
          height="500"
          style={{ filter: "drop-shadow(0 0 6px rgba(139,92,246,0.5))" }}
        >
          <motion.line
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 1],
              opacity: [0, 1, 1, 0.8],
              stroke: ["#0f172a", "#4c1d95", "#8b5cf6"], // neutral-900 to violet-500
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 0.8, 1],
              delay: 0.5,
            }}
            x1="3"
            y1="0"
            x2="3"
            y2="440"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Third Animated Beam */}
        <motion.svg
          className="absolute left-[46%] -translate-x-1"
          width="6"
          height="500"
          style={{ filter: "drop-shadow(0 0 6px rgba(34,197,94,0.5))" }}
        >
          <motion.line
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 1],
              opacity: [0, 1, 1, 0.8],
              stroke: ["#0f172a", "#166534", "#22c55e"], // neutral-900 to green-500
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 0.8, 1],
              delay: 0.8,
            }}
            x1="3"
            y1="0"
            x2="3"
            y2="440"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Fourth Animated Beam */}
        <motion.svg
          className="absolute left-[52%] -translate-x-1"
          width="6"
          height="500"
          style={{ filter: "drop-shadow(0 0 6px rgba(239,68,68,0.5))" }}
        >
          <motion.line
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 1],
              opacity: [0, 1, 1, 0.8],
              stroke: ["#0f172a", "#991b1b", "#ef4444"], // neutral-900 to red-500
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 0.8, 1],
              delay: 1.1,
            }}
            x1="3"
            y1="0"
            x2="3"
            y2="440"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Fifth Animated Beam */}
        <motion.svg
          className="absolute left-[54%] -translate-x-1"
          width="6"
          height="500"
          style={{ filter: "drop-shadow(0 0 6px rgba(245,158,11,0.5))" }}
        >
          <motion.line
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 1],
              opacity: [0, 1, 1, 0.8],
              stroke: ["#0f172a", "#92400e", "#f59e0b"], // neutral-900 to amber-500
            }}
            transition={{
              duration: 2.1,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 0.8, 1],
              delay: 1.4,
            }}
            x1="3"
            y1="0"
            x2="3"
            y2="440"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Title;
