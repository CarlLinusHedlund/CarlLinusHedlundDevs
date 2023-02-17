import { React } from 'react';
import { useFormik } from 'formik';
import { messageSchema } from './validationSchema';

const onSubmit = () => {
  console.log("submitted");
}

function ContactPage() {

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      messageName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: messageSchema,
    onSubmit
  });

  console.log(errors);



  return (
    <>
    <section className=' w-full h-full min-h-screen bg-primaryDark font-rubik flex items-center pt-4 pb-20 px-8'>
      <div className='flex flex-col lg:flex-row gap-20 lg:gap-8 justify-between mx-auto max-w-5xl w-full h-full '>
        <div className='flex flex-col-reverse lg:flex-col justify-center items-center lg:w-fit '>
          <div className=' relative text-primaryWhite '>
            <h3 className=" uppercase font-medium text-textXS xs:text-textBASE ">Work Together?</h3>
            <h2 className=" uppercase font-bold text-[36px] leading-[3rem] xs:text-textXL sm:text-text2xl sm:leading-[4rem] whitespace-nowrap ">GET IN TOUCH</h2>
            <p className=" text-textXS sm:text-textSM ">Interested in working together or have any questions? <br /> Let's meet and talk over a <span className="text-[#C5A76E]">coffee</span></p>
            <img className=" -rotate-45 lg:-rotate-[130deg] absolute -bottom-14 right-0 " src="../curlypointer.svg" alt="pointer" />
          </div>
          <div>
            <img src="../coffee.png" alt="coffee bg" />
          </div>
        </div>
        <div className='w-full lg:w-2/5 flex items-center justify-center'>
          <form onSubmit={handleSubmit} autoComplete='off' className='flex flex-col gap-2 w-full max-w-[480px] lg:max-w-[380px]'>
            <div className='flex flex-col gap-2 text-primaryWhite  font-rubik '>
              <label htmlFor="messageName" className=' font-light text-textSM capitalize opacity-70'>Name</label>
              <input className={`p-3 lg:p-2 bg-transparent border rounded-xl duration-300 ${errors.messageName && touched.messageName ? "border-red-400 " : "border-primaryWhite" }`} value={values.messageName} onChange={handleChange} onBlur={handleBlur} type="text" name="messageName" id="messageName" />
              <label htmlFor="messageName" className={` text-textXS duration-500 ${errors.messageName && touched.messageName ? "opacity-100 text-red-400" : "opacity-0 text-primaryDark duration-75"} `}>{errors.messageName ? `${errors.messageName}` : "."}</label>
            </div>
            <div className='flex flex-col gap-2 text-primaryWhite  font-rubik '>
              <label htmlFor="email" className=' font-light text-textSM capitalize opacity-70'>Email</label>
              <input className={` p-3 lg:p-2 bg-transparent border rounded-xl duration-300 ${errors.email && touched.email ? "border-red-400" : "border-primaryWhite"} `} value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" name="email" id="email" />
              <label htmlFor="email" className={` text-textXS duration-500 ${errors.email && touched.email ? "opacity-100 text-red-400" : "opacity-0 text-primaryDark duration-75"} `}>{errors.email ? `${errors.email}` : "."}</label>
            </div>
            <div className='flex flex-col gap-2 text-primaryWhite  font-rubik '>
              <label htmlFor="subject" className=' font-light text-textSM capitalize opacity-70'>Subject</label>
              <input className={`p-3 lg:p-2 bg-transparent border rounded-xl duration-300 ${errors.subject && touched.subject ? "border-red-400" : "border-primaryWhite"} `} value={values.subject} onChange={handleChange} onBlur={handleBlur} type="text" name="subject" id="subject" />
              <label htmlFor="subject" className={` text-textXS duration-500 ${errors.subject && touched.subject ? "opacity-100 text-red-400" : "opacity-0 text-primaryDark duration-75"} `}>{errors.subject ? `${errors.subject}` : "."}</label>
            </div>
            <div className='flex flex-col gap-2 text-primaryWhite  font-rubik '>
              <label htmlFor="message" className=' font-light text-textSM capitalize opacity-70'>Message</label>
              <textarea className={` p-3 lg:p-2 bg-transparent border rounded-xl min-h-[90px] max-h-44 ${errors.message && touched.message ? "border-red-400" : "border-primaryWhite"} `} value={values.message} onChange={handleChange} onBlur={handleBlur} name="message" id="message" />
              <label htmlFor="message" className={` text-textXS duration-500 ${errors.message && touched.message ? "opacity-100 text-red-400" : "opacity-0 text-primaryDark duration-75"} `}>{errors.message ? `${errors.message}` : "."}</label>
            </div>
            <div className='w-full flex justify-center'>
              <button className=' text-primaryWhite lg:hover:hoverShadow  w-full btn flex items-center justify-center mt-4 min-w-[300px] max-w-[450px] md:max-w-[350px] lg:hover:scale-105 duration-300 font-bold  ' type='submit'>Send Message</button>
            </div>
          </form>
        </div>  
      </div>
    </section>
    </>
  );
}

export default ContactPage;
