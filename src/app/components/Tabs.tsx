"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoBook, GoRepo, GoPackage, GoStar } from "react-icons/go";
import { GrTemplate } from "react-icons/gr";
import EmptyBox from "./EmptyBox";

type Tab = {
  icon: React.ReactNode;
  title: string;
  count?: number;
};

const tabs: Tab[] = [
  { icon: <GoBook />, title: "Overview" },
  { icon: <GoRepo />, title: "Repositories" },
  {
    icon: <GrTemplate />,
    title: "Projects",
  },
  { icon: <GoPackage />, title: "Packages" },
  { icon: <GoStar />, title: "Stars" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<null | string>("Overview");

  return (
    <div className="flex flex-col mx-auto">
      {/* Tabs container */}
      <div className="bg-neutral-800/80 text-neutral-300 shadow-[inset_2px_2px_4px_#1a1a1a,_inset_-2px_-2px_4px_#2a2a2a] rounded-lg border border-neutral-700/60">
        {/* Tab buttons */}
        <div className="flex gap-2 p-2 border-b border-neutral-600">
          {tabs.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => setActiveTab(item.title)}
                className="flex cursor-pointer relative items-center justify-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-white/5"
              >
                <div className="flex gap-2 items-center">
                  <span className="text-[14px]">{item.icon}</span>
                  <span className="text-[12px]">{item.title}</span>
                  {item.count && (
                    <span className="text-[10px] bg-neutral-600 px-1.5 py-0.5 rounded-full">
                      {item.count}
                    </span>
                  )}
                </div>

                {activeTab === item.title && (
                  <>
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-800 rounded-full"
                    />
                  </>
                )}

                {activeTab === item.title && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 bg-white/10 rounded-md z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Tab content */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <EmptyBox />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-neutral-800 via-neutral-800/90 to-transparent [mask-image:linear-gradient(to_top,black_0%,black_60%,transparent_100%)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
