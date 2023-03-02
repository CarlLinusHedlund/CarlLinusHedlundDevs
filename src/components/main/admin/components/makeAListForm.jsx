import React, { useState } from 'react';
import { useFormik } from 'formik';
import formSchema from '../utils/ValidationSchema';
import { supabase } from '../../../../supabase';

function Form() {
   const [selectedImages, setSelectedImages] = useState([]);
   

   
   // OnSubmit formik will validate the form. If every input is true.
   // CreatePost will not run if imgs is not added
   // If CreatePost returns error. Call function deleteImgs from storage.
   const onSubmit = (values, actions) => {
    //  const imageUrls = uploads.map((upload) => upload.url);
     function createPost() {
       supabase.from('projects').insert({
         title: values.title,
         course: values.course,
         description: values.description,
         progress: values.progress,
         tags: [values.tags],
         images: imageUrls,
         active: values.active,
       }).then((response) => {
         console.log(response);
         if (response.data) {
           console.log('CREATE POST SUCCEES!!');
           actions.resetForm();
         }
         if (response.error) {
           console.log('CREATE POST FAILED!!!');
           const { data, error } = supabase
             .storage
             .from('avatars')
             .remove([imageUrls]);
           if (error) {
             console.log(error);
             console.log('IMAGES not removed');
           }
           if (data) {
             console.log(data);
             console.log('IMAGES removed');
           }
         }
       });
     }
     if (uploads.length > 0) {
       console.log('ImgIsAdded');
       createPost();
     } else {
       console.log('Please add Img');
     }
   };



  
function uploadImgStorage(ev) {
  console.log("Upploadfunction");
}

  //Previewimg
  function addPreview(ev) {
    console.log("log me");
    const selectedFiles = ev.target.files;

    const selectedFilesArr = Array.from(selectedFiles);
    console.log('selectedAFilesArr: ', selectedFilesArr);
    const imageArr = selectedFilesArr.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((prevImages) => prevImages.concat(imageArr));
  }

  const { values, handleChange, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        title: '',
        course: '',
        description: '',
        progress: '',
        tags: '',
        active: true,
      },
      validationSchema: formSchema,
      onSubmit,
    });

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex w-full flex-col gap-10 pb-32 font-rubik"
    >
      <div className="w-full flex-col lg:flex-row ">
        <div className=" flex h-full w-full flex-col gap-14 text-textBASE font-semibold ">
          <h2 className=" text-textLG capitalize text-primaryWhite ">Information</h2>
          <div className="flex h-full w-full flex-col gap-5">
            <div className=" flex flex-col ">
              <label
                htmlFor="title"
                className="text-textBASE font-normal text-primaryWhite"
              >
                Title
              </label>
              <input
                className={` border-b bg-transparent p-3 text-primaryWhite outline-none duration-300 focus:scale-105 focus:border-b-2 focus:outline-none lg:p-2 ${
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
              <label
                htmlFor="course"
                className="text-textBASE font-normal text-primaryWhite"
              >
                Course
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border-b bg-transparent p-3 text-primaryWhite outline-none duration-300 focus:scale-105 focus:border-b-2 focus:outline-none lg:p-2  ${
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
            <label
              htmlFor="description"
              className="text-textBASE font-normal text-primaryWhite"
            >
              Description
            </label>
            <textarea
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`border-b bg-transparent p-3 text-primaryWhite outline-none duration-300 focus:scale-105 focus:border-b-2 focus:outline-none lg:p-2 ${
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
            <label
              htmlFor="progress"
              className="text-textBASE font-normal text-primaryWhite"
            >
              Progress
            </label>
            <textarea
              value={values.progress}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`border-b bg-transparent p-2 text-primaryWhite outline-none duration-300 focus:scale-105 focus:border-b-2 focus:outline-none lg:p-2 ${
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
        <div className=" flex h-full w-full flex-col gap-10 text-textBASE font-semibold ">
          <h2 className=" text-textLG font-semibold capitalize text-primaryWhite ">
            Details
          </h2>
          <div className=" flex flex-col gap-1">
            <label
              htmlFor="active"
              className="text-textBASE font-normal text-primaryWhite"
            >
              Active
            </label>
            <select
              className=" rounded-lg px-2 py-3 font-medium duration-300 focus:scale-105 focus:outline-none"
              name="active"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.active}
              id="active"
            >
              <option value>Active</option>
              <option value={false}>Not Active</option>
            </select>
          </div>
          <div className=" flex flex-col gap-1">
            <label
              htmlFor="tags"
              className="text-textBASE font-normal text-primaryWhite"
            >
              Add Tags
            </label>
            <input
              placeholder="css, html, react"
              type="text"
              className={`border-b bg-transparent p-3 text-primaryWhite outline-none duration-300 focus:scale-105 focus:border-b-2 focus:outline-none lg:p-2 ${
                errors.tags && touched.tags
                  ? 'border-red-400 '
                  : 'border-primaryWhite'
              } `}
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
            <h2 className="text-textLG font-semibold capitalize text-primaryWhite ">
              Images
            </h2>
            <input
              multiple
              id="image"
              name="image"
              type="file"
              accept="image/png, image/jpeg"
              onChange= {(e) => {addPreview(e), uploadImgStorage(e);}}
            />
            
            <div className="mt-4 flex gap-3">
              {selectedImages &&
                selectedImages.map((image) => {
                  return (
                    <div
                      key={image}
                      className="group relative rounded-md border bg-primaryWhite p-4"
                    >
                      <img
                        onClick={(e) => setSelectedImages(
                          selectedImages.filter((e) => e !== image)
                        )}
                        src="../add.svg"
                        alt="close icon"
                        className=" absolute top-1 right-1 h-5 w-5 rotate-45 cursor-pointer opacity-100 duration-300 hover:opacity-100 lg:h-4 lg:w-4 lg:opacity-0 lg:group-hover:opacity-100 "
                      />
                      <img
                        src={image}
                        alt={image}
                        className="h-20 w-auto rounded-lg"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
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
