import millify from "millify";
import React, { useState } from "react";

const VideoInfo = ({ video }) => {
  const [expant, setExpant] = useState(true);
  const text = expant
    ? video.description.slice(0, 300) + "..."
    : video.description;
  return (
    <div
      onClick={() => setExpant(!expant)}
      className=" bg-darkgray rounded p-2 my-4 cursor-pointer hover:bg-opacity-80 "
    >
      <div className="flex gap-4 mb-2">
        <p className=" font-bold text-sm "> {millify(video.viewCount)} </p>
        <p className=" font-bold text-sm ">
          {" "}
          {new Date(video.publishDate).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}{" "}
        </p>
      </div>
      <p>
        {text.split("/n").map((line) => (
          <span key={line}>
            {line} <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default VideoInfo;
