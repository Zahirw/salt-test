import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import footer from '../../assets/image/footer.svg'
import logoWhite from '../../assets/image/logo-white.svg'

const top100Films = [
  { id:1, label: 'Technology Development'},
]

const Footer = () => {
  return (
    <>
      <div className='p-6' style={{backgroundImage: `url(${footer})`, height: '650px'}}>
        <img src={logoWhite} alt="" />
        <div className='bg-white p-10 mt-10'>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField {...params} label="Departement" />}
          />
          <p className='text-title mt-6 text-md'>
            Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat
          </p>
        </div>
        <div className='mt-10'>
          <p className='text-white text-md py-5'>
            Who We Are
          </p>
          <p className='text-white text-md py-5'>
          Our Values
          </p>
          <p className='text-white text-md py-5'>
          The Perks
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer