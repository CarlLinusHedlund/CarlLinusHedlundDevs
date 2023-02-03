import React from 'react';

function HeroBanner() {
  return (
    <div className='flex justify-center items-center'>
      <div className="">
        <div>
          <img className='w-full' src="./profile.png" alt="" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="">
              <h1 className='relative font-roboto text-text2xl xs:text-text3xl font-semibold text-primaryWhite'>
                <h3 className='absolute font-black -top-[40px] text-textXL font-roboto text-primaryWhite'>Hi,</h3>
                i'm <span className='font-roboto text-text2xl xs:text-text3xl text-primaryCoral font-semibold'>Carl</span>
                <p className='md:hidden absolute -bottom-2 font-rubik font-semibold text-primaryWhite text-textBASE'>Welcome to my Website</p> 
              </h1>
          </div>
          <div className="flex flex-col gap-4">
            <button className='w-full h-14 md:h-12 rounded-2xl border-2 border-primaryCoral px-4 flex items-center justify-between ' >
              <p className='text-primaryWhite font-semibold text-textSM' >Hire Me</p>
              <img src="./arrow.svg" alt="arrow" />
            </button>
            <div className='w-full flex justify-center'>
              <a className='flex gap-2 hover:scale-105 duration-500 ' href="./profile.png" download>
                <p className='text-textSM text-primaryWhite font-light '>Download CV</p>
                <img className='' src="./documentdownload.svg" alt="download cv" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroBanner;
