import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

function AboutSection() {
  const el = useRef(null);

  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['COFFEEHOLIC', 'PROBLEM SOLVER', 'FRONT END DEVELOPER'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className=" mx-auto min-h-[500px] max-w-5xl px-4 pb-20 xs:px-8 ">
      <div className=" min-w-xs flex items-center justify-center gap-8 pb-10 font-rubik text-[40px] font-extrabold sm:gap-12 sm:text-textXL sm:font-bold ">
        <div className="flex gap-7 py-10 text-primaryDark sm:gap-9 ">
          <div className="realtive h-fit w-fit">
            <span className="absolute duration-500 lg:hover:-translate-y-2 lg:hover:-rotate-6 lg:hover:scale-110 lg:hover:text-primaryCoral ">
              A
            </span>
          </div>
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:-translate-y-2 lg:hover:-rotate-6 lg:hover:scale-110 lg:hover:text-primaryCoral ">
              B
            </span>
          </div>
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:-translate-y-2 lg:hover:-rotate-6 lg:hover:scale-110 lg:hover:text-primaryCoral ">
              O
            </span>
          </div>
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:-translate-y-2 lg:hover:-rotate-6 lg:hover:scale-110 lg:hover:text-primaryCoral ">
              U
            </span>
          </div>
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:-translate-y-2 lg:hover:-rotate-6 lg:hover:scale-110 lg:hover:text-primaryCoral ">
              T
            </span>
          </div>
        </div>
        <div className=" flex gap-8 text-primaryCoral sm:gap-11  ">
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:translate-y-2 lg:hover:text-primaryDark ">
              M
            </span>
          </div>
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:translate-y-2 lg:hover:text-primaryDark ">
              E
            </span>
          </div>
        </div>
      </div>
      <div className=" htmlTags relative my-20 ml-1 mb-10 flex flex-col gap-3 py-4 pl-2 before:content-['<div>'] after:content-['</div>'] md:before:text-sm md:after:text-sm">
        <h2
          ref={el}
          className=" htmlTags relative min-h-[32px] py-1 pl-1 font-rubik text-[22px] font-bold leading-5 text-primaryCoral before:content-['<h2>'] after:content-['</h2>'] xxs:text-[27px] xs:text-[33px] sm:text-[35px] md:min-h-[44px] md:py-3 md:pl-3 md:text-[45px] md:before:text-sm md:after:text-sm "
        >
          FRONT END DEVELOPER
        </h2>
        <p className=" htmlTags relative max-w-sm py-0 pl-1 font-rubik text-textXS font-normal leading-4 before:content-['<p>'] after:content-['</p>'] sm:py-1 md:max-w-lg md:pl-3 md:text-textSM md:font-light md:before:text-sm md:after:text-sm ">
          Coffeeholic based i Oslo, Norway. With passion for <br /> clean and
          responsive code. Currently studying at Noroff School of technology and
          digital Media.
        </p>
      </div>
      <div className="htmlTags lg:hover:hoverShadowDark relative ml-2 max-w-xs py-2 duration-300 before:content-['<button\00a0href=/about>'] after:content-['</button>'] md:py-4 md:before:text-sm md:after:text-sm ">
        <Link to="/about" className="w-fit">
          <button className=" btn  group flex w-full max-w-xs items-center justify-between border-primaryDark bg-primaryDark duration-300 lg:hover:scale-105  ">
            <p className="text-textSM font-semibold text-primaryWhite">
              More About Me
            </p>
            <img
              className=" group-hover:animate-bounce-x "
              src="./arrow.svg"
              alt="arrow"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutSection;
