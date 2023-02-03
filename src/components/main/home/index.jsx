import React from 'react';
import HeroBanner from './herobanner';

function HomePage() {
  return (
    <>
      <section className="w-full min-h-fit md:h-screen bg-primaryDark px-5 md:px-32 flex justify-center">
        <HeroBanner />
      </section>
      <section className="h-screen w-full bg-primaryWhite" />
    </>
  );
}

export default HomePage;
