import React from 'react';
import { supabase } from '../../../supabase';

export default function Card({ course, title, id }) {
  async function deletePost() {
    const { error } = await supabase.from('projects').delete('*').eq('id', id);

    if (error) {
      console.log(error);
    } else {
      window.location.reload;
    }
  }
  return (
    <div className="relative my-20 flex w-full flex-col gap-4 lg:flex-row ">
      <div className=" ">
        <img src="../jobless.png" alt="jobless" />
      </div>
      <div className="flex w-full flex-col justify-between gap-10 leading-10 lg:w-2/5">
        <div className="flex flex-col gap-1">
          <h3 className=" text-ellipsis text-textBASE uppercase text-primaryCoral">
            {course}
          </h3>
          <h2 className=" text-ellipsis font-rubik text-textXL font-semibold uppercase leading-[3rem] text-primaryWhite ">
            {title}
          </h2>
        </div>
        <div className=" flex flex-col items-center gap-10 lg:flex-row">
          <button
            className="w-full rounded-md border-2 border-primaryCoral py-2 uppercase text-primaryWhite duration-500 hover:scale-105 lg:w-3/4 lg:py-1"
            type="button"
          >
            edit post
          </button>
          <button
            onClick={deletePost}
            className="w-full cursor-pointer rounded-md border-2 border-primaryWhite py-2 uppercase lg:w-fit lg:w-fit lg:border-none lg:py-1 "
            type="button"
          >
            <img
              className="hidden h-8 opacity-40 duration-500 hover:scale-110 hover:opacity-100 lg:block "
              src="../delete.svg"
              alt="delete"
            />
            <span className="  text-primaryWhite lg:hidden">delete</span>
          </button>
        </div>
      </div>
      <div className="absolute left-[50%] right-[50%] -bottom-32 h-10 w-[2px] bg-primaryWhite opacity-20 " />
    </div>
  );
}
