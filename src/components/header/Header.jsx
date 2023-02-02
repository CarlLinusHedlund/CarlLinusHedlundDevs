/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react';
import MediaLinks from './MediaLinks';
import { Link, redirect } from 'react-router-dom';


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
          >
          </div>
        </button>
      </div>
      <div
        ref={navRef}
        className="md:fixedWidth fixed top-0 right-0 z-10 mt-[90px] hidden h-full w-full flex-col justify-between gap-20 overflow-y-scroll bg-primaryDark text-[#cacaca] opacity-0 duration-700 md:mt-0"
      >
        <ul className="mt-14 flex flex-col gap-2 md:gap-10 xs:gap-7 pl-[30px] md:pl-[80px]">
          <Link to={'/'} onClick={updateMenu}>
            <li
              className={navListClass}
              style={{ '--large-navigation-item-index': 1 }}
            >
              HOME
            </li>
          </Link>         
          <Link to={'/contact'} onClick={updateMenu} >
            <li
              className={navListClass}
              style={{ '--large-navigation-item-index': 2 }}
            >
              GET IN TOUCH
            </li>
          </Link>
          <Link to={'/projects'} onClick={updateMenu} >
            <li
              className={navListClass}
              style={{ '--large-navigation-item-index': 3 }}
            >
              PROJECTS
            </li>
          </Link>
          <Link to={'/about'} onClick={updateMenu} >
            <li
              className={navListClass}
              style={{ '--large-navigation-item-index': 4 }}
            >
              ABOUT ME
            </li>
          </Link>
        </ul>
        <MediaLinks />
      </div>
    </div>
  );
}

export default Header;
