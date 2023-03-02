import React from 'react';
import { Link } from 'react-router-dom';

function RecentProjects() {
  return (
    <>
      <div>
        <div className=" relative mx-auto max-w-5xl px-8 pb-5 lg:flex lg:flex-col lg:justify-center ">
          <h3 className=" text-textSM font-semibold text-primaryCoral xs:text-textBASE sm:text-textLG ">
            MOST RECENT
          </h3>
          <h2 className=" text-[50px] font-bold leading-[2.8rem] text-primaryWhite xs:text-[68px] sm:text-[100px] sm:leading-[4rem] lg:text-[160px] lg:leading-[7rem] ">
            PROJECTS
          </h2>
        </div>
        <img className=" w-full " src="../wave.svg" alt="wave " />
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-32 px-8 pt-32 ">
        <div className="flex flex-col gap-6 lg:flex-row ">
          <div className="flex items-center">
            <img src="../jobless.png" alt="" />
          </div>
          <div className=" font-rubik uppercase text-primaryWhite ">
            <h3 className=" text-primaryCoral ">INTERACTION DESIGN</h3>
            <h2 className=" text-[40px] font-bold uppercase leading-10 sm:text-textXL sm:leading-[3rem] lg:text-textXL ">
              Jobless.no
            </h2>
            <p className=" max-w-[450px] text-textXS md:max-w-[350px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id turpis
              vestibulum amet, nulla ullamcorper diam amet tincidunt. Aliquam
              urna, dis elementum at mauris pulvinar bibendum.{' '}
            </p>
            <Link to="/projects">
              <button
                type="button"
                className="lg:hover:hoverShadow btn group mt-4 flex w-full max-w-[450px] items-center justify-between duration-300 md:max-w-[350px] lg:hover:scale-105 "
              >
                <p className="text-textSM font-semibold text-primaryWhite">
                  Read More
                </p>
                <img
                  className="group-hover:animate-bounce-x"
                  src="./arrow.svg"
                  alt="arrow"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex flex-col gap-6 lg:flex-row ">
          <div className=" flex items-center ">
            <img src="../snowydays.png" alt="" />
          </div>
          <div className=" uppercase text-primaryWhite ">
            <h3 className=" text-primaryCoral ">SEMESTER PROJECT 1</h3>
            <h2 className=" whitespace-nowrap text-[40px] font-bold uppercase leading-10 sm:text-textXL sm:leading-[3rem] lg:text-textXL ">
              SNOWY DAYS
            </h2>
            <p className=" max-w-[450px] text-textXS md:max-w-[350px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id turpis
              vestibulum amet, nulla ullamcorper diam amet tincidunt. Aliquam
              urna, dis elementum at mauris pulvinar bibendum.{' '}
            </p>
            <Link to="/projects">
              <button
                type="button"
                className="lg:hover:hoverShadow btn group mt-4 flex w-full max-w-[450px] items-center justify-between duration-300 md:max-w-[350px] lg:hover:scale-105 "
              >
                <p className="text-textSM font-semibold text-primaryWhite">
                  Read More
                </p>
                <img
                  className="group-hover:animate-bounce-x"
                  src="./arrow.svg"
                  alt="arrow"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center text-textBASE text-primaryWhite underline duration-300 hover:scale-110 ">
          <Link to="/projects">More Projects</Link>
        </div>
      </div>
    </>
  );
}

export default RecentProjects;
