'use client'

import { FaCopyright } from "react-icons/fa"
import{FaArrowPointer} from "react-icons/fa6"
import { Link } from "react-scroll"


const Footer = () => {
  return (
    <>
      <section className="w-full bg-black text-white flex justify-center items-center p-3">
        <FaCopyright className="size-5 text-white"/>
        <h1 className="ml-2 text-white text-center font-semibold">Copyright 2024, Ziad Hussein, All Right Reserved </h1>
        
      </section>

      <div id="icon-box" className="bg-teal-700 text-white p-3 rounded-full hover:bg-black cursor-pointer fixed  bottom-6 right-6">
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowPointer className="w-[35px] h-[35px]"/>
        </Link>
      </div>
    </>
  )
}

export default Footer