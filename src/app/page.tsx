import React from 'react'
import Box from './components/Box'
import Title from './components/Title'

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-[#0d0d0d] relative'>
      <Box/>
      <div className=' absolute z-20 left-[-10rem] -rotate-90'>
        <Title/>
      </div>
      <div className=' absolute top-1/2 right-0 opacity-25'>
        <img src="/githubGrad.svg" height={300} width={300} />
      </div>
    </div>
  )
}

export default page