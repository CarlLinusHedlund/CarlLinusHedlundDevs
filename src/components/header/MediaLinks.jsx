import React from 'react';

function MediaLinks() {
  return (
    <div className="mb-[90px] flex flex-col gap-2 pl-[30px] pb-3 md:pb-12 md:mb-0 md:pl-[80px]">
      <div className="">
        <h3 className="text-textSM uppercase font-bold">Where to find me?</h3>
      </div>
      <div className="flex flex-col gap-2">
        <a target="_blank" rel="noreferrer" className="flex-gap flex items-center gap-2 rounded-lg w-fit py-1 px-2 hover:bg-gray-200 hover:bg-opacity-10 hover:scale-105 duration-300 min-w-[143px]" href="https://github.com/CarlLinusHedlund">
          <img
            className="w-5 h-5 xs:h-4 xs:w-4"
            src="../public/github.svg"
            alt="github link"
          />
          <p className="text-textSM xs:text-textXS">CarlLinusHedlund</p>
        </a>
        <a target="_blank" rel="noreferrer" className="flex-gap flex items-center gap-2 rounded-lg w-fit py-1 px-2 hover:bg-gray-200 hover:bg-opacity-10 hover:scale-105 duration-300 min-w-[143px]" href="https://www.linkedin.com/in/carl-linus-hedlund-60534321a/">
          <img
            className="w-5 h-5 xs:h-4 xs:w-4"
            src="../public/linkdin.svg"
            alt="linkdin link"
          />
          <p className="text-textSM xs:text-textXS">Carl Linus Hedlund</p>
        </a>
        <a target="_blank" rel="noreferrer" className="flex-gap flex items-center gap-2 rounded-lg w-fit py-1 px-2 hover:bg-gray-200 hover:bg-opacity-10 hover:scale-105 duration-300 min-w-[143px]" href="https://twitter.com/boi_carly">
          <img
            className="w-5 h-5 xs:h-4 xs:w-4"
            src="../public/twitter.svg"
            alt="twitter link"
          />
          <p className="text-textSM xs:text-textXS">@XCarlyBoi</p>
        </a>
      </div>
    </div>
  );
}

export default MediaLinks;
