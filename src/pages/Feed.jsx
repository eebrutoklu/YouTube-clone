// Feed.jsx
import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import { VideoContext } from "../context/VideoContext";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";
import ErrrorDisplay from "../components/ErrrorDisplay";

const Feed = () => {
  const { video, error, isLoading } = useContext(VideoContext);
  return (
    <div className="flex gap-1 mr-2">
      <SideBar />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrrorDisplay error={error} />
        ) : (
          video?.map(
            (i) => i.type === "video" && <VideoCard key={i.videoId} video={i} />
          ) // VideoCard bileşenine video prop'unu geçir
        )}
      </div>
    </div>
  );
};

export default Feed;
