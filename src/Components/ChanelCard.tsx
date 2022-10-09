import { CheckCircle, Height } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/contstants";

interface Prop {
  chanelDetail: any;
  marginTop?:string;
}
function ChanelCard({ chanelDetail,marginTop }: Prop) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:{
          xs:"356px",
          md:"320px"
        },
        height:"326px",
        margin:"auto",
        marginTop:marginTop
      }}
    >
      <Link to={`/channel/${chanelDetail?.id?.channelId}`}>
        <CardContent
        sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          textAlign:"center",
          color:"#fff"
        }}
        >
          <CardMedia 
            image={chanelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{
              borderRadius:"50%",
              height:"180px",
              width:"180px",
              mb:2,
              border:'1px solid #e3e3e3'
            }}
          />
          <Typography variant="h6">
            {chanelDetail?.snippet?.title}
            <CheckCircle sx={{
                fontSize:"14px",
                color:"gray",
                ml:1
              }}/>
          </Typography>
          <Typography>
            {chanelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(chanelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
              </Typography>
            )}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChanelCard;
