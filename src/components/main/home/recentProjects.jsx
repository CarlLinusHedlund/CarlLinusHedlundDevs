import React from "react";
import { Link } from "react-router-dom";


function RecentProjects() {
  return (
    <>
      <div>
        <div className=" relative pb-5 px-8 max-w-5xl lg:flex lg:justify-center lg:flex-col mx-auto ">
          <h3 className=" text-primaryCoral font-semibold text-textSM xs:text-textBASE sm:text-textLG ">MOST RECENT</h3>
          <h2 className=" text-primaryWhite leading-[2.8rem] sm:leading-[4rem] lg:leading-[7rem] font-bold text-[50px] xs:text-[68px] sm:text-[100px] lg:text-[160px] ">PROJECTS</h2>
        </div>
        <img className=" w-full " src="../wave.svg" alt="wave " />
      </div>
      <div className="flex flex-col gap-32 px-8 pt-32 max-w-5xl mx-auto ">
        <div className="flex flex-col lg:flex-row gap-6 ">
          <div className="flex items-center">
            <img src="../jobless.png" alt="" />
          </div>
          <div className=" uppercase text-primaryWhite font-rubik ">
            <h3 className=" text-primaryCoral ">INTERACTION DESIGN</h3>
            <h2 className=" uppercase leading-10 sm:leading-[3rem] font-bold text-[40px] sm:text-textXL lg:text-textXL ">Jobless.no</h2>
            <p className=" max-w-[450px] md:max-w-[350px] text-textXS ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id turpis vestibulum amet, nulla ullamcorper diam amet tincidunt. Aliquam urna, dis elementum at mauris pulvinar bibendum.  </p>
            <Link to="/projects">
              <button className='group lg:hover:hoverShadow w-full btn flex items-center justify-between mt-4 max-w-[450px] md:max-w-[350px] lg:hover:scale-105 duration-300 ' >
                <p className='text-primaryWhite font-semibold text-textSM' >Read More</p>
                <img className="group-hover:animate-bounce-x" src="./arrow.svg" alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-6 ">
          <div className=" flex items-center ">
            <img src="../snowydays.png" alt="" />
          </div>
          <div className=" uppercase text-primaryWhite ">
            <h3 className=" text-primaryCoral ">SEMESTER PROJECT 1</h3>
            <h2 className=" uppercase leading-10 sm:leading-[3rem] font-bold text-[40px] sm:text-textXL lg:text-textXL whitespace-nowrap ">SNOWY DAYS</h2>
            <p className=" max-w-[450px] md:max-w-[350px] text-textXS ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id turpis vestibulum amet, nulla ullamcorper diam amet tincidunt. Aliquam urna, dis elementum at mauris pulvinar bibendum.  </p>
            <Link to="/projects">
              <button className='group lg:hover:hoverShadow w-full btn flex items-center justify-between mt-4 max-w-[450px] md:max-w-[350px] lg:hover:scale-105 duration-300 ' >
                <p className='text-primaryWhite font-semibold text-textSM' >Read More</p>
                <img className="group-hover:animate-bounce-x" src="./arrow.svg" alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center underline text-primaryWhite text-textBASE duration-300 hover:scale-110 ">
          <Link to="/projects" >More Projects</Link>
        </div>
      </div>
    </>
  )
}

export default RecentProjects;