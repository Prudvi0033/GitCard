"use client";
import React from "react";
import { Raleway } from "next/font/google";
import Box from "./components/Box";
import Title from "./components/Title";
import LogoBox from "./components/LogoBox";
import Tabs from "./components/Tabs";
import Beams from "./components/Beams";
import OuterBeam from "./components/OuterBeam";

const re = Raleway({ subsets: ["latin"] });

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0d0d0d] relative overflow-hidden">
      <Box />
      <div className=" absolute z-20 left-[-6.5rem] -rotate-90">
        <Title />
      </div>
      <div className="absolute top-[5.5rem] right-[12rem] flex flex-row items-center gap-4">
        <LogoBox />
      </div>
      <div className="absolute -left-12">
        <Beams />
      </div>
      <div className="">
        <OuterBeam/>
      </div>
      <div
        className={`absolute bottom-[1] font-semibold right-3 ${re.className}`}
      >
        <Tabs />
      </div>
    </div>
  );
};

export default page;
