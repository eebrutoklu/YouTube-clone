import React from "react";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";

const Comments = ({ data }) => {
  //   console.log(data.data);
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">
        {data.commentsCount} <p>Comments</p>{" "}
      </h2>
      <input
        className="w-full bg-transparent border-b p-2 outline-none mb-5 "
        type="text"
        placeholder="Add a comment."
      />

      {data.data.map((i) => (
        <div className="flex gap-2 items-start px-1 py-4">
          <img
            className="rounded-full"
            src={i.authorThumbnail[0].url}
            alt="logo"
          />
          <div className="flex flex-col gap-2">
            <h5 className="flex gap-2">
              <span className="text-semibold"> {i.authorText} </span>
              <span className="text-sm text-gray-400">
                {i.publishedTimeText}
              </span>
            </h5>
            <p>{i.textDisplay} </p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 items-center hover:bg-gray-700 p-1 rounded cursor-pointe">
                <i>
                  <BiSolidLike />
                </i>
                <span className="text-sm text-gray-400">{i.likesCount} </span>
              </div>{" "}
              <i className=" hover:bg-gray-700 p-1 rounded cursor-pointer">
                <BiSolidDislike />
              </i>
              <span className=" hover:bg-gray-700 p-1 rounded cursor-pointer">
                answer
              </span>
            </div>
            {i.replyCount > 0 && (
              <div className="flex px-2 rounded-md w-fit items-center gap-2 text-blue-500 hover:bg-[#c4cad22a]">
                <TiArrowSortedDown /> {i.replyCount} answer
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
