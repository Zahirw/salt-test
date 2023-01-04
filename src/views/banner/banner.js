import React from 'react'
import Background from '../../assets/image/background.svg'
import Hero from '../../assets/image/hero.svg'

const banner = () => {
  return (
   <>
    <div style={{height: '520px'}}>
      <img src={Hero} alt=''/>
      <img src={Background} alt='' className='absolute top-64 left-0 right-0'/>
      <div className='absolute top-80 left-0 right-0 text-white p-10'>
        <p className='text-4xl'>Discover <br/> Your Wonder</p>
        <p>Lorem ipsum dolor sit amet, consectetur  <br/>
          adipiscing elit, sed do eiusmod tempor  <br/>
          incididunt ut labore et dolore magna aliqua. <br/>
          Ut enim ad minim veniam.</p>
      </div>
    </div>
   </>
  )
}

export default banner