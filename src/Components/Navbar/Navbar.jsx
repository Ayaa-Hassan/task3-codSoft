import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu'




export default function Navbar() {
    const [nav, setNav] = useState(false);
    const navHandel = () => {
        setNav(!nav)
    }



    return <>
        <div className=" w-full h-[70px]    ">
            <div className=" max-w-[1140px] h-full mx-auto  flex justify-between items-center px-8  ">
                <div className=" w-full">
                    <a href="#home" className='text-4xl  font-semibold text-white '>
                        Meyawo
                    </a>
                </div>
                <div  className=' w-full hidden md:block text-white text-center  backdrop-blur-sm   '>
                    <ul className=" flex justify-between items-center text-base font-semibold">
                        <li className=' hover:border-b-2 pb-1 border-[#695AA6] hover:text-[#695aa6] ease-in duration-200 ' >
                            <a href="#home"> Home</a>
                        </li>
                        <li className=' hover:border-b-2 pb-1 border-[#695AA6]  hover:text-[#695aa6] ease-in duration-200 '>
                            <a href="#about">About</a>
                        </li>
                        <li className=' hover:border-b-2 pb-1 border-[#695AA6]  hover:text-[#695aa6] ease-in duration-200 '>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className=' hover:border-b-2 pb-1 border-[#695AA6]  hover:text-[#695aa6] ease-in duration-200 '>
                            <a href="#testmonial">Testmonial</a>
                        </li>
                        <li className=' hover:border-b-2 pb-1 border-[#695AA6]  hover:text-[#695aa6] ease-in duration-200 '>
                            <a href="#blog">Blog</a>
                        </li>
                        <li className=' hover:border-b-2 pb-1 border-[#695AA6]  hover:text-[#695aa6] ease-in duration-200 '>
                            <a href="#contact">Contact</a>
                        </li>
                      
                    </ul>
                </div>
                <div  onClick={navHandel} className=" md:hidden text-white">
                    {nav ? <IoClose size={40}  /> : <LuMenu size={40} />}
                </div>
              
            </div>
            <div >
                <ul onClick={navHandel} className={nav ? " bg-white shadow-xl  md:hidden top-[70px] left-0 w-full flex-col flex items-center text-lg py-4 font-semibold absolute min-color border-t border-[#695AA6]  z-50" : " absolute top-0 left-[-100%] ease-in"}>
                    <li className=' py-2'>
                        <a href="#home"> Home</a>
                    </li>
                    <li className=' py-2'>
                        <a href="#about">About</a>
                    </li>
                    <li className=' py-2'>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className=' py-2'>
                        <a href="#testmonial">Testmonial</a>
                    </li>
                    <li className=' py-2'>
                        <a href="#blog">Blog</a>
                    </li>
                    <li className=' py-2'>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>
            </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
}
