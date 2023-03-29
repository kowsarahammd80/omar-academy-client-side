import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Player from "./VideoPlay/Videoplayer/Player";
import PlayerList from "./VideoPlay/Videoplayer/PlayerList";



const CoursDettails = () => {
  const videos = useLoaderData();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  console.log(videos, "this is video ")

  return (
    <>
      {" "}
   
      <div className="flex justify-between  flex-col lg:flex-row  xl:flex-row items-center my-20">
        <div className="xl:w-1/2 lg:w-1/2 w-full  h-[500px] ">
          {selectedVideo && <Player selectedVideo={selectedVideo}></Player>}
        </div>

        <div className="xl:w-1/2 lg:w-1/2 w-full  mx-2  h-[500px] overflow-y-scroll ">
          {videos?.map((video, index) => (
            <PlayerList
              chapter={video}
              index={index}
              handleVideoClick={handleVideoClick}
              key={video._id}
              selectedVideo={selectedVideo}
            ></PlayerList>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursDettails;
