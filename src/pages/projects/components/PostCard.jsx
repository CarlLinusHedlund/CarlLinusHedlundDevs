import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ title, course, id, main_image }) {
  // const { postId } = useParams();
  return (
    <div className="flex max-w-5xl flex-col gap-6 lg:flex-row ">
      <div className="flex items-center ">
        <img className="rounded-lg" src={main_image} alt="" />
      </div>
      <div className=" font-rubik uppercase text-primaryWhite ">
        <h3 className=" text-primaryCoral ">{course}</h3>
        <h2 className=" text-[40px] font-bold uppercase leading-10 sm:text-textXL sm:leading-[3rem] lg:text-textXL ">
          {title}
        </h2>
        <p className=" max-w-[450px] text-textXS md:max-w-[350px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id turpis
          vestibulum amet, nulla ullamcorper diam amet tincidunt. Aliquam urna,
          dis elementum at mauris pulvinar bibendum.{' '}
        </p>
        <Link to={`${id}`}>
          <button
            type="button"
            className="lg:hover:hoverShadow btn group mt-4 flex w-full max-w-[450px] items-center justify-between duration-300 md:max-w-[350px] lg:hover:scale-105 "
          >
            <p className="text-textSM font-semibold text-primaryWhite">
              Read More
            </p>
            <img
              className="group-hover:animate-bounce-x"
              src="./arrow.svg"
              alt="arrow"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
