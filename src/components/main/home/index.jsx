import React from 'react';
import AboutSection from './components/aboutSection';
import GetInTouch from './components/getInTouch';
import HeroBanner from './components/herobanner';
import RecentProjects from './components/recentProjects';
import SkillSlider from './components/skillSlider';

function HomePage() {
  return (
    <>
      <section
        id="home"
        className=" relative flex min-h-fit w-full justify-center bg-primaryDark px-5 md:h-screen md:px-8 lg:px-12"
      >
        <HeroBanner />
      </section>
      <section className="innerShadowContainer min-h-fit w-full bg-primaryWhite ">
        <SkillSlider />
      </section>
      <section className=" bg-primaryDark py-32 font-rubik sm:py-44  ">
        <RecentProjects />
      </section>
      <section className=" innerShadowContainer min-h-fit w-full bg-primaryWhite ">
        <AboutSection />
      </section>
      <section className=" min-h-fit w-full bg-primaryDark ">
        <GetInTouch />
      </section>
    </>
  );
}

export default HomePage;
