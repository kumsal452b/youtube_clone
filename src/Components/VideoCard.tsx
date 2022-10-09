import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from "../utils/contstants";

interface Prop {
  videos: any;
}
function VideoCard({ videos }: Prop) {
  let videoId = videos.id.videoId;
  let snippet = videos.snippet;
  console.log(videos);
  return (
    <Card sx={{
      width:{
        xs:"100%",
        md:"320px",
        sm:"358px",
        boxShadow:"none",
        borderRadius:"none"
      }
    }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: {
            xs:"100%",
            sm:"358px",
            md:"320px"
          }, height: 180 }}
          
        />
        <CardContent sx={{
          backgroundColor:"#1e1e1e",
          height:"106px",
        }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" color={"#FFF"} fontWeight={"bold"}>
              {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" color={"gray"} fontWeight={"bold"}>
              {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
              <CheckCircle sx={{
                fontSize:"12px",
                color:"gray",
                ml:5
              }}/>
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
}

export default VideoCard;
