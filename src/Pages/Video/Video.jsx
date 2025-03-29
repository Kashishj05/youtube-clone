import React from "react";
import './Video.css';
import Playvideo from "../../Componenets/playVideo/Playvideo";
import Recommanded from "../../Componenets/Recommended/Recommanded";
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
