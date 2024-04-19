import React, { useState } from 'react'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../../redux/popupSlice';

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
            <ul className='flex gap-3 mt-4'>
              {info.technologies?.map((tech) => (
                <li className='text-[#091e42] border border-[#091e42] p-2 rounded'>{tech}</li>
              ))}
            </ul>
          </div>
          <FontAwesomeIcon icon={faX} className='text-[#091e42] cursor-pointer' onClick={close} />
        </div>

        <div className='border flex items-start justify-between mt-10 h-[80%] gap-5'>
          <div>
            <img src={info.featuredImage} alt="" />
          </div>
          <div className='flex flex-col h-full justify-between'>
            <p className='text-[#091e42]'>{info.description}</p>
            <div className='flex'>
              <button>Live Demo</button>
              <button>Github Repo</button>
            </div>
          </div>
        </div>
        
      </div>    
    </div>
  )
}

export default ProjectPopup;
