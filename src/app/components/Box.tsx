import { Montserrat } from 'next/font/google'
import React from 'react'

const monte = Montserrat({subsets: ['latin']})

const Box = () => {
    return (
        <div className="relative flex items-center justify-center h-screen ">
            <svg
                className="absolute right-0 top-0 -translate-x-1/2"
                width="1"
                height="100vh"
            >
                <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    stroke="#2e2e2e"
                    strokeWidth="60"
                    strokeDasharray="4 6"
                />
            </svg>

            {/* Card */}
            <div  className="relative flex items-center justify-center z-10 w-[26rem] h-[18rem] bg-[#0e0e0e] border-2 border-dashed border-neutral-800 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <span className={`${monte.className} absolute text-4xl font-extrabold text-neutral-600/20`}>Gitcard.</span>
            </div>

            <svg
                className="absolute top-[20rem] -translate-y-1/2"
                width="100vw"
                height="1"
            >
                <line
                    x1="100%"
                    y1="0"
                    x2="0"
                    y2="0"
                    stroke="#2e2e2e"
                    strokeWidth="60"
                    strokeDasharray="4 6"
                />
            </svg>

        </div>
    )
}

export default Box