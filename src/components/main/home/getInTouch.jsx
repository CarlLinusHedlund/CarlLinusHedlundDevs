import React from "react";
import { Link } from "react-router-dom";

function GetInTouch (){
  return (
    <>
      <div className="py-32 bg-primaryDark px-8 mx-auto max-w-5xl font-rubik flex flex-col-reverse items-center lg:justify-center lg:flex-row ">
        <div className="flex flex-col text-primaryWhite gap-14">
          <div className="relative w-fit whitespace-nowrap ">
            <h3 className=" uppercase font-medium text-textXS xs:text-textBASE ">Work Together?</h3>
            <h2 className=" uppercase font-bold text-[36px] leading-[3rem] xs:text-textXL sm:text-text2xl sm:leading-[4rem] ">GET IN TOUCH</h2>
            <p className=" text-textXS sm:text-textSM ">Interested in working together or have any questions? <br /> Let's meet and talk over a <span className="text-[#C5A76E]">coffee</span></p>
          </div>
          <div className=" relative h-fit max-w-[450px] ">
            <img className=" absolute -top-14 right-0 " src="../curlypointer.svg" alt="pointer" />
            <Link to="/contact">
              <button className=" lg:hover:hoverShadow  w-full btn flex items-center justify-center mt-4 min-w-[300px] max-w-[450px] md:max-w-[350px] lg:hover:scale-105 duration-300 font-bold ">
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
        <a className="text-primaryWhite font-rubik font-semibold lg:hover:scale-105 duration-500 " href="#home">Back to Top</a>
      </div>
    </>
  )
}

export default GetInTouch;