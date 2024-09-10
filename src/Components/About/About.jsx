import React from 'react'
import man from "../../assets/man.png";
export default function About() {
    return <>
        <div id='about' className=" py-16 max-w-[1140px] mx-auto">
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 py-16 px-16   lg:px-6">
                <div className=" grid col-span-1">
                    <img src={man} alt="man person" className='w-full p-2 md:p-0' />
                </div>
                <div className=" grid col-span-2 md:ms-8 px-4 md:text-start text-center  py-4 mx-auto">
                    <p className='title mt-4'>Who Am I ?</p>
                    <h2 className=' mb-4'>About Me</h2>
                    <p className='md:text-base text-sm mx-2 md:mx-0  text-[#111] opacity-70  font-normal '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste
                        <br/>
                            culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!
                        </p>
                    <div className="my-8">
                        <button className=' border    border-[#695AA6] text-[#695AA6] hover:text-white hover:bg-[#695AA6] rounded-full ease-in duration-300 py-2 px-4 h-fit '>Download CV</button>
                   </div>
                </div>
            </div>
    </div>
    
    
    
    </>
}
