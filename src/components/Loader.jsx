import React from "react";
import { PiUserCircleFill } from "react-icons/pi";

const Loader = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return arr.map((item, index) => (
    <div
      key={index}
      className="max-w-sm px-4 py-3 rounded shadow animate-pulse md:p-6 border-gray-700"
    >
      <div className="flex items-center justify-center h-48 mb-4  rounded bg-gray-700"></div>

      <div className="flex items-center mt-4 ">
        <PiUserCircleFill className="text-5xl text-gray-700" />
        <div>
          <div className=" w-36 h-2.5 rounded-full bg-gray-700 mb-2"></div>
          <div className="w-20 h-2  rounded-full bg-gray-700"></div>
          <div className="w-80  h-2 rounded-full bg-gray-700 mt-2"></div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
