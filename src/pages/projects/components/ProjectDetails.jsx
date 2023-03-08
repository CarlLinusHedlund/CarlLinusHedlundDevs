import React, { useEffect, useState } from 'react';
import { motion, transform } from 'framer-motion';
import '../index.css';
import { useParams } from 'react-router-dom';
import { supabase } from '../../../supabase';
import PageNotFound from '../../../components/PageNotFound';

export default function ProjectDetails() {
  const id = useParams();
  const string = id.id;
  const [project, setProject] = useState();
  // console.log(id.id);
  // console.log(string);
  useEffect(() => {
    async function getProject() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', string);
      if (data) {
        console.log(data);
        setProject(data);
      }
      if (error) {
        setProject(null);
      }
    }
    getProject();
  }, []);
  console.log(project);

  return project ? (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-primaryDark font-rubik lg:flex-row">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className=" flex min-h-screen w-full max-w-5xl flex-col gap-14 px-6 pt-20 pb-44 lg:flex-row xl:px-0 "
      >
        <div className=" flex w-full flex-col gap-14 text-primaryWhite lg:w-[55%] ">
          <div className=" lg:min-h-[450px] ">
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className=" text-textSM font-semibold uppercase text-primaryCoral xs:text-textBASE"
            ></motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className=" text-[40px] font-bold uppercase leading-8 xs:text-textXL xs:leading-10 "
            ></motion.h2>
            <p className=" max-w-lg pt-4 text-textXS font-light xs:text-textSM ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rerum
              quaerat repellat perferendis enim culpa eaque id, a voluptates
              ipsum laudantium nihil minus debitis itaque doloremque saepe
              corrupti sed libero. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. In rerum quaerat repellat perferendis enim culpa
              eaque id, a voluptates ipsum laudantium nihil minus debitis itaque
              doloremque saepe corrupti sed libero. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. In rerum quaerat repellat
              perferendis enim culpa eaque id, a voluptates ipsum laudantium
              nihil minus debitis itaque doloremque saepe corrupti sed libero.
            </p>
            <div className=" flex gap-5 pt-6">
              <a
                target="_blank"
                className=" flex gap-2 duration-200 hover:scale-105 "
                href="https://github.com/"
              >
                <img src="../github.svg" alt="" />
                <p className="underline">Github</p>
              </a>
              <a
                target="_blank"
                className="underline duration-200 hover:scale-105"
                href="https://github.com/"
              >
                Website
              </a>
            </div>
          </div>
          <img className="" src="../jobless.png" alt="jobless" />
        </div>
        <div className=" flex  w-full flex-col-reverse gap-14 text-primaryWhite lg:w-[45%] lg:flex-col ">
          <div className="flex-nowrap lg:min-h-[450px]">
            <img
              className="lightShadow h-full w-full object-contain "
              src="../iPad-Pro-11.png"
              alt="iphone"
            />
          </div>

          <div className="h- flex w-full flex-col gap-8">
            <div>
              <h3 className=" text-textLG font-semibold uppercase ">
                Progress
              </h3>
              <p className=" max-w-lg text-textSM font-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                mollitia aliquid enim alias error iure quia illum tempore
                maiores sequi. Provident, dolorum magni officiis harum earum
                eaque tenetur quia fuga. Provident, dolorum magni officiis harum
                earum eaque tenetur quia fuga. Provident, dolorum magni officiis
                harum earum eaque tenetur quia fuga.Provident, dolorum magni
                officiis harum earum eaque tenetur quia fuga. Provident, dolorum
                magni officiis harum earum eaque tenetur quia fuga. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Ut mollitia aliquid
                enim alias error iure quia illum tempore maiores sequi.
                Provident, dolorum magni.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <h4 className=" text-textBASE font-semibold uppercase ">
                Tools used for this project
              </h4>
              <div className="flex gap-3">
                <img
                  className=" h-10 w-10 duration-200 hover:scale-105"
                  src="../sass.png"
                  alt=""
                />
                <img
                  className=" h-10 w-10 duration-200 hover:scale-105 "
                  src="../react.png"
                  alt=""
                />
                <img
                  className=" h-10 w-10 duration-200 hover:scale-105 "
                  src="../css.png"
                  alt=""
                />
                <img
                  className=" h-10 w-10 duration-200 hover:scale-105 "
                  src="../html.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  ) : (
    <PageNotFound />
  );
}
