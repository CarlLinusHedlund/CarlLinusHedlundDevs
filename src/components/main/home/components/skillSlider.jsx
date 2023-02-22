import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { register } from 'swiper/element/bundle';

register();

function SkillSlider() {
  return (
    <swiper-container
      speed="500"
      pagination="true"
      pagination-dynamic-bullets="true"
      pagination-clickable="true"
      centered-slides="true"
      loop="true"
      autoplay-delay="2500"
      autoplay-disable-on-interaction="false"
    >
      <swiper-slide>
        <div className="flex justify-center px-5 py-16 md:px-8 md:py-32 lg:px-12">
          <div className=" grid-row-2 grid w-fit max-w-xs grid-cols-4 justify-items-center gap-6 sm:max-w-md sm:gap-x-16 sm:gap-y-8 lg:gap-x-32 ">
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img className="object-contain" src="../css.png" alt="css" />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img className="object-contain" src="../html.png" alt="html" />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../javascript.png"
                alt="javascript"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img className="object-contain" src="../react.png" alt="react" />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img className="object-contain" src="../sass.png" alt="sass" />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../tailwind.png"
                alt="tailwind"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img className="object-contain" src="../figma.png" alt="figma" />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../wordpress.png"
                alt="wordpress"
              />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="flex justify-center px-5 py-16 md:px-8 md:py-32 lg:px-12">
          <div className=" grid-row-2 grid w-fit max-w-xs grid-cols-4 justify-items-center gap-6 sm:max-w-md sm:gap-x-16 sm:gap-y-8 lg:gap-x-32 ">
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../github.png"
                alt="github"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../supabase.png"
                alt="supabase"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img className="object-contain" src="../mongo.png" alt="mongo" />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../sourcetree.png"
                alt="sourcetree"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img className="object-contain" src="../yarn.png" alt="yarn" />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img className="object-contain" src="../npm.png" alt="npm" />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img className="object-contain" src="../jira.png" alt="jira" />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../chartjs.png"
                alt="charjs"
              />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="flex justify-center px-5 py-16 md:px-8 md:py-32 lg:px-12">
          <div className=" grid-row-2 grid w-fit max-w-xs grid-cols-4 justify-items-center gap-6 sm:max-w-md sm:gap-x-16 sm:gap-y-8 lg:gap-x-32 ">
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../photoshop.png"
                alt="photoshop"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../postman.png"
                alt="postman"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../bootstrap.png"
                alt="bootstrap"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../trello.png"
                alt="trello"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../vscode.png"
                alt="vscode"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../firebase.png"
                alt="firebase"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../netlify.png"
                alt="netlify"
              />
            </div>
            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-primaryDark p-3 xs:h-14 xs:w-14 sm:h-20 sm:w-20 ">
              <img
                className="object-contain"
                src="../vercel.png"
                alt="vercel"
              />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  );
}

export default SkillSlider;
