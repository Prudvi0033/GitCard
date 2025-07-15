'use client'
import React from 'react'


const LogoBox = () => {
  return (
    <div >
        <div className='relative flex items-center justify-center w-40 h-40 shadow-[0_0_8px_rgba(255,255,255,0.05)] bg-neutral-900/90 border border-neutral-800/70 rounded-xl'>
            <div className='absolute w-32 h-32 rounded-full border border-neutral-600/20'/>
            <div className='absolute w-24 h-24 rounded-full border border-neutral-600/50'/>
            <div className='absolute w-16 h-16 rounded-full border border-neutral-400/80'/>
              <img src="/gitLogo.svg" height={50} width={50} className='z-20' />
            
        </div>
    </div>
  )
}

export default LogoBox