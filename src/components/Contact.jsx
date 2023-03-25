import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Get in touch</p>
                <p className='text-gray-300 py-4'>// I would love to hear about new opportunities and projects. Feel free to send me an email at </p>
                <a href="home" target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            mariusppetrut@gmail.com
          </button>
        </a>
      </div>            
        </div>
    </div>
  )
}

export default Contact