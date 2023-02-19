import React, { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";






function AboutSection() {
  const el = useRef(null);

  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["FRONT END DEVELOPER", "COFFEEHOLIC", "PROBLEM SOLVER"],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
      loop: true,
    }

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    }
  }, [])

  // const el = useRef(null);


  // useEffect(() => {
  //   const typed = new Typed (el.current, {
  //     strings: ["FRONT END DEVELOPER", "COFFEEHOLIC", "PROBLEM SOLVER"],
  //     typeSpeed: 120,
  //     backSpeed: 120,
  //     showCursor: false,
  //     loop: true
  //   })
  // })
  return(
    <>
    <div className=" max-w-5xl mx-auto px-4 md:px-8 pb-20 ">
      <div className=" text-[40px] sm:text-textXL font-rubik font-extrabold sm:font-bold flex items-center justify-center gap-8 sm:gap-12 pb-10 min-w-xs ">
        <div className="text-primaryDark py-10 flex gap-7 sm:gap-9 ">
          <div className="realtive w-fit h-fit">
            <span className="absolute duration-500 lg:hover:-rotate-6 lg:hover:scale-110 lg:hover:-translate-y-2 lg:hover:text-primaryCoral ">A</span>
          </div>
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:-rotate-6 lg:hover:scale-110 lg:hover:-translate-y-2 lg:hover:text-primaryCoral ">B</span>
          </div>
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:-rotate-6 lg:hover:scale-110 lg:hover:-translate-y-2 lg:hover:text-primaryCoral ">O</span>
          </div>
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:-rotate-6 lg:hover:scale-110 lg:hover:-translate-y-2 lg:hover:text-primaryCoral ">U</span>
          </div>
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:-rotate-6 lg:hover:scale-110 lg:hover:-translate-y-2 lg:hover:text-primaryCoral ">T</span>
          </div>
        </div>
        <div className=" text-primaryCoral flex gap-8 sm:gap-11  ">
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:translate-y-2 lg:hover:text-primaryDark ">M</span>
          </div>
          <div className="realtive">
            <span className="absolute duration-500 lg:hover:translate-y-2 lg:hover:text-primaryDark ">E</span>
          </div>
        </div>   
      </div>
      <div className=" flex flex-col gap-1 md:gap-2 relative px-3 py-5 pt-20 mb-10">
        <h3 className=" relative font-rubik font-semibold text-[14px] xs:text-textSM md:text-textBASE text-primaryDark ">
          CARL LINUS HEDLUND
        </h3>
        <h2 ref={el} className=" min-h-[16px] leading-4 font-rubik font-bold text-[22px] xxs:text-[27px] xs:text-textLG md:text-[45px] text-primaryCoral "></h2>
        <p className=" text-textXS md:text-textSM font-rubik font-normal md:font-light leading-3 xs:pt-2">
          Coffeeholic based i Oslo, Norway. <br /> With passion for clean and responsive code.
        </p>
      </div>
      <Link to='/about' >
        <button className='group lg:hover:hoverShadow w-full btn flex items-center justify-between border-primaryDark bg-primaryDark lg:hover:scale-105 duration-300 max-w-xs  ' >
            <p className='text-primaryWhite font-semibold text-textSM' >More About Me</p>
            <img className=' group-hover:animate-bounce-x ' src="./arrow.svg" alt="arrow" />
        </button>
      </Link>
    </div>
    </>
  )
}

export default AboutSection;