import React, { useState } from "react";

const InputBox = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Change event fired:", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="absolute top-20 left-72">
      
      <div>
        <input
          type="text"
          placeholder="Username"
          value={value}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-3xl border border-black/50 bg-[#212121] text-white
            shadow-[inset_2px_2px_4px_#1a1a1a,_inset_-2px_-2px_4px_#2a2a2a]
            focus:outline-none placeholder:text-gray-400 relative z-10"
        />
      </div>
    </div>
  );
};

export default InputBox;