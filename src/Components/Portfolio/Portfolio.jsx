import React from 'react'
import folio1 from "../../assets/folio-1.jpg";
import folio2 from "../../assets/folio-2.jpg";
import folio3 from "../../assets/folio-3.jpg";





export default function Portfolio() {
    return <>
        <div id='portfolio' className=" mx-auto py-16  max-w-[1140px]">
            <div className=" w-full text-center ">
                <p className=' title'>What I Did ?</p>
                <h2>Portfolio</h2>
            </div>
            <div className=" grid grid-cols-1  md:grid-cols-3 gap-4 py-16 px-16 sm:px-20   lg:px-6 mx-auto ">
                <div className=" folio-card mx-5  my-5  relative  overflow-hidden  ">
                    <img src={folio1} alt=" project" className=' w-full ' />
                    <span className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center   opacity-0 transition-all duration-300 w-0 h-0 rounded-full overflow-hidden overlay-card'>
                        <span className=' block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full'>
                            <h4 className=' font-extrabold text-[#695aa6] text-2xl mt-2 mb-2 '>Web Designing </h4>
                            <p className=' font-normal text-[ calc(13px +(15 - 13)*((100vw - 300px) /(1300 - 300)))] text-[#111]  mb-4 '> Category: Web Templates</p>
                      </span>
                    </span>
                </div>
                <div className=" folio-card mx-5  my-5  relative  overflow-hidden ">
                    <img src={folio2} alt=" project" className=' w-full ' />
                    <span className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center   opacity-0 transition-all duration-300 w-0 h-0 rounded-full overflow-hidden overlay-card'>
                        <span className=' block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full'>
                            <h4 className=' font-extrabold text-[#695aa6] text-2xl mt-2 mb-2 '>Web Designing </h4>
                            <p className=' font-normal text-[ calc(13px +(15 - 13)*((100vw - 300px) /(1300 - 300)))] text-[#111]  mb-4 '> Category: Web Templates</p>
                      </span>
                    </span>
                </div>
                <div className=" folio-card mx-5  my-5  relative  overflow-hidden  ">
                    <img src={folio3} alt=" project" className=' w-full ' />
                    <span className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center   opacity-0 transition-all duration-300 w-0 h-0 rounded-full overflow-hidden overlay-card'>
                        <span className=' block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full'>
                            <h4 className=' font-extrabold text-[#695aa6] text-2xl mt-2 mb-2 '>Web Designing </h4>
                            <p className=' font-normal text-[ calc(13px +(15 - 13)*((100vw - 300px) /(1300 - 300)))] text-[#111]  mb-4 '> Category: Web Templates</p>
                      </span>
                    </span>
                </div>
            </div>
    </div>
    
    
    
    </>
}
