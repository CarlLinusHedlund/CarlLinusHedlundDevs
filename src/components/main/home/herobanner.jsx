import React from 'react';

function HeroBanner() {
  return (
    <div className='flex justify-center items-center'>
      <div className="">
        <div className="">
          <div className="">
              <h1 className='relative font-roboto text-text2xl xs:text-text3xl font-semibold text-primaryWhite'>
                <h3 className='absolute font-black -top-[40px] text-textXL font-roboto text-primaryWhite'>Hi</h3>
                I'm <span className='font-roboto text-text2xl text-primaryCoral font-semibold'>Carl</span>
                <p className='md:hidden absolute -bottom-2 font-rubik font-bold text-primaryWhite text-textBASE'>Welcome to my Website</p> 
              </h1>
              
            
            
          </div>
          <div className="">
            
          </div>

        </div>

      </div>
    </div>
  );
}

export default HeroBanner;
