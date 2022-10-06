import { Card, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoVideoUrl } from "../utils/contstants";

interface Prop {
  videos: any;
}
function VideoCard({ videos }: Prop) {
  let videoId = videos.id.videoId;
  let snippet = videos.snippet;
  console.log(videos);
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: 358, height: 180 }}
          
        />
      </Link>
    </Card>
  );
}

export default VideoCard;
