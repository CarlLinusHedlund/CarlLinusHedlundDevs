import React from "react";


function RecentProjects() {
  return (
    <>
      <section className=" bg-primaryDark py-32 sm:py-44 font-rubik ">
        <div>
          <div className=" relative pb-5 px-8 max-w-5xl lg:flex lg:justify-center lg:flex-col mx-auto ">
            <h3 className=" text-primaryCoral font-semibold text-textSM xs:text-textBASE sm:text-textLG ">MOST RECENT</h3>
            <h2 className=" text-primaryWhite leading-10 sm:leading-[4rem] lg:leading-[7rem] font-bold text-[50px] xs:text-[68px] sm:text-[100px] lg:text-[160px] ">PROJECTS</h2>
          </div>
          <img className=" w-full " src="../wave.svg" alt="wave " />
        </div>
        <div className="flex flex-col gap-20 px-8 pt-20">
          <div className="">
            <div>
              <img src="../jobless.png" alt="" />
            </div>
            <div>

            </div>
          </div>
          <div className="">
            <div>
                <img src="../snowydays.png" alt="" />
              </div>
              <div>
      
              </div>
            </div>
        </div>
        

      </section>
    </>
  )
}

export default RecentProjects;