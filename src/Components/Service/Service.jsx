import React from 'react'
import ico2 from '../../assets/responsive.svg'
import ico1 from '../../assets/pencil-case.svg'
import ico3 from '../../assets/toolbox.svg'
import ico4 from '../../assets/analytics.svg'

export default function Service() {
    return <>
        <div className=" max-w-[1140px] mx-auto py-16 ">
            <div className=" w-full text-center ">
                <p className=' title'>What I Do ?</p>
                <h2>Service</h2>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-16   px-16   lg:px-0 ">
                <div className="card  my-4 border-2 mx-6 md:mx-0   text-center relative min-h-[230px] overflow-hidden ">
                    <div className=" p-[10px]">
                        <img src={ico1} alt=" pencil" className='  mx-auto w-[55px] h-[55px] mt-10 mb-[25px] transition-all duration-300 ' />
                        <h3>Adipisicing</h3>
                        <p className=' md:px-2 text-[#111111a4] absolute bottom-[-100%] opacity-0 mb-4 transition-all duration-300 '>Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>

                  </div>
                </div>
                <div className="card  my-4 border-2 mx-6 md:mx-0     text-center relative min-h-[230px] overflow-hidden ">
                    <div className=" p-[10px]">
                        <img src={ico2} alt=" pencil" className='  mx-auto w-[55px] h-[55px] mt-10 mb-[25px] transition-all duration-300 ' />
                        <h3>Sapiente</h3>
                        <p className=' md:px-2 text-[#111111a4] absolute bottom-[-100%] opacity-0 mb-4 transition-all duration-300 '>Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>

                  </div>
                </div>
                <div className="card  my-4 border-2 mx-6 md:mx-0   text-center relative min-h-[230px] overflow-hidden ">
                    <div className=" p-[10px]">
                        <img src={ico3} alt=" pencil" className='  mx-auto w-[55px] h-[55px] mt-10 mb-[25px] transition-all duration-300 ' />
                        <h3>Placeat</h3>
                        <p className=' md:px-2 text-[#111111a4] absolute bottom-[-100%] opacity-0 mb-4 transition-all duration-300 '>Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>

                  </div>
                </div>
                <div className="card  my-4 border-2 mx-6 md:mx-0   text-center relative min-h-[230px] overflow-hidden ">
                    <div className=" p-[10px]">
                        <img src={ico4} alt=" pencil" className='  mx-auto w-[55px] h-[55px] mt-10 mb-[25px] transition-all duration-300 ' />
                        <h3>Iusto</h3>
                        <p className=' md:px-2 text-[#111111a4] absolute bottom-[-100%] opacity-0 mb-4 transition-all duration-300 '>Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>

                  </div>
                </div>

            </div>

        </div>
    </>
}
