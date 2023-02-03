import React from 'react';

function HeroBanner() {
  return (
    <div className='flex justify-center items-center sm:items-start pb-40 sm:pt-10 lg:pb-36 w-full relative inner'>
      <div className="flex flex-col md:flex-row-reverse w-full h-full gap-5">
        <div className='h-1/2 w-full flex justify-center relative md:w-2/5 '>
          <img src="./profile.png" alt="profile img" />
        </div>
        <div className="flex flex-col gap-10 h-[50%] w-fit md:w-3/5 xs:pl-10 sm:pl-20 md:pl-0">
          <div className="w-full">
              <h1 className='relative font-roboto text-textXL font-semibold text-primaryWhite leading-[4rem] xs:leading-[5rem]'>
                Hi, <br /> <span className='text-text2xl xs:text-text3xl'>i'm <span className='text-primaryCoral text-text2xl xs:text-text3xl '>Carl</span></span>
              </h1>
              <p className='md:hidden font-rubik font-semibold text-primaryWhite text-textBASE'>Welcome to my Website</p>
          </div>
          <div className="flex flex-col gap-4">
            <button className='w-full h-14 md:h-12 rounded-2xl border-2 border-primaryCoral px-4 flex items-center justify-between max-w-[330px] ' >
              <p className='text-primaryWhite font-semibold text-textSM' >Hire Me</p>
              <img src="./arrow.svg" alt="arrow" />
            </button>
            <div className='w-it flex justify-center'>
              <a className='flex gap-2 hover:scale-105 duration-500 ' href="./profile.png" download>
                <p className='text-textSM text-primaryWhite font-light '>Download CV</p>
                <img className='' src="./documentdownload.svg" alt="download cv" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-36 h-8 border border-r-0 border-primaryWhite absolute bottom-14 -right-10 sm:right-10 rotate-90 flex items-center justify-between px-2 rounded-l-md '>
        <p className='font-rubik font-extralight text-primaryCoral text-textXS '>SCROLL DOWN</p>
        <img className='w-4 h-4' src="./arrow.svg" alt="arrow" />
      </div>
    </div>
  );
}

export default HeroBanner;
