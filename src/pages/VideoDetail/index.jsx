import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../../utils/api";
import ReactPlayer from "react-player";
import VideoInfo from "./VideoInfo";
import ChannelInfo from "./ChannelInfo";
import VideoCard from "../../components/VideoCard";
import Comments from "./Comments";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));
    api.get(`/comments?id=${id}`).then((res) => setComments(res.data));
  }, [id]);
  return (
    <div className=" w-screen h-screen overflow-auto px-5 max-w-full max-h-full  video-detail-column xl:px-20">
      <div>
        <div className="w-full h-[50vh] lg:h-[50vh] xl:h-[70vh] xxl:h-[70vh] rounded-lg">
          <ReactPlayer
            controls
            light
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        {!video && <p>Loading...</p>}
        {video && (
          <>
            <h1 className="my-0 mb-2 text-l font-bold ">{video.title} </h1>

            <ChannelInfo video={video} />

            <VideoInfo video={video} />

            <Comments data={comments} />
          </>
        )}
      </div>
      <div className="h-[300px]">
        {video?.relatedVideos.data.map(
          (i) =>
            i.type === "video" && (
              <VideoCard key={i.videoId} video={i} isRow={true} />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
