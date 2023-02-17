import React from 'react';
import { Link } from 'react-router-dom';


function HeroBanner() {

  return (
    <div className='flex justify-center items-center sm:items-start pb-40 sm:pt-10 lg:pb-36 w-full relative inner'>
      <div className="flex flex-col md:flex-row-reverse w-full h-full  md:items-center lg:justify-around ">
        <div className='hidden lg:flex flex-col w-[40%] z-10 whitespace-nowrap text-primaryWhite '>
          <h3 className=' text-textBASE font-rubik font-medium leading-[1.5rem]  '>
            Welcome to my Website
          </h3>
          <h2 className=' leading-[2.5rem] text-textLG font-bold '><span className=' text-primaryCoral text-textLG '>Front End Developer</span>  from <br /> Oslo, Norway</h2>
          <p className=' text-textSM whitespace-normal '>Here you can find everything about me, <br /> my latest works, skills and platforms i <br /> work with on a daily basis. </p>
        </div>
        <div className=' lg:w-[20%] max-h-[450px] md:h-full w-full flex justify-center relative md:w-2/5 '>
          {/* <img className='' src="./profile.png" alt="profile img" /> */}
          <img className=' object-contain ' src="./profile-big.png" alt="profile image" />
        </div>
        <div className="flex flex-col z-10 justify-center flex-nowrap gap-10 h-full w-fit md:w-3/5 lg:w-fit xs:pl-4 md:pl-0">
          <div className="w-full  whitespace-nowrap">
              <h1 className='relative font-roboto text-textXL font-semibold text-primaryWhite leading-[4rem] xs:leading-[5rem]'>
                Hi, <br /> <span className='text-text2xl xs:text-text3xl'>i'm <span className='text-primaryCoral text-text2xl xs:text-text3xl '>Carl</span></span>
              </h1>
              <p className='block lg:hidden font-rubik font-semibold text-primaryWhite text-textBASE'>Welcome to my Website</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[330px]  ">
            <Link to='/contact'>
              <button className='group lg:hover:hoverShadow w-full btn flex items-center justify-between lg:hover:scale-105 duration-300  ' >
                <p className='text-primaryWhite font-semibold text-textSM' >Hire Me</p>
                <img className=' group-hover:animate-bounce-x ' src="./arrow.svg" alt="arrow" />
              </button>
            </Link>
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
        <img className='animate-bounce-x w-5 h-5' src="./arrow.svg" alt="arrow" />
      </div>
    </div>
  );
}

export default HeroBanner;
