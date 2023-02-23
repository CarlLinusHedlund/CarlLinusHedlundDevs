import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

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

  const observeRef = useRef();
  const [aboutSectionVisible, setAboutSectionVisbile] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setAboutSectionVisbile(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootMargin: '50px',
    threshold: 0.4,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (observeRef.current) observer.observe(observeRef.current);
    return () => {
      if (observeRef.current) observer.unobserve(observeRef.current);
    };
  }, [observeRef, options]);

  return (
    <>
      <section className=" bg-primaryDark w-full h-full scroll-smooth ">
        <div className=" relative px-8 h-screen min-h-[640px] max-w-5xl mx-auto flex flex-col justify-between ">
          <div className=" pt-20 ">
            <div className=" htmlTags before:content-['<div>'] after:content-['</div>'] flex flex-col gap-3 relative pl-2 ml-1 py-4 my-20 mb-10 md:after:text-sm md:before:text-sm before:text-primaryWhite after:text-primaryWhite ">
              <h2 ref={el} className=" pl-1 md:pl-3 py-1 md:py-3 relative htmlTags before:content-['<h2>'] after:content-['</h2>'] min-h-[32px] md:min-h-[44px] leading-5 font-rubik font-bold text-[22px] xxs:text-[27px] xs:text-[33px] sm:text-[35px] md:text-[45px] text-primaryCoral md:after:text-sm md:before:text-sm before:text-primaryWhite after:text-primaryWhite  " />
              <p className=" text-primaryWhite pl-1 md:pl-3 py-0 sm:py-1 relative htmlTags before:content-['<p>'] after:content-['</p>'] text-textXS md:text-textSM font-rubik font-light md:font-light leading-4 max-w-sm md:max-w-lg md:after:text-sm md:before:text-sm before:text-primaryWhite after:text-primaryWhite  ">
                Coffeeholic based i Oslo, Norway. With passion for
                {' '}
                <br />
                {' '}
                clean and responsive code. Currently studying at Noroff School of technology and digital Media.
              </p>
            </div>
            <div className="ml-2 py-2 max-w-xs htmlTags relative before:content-['<button\00a0href=#aboutme>'] after:content-['</button>'] lg:hover:hoverShadow duration-300 md:after:text-sm md:before:text-sm md:py-4 before:text-primaryWhite after:text-primaryWhite  ">
              <button type="button" onClick={handleClickScroll} className=" group  w-full btn flex items-center justify-between border-primaryCoral lg:hover:scale-105 duration-300 max-w-xs  ">
                <p className="text-primaryWhite font-semibold text-textSM">More About Me</p>
                <img className=" group-hover:animate-bounce-x " src="./arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
          <div className="flex justify-center bottom-0 ">
            <div className=" relative border-primaryWhite border-x border-t border-b-0 rounded-t-lg h-40 w-10 ">
              <p className=" whitespace-nowrap absolute rotate-90 text-primaryCoral left-[50%] right-[50%] top-2 text-textXS font-rubik ">SCROLL DOWN</p>
              <div className=" absolute bottom-1 h-5 w-full rotate-90">
                <img className=" animate-bounce-x  w-5 h-5 " src="./arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={observeRef} className=" bg-primaryWhite h-full w-full px-4 md:px-8 py-5 ">
        <div id="aboutme" className=" px-8 w-full bg-primaryWhite ">
          <div className=" flex justify-center ">
            <div className=" relative ">
              <h2 className=" opacity-5 font-extrabold text-textXL xxs:text-text2xl ">RESUME</h2>
              <div className=" w-full absolute -bottom-1 xxs:-bottom-3 flex-row text-center ">
                <span className="text-textLG xxs:text-[45px] font-rubik font-bold pr-3 ">ABOUT</span>
                <span className=" text-textLG xxs:text-[45px] font-rubik font-bold text-primaryCoral ">ME</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-10 pb-20 sm:flex sm:justify-center ">
          <div className="relative w-full h-fit flex flex-col items-center sm:w-fit sm:px-10 ">
            <div className="w-fit flex justify-center">
              <img className={` opacity-0 duration-700 ${aboutSectionVisible ? 'opacity-100' : 'opacity-0'}`} src="../profile-white.png" alt="profile img" />
            </div>
            <div className="font-rubik text-primaryDark flex justify-between w-full max-w-xs gap-7 sm:absolute sm:h-full sm:max-w-none">
              <div className=" flex flex-col gap-5 sm:relative ">
                <div className={`flex flex-col sm:absolute top-[15%] sm:-left-10 lg:-left-20 sm:w-20 scale-50 opacity-0 ${aboutSectionVisible ? 'aboutAnimation' : ''} `} style={{ '--about-info-item-index': 1 }}>
                  <p className="font-semibold text-[12px] xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">FULL NAME</p>
                  <p className=" font-normal opacity-60 text-[10px] xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">Carl Linus Hedlund</p>
                </div>
                <div className={`sm:absolute sm:top-[40%] sm:-left-24 lg:-left-32 flex flex-col scale-50 sm:w-20 opacity-0 ${aboutSectionVisible ? 'aboutAnimation' : ''} `} style={{ '--about-info-item-index': 2 }}>
                  <p className=" font-semibold text-[12px] xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">NATIONALITY</p>
                  <p className=" font-light opacity-60 text-[10px] xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">Norway/Sweden</p>
                </div>
                <div className={`sm:absolute sm:top-[65%] sm:-left-24 lg:-left-32 flex flex-col sm:w-20 scale-50 opacity-0 ${aboutSectionVisible ? 'aboutAnimation' : ''} `} style={{ '--about-info-item-index': 3 }}>
                  <p className=" font-semibold text-[12px] xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">LANGUAGES</p>
                  <p className=" font-light opacity-60 text-[10px] xxs:text-textXS whitespace-pre-wrap sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">Norwegian, Swedish & English</p>
                </div>
                <div className={`sm:absolute sm:top-[90%] sm:-left-10 lg:-left-20 flex flex-col sm:w-20 opacity-0 scale-50 ${aboutSectionVisible ? 'aboutAnimation' : ''} `} style={{ '--about-info-item-index': 4 }}>
                  <p className=" font-semibold text-[12px] xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">EMAIL</p>
                  <p className=" font-light opacity-60 text-[10px] xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">linus.hedlund96@hotmail.com</p>

                </div>
              </div>
              <div className="flex flex-col gap-5 sm:relative">
                <div className={` flex flex-col sm:absolute sm:top-[15%] sm:-right-10 lg:-right-20 sm:w-20 opacity-0 scale-50 ${aboutSectionVisible ? 'aboutAnimation' : ''} `} style={{ '--about-info-item-index': 1 }}>
                  <p className=" font-semibold text-[12px] xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">GITHUB</p>
                  <a href="https://github.com/CarlLinusHedlund" className=" font-light opacity-60 text-[10px] xxs:text-textXS underline sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">CarlLinusHedlund</a>
                </div>
                <div className={` flex flex-col sm:absolute sm:top-[40%] sm:-right-24 lg:-right-32 sm:w-20 opacity-0 scale-50 ${aboutSectionVisible ? 'aboutAnimation' : ''} `} style={{ '--about-info-item-index': 2 }}>
                  <p className=" font-semibold text-[12px] xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">ADDRESS</p>
                  <p className=" font-light opacity-60 text-[10px] xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">Oslo, Norway</p>
                </div>
                <div className={`flex flex-col sm:absolute sm:top-[65%] sm:-right-24 lg:-right-32 sm:w-20 opacity-0 scale-50 ${aboutSectionVisible ? 'aboutAnimation' : ''} `} style={{ '--about-info-item-index': 3 }}>
                  <p className=" font-semibold text-[12px] xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">AGE</p>
                  <p className=" font-light opacity-60 text-[10px] xxs:text-textXS whitespace-pre-line sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">26 Years</p>
                </div>
                <div className={`flex flex-col sm:absolute sm:top-[90%] sm:-right-10 lg:-right-20 sm:w-20 opacity-0 scale-50 ${aboutSectionVisible ? 'aboutAnimation' : ''} `} style={{ '--about-info-item-index': 4 }}>
                  <p className=" font-semibold text-[12px] xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">PHONE</p>
                  <p className=" font-light opacity-60 text-[10px] xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">+47 46929833</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center font-rubik font-normal px-8 text-[14px] ">
          <p className=" text-center max-w-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente nihil illum aliquam eveniet harum itaque in neque, ipsum adipisci, voluptate tenetur consequatur, qui quo tempora praesentium nostrum quisquam enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus voluptatem consectetur id, alias illum numquam vero ipsa. Quisquam delectus in sit distinctio harum soluta asperiores ea nihil ut corrupti. Lorem, ipsum dolor sit amet consec</p>
        </div>
        <div className="w-full flex justify-center py-10 ">
          <a style={{ '--about-info-item-index': 8 }} className={` darkBtn flex justify-between text-primaryWhite duration-300 text-textSM font-medium opacity-0 ${aboutSectionVisible ? 'aboutAnimation' : ''} `} download href="../profile-white.png">
            <p>Download CV</p>
            <img
              className=" "
              src="./documentdownload.svg"
              alt="download cv"
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
