import React from 'react'
import Box from './components/Box'
import Title from './components/Title'
import LogoBox from './components/LogoBox'

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-[#0d0d0d] relative'>
      <Box/>
      <div className=' absolute z-20 left-[-10rem] -rotate-90'>
        <Title/>
      </div>
      <div className=' absolute bottom-[9rem] right-[14rem]'>
        <LogoBox/>
      </div>
    </div>
  )
}

export default page