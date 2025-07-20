import React, { useState } from "react";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import { Montserrat } from "next/font/google";
import { useUsername } from "../contexts/UsernameContext";

const Dancing = Montserrat({subsets : ['latin']})

const InputBox = () => {
  const [value, setValue] = useState("");
  const {setUsername} = useUsername();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setUsername(value)
  }

  return (
    <div className="absolute top-20 left-[12rem]">
      <div className="flex items-center">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={value}
            onChange={handleChange}
            className={`w-full px-6 py-4 rounded-3xl border border-black/50 bg-[#212121] text-neutral-300
            shadow-[inset_2px_2px_4px_#1a1a1a,_inset_-2px_-2px_4px_#2a2a2a]
            focus:outline-none placeholder:text-neutral-600 placeholder:font-medium relative z-10 ${Dancing.className}`}
          />
          <span className="bg-gradient-to-r via-blue-700 to-transparent w-[70%] inset-0 mx-auto h-[1.5px] absolute bottom-0 left-0 right-0 z-12"></span>
          <span className="bg-gradient-to-r via-blue-700 to-transparent w-[70%] inset-0 mx-auto h-[2px] opacity-30 backdrop-blur-md absolute bottom-0 left-0 right-0 z-12"></span>
        </div>
        <motion.div
        whileTap={{
            scale: 0.9
          }} 
          transition={{
            duration: 0.3,
            type: 'spring'

          }}
          onClick={handleClick}
        className="absolute m-1 right-0 z-10 cursor-pointer">
          <button className="rounded-full shadow-[inset_2px_2px_4px_#1a1a1a,_inset_-2px_-2px_4px_#2a2a2a] p-6" />
          <span className="text-neutral-700/90 absolute left-4 top-4">
            <FaArrowRight />
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default InputBox;
