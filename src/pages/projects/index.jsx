import React from 'react';
import SvgWithGradient from './components/AnimatedSvg';
import MotionHeading from './components/MotionHeading';
import PostCard from './components/PostCard';

import './index.css';

function ProjectPage() {
  return (
    <>
      <div className=" h-full min-h-screen w-full bg-primaryDark py-20 font-rubik">
        <section className=" w-full pb-32 ">
          <MotionHeading />
          <SvgWithGradient />
        </section>
        <PostCard />
        <section className=" flex w-full justify-center px-8 "></section>
      </div>
    </>
  );
}

export default ProjectPage;
