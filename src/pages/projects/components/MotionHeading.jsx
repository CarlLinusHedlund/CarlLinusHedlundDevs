import React from 'react';
import { motion } from 'framer-motion';

const h2Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
};

const h3Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.8, duration: 1 } },
};

function MotionHeading() {
  return (
    <div className="relative mx-auto max-w-5xl px-8 pb-5 lg:flex lg:flex-col lg:justify-center">
      <motion.h3
        className="text-textSM font-semibold text-primaryCoral xs:text-textBASE sm:text-textLG"
        variants={h3Variants}
        initial="hidden"
        animate="visible"
      >
        MOST RECENT
      </motion.h3>
      <motion.h2
        className="text-[50px] font-bold leading-[2.8rem] text-primaryWhite xs:text-[68px] sm:text-[100px] sm:leading-[4rem] lg:text-[160px] lg:leading-[7rem]"
        variants={h2Variants}
        initial="hidden"
        animate="visible"
      >
        PROJECTS
      </motion.h2>
    </div>
  );
}

export default MotionHeading;
