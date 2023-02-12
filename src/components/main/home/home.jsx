import React from 'react';
import AboutSection from './aboutSection';
import HeroBanner from './herobanner';
import RecentProjects from './recentProjects';
import SkillSlider from './skillSlider';

function HomePage() {
  return (
    <>
      <section className="w-full min-h-fit md:h-screen bg-primaryDark px-5 md:px-8 lg:px-12 flex justify-center relative">
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
      
    </>
  );
}

export default HomePage;
