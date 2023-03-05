import React from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import messageSchema from './utils/ValidationSchema';

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
    <section className=" flex h-full min-h-screen w-full items-center bg-primaryDark px-8 pt-4 pb-20 font-rubik">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-between gap-20 lg:flex-row lg:gap-8 ">
        <div className="flex flex-col-reverse items-center justify-center lg:w-fit lg:flex-col ">
          <div className=" relative text-primaryWhite ">
            <h3 className=" text-textXS font-medium uppercase xs:text-textBASE ">
              Work Together?
            </h3>
            <h2 className=" whitespace-nowrap text-[36px] font-bold uppercase leading-[3rem] xs:text-textXL sm:text-text2xl sm:leading-[4rem] ">
              GET IN TOUCH
            </h2>
            <p className=" text-textXS sm:text-textSM ">
              Interested in working together or have any questions?
              <br />
              {`&apos`}
              Let's meet and talk over a
              <span className="text-[#C5A76E]">coffee</span>
            </p>
            <img
              className=" absolute -bottom-14 right-0 -rotate-45 lg:-rotate-[130deg] "
              src="../curlypointer.svg"
              alt="pointer"
            />
          </div>
          <div>
            <img src="../coffee.png" alt="coffee bg" />
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-2/5">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex w-full max-w-[480px] flex-col gap-2 lg:max-w-[380px]"
          >
            <div className="flex flex-col gap-2 font-rubik  text-primaryWhite ">
              <label
                htmlFor="messageName"
                className=" text-textSM font-light capitalize opacity-70"
              >
                Name
              </label>
              <input
                className={`rounded-xl border bg-transparent p-3 duration-300 lg:p-2 ${
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
            <div className="flex flex-col gap-2 font-rubik  text-primaryWhite ">
              <label
                htmlFor="email"
                className=" text-textSM font-light capitalize opacity-70"
              >
                Email
              </label>
              <input
                className={` rounded-xl border bg-transparent p-3 duration-300 lg:p-2 ${
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
            <div className="flex flex-col gap-2 font-rubik  text-primaryWhite ">
              <label
                htmlFor="subject"
                className=" text-textSM font-light capitalize opacity-70"
              >
                Subject
              </label>
              <input
                className={`rounded-xl border bg-transparent p-3 duration-300 lg:p-2 ${
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
                className={` max-h-44 min-h-[90px] rounded-xl border bg-transparent p-3 lg:p-2 ${
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
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
