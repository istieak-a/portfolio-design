import React from 'react'
import './Button.css'
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({children}) => {
  return (
    <button className='btn flex gap-5 font-sfui leading-3 items-center'>{children} <FaArrowRightLong className='text-xl'/></button>
  )
}

export default Button
