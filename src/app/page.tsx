import React from 'react'
import { Raleway } from 'next/font/google'
import Box from './components/Box'
import Title from './components/Title'
import LogoBox from './components/LogoBox'
import Tabs from './components/Tabs'

const re = Raleway({subsets: ['latin']})

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-[#0d0d0d] relative'>
      <Box/>
      <div className=' absolute z-20 left-[-6.5rem] -rotate-90'>
        <Title/>
      </div>
      <div className='absolute top-[5.5rem] right-[12rem]'>
        <LogoBox/>
      </div>
      <div className={`absolute bottom-[1] font-semibold right-12 ${re.className}`}>
        <Tabs/>
      </div>
    </div>
  )
}

export default page