import React from 'react';
import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <div className="inner relative flex w-full items-center justify-center pb-40 sm:items-start sm:pt-10 lg:pb-36">
      <div className="flex h-full w-full flex-col md:flex-row-reverse  md:items-center lg:justify-around ">
        <div className="z-10 hidden w-[40%] flex-col whitespace-nowrap text-primaryWhite lg:flex ">
          <h3 className=" font-rubik text-textBASE font-medium leading-[1.5rem]  ">
            Welcome to my Website
          </h3>
          <h2 className=" text-textLG font-bold leading-[2.5rem] ">
            <span className=" text-textLG text-primaryCoral ">
              Front End Developer
            </span>
            {' '}
            from
            {' '}
            <br />
            {' '}
            Oslo, Norway
          </h2>
          <p className=" whitespace-normal text-textSM ">
            Here you can find everything about me,
            <br />
            {' '}
            my latest works, skills and platforms i
            <br />
            {' '}
            work with on a daily basis.
            {' '}
          </p>
        </div>
        <div className=" relative flex max-h-[450px] w-full justify-center md:h-full md:w-2/5 lg:w-[20%] ">
          {/* <img className='' src="./profile.png" alt="profile img" /> */}
          <img
            className=" object-contain "
            src="./profile-big.png"
            alt="profile image"
          />
        </div>
        <div className="z-10 flex h-full w-fit flex-col flex-nowrap justify-center gap-10 xs:pl-4 md:w-3/5 md:pl-0 lg:w-fit">
          <div className="w-full  whitespace-nowrap">
            <h1 className="relative font-roboto text-textXL font-semibold leading-[4rem] text-primaryWhite xs:leading-[5rem]">
              Hi,
              {' '}
              <br />
              {' '}
              <span className="text-text2xl xs:text-text3xl">
                i'm
              </span>
              {' '}
              <span className="text-text2xl text-primaryCoral xs:text-text3xl ">
                Carl
              </span>
            </h1>
            <p className="block font-rubik text-textBASE font-semibold text-primaryWhite lg:hidden">
              Welcome to my Website
            </p>
          </div>
          <div className="flex max-w-[330px] flex-col gap-4  ">
            <Link to="/contact">
              <button type="button" className="lg:hover:hoverShadow btn group flex w-full items-center justify-between duration-300 lg:hover:scale-105  ">
                <p className="text-textSM font-semibold text-primaryWhite">
                  Hire Me
                </p>
                <img
                  className=" group-hover:animate-bounce-x "
                  src="./arrow.svg"
                  alt="arrow"
                />
              </button>
            </Link>
            <div className="flex w-full items-center justify-center">
              <a
                className="flex gap-2 duration-500 hover:scale-105 "
                href="./profile.png"
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
