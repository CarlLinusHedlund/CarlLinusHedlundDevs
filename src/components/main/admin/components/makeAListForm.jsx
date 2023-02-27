import React from 'react'
import { useFormik } from 'formik';
import formSchema from '../utils/ValidationSchema';
import { supabase } from '../../../../supabase';



function Form() {
   const onSubmit = (values) => {
     const templateParams = {
      title: values.title,
      course: values.course,
      description: values.description,
      progress: values.progress,
      tags: values.tags
    };
    function createPost() {
      supabase.from('projects').insert({
        title: values.title,
        course: values.course,
        description: values.description,
        progress: values.progress,
        tags: [values.tags]
      }).then(response => {
        console.log(response);
      })
    }
    createPost();
    console.log(templateParams);
  }

  const {
    values, handleChange, errors, touched, handleBlur, handleSubmit
  } = useFormik({
    initialValues: {
      title: '',
      course: '',
      description: '',
      progress: '',
      tags: '',
    },
    validationSchema: formSchema,
    onSubmit,
  });


  return (
    <>
      <form onSubmit={handleSubmit} className=" w-full font-rubik flex flex-col gap-10 ">
          <div className=" flex flex-col gap-14 font-semibold text-textBASE w-full h-full ">
            <h2 className=" text-primaryWhite capitalize text-textLG ">Information</h2>
            <div  className='w-full h-full flex flex-col gap-5'>
              <div className=" flex flex-col gap-1">
                <label htmlFor="title" className='text-primaryWhite text-textBASE font-normal'>Title</label>
                <input className={` focus:scale-105 text-primaryWhite rounded-xl border bg-transparent p-3 duration-300 lg:p-2 ${
                  errors.title && touched.title
                    ? 'border-red-400 '
                    : 'border-primaryWhite'
                }`} 
                onChange={handleChange}
                onBlur={handleBlur}
                name="title" id="title" type="text" value={values.title} />
                <label
                htmlFor="title"
                className={` text-textXS duration-500 ${
                  errors.title && touched.title
                    ? 'text-red-400 opacity-100'
                    : 'text-primaryDark opacity-0 duration-75'
                } `}
              >
                {errors.title ? `${errors.title}` : '.'}
              </label>
              </div>
              <div className=" flex flex-col gap-1">
                <label htmlFor="course" className='text-primaryWhite text-textBASE font-normal'>Course</label>
                <input onChange={handleChange}
                      onBlur={handleBlur} 
                      className={`rounded-xl focus:scale-105 border bg-transparent p-3 duration-300 lg:p-2 text-primaryWhite ${
                        errors.course && touched.course
                          ? 'border-red-400 '
                          : 'border-primaryWhite'
                      }`
                      } 
                      name="course" 
                      id="course" 
                      type="text" 
                      value={values.course} />
                      <label
                      htmlFor="course"
                      className={` text-textXS duration-500 ${
                      errors.course && touched.course
                          ? 'text-red-400 opacity-100'
                          : 'text-primaryDark opacity-0 duration-75'
                      } `}
              >
                {errors.course ? `${errors.course}` : '.'}
              </label>
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="description" className='text-primaryWhite text-textBASE font-normal'>Description</label>
              <textarea 
              value={values.description} 
              onChange={handleChange}
              onBlur={handleBlur} 
              className={`border min-h-[200px] max-h-[200px] font-light rounded-lg bg-transparent focus:scale-105 duration-300 focus:outline-none px-2 py-3 text-primaryWhite ${
                errors.description && touched.description
                  ? 'border-red-400 '
                  : 'border-primaryWhite'
                  }`} 
                  name="description" id="title" 
                  />
                  <label
                      htmlFor="description"
                      className={` text-textXS duration-500 ${
                      errors.description && touched.description
                          ? 'text-red-400 opacity-100'
                          : 'text-primaryDark opacity-0 duration-75'
                      } `}
                      >
                    {errors.description ? `${errors.description}` : '.'}
                  </label>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="progress" className='text-primaryWhite text-textBASE font-normal'>Progress</label>
              <textarea
              value={values.progress}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`border min-h-[200px] max-h-[200px] font-light rounded-lg bg-transparent focus:scale-105 duration-300 focus:outline-none px-2 py-3 text-primaryWhite ${
                errors.progress && touched.progress
                  ? 'border-red-400 '
                  : 'border-primaryWhite'
                  }`} 
                  name="progress" 
                  id="progress" 
                  />
                  <label
                      htmlFor="progress"
                      className={` text-textXS duration-500 ${
                      errors.progress && touched.progress
                          ? 'text-red-400 opacity-100'
                          : 'text-primaryDark opacity-0 duration-75'
                      } `}
                      >
                    {errors.progress ? `${errors.progress}` : '.'}
                  </label>
            </div>
            <div />
          </div>
          <div className=' flex flex-col gap-10 font-semibold text-textBASE w-full h-full '>
            <h2 className=" text-primaryWhite font-semibold capitalize text-textLG ">Details</h2>
            <div className=" flex flex-col gap-1">
              <label htmlFor="active" className='text-primaryWhite text-textBASE font-normal'>Active</label>
              <select className=' font-medium rounded-lg focus:scale-105 duration-300 focus:outline-none px-2 py-3' name="active" id="active" >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="tags" className='text-primaryWhite text-textBASE font-normal'>Add Tags</label>
              <input 
                placeholder='css, html, react' 
                type="text" 
                className={`border bg-transparent font-light rounded-lg focus:scale-105 duration-300 focus:outline-none px-2 py-3 ${errors.tags  && touched.tags ? 'border-red-400 ' : 'border-primaryWhite'} `}
                name="tags" 
                value={values.tags} 
                id="tags" 
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <label
                      htmlFor="tags"
                      className={` text-textXS duration-500 ${
                      errors.tags && touched.tags
                          ? 'text-red-400 opacity-100'
                          : 'text-primaryDark opacity-0 duration-75'
                      } `}
                      >
                    {errors.tags ? `${errors.tags}` : '.'}
                  </label>
            </div>
          </div>
          <div>
            <h2 className='text-primaryWhite font-semibold capitalize text-textLG '>Images</h2>
            <input type="file" accept='image/png, image/jpeg' />
          </div>
          <button
            id="submitBtn"
            className=" lg:hover:hoverShadow btn  mt-4 flex w-full min-w-[300px] max-w-[450px] items-center justify-center font-bold text-primaryWhite duration-300 md:max-w-[350px] lg:hover:scale-105 "
            type="submit">
            Send Message
          </button>
      </form>
    </>
  )
}

export default Form