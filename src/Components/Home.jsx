import React from 'react'
import { Button } from 'keep-react'

const Home = () => {
  return (
    <div className='h-[65vh] bg-[#4831d4] px-10 pt-10'>
      <h1  className='text-white font-mosk text-xl -rotate-2'>👋 Hi, I'm Istieak Ahmed</h1>
      <h2 className='pt-3 text-6xl font-black font-mosk text-[#ccf381]'>MERN Stack <br/> Developer</h2>
      <p className='pt-3 text-white font-mosk text-sm'>I'm a MERN Stack Developer. I love to build websites and web apps.</p>
      <Button>Hire me</Button>
    </div>

  )
}

export default Home
