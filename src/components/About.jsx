import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#edf1f6] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 text-[#4e6ac5] border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='text-[#4e6ac5]'> Knowledge explorer, synchronizing opposites to reach fullfilment.</p>
            </div>
            <div>
              <div className='text-black'>I am currently working as a Software Developer for  
              <a href='https://druid.fi/en/' target="_blank" className='text-[#4e6ac5]'> Druid Oy. </a>
              </div>
              <div className='text-black'> In my free time you can find me either writing lyrics, practicing physical movement outdoors or learning about fields I have no history with. 
              The values I resonate with the most are boldness, accountability and trust. </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
