import React, { useEffect, useRef, useState } from 'react';

export default function Resume() {
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
                  target="_blank"
                  href="https://github.com/CarlLinusHedlund"
                  className=" text-[10px] font-light underline opacity-60 xxs:text-textXS sm:whitespace-nowrap sm:text-[13px] lg:text-[14px] "
                  rel="noreferrer"
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
          Hello, I'm Carl Linus Hedlund. 26 year old from Oslo, Norway. A
          front-end developer with a solid education from Noroff. Experienced
          with the latest cutting edge development tools and procedures. Good
          knowledge in HTML, CSS (Tailwind, Sass), React. During my studies, I
          have developed skills in creating engaging and responsive user
          interfaces using modern technologies. I have also gained some
          experience on my own with postgreSQL databases, which has given me a
          broader understanding of data storage and management. I am passionate
          about learning and expanding my expertise in front-end development,
          and I am now seeking opportunities to contribute to exciting projects
          and further develop as a developer.
        </p>
      </div>
      <div className="flex w-full justify-center py-10 ">
        <a
          style={{ '--about-info-item-index': 8 }}
          className={` darkBtn flex justify-between text-textSM font-medium text-primaryWhite opacity-0 duration-300 ${
            aboutSectionVisible ? 'aboutAnimation' : ''
          } `}
          download
          href="../cv-carllinushedlund.pdf"
        >
          <p>Download CV</p>
          <img className=" " src="./documentdownload.svg" alt="download cv" />
        </a>
      </div>
    </section>
  );
}
