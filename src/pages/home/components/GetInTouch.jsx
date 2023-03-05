import React from 'react';
import { Link } from 'react-router-dom';

function GetInTouch() {
  return (
    <>
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center bg-primaryDark py-32 px-8 font-rubik lg:flex-row lg:justify-center ">
        <div className="flex flex-col gap-14 text-primaryWhite">
          <div className="relative w-fit whitespace-nowrap ">
            <h3 className=" text-textXS font-medium uppercase xs:text-textBASE ">
              Work Together?
            </h3>
            <h2 className=" text-[36px] font-bold uppercase leading-[3rem] xs:text-textXL sm:text-text2xl sm:leading-[4rem] ">
              GET IN TOUCH
            </h2>
            <p className=" text-textXS sm:text-textSM ">
              Interested in working together or have any questions?
              <br /> Let's meet and talk over a{' '}
              <span className="text-[#C5A76E]">coffee</span>
            </p>
          </div>
          <div className=" relative h-fit max-w-[450px] ">
            <img
              className=" absolute -top-14 right-0 "
              src="../curlypointer.svg"
              alt="pointer"
            />
            <Link to="/contact">
              <button className=" lg:hover:hoverShadow  btn mt-4 flex w-full min-w-[300px] max-w-[450px] items-center justify-center font-bold duration-300 md:max-w-[350px] lg:hover:scale-105 ">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src="../coffee.png" alt="coffee" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 ">
        <a
          className="font-rubik font-semibold text-primaryWhite duration-500 lg:hover:scale-105 "
          href="#home"
        >
          Back to Top
        </a>
      </div>
    </>
  );
}

export default GetInTouch;
