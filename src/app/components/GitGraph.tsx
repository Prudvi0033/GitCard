import React from 'react'
import {motion} from 'motion/react'
const GitGraph = () => {

  const getRandomBlinks = () => ({
    opacity: [1, 0.7, 0.5, 1],
    transition: {
      duration: Math.random() * 2 + 0.5,
      repeat: Infinity,
      delay: Math.random() * 3,
      repeatDelay: Math.random() * 4 + 1
    }
  })

  return (
    <div>
      <svg width="1800" height="1800" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(-4, 10) scale(5.1)">
    <motion.path animate={getRandomBlinks()} d="M0,0 L10,0 L10,10 L0,10 Z" className="day-1"/>
    <motion.path animate={getRandomBlinks()} d="M0,12 L10,12 L10,22 L0,22 Z" className="day-2"/>
    <motion.path animate={getRandomBlinks()} d="M0,24 L10,24 L10,34 L0,34 Z" className="day-0"/>
    <motion.path animate={getRandomBlinks()} d="M0,36 L10,36 L10,46 L0,46 Z" className="day-3"/>
    <motion.path animate={getRandomBlinks()} d="M0,48 L10,48 L10,58 L0,58 Z" className="day-1"/>
    
    <motion.path animate={getRandomBlinks()} d="M12,0 L22,0 L22,10 L12,10 Z" className="day-2"/>
    <motion.path animate={getRandomBlinks()} d="M12,12 L22,12 L22,22 L12,22 Z" className="day-1"/>
    <motion.path animate={getRandomBlinks()} d="M12,24 L22,24 L22,34 L12,34 Z" className="day-3"/>
    <motion.path animate={getRandomBlinks()} d="M12,36 L22,36 L22,46 L12,46 Z" className="day-0"/>
    <motion.path animate={getRandomBlinks()} d="M12,48 L22,48 L22,58 L12,58 Z" className="day-2"/>
    
    <motion.path animate={getRandomBlinks()} d="M24,0 L34,0 L34,10 L24,10 Z" className="day-0"/>
    <motion.path animate={getRandomBlinks()} d="M24,12 L34,12 L34,22 L24,22 Z" className="day-1"/>
    <motion.path animate={getRandomBlinks()} d="M24,24 L34,24 L34,34 L24,34 Z" className="day-2"/>
    <motion.path animate={getRandomBlinks()} d="M24,36 L34,36 L34,46 L24,46 Z" className="day-3"/>
    <motion.path animate={getRandomBlinks()} d="M24,48 L34,48 L34,58 L24,58 Z" className="day-1"/>
    
    
    <motion.path animate={getRandomBlinks()} d="M36,0 L46,0 L46,10 L36,10 Z" className="day-3"/>
    <motion.path animate={getRandomBlinks()} d="M36,12 L46,12 L46,22 L36,22 Z" className="day-2"/>
    <motion.path animate={getRandomBlinks()} d="M36,24 L46,24 L46,34 L36,34 Z" className="day-4"/>
    <motion.path animate={getRandomBlinks()} d="M36,36 L46,36 L46,46 L36,46 Z" className="day-1"/>
    <motion.path animate={getRandomBlinks()} d="M36,48 L46,48 L46,58 L36,58 Z" className="day-0"/>
    
    
    <motion.path animate={getRandomBlinks()} d="M48,0 L58,0 L58,10 L48,10 Z" className="day-1"/>
    <motion.path animate={getRandomBlinks()} d="M48,12 L58,12 L58,22 L48,22 Z" className="day-4"/>
    <motion.path animate={getRandomBlinks()} d="M48,24 L58,24 L58,34 L48,34 Z" className="day-0"/>
    <motion.path animate={getRandomBlinks()} d="M48,36 L58,36 L58,46 L48,46 Z" className="day-2"/>
    <motion.path animate={getRandomBlinks()} d="M48,48 L58,48 L58,58 L48,58 Z" className="day-3"/>
    
    
   
    <motion.path animate={getRandomBlinks()} d="M60,0 L70,0 L70,10 L60,10 Z" className="day-2"/>
    <motion.path animate={getRandomBlinks()} d="M60,12 L70,12 L70,22 L60,22 Z" className="day-0"/>
    <motion.path animate={getRandomBlinks()} d="M60,24 L70,24 L70,34 L60,34 Z" className="day-1"/>
    <motion.path animate={getRandomBlinks()} d="M60,36 L70,36 L70,46 L60,46 Z" className="day-4"/>
    <motion.path animate={getRandomBlinks()} d="M60,48 L70,48 L70,58 L60,58 Z" className="day-3"/>
    
    <motion.path animate={getRandomBlinks()} d="M72,0 L82,0 L82,10 L72,10 Z" className="day-0"/>
    <motion.path animate={getRandomBlinks()} d="M72,12 L82,12 L82,22 L72,22 Z" className="day-3"/>
    <motion.path animate={getRandomBlinks()} d="M72,24 L82,24 L82,34 L72,34 Z" className="day-2"/>
    <motion.path animate={getRandomBlinks()} d="M72,36 L82,36 L82,46 L72,46 Z" className="day-1"/>
    <motion.path animate={getRandomBlinks()} d="M72,48 L82,48 L82,58 L72,58 Z" className="day-4"/>
    
    <motion.path animate={getRandomBlinks()} d="M84,0 L94,0 L94,10 L84,10 Z" className="day-1"/>
    <motion.path animate={getRandomBlinks()} d="M84,12 L94,12 L94,22 L84,22 Z" className="day-2"/>
    <motion.path animate={getRandomBlinks()} d="M84,24 L94,24 L94,34 L84,34 Z" className="day-3"/>
    <motion.path animate={getRandomBlinks()} d="M84,36 L94,36 L94,46 L84,46 Z" className="day-0"/>
    <motion.path animate={getRandomBlinks()} d="M84,48 L94,48 L94,58 L84,58 Z" className="day-1"/>
    
    
    <motion.path animate={getRandomBlinks()} d="M96,0 L106,0 L106,10 L96,10 Z" className="day-4"/>
    <motion.path animate={getRandomBlinks()} d="M96,12 L106,12 L106,22 L96,22 Z" className="day-1"/>
    <motion.path animate={getRandomBlinks()} d="M96,24 L106,24 L106,34 L96,34 Z" className="day-0"/>
    <motion.path animate={getRandomBlinks()} d="M96,36 L106,36 L106,46 L96,46 Z" className="day-2"/>
    <motion.path animate={getRandomBlinks()} d="M96,48 L106,48 L106,58 L96,58 Z" className="day-3"/>
    
  </g>
   
</svg>
    </div>
  )
}

export default GitGraph