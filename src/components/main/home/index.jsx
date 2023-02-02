import React from 'react';
import HeroBanner from './herobanner';

function HomePage() {
  return (
    <>
      <section className="h-screen w-full bg-primaryDark">
        <HeroBanner />
      </section>
      <section className="h-screen w-full bg-primaryWhite" />
    </>
  );
}

export default HomePage;
