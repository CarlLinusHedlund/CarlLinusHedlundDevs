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
      <section
        ref={observeRef}
        className=" h-full w-full bg-primaryWhite px-4 py-5 md:px-8 "
      >
        <div id="aboutme" className=" w-full bg-primaryWhite px-8 ">
          <div className=" flex justify-center ">
            <div className=" relative ">
              <h2 className=" text-textXL font-extrabold opacity-5 xxs:text-text2xl ">
                RESUME
              </h2>
              <div className=" absolute -bottom-1 w-full flex-row text-center xxs:-bottom-3 ">
                <span className="pr-3 font-rubik text-textLG font-bold xxs:text-[45px] ">
                  ABOUT
                </span>
                <span className=" font-rubik text-textLG font-bold text-primaryCoral xxs:text-[45px] ">
                  ME
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-10 pb-20 sm:flex sm:justify-center ">
          <div className="relative flex h-fit w-full flex-col items-center sm:w-fit sm:px-10 ">
            <div className="flex w-fit justify-center">
              <img
                className={` opacity-0 duration-700 ${
                  aboutSectionVisible ? 'opacity-100' : 'opacity-0'
                }`}
                src="../profile-white.png"
                alt="profile img"
              />
            </div>
            <div className="flex w-full max-w-xs justify-between gap-7 font-rubik text-primaryDark sm:absolute sm:h-full sm:max-w-none">
              <div className=" flex flex-col gap-5 sm:relative ">
                <div
                  className={`top-[15%] flex scale-50 flex-col opacity-0 sm:absolute sm:-left-10 sm:w-20 lg:-left-20 ${
                    aboutSectionVisible ? 'aboutAnimation' : ''
                  } `}
                  style={{ '--about-info-item-index': 1 }}
                >
                  <p className="text-[12px] font-semibold xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">
                    FULL NAME
                  </p>
                  <p className=" text-[10px] font-normal opacity-60 xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">
                    Carl Linus Hedlund
                  </p>
                </div>
                <div
                  className={`flex scale-50 flex-col opacity-0 sm:absolute sm:top-[40%] sm:-left-24 sm:w-20 lg:-left-32 ${
                    aboutSectionVisible ? 'aboutAnimation' : ''
                  } `}
                  style={{ '--about-info-item-index': 2 }}
                >
                  <p className=" text-[12px] font-semibold xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">
                    NATIONALITY
                  </p>
                  <p className=" text-[10px] font-light opacity-60 xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">
                    Norway/Sweden
                  </p>
                </div>
                <div
                  className={`flex scale-50 flex-col opacity-0 sm:absolute sm:top-[65%] sm:-left-24 sm:w-20 lg:-left-32 ${
                    aboutSectionVisible ? 'aboutAnimation' : ''
                  } `}
                  style={{ '--about-info-item-index': 3 }}
                >
                  <p className=" text-[12px] font-semibold xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">
                    LANGUAGES
                  </p>
                  <p className=" whitespace-pre-wrap text-[10px] font-light opacity-60 xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">
                    Norwegian, Swedish & English
                  </p>
                </div>
                <div
                  className={`flex scale-50 flex-col opacity-0 sm:absolute sm:top-[90%] sm:-left-10 sm:w-20 lg:-left-20 ${
                    aboutSectionVisible ? 'aboutAnimation' : ''
                  } `}
                  style={{ '--about-info-item-index': 4 }}
                >
                  <p className=" text-[12px] font-semibold xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">
                    EMAIL
                  </p>
                  <p className=" text-[10px] font-light opacity-60 xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">
                    linus.hedlund96@hotmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 sm:relative">
                <div
                  className={` flex scale-50 flex-col opacity-0 sm:absolute sm:top-[15%] sm:-right-10 sm:w-20 lg:-right-20 ${
                    aboutSectionVisible ? 'aboutAnimation' : ''
                  } `}
                  style={{ '--about-info-item-index': 1 }}
                >
                  <p className=" text-[12px] font-semibold xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">
                    GITHUB
                  </p>
                  <a
                    href="https://github.com/CarlLinusHedlund"
                    className=" text-[10px] font-light underline opacity-60 xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] "
                  >
                    CarlLinusHedlund
                  </a>
                </div>
                <div
                  className={` flex scale-50 flex-col opacity-0 sm:absolute sm:top-[40%] sm:-right-24 sm:w-20 lg:-right-32 ${
                    aboutSectionVisible ? 'aboutAnimation' : ''
                  } `}
                  style={{ '--about-info-item-index': 2 }}
                >
                  <p className=" text-[12px] font-semibold xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">
                    ADDRESS
                  </p>
                  <p className=" text-[10px] font-light opacity-60 xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">
                    Oslo, Norway
                  </p>
                </div>
                <div
                  className={`flex scale-50 flex-col opacity-0 sm:absolute sm:top-[65%] sm:-right-24 sm:w-20 lg:-right-32 ${
                    aboutSectionVisible ? 'aboutAnimation' : ''
                  } `}
                  style={{ '--about-info-item-index': 3 }}
                >
                  <p className=" text-[12px] font-semibold xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">
                    AGE
                  </p>
                  <p className=" whitespace-pre-line text-[10px] font-light opacity-60 xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">
                    26 Years
                  </p>
                </div>
                <div
                  className={`flex scale-50 flex-col opacity-0 sm:absolute sm:top-[90%] sm:-right-10 sm:w-20 lg:-right-20 ${
                    aboutSectionVisible ? 'aboutAnimation' : ''
                  } `}
                  style={{ '--about-info-item-index': 4 }}
                >
                  <p className=" text-[12px] font-semibold xxs:text-[14px] sm:whitespace-nowrap sm:text-textSM lg:text-[18px] ">
                    PHONE
                  </p>
                  <p className=" text-[10px] font-light opacity-60 xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] ">
                    +47 46929833
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center px-8 font-rubik text-[14px] font-normal ">
          <p className=" max-w-xl text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            sapiente nihil illum aliquam eveniet harum itaque in neque, ipsum
            adipisci, voluptate tenetur consequatur, qui quo tempora praesentium
            nostrum quisquam enim. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque ducimus voluptatem consectetur id, alias
            illum numquam vero ipsa. Quisquam delectus in sit distinctio harum
            soluta asperiores ea nihil ut corrupti. Lorem, ipsum dolor sit amet
            consec
          </p>
        </div>
        <div className="flex w-full justify-center py-10 ">
          <a
            style={{ '--about-info-item-index': 8 }}
            className={` darkBtn flex justify-between text-textSM font-medium text-primaryWhite opacity-0 duration-300 ${
              aboutSectionVisible ? 'aboutAnimation' : ''
            } `}
            download
            href="../profile-white.png"
          >
            <p>Download CV</p>
            <img className=" " src="./documentdownload.svg" alt="download cv" />
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
