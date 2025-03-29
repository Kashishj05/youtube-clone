import React, { useEffect, useState } from "react";
import './Recommanded.css'
import { value_converter } from "../../data";
import { API_KEY } from "../../data";
import { Link } from "react-router-dom";


const Recommanded =({categoryId}) =>{

    const [apidata,setapidata] = useState([]);
    
    const fetchdata = async () =>{
        const realted_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${API_KEY}`;
 
        await fetch(realted_url).then(res=>res.json()).then(data=>setapidata(data.items))
    }
    
    
     useEffect(()=>{
      fetchdata();
     },[])
    
    return(
        <div className="recommended">
            {
            (apidata?apidata.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div className="vid-info">
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{value_converter(item.statistics.viewCount) }views</p>
                </div>
            </Link>
              )
            }):"")}
        </div>
        // <div className="recommended">
        //     <div className="side-video-list">
        //         <img src={thumbnail1} alt="" />
        //         <div className="vid-info">
        //             <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure consequatur quasi non recusandae tenetur consequuntur quam exercitationem velit totam doloribus in quia, adipisci sunt obcaecati cupiditate architecto. Ullam, quae deserunt.</h4>
        //             <p>Lorem, ipsum dolor.</p>
        //             <p>Lorem, ipsum.</p>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Recommanded;