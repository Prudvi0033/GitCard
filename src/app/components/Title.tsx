import React from 'react'
import { Raleway } from 'next/font/google'

const monte = Raleway({ subsets: ['latin'] })

const Title = () => {
    return (
        <div className='bg-neutral-900/90 border shadow-[0_0_8px_rgba(255,255,255,0.05)] border-neutral-900 py-2 px-3 rounded-b-2xl  backdrop-blur-2xl'>
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
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)'
                }}
            >
                Github
            </div>
        </div>
    )
}

export default Title
