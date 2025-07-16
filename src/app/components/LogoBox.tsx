'use client'
import React from 'react'
import { motion } from 'motion/react'

const rippleVariants = {
  animate: {
    scale: [1.05, 1.08, 1.12],
    opacity: [1, 0.8, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop'
    }
  }
}

const LogoBox = () => {
  return (
    <div>
      <div className='relative flex items-center justify-center w-40 h-40 shadow-[0_0_8px_rgba(255,255,255,0.05)] bg-neutral-900/90 border border-neutral-800/70 rounded-xl overflow-hidden'>

        <motion.div
          variants={rippleVariants}
          animate="animate"
          className='absolute w-42 h-42 rounded-full border border-neutral-600/20'
        />
        <motion.div
          variants={rippleVariants}
          animate="animate"
          transition={{ delay: 0 }}
          className='absolute w-32 h-32 rounded-full border border-neutral-600/20'
        />
        <motion.div
          variants={rippleVariants}
          animate="animate"
          transition={{ delay: 0.4 }}
          className='absolute w-24 h-24 rounded-full border border-neutral-600/40'
        />
        <motion.div
          variants={rippleVariants}
          animate="animate"
          transition={{ delay: 0.8 }}
          className='absolute w-16 h-16 rounded-full border border-neutral-500/60'
        />

        <img src="/gitLogo.svg" height={50} width={50} className='z-20 pointer-events-none' alt="Git Logo" />
      </div>
    </div>
  )
}

export default LogoBox
