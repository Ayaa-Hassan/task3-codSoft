import React from 'react'
import scooter from "../../assets/scooter.svg";
import shipped from "../../assets/shipped.svg";
import startup from "../../assets/startup.svg";
import { IoCloseOutline } from 'react-icons/io5';





export default function Price() {
    return <>
        <div className=" max-w-[1140px] mx-auto py-16 ">
            <div className=" w-full text-center ">
                <p className=' title'>How Much I Charge ?</p>
                <h2>My Pricing</h2>
            </div>
            <div className=" w-full grid grid-cols-1  md:grid-cols-3 gap-4 py-16 px-16 sm:px-20   lg:px-6">
                <div className=" hover:translate-y-[-7px]  mx-3  my-5 duration-300 shadow-lg   border py-[30px] px-[15px] flex-grow transition-all text-center ">
                    <div className="">
                        <img src={scooter} alt=" scooter icon"  className=' w-[70px] mb-[25px]  mx-auto'/>
                    </div>
                    <div className="">
                        <h6 className=' mb-[15px] text-lg font-extrabold text-[#695aa6] '>Free</h6>
                        <div className="">
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>accusamus reprehenderit</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>provident dolorem</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>quos neque</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>fugiat quibusdam</p>
                            <p  className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '><IoCloseOutline  size={30} className=' mx-auto text-[#ec185d] opacity-80'/></p>
                            <p  className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '><IoCloseOutline  size={30} className=' mx-auto text-[#ec185d] opacity-80'/></p>
                        </div>
                    </div>
                    <div className=" my-[15px]">
                        <span className=' relative right-[-1px]  top-[-6px] md:text-2xl text-[#212529] text-[15px] font-semibold opacity-80'>$</span>
                        <span className=' text-[18px] md:text-3xl text-[#212529] font-semibold opacity-80'>0.00/Month</span>
                    </div>
                    <button className=' bg-[#695aa6] text-white py-2 px-4 hover:bg-[#584a93] ease-in duration-300 my-4'>Subscribe </button>

                </div>
                <div className=" hover:translate-y-[-7px]  mx-3  my-5 duration-300 shadow-lg   border py-[30px] px-[15px] flex-grow transition-all text-center ">
                    <div className="">
                        <img src={shipped} alt=" scooter icon"  className=' w-[70px] mb-[25px]  mx-auto'/>
                    </div>
                    <div className="">
                        <h6 className=' mb-[15px] text-lg font-extrabold text-[#695aa6] '>Basic</h6>
                        <div className="">
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>accusamus reprehenderit</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>provident dolorem</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>quos neque</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>fugiat quibusdam</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>accusamus laboriosam</p>
                            <p  className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '><IoCloseOutline  size={30} className=' mx-auto text-[#ec185d] opacity-80'/></p>
                        </div>
                    </div>
                    <div className=" my-[15px]">
                        <span className=' relative right-[-1px]  top-[-6px] md:text-2xl text-[#212529] text-[15px] font-semibold opacity-80'>$</span>
                        <span className=' text-[18px] md:text-3xl text-[#212529] font-semibold opacity-80'>9.99/Month</span>
                    </div>
                    <button className=' bg-[#695aa6] text-white py-2 px-4 hover:bg-[#584a93] ease-in duration-300 my-4'>Subscribe </button>

                </div>
                <div className=" hover:translate-y-[-7px]  mx-3  my-5 duration-300 shadow-lg   border py-[30px] px-[15px] flex-grow transition-all text-center ">
                    <div className="">
                        <img src={startup} alt=" scooter icon"  className=' w-[70px] mb-[25px]  mx-auto'/>
                    </div>
                    <div className="">
                        <h6 className=' mb-[15px] text-lg font-extrabold text-[#695aa6] '>Premium</h6>
                        <div className="">
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>accusamus reprehenderit</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>provident dolorem</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>quos neque</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>fugiat quibusdam</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>accusamus laboriosam</p>
                            <p className=' mb-3  opacity-60 text-[#111] text-sm md:text-lg tracking-[0.6px] '>inventore omnis</p>
                        </div>
                    </div>
                    <div className=" my-[15px]">
                        <span className=' relative right-[-1px]  top-[-6px] md:text-2xl text-[#212529] text-[15px] font-semibold opacity-80'>$</span>
                        <span className=' text-[18px] md:text-3xl text-[#212529] font-semibold opacity-80'>99.9/Month</span>
                    </div>
                    <button className=' bg-[#695aa6] text-white py-2 px-4 hover:bg-[#584a93] ease-in duration-300 my-4'>Subscribe </button>

                </div>
            </div>
    </div>
    
    
    
    </>
}
