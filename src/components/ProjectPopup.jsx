import React, { useState } from 'react'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectPopup = () => {
  const [closedPopup, setClosedPopup] = useState(false);

  const handlePopup = () => {
    setClosedPopup(true)
  }

  return (
    <div className={closedPopup ? 'display-none absolute' : 'fixed z-[2] h-[40rem] w-[100%] mt-[5rem] flex justify-center'}>
      <div className='bg-white w-[90%] p-20'>
        <div>
          <FontAwesomeIcon icon={faX} className='text-[#091e42] cursor-pointer' onClick={handlePopup} />
        </div>
        <h1 className='text-[#091e42]'>Project name</h1>
        <p className='text-[#091e42]'>Project Details</p>
      </div>    
    </div>
  )
}

export default ProjectPopup;
