import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Me from '../assets/me.svg'



const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='flex justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl my-2 font-bold text-[#ccd6f6]'>
          Popa Marius
        </h1>
        <h2 className='text-4xl sm:text-4xl my-2 font-bold text-[#8892b0]'>
          I'm a Software Developer.
        </h2>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>
         I’m a responsible developer from Helsinki, freshly arrived in Berlin.
         <br/>
          Responsible as in I make responsive and accessible websites.
          <br/>
           Thank you for checking out my portfolio. Please take a look around.
        </p>

        <div>
        <Link to='about' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            About me
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
        </div>
      </div>
      <div>
          <img src={Me} alt='Self Image' style={{ width: '400px' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
