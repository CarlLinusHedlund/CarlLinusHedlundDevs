import { React } from "react";

function Dropdown () {
    return (
        <>
            <div className="w-full md:fixedWidth h-full mt-[50px] md:mt-0 z-10 fixed top-0 right-0 bg-primaryDark opacity-1 duration-1000 text-[#E2E2E2] flex flex-col justify-between">
                <ul className="pl-[30px] md:pl-[80px] mt-[100px] flex flex-col gap-4">
                    <li className="hover:translate-x-2 duration-500 w-fit"><a href="#" className="font-rubik text-textLG xs:text-textXL font-extrabold capitalize">HOME</a></li>
                    <li className="hover:translate-x-2 duration-500 w-fit"><a href="#" className="font-rubik text-textLG xs:text-textXL font-extrabold capitalize">PROJECTS</a></li>
                    <li className="hover:translate-x-2 duration-500 w-fit"><a href="#" className="font-rubik text-textLG xs:text-textXL font-extrabold capitalize">CONTACT ME</a></li>
                    <li className="hover:translate-x-2 duration-500 w-fit"><a href="#" className="font-rubik text-textLG xs:text-textXL font-extrabold capitalize">ABOUT ME</a></li>
                </ul>
                <div className="pl-[30px] md:pl-[80px] mb-20">
                    <div className="flex flex-row gap-10">
                        <div className="">Link</div>
                        <div className="">Link</div>
                        <div className="">Link</div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Dropdown;