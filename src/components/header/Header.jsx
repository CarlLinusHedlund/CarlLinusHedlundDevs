/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react';
import MediaLinks from './MediaLinks';
import HomeList from './NavLinks/HomeLi';
import ContactList from './NavLinks/ContactLi';
import AboutList from './NavLinks/AboutLi';
import ProjectsList from './NavLinks/ProjectsLi';
import { Link } from 'react-router-dom';

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
      className="sticky top-0 bottom-0 z-20 h-[90px] w-full border-b border-[#2c2c2c] bg-primaryDark px-6 md:h-screen md:w-[110px] md:border-r md:border-b-0 md:px-0 md:py-12"
    >
      <div className="flex h-full w-full flex-row items-center justify-between md:flex-col-reverse">
        <Link to="/" className="cursor-pointer flex items-center justify-center text-primaryWhite">
          <img src="../logo.svg" alt="logo" />
        </Link>
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
        className="md:fixedWidth fixed top-0 right-0 z-10 mt-[90px] hidden h-full w-full flex-col justify-between gap-20 overflow-y-scroll bg-primaryDark text-[#cacaca] opacity-0 duration-700 md:mt-0"
      >
        <nav className="mt-14 flex flex-col gap-2 pl-[30px] xs:gap-7 md:gap-10 md:pl-[80px]">
          <div
            onClick={updateMenu}
            onKeyDown={updateMenu}
            className={navListClass}
            style={{ '--large-navigation-item-index': 1 }}
          >
            <HomeList />
          </div>
          <div
            onClick={updateMenu}
            onKeyDown={updateMenu}
            className={navListClass}
            style={{ '--large-navigation-item-index': 2 }}
          >
            <ContactList />
          </div>
          <div
            onClick={updateMenu}
            onKeyDown={updateMenu}
            className={navListClass}
            style={{ '--large-navigation-item-index': 3 }}
          >
            <ProjectsList />
          </div>
          <div
            onClick={updateMenu}
            onKeyDown={updateMenu}
            className={navListClass}
            style={{ '--large-navigation-item-index': 4 }}
          >
            <AboutList />
          </div>
        </nav>
        <MediaLinks />
      </div>
    </div>
  );
}

export default Header;
