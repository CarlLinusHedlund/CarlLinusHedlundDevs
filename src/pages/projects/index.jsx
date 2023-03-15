import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SvgWithGradient from './components/AnimatedSvg';
import MotionHeading from './components/MotionHeading';
import { supabase } from '../../supabase';
import AnimatedPostCard from './components/AnimatedPostCard';

import './index.css';

function ProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const { data, error } = await supabase.from('projects').select('*');
      if (data) {
        setProjects(data);
      }
      if (error) {
        console.log(error);
      }
    }
    getProjects();
  }, []);
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className=" h-full min-h-screen w-full bg-primaryDark py-20 font-rubik"
    >
      <div className="h-full w-full">
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
            <AnimatedPostCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
              course={project.course}
              intro={project.intro}
            />
          ))}
        </motion.section>
      </div>
    </motion.div>
  );
}

export default ProjectPage;
