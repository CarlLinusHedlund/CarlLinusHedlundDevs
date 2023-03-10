import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import Resume from './components/Resume';

function AboutPage() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['FRONT END DEVELOPER', 'COFFEEHOLIC', 'PROBLEM SOLVER'],
      typeSpeed: 65,
      backSpeed: 35,
      showCursor: false,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  const handleClickScroll = () => {
    const element = document.getElementById('aboutme');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
    >
      <Resume />
      <section className=" h-full w-full scroll-smooth bg-primaryDark ">
        <div className=" relative mx-auto flex h-screen min-h-[640px] max-w-5xl flex-col justify-between px-8 ">
          <div className=" pt-20 ">
            <div className=" htmlTags relative my-20 ml-1 mb-10 flex flex-col gap-3 py-4 pl-2 before:text-primaryWhite before:content-['<div>'] after:text-primaryWhite after:content-['</div>'] md:before:text-sm md:after:text-sm ">
              <h2
                ref={el}
                className=" htmlTags relative min-h-[32px] py-1 pl-1 font-rubik text-[22px] font-bold leading-5 text-primaryCoral before:text-primaryWhite before:content-['<h2>'] after:text-primaryWhite after:content-['</h2>'] xxs:text-[27px] xs:text-[33px] sm:text-[35px] md:min-h-[44px] md:py-3 md:pl-3 md:text-[45px] md:before:text-sm md:after:text-sm  "
              />
              <p className=" htmlTags relative max-w-sm py-0 pl-1 font-rubik text-textXS font-light leading-4 text-primaryWhite before:text-primaryWhite before:content-['<p>'] after:text-primaryWhite after:content-['</p>'] sm:py-1 md:max-w-lg md:pl-3 md:text-textSM md:font-light md:before:text-sm md:after:text-sm  ">
                Coffeeholic based i Oslo, Norway. With passion for <br /> clean
                and responsive code. Currently studying at Noroff School of
                technology and digital Media.
              </p>
            </div>
            <div className="htmlTags lg:hover:hoverShadow relative ml-2 max-w-xs py-2 duration-300 before:text-primaryWhite before:content-['<button\00a0href=#aboutme>'] after:text-primaryWhite after:content-['</button>'] md:py-4 md:before:text-sm md:after:text-sm  ">
              <button
                type="button"
                onClick={handleClickScroll}
                className=" btn  group flex w-full max-w-xs items-center justify-between border-primaryCoral duration-300 lg:hover:scale-105  "
              >
                <p className="text-textSM font-semibold text-primaryWhite">
                  More About Me
                </p>
                <img
                  className=" group-hover:animate-bounce-x "
                  src="./arrow.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
          <div className="bottom-0 flex justify-center ">
            <div className=" relative h-40 w-10 rounded-t-lg border-x border-t border-b-0 border-primaryWhite ">
              <p className=" absolute left-[50%] right-[50%] top-2 rotate-90 whitespace-nowrap font-rubik text-textXS text-primaryCoral ">
                SCROLL DOWN
              </p>
              <div className=" absolute bottom-1 h-5 w-full rotate-90">
                <img
                  className=" animate-bounce-x  h-5 w-5 "
                  src="./arrow.svg"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutPage;
