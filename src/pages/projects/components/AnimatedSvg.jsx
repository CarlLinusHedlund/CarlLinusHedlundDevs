import { motion } from 'framer-motion';

const gradientVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { delay: 1.1, duration: 1.5, ease: 'easeInOut' },
  },
};

const SvgWithGradient = () => {
  return (
    <motion.svg
      viewBox="0 0 1332 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="paint0_linear_637_60"
          x1="0.652831"
          y1="53.8339"
          x2="1331.65"
          y2="53.834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.265625" stopColor="white" stopOpacity="0.721818" />
          <stop offset="0.380208" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <motion.path
        d="M1.11268 66.8841C152.471 221.548 591.65 -149.562 1332.06 77.1225"
        stroke="url(#paint0_linear_637_60)"
        stroke-width="2"
        stroke-linecap="round"
        variants={gradientVariants}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
  );
};

export default SvgWithGradient;
