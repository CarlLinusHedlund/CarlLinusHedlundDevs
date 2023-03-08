import React, { useEffect, useState } from 'react';
import SvgWithGradient from './components/AnimatedSvg';
import MotionHeading from './components/MotionHeading';
import { supabase } from '../../supabase';
import AnimatedPostCard from './components/AnimatedPostCard';
import './index.css';
import { motion } from 'framer-motion';

function ProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const { data, error } = await supabase.from('projects').select('*');
      if (data) {
        console.log(data);
        setProjects(data);
      }
      if (error) {
        console.log(error);
      }
    }
    getProjects();
  }, []);
  console.log('projects :', projects);

  return (
    <div className=" h-full min-h-screen w-full bg-primaryDark py-20 font-rubik">
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="h-full w-full"
      >
        <section className=" w-full pb-32 ">
          <MotionHeading />
          <SvgWithGradient />
        </section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className=" flex w-full flex-col items-center justify-center gap-44 px-8 "
        >
          {projects.map((project) => (
            // <PostCard key={project.id} {...project} />
            <AnimatedPostCard key={project.id} {...project} />
          ))}
        </motion.section>
      </motion.div>
    </div>
  );
}

export default ProjectPage;
