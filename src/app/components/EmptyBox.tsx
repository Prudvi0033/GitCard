import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const EmptyBox = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    const boxVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                ease: "easeOut",
                duration: 0.4
            }
        })
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='p-4 space-y-3 flex flex-col'>
            {[1, 2, 3, 4, 5].map((_, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate={show ? "visible" : "hidden"}
                    variants={boxVariants}
                    className='w-full h-12 bg-neutral-600/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[1rem] border-neutral-600 backdrop-blur-md border relative overflow-hidden'
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
                    
                    {/* Content placeholders */}
                    <div className="flex items-center gap-3 p-3 h-full">
                        {/* Avatar placeholder */}
                        <div className="w-6 h-6 bg-neutral-500/60 rounded-full flex-shrink-0" />
                        
                        {/* Text placeholders */}
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-neutral-500/60 rounded w-3/4" />
                            <div className="h-2 bg-neutral-500/40 rounded w-1/2" />
                        </div>
                        
                        {/* Action placeholder */}
                        <div className="w-16 h-6 bg-neutral-500/50 rounded-md flex-shrink-0" />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default EmptyBox