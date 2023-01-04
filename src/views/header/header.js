import React from "react"
import Logo from '../../assets/logo.js'
import DehazeIcon from '@mui/icons-material/Dehaze';

const header = () => {
  return (
    <>
      <div className="container p-5 flex justify-between">
        <Logo />
        <DehazeIcon className="cursor-pointer"/>
      </div>
    </>
  )
}

export default header
