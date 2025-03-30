import React, { useEffect, useState } from "react";
import './Feed.css'
import moment from 'moment';



import { Link } from "react-router-dom";
import {API_KEY, value_converter} from '../../data'

const Feed =({category}) =>{

      const [data, setdata] = useState([]);

    const fetchdata = async()=>{
        const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videolist_url).then(response=>response.json()).then(data=>setdata(data.items))
    }

    useEffect(()=>{
        fetchdata();
    },[category])


return (
    <div className="feed">
        {data.map((item)=>{
       return (
        <Link to={`video/${item.snippet.categoryID}/${item.id}`} className="card" key={item.id}>
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
    </Link>
       )
        })}
    </div> 
)
}
export default Feed;