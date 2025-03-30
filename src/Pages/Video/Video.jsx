import React from "react";
import './Video.css';
import Playvideo from "../../Components/playVideo/Playvideo";
import Recommanded from "../../Components/Recommended/Recommanded";
import { useParams } from "react-router-dom";

const Video =()=>{
    const {videoId, categoryId} = useParams();
  
    return (
        <div className="play-container">
            <Playvideo videoId={videoId}/>
            <Recommanded categoryId={categoryId}/>
        </div>
    )
}
export default Video;
