import React from 'react'
import Background from '../../assets/image/background.svg'
import Hero from '../../assets/image/hero.svg'

const banner = () => {
  return (
   <>
    <div className='w-full h-[520px] md:h-[1000px] lg:h-[1280px] xl:h-[2030px]'>
      <img src={Hero} alt=''className='md:w-full'/>
      <img src={Background} alt='' className='absolute top-64 md:relative md:w-full md:top-[-100px] lg:top-[-190px] lg:max-h-[70%]'/>
      <div className='absolute top-80 text-white p-10 md:top-[600px] lg:top-[1000px]'>
        <p className='text-4xl'>Discover <br/> Your Wonder</p>
        <p className='text-md'>Lorem ipsum dolor sit amet, consectetur  <br/>
          adipiscing elit, sed do eiusmod tempor  <br/>
          incididunt ut labore et dolore magna aliqua. <br/>
          Ut enim ad minim veniam.</p>
      </div>
    </div>
   </>
  )
}

export default banner