import React from 'react'
import Resume from '/assets/mark-resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faDocker, faGit, faGithub, faGitlab, faHtml5, faJs, faLaravel, faNodeJs, faPhp, faPython, faReact, faUnity } from '@fortawesome/free-brands-svg-icons';
import { SiClickup, SiExpress, SiFlask, SiDjango, SiTailwindcss, SiJest, SiMongodb, SiMysql, SiRubyonrails } from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { DiRuby } from "react-icons/di";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";
import { languages, frameworks, skills } from '../data/SkillsData';

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
                <a href={Resume} download="mark-resume.pdf">
                    <button type='button' className='bg-[#ff6b00] p-3 text-white text-xl font-medium rounded-md mt-10 hover:text-[#cfcfcf]'>Get my resume</button>
                </a>
            </div>
            <div></div>
        </div>

        <hr className="w-48 md:w-[60rem] h-1 mx-auto my-20 bg-gray-400 border-0 rounded md:my-32 dark:bg-gray-900"></hr> 

        <div className='flex justify-around'>
            <ul>
                <li className='text-[#cfcfcf] text-[24px] md:text-[32px] border-b-2 md:border-none'><span></span>Languages</li>
                {languages.map((language, index) => (
                    <li key={index} className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>
                        {language.type === 'font-awesome' ? (
                            <span><FontAwesomeIcon icon={language.icon} /> {language.name}</span>
                        ) : (
                            <span className='flex items-center gap-1'><language.icon /> {language.name}</span>
                        )}
                    </li>
                ))}
            </ul>

            <ul>
                <li className='text-[#cfcfcf] text-[24px] md:text-[32px] border-b-2 md:border-none'><span></span>Frameworks</li>
                {frameworks.map((framework, index) => (
                    <li key={index} className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'>
                        {framework.type === 'font-awesome' ? (
                            <span><FontAwesomeIcon icon={framework.icon} /> {framework.name}</span>
                        ) : (
                            <span className='flex items-center gap-1'><framework.icon /> {framework.name}</span>
                        )}
                    </li>
                ))}
            </ul>

            <ul>
                <li className='text-[#cfcfcf] text-[24px] md:text-[32px] border-b-2 md:border-none'><span></span>Skills & DB</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'><span><FontAwesomeIcon icon={faGithub} /></span> GitHub</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'><span><FontAwesomeIcon icon={faGit} /></span> Git</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'><span><FontAwesomeIcon icon={faGitlab} /></span> GitLab</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'><span><FontAwesomeIcon icon={faDocker} /></span> Docker</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'><span className='flex items-center gap-1'><SiClickup /> Clickup</span></li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'><span><FontAwesomeIcon icon={faUnity} /></span> Unity</li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'><span className='flex items-center gap-1'><SiMongodb /> MongoDB</span></li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'><span className='flex items-center gap-1'><BiLogoPostgresql /> PostgreSQL</span></li>
                <li className='text-[#cfcfcf] text-[15px] md:text-[20px] leading-[42px]'><span className='flex items-center gap-1'><SiMysql /> MySQL</span></li>
            </ul>
        </div>
    </div>
  )
}

export default About;
