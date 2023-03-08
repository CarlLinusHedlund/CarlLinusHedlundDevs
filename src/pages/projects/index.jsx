import React, { useEffect, useState } from 'react';
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
      <section className=" w-full pb-32 ">
        <MotionHeading />
        <SvgWithGradient />
      </section>

      <section className=" flex w-full flex-col items-center justify-center gap-40 px-8 ">
        {projects.map((project) => (
          // <PostCard key={project.id} {...project} />
          <AnimatedPostCard key={project.id} {...project} />
        ))}
      </section>
    </div>
  );
}

export default ProjectPage;
