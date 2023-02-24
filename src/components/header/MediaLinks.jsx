import React from 'react';


function MediaLinks() {
  
  return (
    <>
    <div className="mb-[90px] flex flex-col gap-2 pl-[30px] pb-3 md:mb-0 md:pb-12 md:pl-[80px]">
      <div className="">
        <h3 className="text-textSM font-bold uppercase">Where to find me?</h3>
      </div>
      <div className="flex flex-col gap-2">
        <a
          target="_blank"
          rel="noreferrer"
          className="flex-gap flex w-fit min-w-[143px] items-center gap-2 rounded-lg py-1 px-2 duration-300 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-10"
          href="https://github.com/CarlLinusHedlund"
        >
          <img
            className="h-5 w-5 xs:h-4 xs:w-4"
            src="../github.svg"
            alt="github link"
          />
          <p className="text-textSM xs:text-textXS">CarlLinusHedlund</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="flex-gap flex w-fit min-w-[143px] items-center gap-2 rounded-lg py-1 px-2 duration-300 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-10"
          href="https://www.linkedin.com/in/carl-linus-hedlund-60534321a/"
        >
          <img
            className="h-5 w-5 xs:h-4 xs:w-4"
            src="../linkdin.svg"
            alt="linkdin link"
          />
          <p className="text-textSM xs:text-textXS">Carl Linus Hedlund</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="flex-gap flex w-fit min-w-[143px] items-center gap-2 rounded-lg py-1 px-2 duration-300 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-10"
          href="https://twitter.com/boi_carly"
        >
          <img
            className="h-5 w-5 xs:h-4 xs:w-4"
            src="../twitter.svg"
            alt="twitter link"
          />
          <p className="text-textSM xs:text-textXS">@XCarlyBoi</p>
        </a>
      </div>
    </div>
    </>
  );
}

export default MediaLinks;
