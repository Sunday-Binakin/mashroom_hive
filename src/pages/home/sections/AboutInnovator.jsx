import React from 'react'
import Innovator from '../../../../public/images/innovator.jpg'

const AboutInnovator = () => {
  return (
    <>
      <div className='flex justify-center items-center mx-auto'>
        <div className='w-[70vh] h-[70vh] bg-amber-300'>
          <img src={Innovator} alt="Innovator" />
        </div>
        <div className='w-[70vh] h-[70vh] bg-green-200'>
          <div className='w-50 h-50 rounded-[50%] bg-gray-300 flex ml-auto'>
          </div>
          <div className='h-[10rem] w-[26.2rem] mt-18.5 bg-gray-400 ml-auto'>
          </div>
        </div>

        {/* <div className='w-[30rem] h-[50vh] flex justify-center items-center bg-gray-300 mr-60 '>
<p>Welcome</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laudantium harum necessitatibus! Quidem maxime enim amet repudiandae voluptate libero odio nam unde dolor, cum facilis tenetur velit, voluptas consequatur similique?</p>
    </div> */}
      </div>

    </>
  )
}

export default AboutInnovator