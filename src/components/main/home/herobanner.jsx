import React from 'react';

function HeroBanner() {

  return (
    <div className='flex justify-center items-center sm:items-start pb-40 sm:pt-10 lg:pb-36 w-full relative inner'>
      <div className="flex flex-col md:flex-row-reverse w-full h-full gap-5 md:items-center">
        <div className='hidden lg:flex w-[30%]'>
          <h3 className=' text-textLG text-primaryWhite font-rubik font-semibold '>
            Welcome to my Website
          </h3>
        </div>
        <div className=' lg:w-[30%] max-h-[450px] h-1/2 md:h-full w-full flex justify-center relative md:w-2/5 '>
          {/* <img className='' src="./profile.png" alt="profile img" /> */}
          <img className='h-auto max-w-[320px]' src="./profile-big.png" alt="profile image" />
        </div>
        <div className="flex flex-col justify-center gap-10 h-full w-fit md:w-3/5 lg:w-2/5 xs:pl-4 md:pl-0">
          <div className="w-full">
              <h1 className='relative font-roboto text-textXL font-semibold text-primaryWhite leading-[4rem] xs:leading-[5rem]'>
                Hi, <br /> <span className='text-text2xl xs:text-text3xl'>i'm <span className='text-primaryCoral text-text2xl xs:text-text3xl '>Carl</span></span>
              </h1>
              <p className='block lg:hidden font-rubik font-semibold text-primaryWhite text-textBASE'>Welcome to my Website</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[330px]  ">
            <button className='w-full btn flex items-center justify-between ' >
              <p className='text-primaryWhite font-semibold text-textSM' >Hire Me</p>
              <img src="./arrow.svg" alt="arrow" />
            </button>
            <div className='w-full flex items-center justify-center'>
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
