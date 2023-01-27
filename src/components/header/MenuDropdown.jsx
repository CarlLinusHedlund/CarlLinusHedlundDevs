import { React } from "react";

function Dropdown () {
    return (
        <>
            <div className="w-full h-full z-10 fixed top-0 right-0 bg-green-500 opacity-1 duration-1000">
                <ul className="ml-[200px] mt-[100px] flex flex-col gap-10">
                    <li><a href="#" className="font-rubik text-textXL font-bold capitalize">LINK</a></li>
                    <li><a href="#" className="font-rubik text-textXL font-bold capitalize">LINK</a></li>
                    <li><a href="#" className="font-rubik text-textXL font-bold capitalize">LINK</a></li>
                    <li><a href="#" className="font-rubik text-textXL font-bold capitalize">LINK</a></li>
                </ul>
            </div>
        </>
        
    )
}

export default Dropdown;