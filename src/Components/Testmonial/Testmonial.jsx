import React from 'react'
import avatar1 from '../../assets/avatar2.jpg'
import avatar2 from '../../assets/avatar3.jpg'








export default function Testmonial() {
  return <>
  
    
    <div id='testmonial' className=" max-w-[1140px] mx-auto py-16">

      <div className=" w-full text-center ">
        <p className=' title'>What Think Client About Me ?</p>
        <h2>Testmonial</h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-10 sm:px-20     mx-auto">
        <div className=" w-full relative px-[15px]  ">
          <div className=" text-center mb-[30px]">
            <div className=" min-w-[90px] max-w-[90px] z-20 absolute top-[15%] left-[-30px]">
              <img src={avatar1} alt=" man "  className=' p-1 w-[90px] h-[90px] rounded-full mx-auto'/>
            </div>
            <div className=" text-start border py-[20px] ps-[60px] pe-[20px]">
              <p className=' text-sm font-thin text-[#111] tracking-[0.6px] mb-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
              <h6 className='mt-5 font-semibold text-[#695aa6] text-base mb-2 '>Emily Reb</h6>
            </div>
          </div>

        </div>
        <div className=" w-full relative px-[15px]  ">
          <div className=" text-center mb-[30px]">
            <div className=" min-w-[90px] max-w-[90px] z-20 absolute top-[15%] left-[-30px]">
              <img src={avatar2} alt=" man "  className=' p-1 w-[90px] h-[90px] rounded-full mx-auto'/>
            </div>
            <div className=" text-start border py-[20px] ps-[60px] pe-[20px]">
              <p className=' text-sm font-thin text-[#111] tracking-[0.6px] mb-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
              <h6 className='mt-5 font-semibold text-[#695aa6] text-base mb-2 '>Emily Reb</h6>
            </div>
          </div>

        </div>
      </div>

    </div>
  
  </>
}

