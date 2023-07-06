import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from './components/AboutSection';
import GetInTouch from './components/GetInTouch';
import HeroBanner from './components/Herobanner';
import RecentProjects from './components/RecentProjects';
import SkillSlider from './components/SkillSlider';

function HomePage() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      className=""
    >
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
    </motion.div>
  );
}

export default HomePage;
