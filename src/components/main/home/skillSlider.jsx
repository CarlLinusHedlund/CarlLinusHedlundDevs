import React from 'react';

function SkillSlider() {
  return (
    <>
      <div className=''>
        <div className=' grid grid-cols-4 '>
          <div className=' bg-primaryDark w-20 h-20 rounded-lg flex items-center justify-center '>
            <img src="../css.png" alt="css" />
          </div>
          <div className=' bg-primaryDark w-20 h-20 rounded-lg '>
            <img src="../css.png" alt="css" />
          </div>
          <div className=' bg-primaryDark w-20 h-20 rounded-lg '>
            <img src="../css.png" alt="css" />
          </div>
          <div className=' bg-primaryDark w-20 h-20 rounded-lg '>
            <img src="../css.png" alt="css" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSlider;
