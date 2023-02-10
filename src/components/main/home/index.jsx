import React from 'react';
import HeroBanner from './herobanner';
import SkillSlider from './skillSlider';

function HomePage() {
  return (
    <>
      <section className="w-full min-h-fit md:h-screen bg-primaryDark px-5 md:px-8 lg:px-12 flex justify-center relative">
        <HeroBanner />
      </section>
      <section className="w-full min-h-fit bg-primaryWhite ">
        <SkillSlider />
      </section>
    </>
  );
}

export default HomePage;
