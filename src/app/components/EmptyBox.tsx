import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const EmptyBox = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    const boxVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
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
            {[1, 2, 3, 4].map((_, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate={show ? "visible" : "hidden"}
                    variants={boxVariants}
                    className='w-full h-12 bg-neutral-600/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[1rem] border-neutral-600 backdrop-blur-md border' />
            ))}
        </motion.div>
    )
}

export default EmptyBox