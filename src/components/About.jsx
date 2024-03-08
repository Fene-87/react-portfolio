import React from 'react'

const About = () => {
  return (
    <div className='w-full bg-[#1c1a19] p-5 md:p-20'>
        <div>
            <div>
                <h1 className='text-[#f55800] text-6xl font-semibold leading-[80px] tracking-wide'>About me</h1>
                <p className='text-[#cfcfcf] text-[18px] md:text-[20px] leading-[32px] w-[300px] md:w-[566px] mt-10'>
                    Hello I'm a software developer! I can help you build a product, feature or website.
                    Look through some of my work and experience! If you like what you see and have a 
                    project you need coded, don't hestiate to contact me.
                </p>
                <button type='button' className='bg-[#ff6b00] p-3 text-white text-xl font-medium rounded-md mt-10'>Get my resume</button>
            </div>
            <div></div>
        </div>

        <hr className="w-48 md:w-[60rem] h-1 mx-auto my-20 bg-gray-400 border-0 rounded md:my-32 dark:bg-gray-900"></hr> 

        <div className='flex justify-around'>
            <ul>
                <li className='text-[#cfcfcf] text-[24px] md:text-[32px] border-b-2 md:border-none'><span></span>Languages</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>JavaScript</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>TypeScript</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Python</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Ruby</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>PHP</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>HTML</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>CSS</li>
            </ul>

            <ul>
                <li className='text-[#cfcfcf] text-[24px] md:text-[32px] border-b-2 md:border-none'><span></span>Frameworks</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>ReactJs</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>AngularJs</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>NodeJs</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>NextJs</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>ThreeJs</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Express</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Flask</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Django</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Ruby on Rails</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Laravel</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>SCSS</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Tailwind CSS</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>RSpec</li>
            </ul>

            <ul>
                <li className='text-[#cfcfcf] text-[24px] md:text-[32px] border-b-2 md:border-none'><span></span>Skills & DB</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>GitHub</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Git</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>GitLab</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Docker</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Clickup</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>Unity</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>MongoDB</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>PostgreSQL</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>MySQL</li>
            </ul>
        </div>
    </div>
  )
}

export default About;
