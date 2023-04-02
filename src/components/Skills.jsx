import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Git from '../assets/git.png';
import Mongo from '../assets/mongo.png';
import Drupal from '../assets/drupal.png';
import SASS from '../assets/sass.png';
import PHP from '../assets/php.png';
import Docker from '../assets/docker.png';
import Figma from '../assets/figma.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#b0dade] text-black'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-3' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-3' src={CSS} alt="HTML icon" />
                  <p className='my-4 color-black'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-3' src={SASS} alt="HTML icon" />
                  <p className='my-4'>SASS</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-3' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-3' src={ReactImg} alt="HTML icon" />
                  <p className='my-5'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-3' src={Drupal} alt="HTML icon" />
                  <p className='my-4'>DUPAL</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-9' src={PHP} alt="HTML icon" />
                  <p className='my-4'>PHP</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-3' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-3' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-2' src={Docker} alt="HTML icon" />
                  <p className='my-4'>DOCKER</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-2' src={Git} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='shadow-md shadow-[#6d9ad1] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto my-4' src={Figma} alt="HTML icon" />
                  <p className='my-6'>FIGMA</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;