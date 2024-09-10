import React from 'react'
import blog1 from "../../assets/img-1.jpg";
import blog2 from "../../assets/img-2.jpg";
import { IoChatboxOutline } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';










export default function Blog() {
    return <>
        <div id='blog' className="max-w-[1140px] mx-auto py-16 ">
            <div className=" w-full text-center ">
                <p className=' title'>Recent Posts?</p>
                <h2>Blog</h2>
            </div>
            <div className=" grid grid-cols-1  py-16 px-16 sm:px-20   lg:px-6 mx-auto  ">
                <div className=" w-full grid grid-cols-1 md:grid-cols-3  text-left border border-[#dee2e6] mt-[30px] overflow-hidden">
                    <div className=" grid col-span-1 w-full ">
                        <img src={blog1} alt="art" className='w-full h-full object-cover' />
                    </div>
                    <div className=" grid col-span-2 py-[30px] pe-5 ps-[30px] ">
                        <h5 className=' font-bold text-[#695aa6] text-2xl '>Consectetur adipisicing elit</h5>
                        <p className=' py-[15px] text-[13px] font-thin text-[#111] tracking-[0.6px]'>
                            <a href="#" className=' me-[10px] text-[#444] opacity-70 font-semibold text-[13px]'>By: Admin</a>
                            <a href="#" className=' me-[10px] text-[#444] opacity-70 font-semibold text-[13px]'> <IoMdHeartEmpty size={20} className=' inline-block text-[#ec185fb3]' /> 234</a>
                            <a href="#" className=' me-[10px] text-[#444] opacity-70 font-semibold text-[13px]'><IoChatboxOutline size={20} className=' inline-block' /> 123</a>
                        </p>
                        <p className='text-[13px] font-thin text-[#111] tracking-[0.6px] mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio</p>
                        <p className='text-[13px] font-thin text-[#111] tracking-[0.6px] mb-4'>
                            <b>Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.</b></p>
                        <p className='text-[13px] font-thin text-[#111] tracking-[0.6px] mb-4'>Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>
                        <a href="#" className=' me-[10px] block relative mt-5 text-[#695aa6] opacity-70 font-semibold text-[13px]'>Read more
                            <MdOutlineKeyboardDoubleArrowRight size={20} className='  absolute left-[65px] top-[4px]' />
                        </a>
                    </div>
               </div>
                <div className=" w-full grid grid-cols-1 md:grid-cols-3  text-left border border-[#dee2e6] mt-[30px] overflow-hidden">
                    <div className=" grid col-span-1 w-full ">
                        <img src={blog2} alt="art" className='w-full h-full object-cover' />
                    </div>
                    <div className=" grid col-span-2 py-[30px] pe-5 ps-[30px] ">
                        <h5 className=' font-bold text-[#695aa6] text-2xl '>Consectetur adipisicing elit</h5>
                        <p className=' py-[15px] text-[13px] font-thin text-[#111] tracking-[0.6px]'>
                            <a href="#" className=' me-[10px] text-[#444] opacity-70 font-semibold text-[13px]'>By: Admin</a>
                            <a href="#" className=' me-[10px] text-[#444] opacity-70 font-semibold text-[13px]'> <IoMdHeartEmpty size={20} className=' inline-block text-[#ec185fb3]' /> 456</a>
                            <a href="#" className=' me-[10px] text-[#444] opacity-70 font-semibold text-[13px]'><IoChatboxOutline size={20} className=' inline-block' /> 264</a>
                        </p>
                        <p className='text-[13px] font-thin text-[#111] tracking-[0.6px] mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio</p>
                        <p className='text-[13px] font-thin text-[#111] tracking-[0.6px] mb-4'>
                            <b>Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.</b></p>
                        <p className='text-[13px] font-thin text-[#111] tracking-[0.6px] mb-4'>Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>
                        <a href="#" className=' me-[10px] block relative mt-5 text-[#695aa6] opacity-70 font-semibold text-[13px]'>Read more
                            <MdOutlineKeyboardDoubleArrowRight size={20} className='  absolute left-[65px] top-[4px]' />
                        </a>
                    </div>
               </div>
            </div>
    </div>
    
    
    
    </>
}
