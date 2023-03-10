import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import formSchema from '../utils/validationSchema';
import { supabase } from '../../../supabase';

function Form() {
  const [uploads, setUploads] = useState([]);

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [mainImage, setMainImage] = useState();
  const [mainImagePreview, setMainImagePreview] = useState();

  // OnSubmit formik will validate the form. If every input is true.
  // CreatePost will not run if imgs is not added
  // If CreatePost returns error. Call function deleteImgs from storage.
  function onSubmit(values, actions) {
    console.log('VALIDATION SUCCESS');
    try {
      // Uploads img o bucket
      (async function uploadImg() {
        images.forEach(async (file) => {
          const newName = Date.now() + file.name;
          console.log(newName);
          const { data, error } = await supabase.storage
            .from('photos')
            .upload(newName, file);
          if (data) {
            console.log('success!!');
            console.log(data);
            createPost();
            setImages([]);
            actions.resetForm();

            const template = {
              url: `${
                import.meta.env.VITE_CARLLINUSHEDLUND_SUPABASE_URL
              }/storage/v1/object/public/photos/${data.path}`,
              key: data.path,
            };
            setUploads((prevUploads) => [...prevUploads, template]);
            console.log(uploads.url);
          }
          if (error) {
            console.log('error!!');
            console.log(error);
          }
        });
      })();

      // Post request to add to table
      function createPost() {
        supabase
          .from('projects')
          .insert({
            title: values.title,
            course: values.course,
            description: values.description,
            progress: values.progress,
            tags: [values.tags],
            images: [uploads.url],
            active: values.active,
          })
          .then((response) => {
            console.log(response);
            if (response.data) {
              console.log('CREATE POST SUCCEES!!');
              actions.resetForm();
            }
            if (response.error) {
              console.log('CREATE POST FAILED!!!');
              const { data, error } = supabase.storage
                .from('photos')
                .remove([imageURLs]);
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
    } catch (error) {}
  }

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  function onMainImageChange(e) {
    setMainImage(e.target.files[0]);
  }

  useEffect(() => {
    if (mainImage) {
      const url = URL.createObjectURL(mainImage);
      setMainImagePreview(url);
    }
  }, [mainImage]);

  function onImageChange(e) {
    setImages([...e.target.files]);
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
      <div className="flex w-full flex-col gap-20 lg:flex-row ">
        <div className=" flex h-full w-full flex-col gap-14 text-textBASE font-semibold lg:w-1/2 ">
          <h2 className=" text-textLG capitalize text-primaryWhite ">
            Information
          </h2>
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
        </div>
        <div className=" flex h-full w-full flex-col gap-10 text-textBASE font-semibold lg:w-1/2 ">
          <h2 className=" text-textLG font-semibold capitalize text-primaryWhite ">
            Images
          </h2>
          <div className="flex flex-col gap-5">
            <h2 className=" text-textBASE font-semibold capitalize text-primaryWhite ">
              Gallery
            </h2>
            <input
              className=" text-SM font-light text-primaryWhite "
              multiple
              id="image"
              name="image"
              type="file"
              accept="image/png, image/jpeg"
              onChange={onImageChange}
            />
            <div className="mt-4 flex flex-wrap gap-3">
              {imageURLs.map((imageSrc) => (
                <img
                  key={imageSrc}
                  className="h-16 w-auto rounded-md duration-500 hover:z-10 hover:scale-125"
                  src={imageSrc}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className=" text-textBASE font-semibold capitalize text-primaryWhite ">
              Main Image
            </h2>
            <input
              className=" text-SM font-light text-primaryWhite "
              id="image"
              name="image"
              type="file"
              accept="image/png, image/jpeg"
              onChange={onMainImageChange}
            />
            <div className="mt-4 flex flex-wrap gap-3">
              {mainImagePreview && (
                <img
                  key={mainImagePreview}
                  className="h-32 w-auto rounded-md duration-500 hover:z-10 hover:scale-125"
                  src={mainImagePreview}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center pt-20">
        <button
          id="submitBtn"
          className=" lg:hover:hoverShadow btn  mt-4 flex w-full min-w-[300px] max-w-[450px] items-center justify-center font-bold text-primaryWhite duration-300 md:max-w-[350px] lg:hover:scale-105 "
          type="submit"
          onSubmit={handleSubmit}
        >
          Publish
        </button>
      </div>
      <p className=" text-red-400 " />
    </form>
  );
}

export default Form;
