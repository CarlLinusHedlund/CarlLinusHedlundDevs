import React from 'react';
import AboutSection from './aboutSection';
import GetInTouch from './getInTouch';
import HeroBanner from './herobanner';
import RecentProjects from './recentProjects';
import SkillSlider from './skillSlider';

function HomePage() {
  return (
    <>
      <section id='home' className=" w-full min-h-fit md:h-screen bg-primaryDark px-5 md:px-8 lg:px-12 flex justify-center relative">
        <HeroBanner />
      </section>
      <section className="w-full min-h-fit bg-primaryWhite innerShadowContainer ">
        <SkillSlider />
      </section>
      <section className=' bg-primaryDark py-32 sm:py-44 font-rubik  '>
        <RecentProjects />
      </section>
      <section className=' w-full min-h-fit bg-primaryWhite innerShadowContainer '>
        <AboutSection />
      </section>
      <section className=' bg-primaryDark w-full min-h-fit '>
        <GetInTouch />
      </section>
    </>
  );
}

export default HomePage;
