import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ title, course, id, images, intro }) {
  // const { postId } = useParams();
  return (
    <div className="flex max-w-5xl flex-col gap-6 lg:flex-row ">
      <div className="flex items-center ">
        <img className="rounded-lg" src={images[0]} alt="" />
      </div>
      <div className=" flex min-w-fit flex-col justify-between font-rubik uppercase text-primaryWhite ">
        <div className=" min-w-[300px] whitespace-pre-wrap ">
          <h3 className=" text-primaryCoral ">{course}</h3>
          <h2 className=" text-[40px] font-bold uppercase leading-10 sm:text-textXL sm:leading-[3rem] lg:text-textXL ">
            {title}
          </h2>
          <p className=" max-w-[450px] whitespace-normal text-textXS md:max-w-[350px] ">
            {intro}
          </p>
        </div>
        <Link to={`${id}`}>
          <button
            type="button"
            className="lg:hover:hoverShadow btn group mt-4 flex w-full max-w-[450px] items-center justify-center uppercase duration-300 md:max-w-[350px] lg:hover:scale-105 "
          >
            <p className="text-textSM font-semibold text-primaryWhite">
              Read More
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
