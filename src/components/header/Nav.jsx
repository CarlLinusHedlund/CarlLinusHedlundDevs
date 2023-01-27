import { React } from "react";

function Menu () {
    return (
        <>
        <div className="menu flex justify-center items-center">
            <div id="menu-btn" className="bg-primaryWhite h-0.5 w-[35px] relative rounded-lg after:w-[30px] after:h-0.5 after:absolute after:rounded-lg after:top-2 after:bg-white before:w-[40px] before:h-0.5 before:bg-white before:rounded-lg before:absolute before:bottom-2" />
        </div>
        </>
        
    )
}

export default Menu;