'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import {
    GoBook,
    GoRepo,
    GoProject,
    GoPackage,
    GoStar,
} from 'react-icons/go'
import EmptyBox from './EmptyBox'

type Tab = {
    icon: React.ReactNode
    title: string
    count?: number
}

const tabs: Tab[] = [
    { icon: <GoBook />, title: 'Overview' },
    { icon: <GoRepo />, title: 'Repositories', count: 48 },
    { icon: <GoProject />, title: 'Projects' },
    { icon: <GoPackage />, title: 'Packages' },
    { icon: <GoStar />, title: 'Stars', count: 113 },
]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState<null | string>("Overview")
    return (
        <div className='flex flex-col w-full'>
            {/* Tabs container */}
            <div className='bg-neutral-800/80 flex gap-2 p-2 h-[20.2rem]  text-neutral-300 shadow-[0_0_8px_rgba(255,255,255,0.05)] rounded-lg border border-neutral-700/60'>
                {tabs.map(item => (
                    <div key={item.title}>
                        <button
                            onClick={() => setActiveTab(item.title)}
                            className='flex relative items-center justify-center gap-2'
                        >
                            <div className='flex gap-2 items-center p-1'>
                                <span className='text-[14px]'>{item.icon}</span>
                                <span className='text-[12px]'>{item.title}</span>
                            </div>
                            {activeTab === item.title && (
                                <motion.div
                                    layoutId='underline'
                                    className='absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500 rounded-full'
                                />
                            )}

                            {activeTab === item.title && (
                                <motion.div
                                    layoutId="highlight"
                                    className='absolute inset-0 bg-white/10 rounded-lg z-0'
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                />
                            )}

                        </button>


                    </div>
                ))}


            </div>
            <div className='absolute border-b top-[1.7rem] border-neutral-600 w-full mt-2' />
            <EmptyBox />
        </div>
    )
}

export default Tabs
