import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromUrl } from "../utils/fetchFromAPI";
import ChanelCard from "./ChanelCard";
import Videos from "./Videos";

function ChanelDetail() {
  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromUrl(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setchannelDetail(data?.items[0]);
      })
      .catch((er) => {
        console.log(er);
      });

    fetchFromUrl(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,32,36,1) 0%, rgba(9,85,121,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChanelCard chanelDetail={channelDetail} marginTop={"-93px"} />
      </Box>
      <Box display={"flex"} p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChanelDetail;
