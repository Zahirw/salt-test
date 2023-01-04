import React from 'react'
import Worker from '../../assets/image/worker.svg'

const content = [
  {
    title: 'Dedication',
    desc: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
  {
    title: 'Intellectual Honesty',
    desc: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
  {
    title: 'Curiosity',
    desc: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  }
]

const CoreValues = () => {
  return (
   <>
    <div className='container p-10 bg-gray-100'>
      <p className='text-3xl text-title font-bold text-center py-4'>Our Core Values</p>
      <p className='text-gray-500'>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
        <br/><br/> In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
      </p>
      {content.map((item, key) => (
        <div className='py-4'>
          <p className='text-2xl'>- {item.title}</p>
          <p className='px-4 text-gray-500'>{item.desc}</p>
        </div>
      ))
      }
      <div className='pt-4 flex justify-center'>
        <img src={Worker} alt=''/>
      </div>
    </div>
   </>
  )
}

export default CoreValues