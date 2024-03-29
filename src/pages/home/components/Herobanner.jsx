import React from 'react';
import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <div className="inner relative flex w-full items-center justify-center pb-40 sm:items-start sm:pt-10 lg:pb-36">
      <div className="flex h-full w-full flex-col gap-10 md:items-center  smd:flex-row-reverse lg:justify-around ">
        <div className=" relative flex h-fit w-full items-center justify-center md:h-full md:w-2/5 smd:max-w-md lg:w-full ">
          <img
            className="w-full object-contain md:object-cover "
            src="./carl-portrait.png"
            alt="profile"
          />
        </div>
        <div className="z-10 flex h-full w-fit flex-col flex-nowrap justify-center gap-10 xs:pl-4 md:w-3/5 md:pl-0 lg:w-fit">
          <div className="w-full  whitespace-nowrap">
            <h1 className="relative font-roboto text-textXL font-semibold leading-[4rem] text-primaryWhite xs:leading-[5rem]">
              Hi, <br />
              <span className="text-text2xl xs:text-text3xl">i'm</span>
              <span className="text-text2xl text-primaryCoral xs:text-text3xl ">
                {' '}
                Carl
              </span>
            </h1>
            <p className="block max-w-sm whitespace-normal font-rubik text-[16px] font-normal text-primaryWhite ">
              Here you can find everything about me, my latest works, skills and
              platforms i work with on a daily basis.
            </p>
          </div>
          <div className="flex max-w-[330px] flex-col gap-4  ">
            <Link to="/contact">
              <button
                type="button"
                className="lg:hover:hoverShadow btn group flex w-full items-center justify-center duration-300 lg:hover:scale-105  "
              >
                <p className="text-textSM font-semibold text-primaryWhite">
                  Contact Me
                </p>
              </button>
            </Link>
            <div className="flex w-full items-center justify-center">
              <a
                className="flex gap-2 duration-500 hover:scale-105 "
                href="./cv-carllinushedlund.pdf"
                download
              >
                <p className="text-textSM font-light text-primaryWhite ">
                  Download CV
                </p>
                <img
                  className=""
                  src="./documentdownload.svg"
                  alt="download cv"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-14 -right-10 flex h-8 w-36 rotate-90 items-center justify-between rounded-l-md border border-r-0 border-primaryWhite px-2 sm:right-10 ">
        <p className="font-rubik text-textXS font-extralight text-primaryCoral ">
          SCROLL DOWN
        </p>
        <img
          className="animate-bounce-x h-5 w-5"
          src="./arrow.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
