import React from 'react'

export default function Contact() {
    return <>
        <div id='contact' className="max-w-[1140px] mx-auto py-16 ">
            <div className=" w-full text-center ">
                <p className=' title'>How can you communicate?</p>
                <h2>Contact Me</h2>
            </div>
            <form className='m-auto max-w-[80%]  py-10  sm:px-10  text-center  lg:px-16 mx-auto' >
                <div className=" grid md:grid-cols-2 grid-cols-1 gap-4 w-full py-2">
                    <div className=' flex flex-col' >
                       
                        <input className=' border rounded-md p-3 flex border-[#695aa673]' placeholder='Your Name' type="text" name='name' />
                    </div>
                    <div className=" flex flex-col ">
                       
                        <input className=' border rounded-md p-3 flex border-[#695aa673]' placeholder='Enter Email' type="email" name='email' />
                    </div>
                </div>
               
               
                <div className="flex flex-col py-2">
                  
                    <textarea className=' border rounded-md p-3 border-[#695aa673]' placeholder='Write Something' name="message" rows="6"></textarea>
                </div>
                <div className="mx-auto w-full">
                    <button className='hover:bg-[#695aa6]  hover:text-white ease-in duration-300 mt-4 border-[#695aa6] border text-[#695aa6] px-4  py-3 mx-auto rounded-md '>
                        Send Message
                    </button>
               </div>
            </form>
    </div>
    
    
    </>
}
