/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react';

function Header() {
  const burgerRef = useRef();
  const navRef = useRef();

  const [isMenuClicked, setIsMenuClicked] = useState(false);
//   const [burgerClass, setBurgerClass] = useState();
//   const [menuClass, setMenuClass] = useState();

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
      burgerRef.current.classList.add('after:opacity-0');
      navRef.current.classList.add('flex');
      navRef.current.classList.remove('hidden');
      setTimeout(overlayStart, 300);
    } else {
      burgerRef.current.classList.add('after:opacity-1');
      navRef.current.classList.add('opacity-0');
      navRef.current.classList.add('opacity-1');
      setTimeout(overlayRemove, 800);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div
      id="header"
      className="bg-primaryDark z-20 px-8 md:px-0 md:py-12 sticky top-0 bottom-0 w-full h-[90px] border-b border-[#2c2c2c] md:h-screen md:w-[110px] md:border-r md:border-b-0"
    >
      <div className="w-full h-full flex flex-row justify-between items-center md:flex-col-reverse">
        <div className="text-primaryWhite flex justify-center items-center">
          Logo
        </div>
        <div onClick={updateMenu} className="flex justify-center items-center h-10 duration-800">
          <div
            ref={burgerRef}
            className="duration-1000 bg-primaryWhite h-0.5 w-[35px] after:duration-1000 relative rounded-lg after:w-[30px] after:h-0.5 after:absolute after:rounded-lg after:top-2.5 after:bg-white before:w-[40px] before:h-0.5 before:bg-white before:rounded-lg before:absolute before:bottom-2.5"
          />
        </div>
      </div>
      <div
        ref={navRef}
        className="opacity-0 w-full md:fixedWidth h-full mt-[50px] md:mt-0 z-10 fixed top-0 right-0 bg-primaryDark duration-1000 text-[#E2E2E2] flex-col justify-between hidden"
      >
        <ul className="pl-[30px] md:pl-[80px] mt-[100px] flex flex-col gap-4">
          <li className='font-rubik text-textLG xs:text-textXL font-extrabold capitalize hover:text-primaryWhite duration-1000'>Homo</li>
          <li className='font-rubik text-textLG xs:text-textXL font-extrabold capitalize hover:text-primaryWhite duration-1000'>homo</li>
          <li className='font-rubik text-textLG xs:text-textXL font-extrabold capitalize hover:text-primaryWhite duration-1000'>Homo</li>
          <li className='font-rubik text-textLG xs:text-textXL font-extrabold capitalize hover:text-primaryWhite duration-1000'>homo</li>
        </ul>
        <div className="pl-[30px] md:pl-[80px] mb-20">
          <div className="flex flex-row gap-10">
            <div className="">Link</div>
            <div className="">Link</div>
            <div className="">Link</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
