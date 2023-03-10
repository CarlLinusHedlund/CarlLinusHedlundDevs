/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import messageSchema from './utils/ValidationSchema';
import { motion } from 'framer-motion';

function ContactPage() {
  const onSubmit = (values, actions) => {
    console.log('SUBMITTED');

    const templateParams = {
      messageName: values.messageName,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_CONTACT_FORM_SERVICEID,
        import.meta.env.VITE_CONTACT_FORM_TEMPLATEID,
        templateParams,
        import.meta.env.VITE_CONTACT_FORM_PUBLICKEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);

          if (response.status === 200) {
            actions.resetForm();
          }
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        messageName: '',
        email: '',
        subject: '',
        message: '',
      },
      validationSchema: messageSchema,
      onSubmit,
    });

  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      className=" flex h-full min-h-screen w-full items-center bg-primaryDark px-8 pt-4 pb-20 font-rubik"
    >
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-between gap-20 lg:flex-row lg:gap-8 ">
        <div className="flex flex-col-reverse items-center justify-center lg:w-fit lg:flex-col ">
          <div className=" relative text-primaryWhite ">
            <motion.h3
              exit={{ opacity: 0, x: -100 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
              className=" text-textXS font-medium  uppercase  xs:text-textBASE "
            >
              Work Together?
            </motion.h3>
            <motion.h2
              exit={{ opacity: 0, x: -100 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              className=" whitespace-nowrap text-[36px]  font-bold uppercase leading-[3rem] xs:text-textXL sm:text-text2xl sm:leading-[4rem] "
            >
              GET IN TOUCH
            </motion.h2>
            <motion.p
              exit={{ opacity: 0, x: -100 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
              className=" text-textXS sm:text-textSM "
            >
              Interested in working together or have any questions?
              <br />
              Let's meet and talk over a
              <span className="text-[#C5A76E]"> coffee</span>
            </motion.p>
            <motion.img
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.8 },
              }}
              className=" absolute -bottom-14 right-0 -rotate-45 lg:-rotate-[130deg] "
              src="../curlypointer.svg"
              alt="pointer"
            />
          </div>
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8 },
            }}
          >
            <img src="../coffee.png" alt="coffee bg" />
          </motion.div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-2/5">
          <motion.form
            exit={{ opacity: 0, x: 100 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 1 } }}
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex w-full max-w-[480px] flex-col gap-2 lg:max-w-[380px]"
          >
            <div className="flex flex-col pb-2 font-rubik  text-primaryWhite ">
              <label
                htmlFor="messageName"
                className=" text-textSM font-light capitalize opacity-70"
              >
                Name
              </label>
              <input
                className={`border-b-2 bg-transparent p-3 duration-300 focus:outline-none lg:p-2 ${
                  errors.messageName && touched.messageName
                    ? 'border-red-400 '
                    : 'border-primaryWhite'
                }`}
                value={values.messageName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="messageName"
                id="messageName"
              />
              <label
                htmlFor="messageName"
                className={` text-textXS duration-500 ${
                  errors.messageName && touched.messageName
                    ? 'text-red-400 opacity-100'
                    : 'text-primaryDark opacity-0 duration-75'
                } `}
              >
                {errors.messageName ? `${errors.messageName}` : '.'}
              </label>
            </div>
            <div className="flex flex-col pb-2 font-rubik  text-primaryWhite ">
              <label
                htmlFor="email"
                className=" text-textSM font-light capitalize opacity-70"
              >
                Email
              </label>
              <input
                className={` border-b-2 bg-transparent p-3 duration-300 focus:outline-none lg:p-2 ${
                  errors.email && touched.email
                    ? 'border-red-400'
                    : 'border-primaryWhite'
                } `}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                name="email"
                id="email"
              />
              <label
                htmlFor="email"
                className={` text-textXS duration-500 ${
                  errors.email && touched.email
                    ? 'text-red-400 opacity-100'
                    : 'text-primaryDark opacity-0 duration-75'
                } `}
              >
                {errors.email ? `${errors.email}` : '.'}
              </label>
            </div>
            <div className="flex flex-col pb-2 font-rubik  text-primaryWhite ">
              <label
                htmlFor="subject"
                className=" text-textSM font-light capitalize opacity-70"
              >
                Subject
              </label>
              <input
                className={`border-b-2 bg-transparent p-3 duration-300 focus:outline-none lg:p-2 ${
                  errors.subject && touched.subject
                    ? 'border-red-400'
                    : 'border-primaryWhite'
                } `}
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="subject"
                id="subject"
              />
              <label
                htmlFor="subject"
                className={` text-textXS duration-500 ${
                  errors.subject && touched.subject
                    ? 'text-red-400 opacity-100'
                    : 'text-primaryDark opacity-0 duration-75'
                } `}
              >
                {errors.subject ? `${errors.subject}` : '.'}
              </label>
            </div>
            <div className="flex flex-col gap-2 font-rubik  text-primaryWhite ">
              <label
                htmlFor="message"
                className=" text-textSM font-light capitalize opacity-70"
              >
                Message
              </label>
              <textarea
                className={` max-h-44 min-h-[90px] border-b-2 bg-transparent p-3 focus:outline-none lg:p-2 ${
                  errors.message && touched.message
                    ? 'border-red-400'
                    : 'border-primaryWhite'
                } `}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                name="message"
                id="message"
              />
              <label
                htmlFor="message"
                className={` text-textXS duration-500 ${
                  errors.message && touched.message
                    ? 'text-red-400 opacity-100'
                    : 'text-primaryDark opacity-0 duration-75'
                } `}
              >
                {errors.message ? `${errors.message}` : '.'}
              </label>
            </div>
            <div className="flex w-full justify-center">
              <button
                id="submitBtn"
                className=" lg:hover:hoverShadow btn  mt-4 flex w-full min-w-[300px] max-w-[450px] items-center justify-center font-bold text-primaryWhite duration-300 md:max-w-[350px] lg:hover:scale-105 "
                type="submit"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactPage;
