import React, { useEffect, useState } from 'react';
import '../index.css';
import { useParams } from 'react-router-dom';
import { supabase } from '../../../supabase';
import PageNotFound from '../../../components/PageNotFound';
import { motion } from 'framer-motion';

export default function ProjectDetails() {
  const id = useParams();
  const string = id.id;
  const [project, setProject] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function getProject() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', string);
      if (data) {
        setProject(data[0]);
        setTags(data[0].tags);
      }
      if (error) {
        setProject(null);
      }
    }
    getProject();
  }, []);

  return project ? (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      // transition={{ duration: 0.4 }}
      className="flex min-h-screen w-full flex-col items-center justify-center bg-primaryDark font-rubik lg:flex-row"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className=" flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pt-20 pb-44 lg:flex-row xl:px-0 "
      >
        <div className=" flex w-full flex-col gap-24 text-primaryWhite lg:w-[55%] ">
          <div className=" lg:min-h-[450px] ">
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className=" text-textSM font-semibold uppercase text-primaryCoral xs:text-textBASE"
            >
              {project.course}
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=" text-[40px] font-bold uppercase leading-8 xs:text-textXL xs:leading-10 md:text-[65px] md:leading-[3rem]  "
            >
              {project.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.6 },
              }}
              className=" max-w-lg pt-4 text-textXS font-light xs:text-textSM "
            >
              {project.description}
            </motion.p>
            <div className=" flex gap-5 pt-6">
              <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transformOrigin: 'center',
                  transition: { duration: 0.3, delay: 0.4 },
                }}
                target="_blank"
                className=" flex gap-2 duration-200 hover:scale-105 "
                href="https://github.com/"
              >
                <img src="../github.svg" alt="" />
                <p className="underline">Github</p>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transformOrigin: 'center',
                  transition: { duration: 0.3, delay: 0.5 },
                }}
                target="_blank"
                className="underline duration-200 hover:scale-105"
                href="https://github.com/"
              >
                Website
              </motion.a>
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.8 } }}
            exit={{ opacity: 0 }}
            className=" max-h-[400px] object-contain  "
            src={project.main_image}
            alt={project.title}
          />
        </div>
        <div className=" flex w-full flex-col-reverse gap-24 text-primaryWhite lg:w-[45%] lg:flex-col ">
          <div className="max-h-[450px] flex-nowrap lg:min-h-[450px]">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.8, duration: 0.8 },
              }}
              exit={{ opacity: 0 }}
              className="lightShadow h-full w-full object-contain "
              src={project.demo_image}
              alt={project.title}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.8, duration: 0.8 },
            }}
            className="h- flex w-full flex-col gap-8"
          >
            <div>
              <h3 className=" text-textLG font-semibold uppercase ">
                Progress
              </h3>
              <p className=" max-w-lg text-textSM font-light ">
                {project.progress}
              </p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <h4 className=" text-textBASE font-semibold uppercase ">
                Tools used for this project
              </h4>
              <div className="flex flex-wrap gap-5">
                {tags.map((tag) => (
                  <img
                    className=" h-10 w-auto duration-500 hover:scale-110"
                    src={`../${tag}.png`}
                    alt={tag}
                    key={tag}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  ) : (
    <PageNotFound />
  );
}
