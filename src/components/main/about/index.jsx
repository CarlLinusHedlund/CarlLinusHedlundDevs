import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


function AboutPage() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["FRONT END DEVELOPER", "COFFEEHOLIC", "PROBLEM SOLVER"],
      typeSpeed: 65,
      backSpeed: 35,
      showCursor: false,
      loop: true,
    }

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    }
  }, [])

  const handleClickScroll = () => {
    const element = document.getElementById('aboutme');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <section className=' bg-primaryDark w-full h-full scroll-smooth '>
      <div className=' relative px-8 h-screen max-w-5xl mx-auto flex flex-col justify-between '>
        <div className=' pt-20 '>
          <div className=" htmlTags before:content-['<div>'] after:content-['</div>'] flex flex-col gap-3 relative pl-2 ml-1 py-4 my-20 mb-10 md:after:text-sm md:before:text-sm before:text-primaryWhite after:text-primaryWhite ">
            <h2 ref={el} className=" pl-1 md:pl-3 py-1 md:py-3 relative htmlTags before:content-['<h2>'] after:content-['</h2>'] min-h-[32px] md:min-h-[44px] leading-5 font-rubik font-bold text-[22px] xxs:text-[27px] xs:text-[33px] sm:text-[35px] md:text-[45px] text-primaryCoral md:after:text-sm md:before:text-sm before:text-primaryWhite after:text-primaryWhite  "></h2>
            <p className=" text-primaryWhite pl-1 md:pl-3 py-0 sm:py-1 relative htmlTags before:content-['<p>'] after:content-['</p>'] text-textXS md:text-textSM font-rubik font-light md:font-light leading-4 max-w-sm md:max-w-lg md:after:text-sm md:before:text-sm before:text-primaryWhite after:text-primaryWhite  ">
              Coffeeholic based i Oslo, Norway. With passion for <br /> clean and responsive code. Currently studying at Noroff School of technology and digital Media.
            </p>
          </div>
          <div className="ml-2 py-2 max-w-xs htmlTags relative before:content-['<button\00a0href=#aboutme>'] after:content-['</button>'] lg:hover:hoverShadow duration-300 md:after:text-sm md:before:text-sm md:py-4 before:text-primaryWhite after:text-primaryWhite  ">
            <button onClick={handleClickScroll} className=' group  w-full btn flex items-center justify-between border-primaryCoral lg:hover:scale-105 duration-300 max-w-xs  '>
              <p className='text-primaryWhite font-semibold text-textSM'>More About Me</p>
              <img className=' group-hover:animate-bounce-x ' src="./arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
        <div className='flex justify-center bottom-0 '>
          <div className=' relative border-primaryWhite border-x border-t border-b-0 rounded-t-lg h-40 w-10 '>
            <p className=' whitespace-nowrap absolute rotate-90 text-primaryCoral left-[50%] right-[50%] top-2 text-textXS font-rubik '>SCROLL DOWN</p>
            <div className=' absolute bottom-1 h-5 w-full rotate-90'>
              <img className=' animate-bounce-x  w-5 h-5 ' src="./arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <section className=' bg-primaryWhite h-full w-full px-8 '>
      <div id='aboutme' className=' px-8 w-full bg-primaryWhite '>
        <div className=' flex justify-center '>
          <div className=' relative '>
            <h2 className=' opacity-5 font-extrabold text-textXL xxs:text-text2xl '>RESUME</h2>
            <div className=' w-full absolute -bottom-1 xxs:-bottom-3 flex-row text-center '>
              <span className='text-textLG xxs:text-[45px] font-rubik font-bold pr-3 '>ABOUT</span><span className=' text-textLG xxs:text-[45px] font-rubik font-bold text-primaryCoral '>ME</span>
            </div>
          </div>
        </div>
      </div>
      <div className=' pt-10 '>
        <div className=' w-full h-fit '>
          <div className=''>
            <img src="../profile-white.png" alt="profile img" />
          </div>
        </div>
      </div>
    </section>
     </>
  );
}

export default AboutPage;
