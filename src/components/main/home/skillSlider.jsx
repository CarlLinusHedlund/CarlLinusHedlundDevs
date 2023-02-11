import React from 'react';
import { register } from 'swiper/element/bundle';


register();


// injectstyles
// const paginationBullet = document.querySelector('swiper-container');
// console.log(paginationBullet)


// const param = {
//   injectStyles: [
//     `
//       :host(.red) .swiper-pagination-bullet-active {
//         background-color: red;
//       }
//       `
//   ]
// }



    // Object.assign(paginationBullet, param);
    // paginationBullet.initialize();

function SkillSlider() {
  return (
    <>
    <swiper-container speed="500" pagination="true" pagination-dynamic-bullets="true" pagination-clickable="true" centered-slides="true" loop="true" autoplay-delay="2500" autoplay-disable-on-interaction="false" >
    <swiper-slide>
        <div className='px-5 md:px-8 lg:px-12 py-16 md:py-32 flex justify-center'>
          <div className=' grid grid-cols-4 grid-row-2 justify-items-center gap-6 sm:gap-x-16 sm:gap-y-8 lg:gap-x-32 max-w-xs sm:max-w-md w-fit '>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../css.png" alt="css" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../html.png" alt="html" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../javascript.png" alt="javascript" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../react.png" alt="react" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../sass.png" alt="sass" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../tailwind.png" alt="tailwind" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../figma.png" alt="figma" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../wordpress.png" alt="wordpress" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className='px-5 md:px-8 lg:px-12 py-16 md:py-32 flex justify-center'>
          <div className=' grid grid-cols-4 grid-row-2 justify-items-center gap-6 sm:gap-x-16 sm:gap-y-8 lg:gap-x-32 max-w-xs sm:max-w-md w-fit '>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../github.png" alt="github" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../supabase.png" alt="supabase" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../mongo.png" alt="mongo" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../sourcetree.png" alt="sourcetree" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../yarn.png" alt="yarn" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../npm.png" alt="npm" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../jira.png" alt="jira" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../chartjs.png" alt="charjs" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className='px-5 md:px-8 lg:px-12 py-16 md:py-32 flex justify-center'>
          <div className=' grid grid-cols-4 grid-row-2 justify-items-center gap-6 sm:gap-x-16 sm:gap-y-8 lg:gap-x-32 max-w-xs sm:max-w-md w-fit '>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../photoshop.png" alt="photoshop" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../postman.png" alt="postman" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../bootstrap.png" alt="bootstrap" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../trello.png" alt="trello" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../vscode.png" alt="vscode" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../firebase.png" alt="firebase" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../css.png" alt="css" />
            </div>
            <div className=' bg-primaryDark p-3 h-12 w-12 xs:h-14 xs:w-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center '>
              <img className='object-contain' src="../css.png" alt="css" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
    </>
  
  );
}


export default SkillSlider;
