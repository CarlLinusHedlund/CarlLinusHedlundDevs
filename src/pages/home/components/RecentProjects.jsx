import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { supabase } from '../../../supabase';

function RecentProjects() {
  const [projects, setProjects] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });
  useEffect(() => {
    // eslint-disable-next-line wrap-iife
    (async function getProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) {
        setProjects(data.slice(0, 2));
      }
      if (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <motion.div
      className=""
      ref={ref}
      initial={{ opacity: 0, y: 90 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 90,
        transition: { duration: 1 },
      }}
      exit={{ opacity: 0, y: 90 }}
    >
      <div>
        <div className=" relative mx-auto max-w-5xl px-8 pb-5 lg:flex lg:flex-col lg:justify-center ">
          <h3 className=" text-textSM font-semibold text-primaryCoral xs:text-textBASE sm:text-textLG ">
            MOST RECENT
          </h3>
          <h2 className=" text-[50px] font-bold leading-[2.8rem] text-primaryWhite xs:text-[68px] sm:text-[100px] sm:leading-[4rem] lg:text-[160px] lg:leading-[7rem] ">
            PROJECTS
          </h2>
        </div>
        <img className=" w-full " src="../wave.svg" alt="wave" />
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-32 px-6 pt-32 ">
        <div className="mx-auto flex max-w-5xl flex-col gap-32 pt-32">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex max-w-5xl flex-col gap-6 lg:flex-row "
            >
              <div className="flex max-w-[550px] items-center ">
                <img
                  className="rounded-lg"
                  src={project.images[0]}
                  alt={project.title}
                />
              </div>
              <div className=" flex flex-col justify-between font-rubik uppercase text-primaryWhite ">
                <div className=" min-w-[270px] whitespace-pre-wrap md:min-w-[300px] ">
                  <h3 className=" text-primaryCoral ">{project.course}</h3>
                  <h2 className=" text-[40px] font-bold uppercase leading-10 sm:text-textXL sm:leading-[3rem] lg:text-textXL ">
                    {project.title}
                  </h2>
                  <p className=" max-w-[450px] whitespace-normal text-textXS md:max-w-[350px] ">
                    {project.intro}
                  </p>
                </div>
                <Link to={`${project.id}`}>
                  <button
                    type="button"
                    className="lg:hover:hoverShadow btn group mt-4 flex w-full max-w-[450px] items-center justify-center uppercase duration-300 md:max-w-[350px] lg:hover:scale-105 "
                  >
                    <p className="text-textSM font-semibold text-primaryWhite">
                      Read More
                    </p>
                  </button>
                </Link>
              </div>
            </div>
            // <div
            //   key={project.title}
            //   className="flex flex-col gap-6 py-10 lg:flex-row "
            // >
            //   <div className="flex items-center">
            //     <img src={project.images[0]} alt="" />
            //   </div>
            //   <div className=" flex min-w-[300px] flex-col justify-between font-rubik uppercase text-primaryWhite ">
            //     <div className="flex flex-col whitespace-pre-wrap">
            //       <h3 className=" text-primaryCoral ">{project.course}</h3>
            //       <h2 className=" whitespace-normal text-[40px] font-bold uppercase leading-10 sm:text-textXL sm:leading-[3rem] lg:text-textXL ">
            //         {project.title}
            //       </h2>
            //       <p className=" max-w-[450px] text-textXS md:max-w-[350px] ">
            //         {project.intro}
            //       </p>
            //     </div>
            //     <Link to={`/projects/${project.id}`}>
            //       <button
            //         type="button"
            //         // eslint-disable-next-line max-len
            //         className="lg:hover:hoverShadow btn group mt-4 flex w-full max-w-[450px] items-center justify-center uppercase duration-300 md:max-w-[350px] lg:hover:scale-105 "
            //       >
            //         <p className="text-textSM font-semibold text-primaryWhite">
            //           Read More
            //         </p>
            //       </button>
            //     </Link>
            //   </div>
            // </div>
          ))}
        </div>
        <div className="flex justify-center text-textBASE text-primaryWhite underline duration-300 hover:scale-110 ">
          <Link to="/projects">More Projects</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default RecentProjects;
