import React, { useState } from 'react'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../../redux/popupSlice';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectPopup = () => {
  const dispatch = useDispatch();

  const { isOpen, info } = useSelector((store) => store.popup)

  const close = () => {
    dispatch(closePopup())
  }

  return (
    <div className={!isOpen ? 'display-none absolute' : 'fixed z-[2] h-[40rem] w-[100%] mt-[5rem] flex justify-center'}>
      <div className='bg-white w-[80%] p-10 border-2 border-[#d3d3d3] rounded-lg'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-[#091e42] text-[32px] popup-header font-medium'>{info.name}</h1>
            <ul className='flex gap-3 mt-2 md:mt-4'>
              {info.technologies?.map((tech) => (
                <li className='text-[#091e42] border border-[#091e42] p-2 rounded'>{tech}</li>
              ))}
            </ul>
          </div>
          <FontAwesomeIcon icon={faX} className='text-[#091e42] cursor-pointer' onClick={close} />
        </div>

        <div className='flex flex-col md:flex-row items-start justify-between mt-5 md:mt-10 h-[80%] gap-5'>
          <div className='h-[60%] md:h-[80%]'>
            <img className='h-full' src={info.featuredImage} alt={info.name} />
          </div>
          <div className='flex flex-col h-[80%] justify-between'>
            <p className='text-[#091e42] popup-text w-[315px] md:w-[424px] font-normal text-base leading-6 md:leading-[30px]'>{info.description}</p>
            <div className='flex gap-3'>
              <button className='w-[150px] h-[40px] bg-[#ff6b00] text-white font-bold text-[17px]'><a href={info.liveLink} target='_blank' className='flex items-center justify-center gap-2'>Live Demo <FaArrowUpRightFromSquare /></a></button>
              <button className='w-[150px] h-[40px] bg-[#ff6b00] text-white font-bold text-[17px]'><a href={info.sourceLink} target='_blank'>Github Repo <FontAwesomeIcon icon={faGithub} /></a></button>
            </div>
          </div>
        </div>
        
      </div>    
    </div>
  )
}

export default ProjectPopup;
