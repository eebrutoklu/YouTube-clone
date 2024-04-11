import React from "react";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineSaveAlt } from "react-icons/md";
import { LuScissorsSquare } from "react-icons/lu";
const ChannelInfo = ({ video }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-12 h-12"
            src={video.channelThumbnail[0].url}
            alt=""
          />
          <div>
            <h4 className="font-bold ">{video.channelTitle} </h4>
            <p className="text-gray-400">{video.subscriberCountText} </p>
          </div>
          <button className="bg-white text-black px-3 h-9 transition hover:bg-gray-400 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex gap-5 my-3">
        <div className="flex w-30 h-10 items-center px-3 py-0  bg-darkgray rounded-full cursor-pointer ">
          <div className="py-1 px-2 border-r hover:text-gray-900 transition duration-300">
            <BiSolidLike />
          </div>
          <div className="py-1 px-2  hover:text-gray-900 transition duration-300">
            <BiSolidDislike />
          </div>
        </div>
        <div className="flex w-30 h-10 items-center px-3 py-0  bg-darkgray rounded-full cursor-pointer  gap-2">
          <p className=" hover:text-gray-900 transition duration-300">
            <IoIosShareAlt />
          </p>{" "}
          <p>Share</p>
        </div>
        <div className="flex w-30 h-10 items-center px-3 py-0  bg-darkgray rounded-full cursor-pointer  gap-2">
          {" "}
          <p className=" hover:text-gray-900 transition duration-300">
            <MdOutlineSaveAlt />
          </p>{" "}
          <p>Save</p>
        </div>
        <div className="flex w-30 h-10 items-center px-3 py-0  bg-darkgray rounded-full cursor-pointer gap-2">
          <p className=" hover:text-gray-900 transition duration-300">
            <LuScissorsSquare />
          </p>{" "}
          <p> Clip</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
