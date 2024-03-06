import React from 'react'

const ProjectCard = ({ itemDetail }) => {
  const techStack = itemDetail.technologies;

  const cardBackground = {
    backgroundImage: `url(${itemDetail.featuredImage})`,
  };

  return (
    <div  style={cardBackground} className='border bg-scroll bg-center bg-no-repeat bg-cover max-w-[350px] md:max-w-[400px] h-[450px] flex flex-col rounded-t-lg overflow-hidden'>
      <div className=' p-10 h-full gradient-1'>
        <h2 className='works-card-span text-white text-3xl overflow-hidden leading-10'>{itemDetail.name}</h2>
        <p className='works-card-info text-white text-xl w-[295px] h-[77px] mt-20 md:mt-24 overflow-hidden text-elipsis box-border font-sans font-normal text-base leading-6'>{itemDetail.description}</p>
        <div className='flex gap-5 mt-10'>
            {techStack.map((stack) => (
                <span className='works-card-tag works-card-span overflow-hidden border p-2 font-medium text-white leading-7'>{stack}</span>
            ))}
        </div>
      </div>
      <button className='w-full bg-[#ff6b00] p-3 text-white text-xl font-medium' type='button'>See Project</button>
    </div>
  )
}

export default ProjectCard;
