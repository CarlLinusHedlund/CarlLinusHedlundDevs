import React from "react";
import { useRef } from "react";

function Header () {
    const burgerRef = useRef();
    const navRef = useRef();

    const showNavBar = () => {
        burgerRef.current.classList.toggle("after:opacity-0")
        navRef.current.classList.toggle("opacity-0")
        navRef.current.classList.toggle("opacity-1")
    }
    return (
        <>
        <div id='header' className="bg-primaryDark z-20 px-8 md:px-0 md:py-12 sticky top-0 bottom-0 w-full h-[90px] border-b border-[#2c2c2c] md:h-screen md:w-[110px] md:border-r md:border-b-0">
            <div className='w-full h-full flex flex-row justify-between items-center md:flex-col-reverse'>
                <div className="text-primaryWhite flex justify-center items-center">
                    Logo
                </div>
                <div onClick={showNavBar} className='flex justify-center items-center h-10'>
                    <div ref={burgerRef} className='duration-1000 bg-primaryWhite h-0.5 w-[35px] relative rounded-lg after:w-[30px] after:h-0.5 after:absolute after:rounded-lg after:top-2.5 after:bg-white before:w-[40px] before:h-0.5 before:bg-white before:rounded-lg before:absolute before:bottom-2.5'>
                    </div>    
                </div>
            </div>
            <div ref={navRef} className="opacity-0 w-full md:fixedWidth h-full mt-[50px] md:mt-0 z-10 fixed top-0 right-0 bg-primaryDark duration-1000 text-[#E2E2E2] flex-col justify-between">
                <ul className="pl-[30px] md:pl-[80px] mt-[100px] flex flex-col gap-4">
                    <li onClick={showNavBar} className="hover:translate-x-2 duration-500 w-fit"><a href="#" className="font-rubik text-textLG xs:text-textXL font-extrabold capitalize hover:text-primaryWhite duration-1000">HOME</a></li>
                    <li onClick={showNavBar} className="hover:translate-x-2 duration-500 w-fit"><a href="#" className="font-rubik text-textLG xs:text-textXL font-extrabold capitalize hover:text-primaryWhite duration-1000">PROJECTS</a></li>
                    <li onClick={showNavBar} className="hover:translate-x-2 duration-500 w-fit"><a href="#" className="font-rubik text-textLG xs:text-textXL font-extrabold capitalize hover:text-primaryWhite duration-1000">CONTACT ME</a></li>
                    <li onClick={showNavBar} className="hover:translate-x-2 duration-500 w-fit"><a href="#" className="font-rubik text-textLG xs:text-textXL font-extrabold capitalize hover:text-primaryWhite duration-1000">ABOUT ME</a></li>
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
        </>
    )
}

export default Header;