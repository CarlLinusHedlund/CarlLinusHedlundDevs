import React, { useState } from 'react';
import { useFormik } from 'formik';
import formSchema from '../utils/ValidationSchema';
import { supabase } from '../../../../supabase';

function Form() {
  const [selectedImages , setSelectedImages] = useState([]);
  // const [uploadedImages, setUploadedImages] = useState([]);


  // function addUploads (event) {
  //   setUploadedImages(event.target.files)
  //   console.log(uploadedImages);
  // }

  
  function onSubmit () {
    // const uniqueImages = selectedImages.map((image) => {
    //   const timeStamp = new Date().getTime();
    //   const fileName = timeStamp + image
    //   return [fileName, image]
    // })
    // console.log(uniqueImages);
    // console.log(fileName);
    // console.log(image);
    
    for (const file of selectedImages){
      const { data, error } = supabase
      .storage
      .from('photos')
      .upload('homo', file)
      .then((result) => {
        if(result.data){
          console.log(data);
        } if (result.error) {
          console.log(error);
        }
      })
    }

    // const { data, error } = await supabase
    //   .storage
    //   .from('avatars')
    //   .upload('public/avatar1.png', selectedImages, {
    //     cacheControl: '3600',
    //     upsert: false
    //   })
    //   .then((result) => {
    //     if(result.data){
    //       console.log(data);
    //     } if (result.error) {
    //       console.log(error);
    //     }
    //   })
}









  //Previewimg
  function addPhotos(ev) {
    const selectedFiles = ev.target.files;
    const selectedFilesArr = Array.from(selectedFiles);
    console.log("selectedAFilesArr: ", selectedFilesArr);
    const imageArr = selectedFilesArr.map((file) => {
      return URL.createObjectURL(file)
    })
    setSelectedImages((prevImages) => prevImages.concat(imageArr));
  }

  const {
    values, handleChange, errors, touched, handleBlur, handleSubmit,
  } = useFormik({
    initialValues: {
      title: '',
      course: '',
      description: '',
      progress: '',
      tags: '',
      active: true
    },
    validationSchema: formSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className=" w-full font-rubik flex flex-col gap-10 pb-32">
      <div className='w-full flex-col lg:flex-row '>
        <div className=" flex flex-col gap-14 font-semibold text-textBASE w-full h-full ">
          <h2 className=" text-primaryWhite capitalize text-textLG ">Information</h2>
          <div className="w-full h-full flex flex-col gap-5">
            <div className=" flex flex-col ">
              <label htmlFor="title" className="text-primaryWhite text-textBASE font-normal">Title</label>
              <input
                className={` outline-none focus:outline-none focus:scale-105 focus:border-b-2 text-primaryWhite border-b bg-transparent p-3 duration-300 lg:p-2 ${
                  errors.title && touched.title
                    ? 'border-red-400 '
                    : 'border-primaryWhite'
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                name="title"
                id="title"
                type="text"
                value={values.title}
              />
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
            <div className=" flex flex-col ">
              <label htmlFor="course" className="text-primaryWhite text-textBASE font-normal">Course</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={`outline-none focus:outline-none focus:scale-105 focus:border-b-2 text-primaryWhite border-b bg-transparent p-3 duration-300 lg:p-2  ${
                  errors.course && touched.course
                    ? 'border-red-400 '
                    : 'border-primaryWhite'
                }`}
                name="course"
                id="course"
                type="text"
                value={values.course}
              />
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
          <div className=" flex flex-col gap-2 pt-5">
            <label htmlFor="description" className="text-primaryWhite text-textBASE font-normal">Description</label>
            <textarea
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`outline-none focus:outline-none focus:scale-105 focus:border-b-2 text-primaryWhite border-b bg-transparent p-3 duration-300 lg:p-2 ${
                errors.description && touched.description
                  ? 'border-red-400 '
                  : 'border-primaryWhite'
              }`}
              name="description"
              id="title"
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
          <div className=" flex flex-col gap-2 pb-5">
            <label htmlFor="progress" className="text-primaryWhite text-textBASE font-normal">Progress</label>
            <textarea
              value={values.progress}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`outline-none focus:outline-none focus:scale-105 focus:border-b-2 text-primaryWhite border-b bg-transparent p-2 duration-300 lg:p-2 ${
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
        <div className=" flex flex-col gap-10 font-semibold text-textBASE w-full h-full ">

          <h2 className=" text-primaryWhite font-semibold capitalize text-textLG ">Details</h2>
          <div className=" flex flex-col gap-1">
            <label htmlFor="active" className="text-primaryWhite text-textBASE font-normal">Active</label>
            <select
              className=" font-medium rounded-lg focus:scale-105 duration-300 focus:outline-none px-2 py-3"
              name="active"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.active}
              id="active"
            >
              <option
                value
              >
                Active
              </option>
              <option
                value={false}
              >
                Not Active
              </option>
            </select>
          </div>
          <div className=" flex flex-col gap-1">
            <label htmlFor="tags" className="text-primaryWhite text-textBASE font-normal">Add Tags</label>
            <input
              placeholder="css, html, react"
              type="text"
              className={`outline-none focus:outline-none focus:scale-105 focus:border-b-2 text-primaryWhite border-b bg-transparent p-3 duration-300 lg:p-2 ${errors.tags && touched.tags ? 'border-red-400 ' : 'border-primaryWhite'} `}
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
          <div>
          <h2 className="text-primaryWhite font-semibold capitalize text-textLG ">Images</h2>
          <input
            multiple
            id="image"
            name="image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={addPhotos}
          />
          <label
            htmlFor="tags"
            className={` text-textXS duration-500 ${
              errors.image && touched.image
                ? 'text-red-400 opacity-100'
                : 'text-primaryDark opacity-0 duration-75'
            } `}
          >
            {errors.image ? `${errors.image}` : '.'}
          </label>
          <div className='flex gap-3 mt-4'>
            {selectedImages && 
              selectedImages.map((image) => {
                return (
                  <div key={image} className="relative border group rounded-md bg-primaryWhite p-4">
                    <img onClick={() => 
                    setSelectedImages(selectedImages.filter((e) => e !== image)) } src="../add.svg" alt="close icon" className=' lg:group-hover:opacity-100 rotate-45 h-5 w-5 lg:h-4 lg:w-4 absolute top-1 right-1 opacity-100 lg:opacity-0 hover:opacity-100 duration-300 cursor-pointer ' />
                    <img src={image} alt={image} className="rounded-lg w-auto h-20" />
                  </div>
                )
              })
            }
          </div>
        </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <button
          id="submitBtn"
          className=" lg:hover:hoverShadow btn  mt-4 flex w-full min-w-[300px] max-w-[450px] items-center justify-center font-bold text-primaryWhite duration-300 md:max-w-[350px] lg:hover:scale-105 "
          type="submit"
        >
          Submit
        </button>
      </div>
      
      <p className=" text-red-400 " />
    </form>
  );
}

export default Form;
