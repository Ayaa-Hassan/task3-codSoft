import React from 'react'
import homeImg from '../../assets/header.jpg'
import Navbar from '../Navbar/Navbar'




export default function Home() {
    return <>
    
        <div id='home'  className=" w-full h-screen ">
            <img src={homeImg} alt=" home bg " className=' object-cover h-svh w-full  top-[50px]  -z-10  ' />
            <div className=" absolute top-0 left-0 w-full h-full overlay">
                <Navbar />
                <div  class=" mt-5 max-w-[550px] md:max-w-[1140px] mx-auto flex-grow ps-[calc(100%/5)]   pt-32   ">
                    <h1 class="  opacity-80 text-[#212529]">
                        <span class=" text-2xl  md:text-5xl text-[#444] font-black md:mb-2  block">HI!</span>
                        <span class=" text-2xl md:text-6xl text-black/80 block font-black md:my-4  ">I am John</span>
                        <span class=" text-2xl md:text-6xl text-black/80 block font-black  "> Doe</span>
                    </h1>
                    <p class=" text-[10px] md:text-2xl tracking-[5px] md:tracking-[8px] opacity-80 mb-5 md:mt-5 mt-2">FRONTEND WEB DESIGNER</p>

                    <button class=" bg-[#695AA6]  hover:bg-[#4c3f80] ease-in duration-300 mt-5  text-white rounded-full px-5 py-3 ">Visit My Works</button>
                </div>
            </div>
    </div>
    
    
    
    
    
    
    </>
}
