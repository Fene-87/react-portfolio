import React from 'react'

const ProjectCard = ({ itemDetail }) => {
  const techStack = itemDetail.technologies;

  const cardBackground = {
    backgroundImage: `url(${itemDetail.featuredImage})`,
  };

  // const cardGradient = {
  //   background: linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%);
  // }

  return (
    <div  style={cardBackground} className='border bg-scroll bg-center bg-no-repeat bg-cover w-[350px] md:w-[400px] h-[450px] flex flex-col'>
      <div className=' p-10 h-full gradient-1'>
        <h2 className='text-white text-3xl'>{itemDetail.name}</h2>
        <p className='works-card-info text-white text-xl w-[295px] h-[77px] mt-20 overflow-hidden text-elipsis box-border font-sans font-normal text-base leading-6'>{itemDetail.description}</p>
        <div className='flex gap-5 mt-10'>
            {techStack.map((stack) => (
                <span className='works-card-tag border p-2 font-medium text-white'>{stack}</span>
            ))}
        </div>
      </div>
      <button className='w-full bg-[#ff6b00] p-3' type='button'>See Project</button>
    </div>
  )
}

export default ProjectCard;
