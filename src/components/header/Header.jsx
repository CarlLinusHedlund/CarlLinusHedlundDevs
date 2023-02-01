/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react';

function Header() {
  const burgerRef = useRef();
  const navRef = useRef();
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [navListClass, setNavListClass] = useState('navList');

  const updateMenu = () => {
    function overlayStart() {
      navRef.current.classList.add('opacity-1');
      navRef.current.classList.remove('opacity-0');
    }
    function overlayRemove() {
      navRef.current.classList.remove('flex');
      navRef.current.classList.add('hidden');
    }
    if (!isMenuClicked) {
      setNavListClass('navList navFade');
      burgerRef.current.classList.add('after:opacity-0');
      navRef.current.classList.add('flex');
      navRef.current.classList.remove('hidden');
      burgerRef.current.classList.add('burgerActive');
      setTimeout(overlayStart, 300);
    } else {
      setNavListClass('navList navFade opacity-0');
      burgerRef.current.classList.remove('after:opacity-0');
      navRef.current.classList.add('opacity-0');
      burgerRef.current.classList.remove('burgerActive');
      setTimeout(overlayRemove, 500);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div
      id="header"
      className="sticky top-0 bottom-0 z-20 h-[90px] w-full border-b border-[#2c2c2c] bg-primaryDark px-8 md:h-screen md:w-[110px] md:border-r md:border-b-0 md:px-0 md:py-12"
    >
      <div className="flex h-full w-full flex-row items-center justify-between md:flex-col-reverse">
        <div className="flex items-center justify-center text-primaryWhite">
          <img src="../public/logo.svg" alt="logo" />
        </div>
        <button
          type="button"
          onClick={updateMenu}
          className="duration-800 flex h-10 items-center justify-center"
        >
          <div
            ref={burgerRef}
            className="relative h-[2.5px] w-7 rounded-lg bg-primaryWhite duration-500 before:absolute before:bottom-2 before:left-0 before:h-[2.5px] before:w-7 before:rounded-lg before:bg-white before:duration-500 after:absolute after:top-2 after:left-0 after:h-[2.5px] after:w-6 after:rounded-lg after:bg-white after:duration-500"
          />
        </button>
      </div>
      <div
        ref={navRef}
        className="md:fixedWidth fixed top-0 right-0 z-10 mt-[90px] hidden h-full w-full flex-col justify-between gap-3 overflow-scroll bg-primaryDark text-[#cacaca] opacity-0 duration-700 md:mt-0"
      >
        <ul className="mt-[30px] flex flex-col pl-[30px] md:pl-[80px]">
          <li
            className={navListClass}
            style={{ '--large-navigation-item-index': 1 }}
          >
            HOME
          </li>
          <li
            className={navListClass}
            style={{ '--large-navigation-item-index': 2 }}
          >
            GET IN TOUCH
          </li>
          <li
            className={navListClass}
            style={{ '--large-navigation-item-index': 3 }}
          >
            PROJECTS
          </li>
          <li
            className={navListClass}
            style={{ '--large-navigation-item-index': 4 }}
          >
            ABOUT ME
          </li>
        </ul>
        <div className="mb-[90px] flex flex-col gap-4 pl-[30px] pb-3 md:pb-12 md:mb-0 md:pl-[80px]">
          <div className=''>
            <h3 className="text-textSM uppercase">Where to find me?</h3>
          </div>
          <div className="flex flex-col gap-3">
            <a className="flex-gap flex items-center gap-2" href="www.facebook.com">
              <img
                className="h-3 w-3"
                src="../public/github.svg"
                alt="github link"
              />
              <p className="text-textXS">github</p>
            </a>
            <a className="flex flex-row items-center gap-2" href="#">
              <img
                className="h-3 w-3"
                src="../public/linkdin.svg"
                alt="linkdin link"
              />
              <p className="text-textXS">linkdIn</p>
            </a>
            <a className="flex flex-row items-center gap-2" href="#">
              <img
                className="h-3 w-3"
                src="../public/twitter.svg"
                alt="twitter link"
              />
              <p className="text-textXS">twitter</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
