import { CheckCircle } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromUrl } from "../utils/fetchFromAPI";
import Videos from "./Videos";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    fetchFromUrl(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data?.items[0])
    );

    fetchFromUrl(`search?part=snippet&releatedVideoId=${id}&type=video`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className={"react-player"}
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight={"bold"} p={2}>
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={"h6"} color={"#fff"}>
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "12px",
                      color: "gray",
                      ml: "5px",
                    }}
                  />
                </Typography>
              </Link>
              <Stack
                sx={{ opacity: "0.7" }}
                direction={"row"}
                gap={"20px"}
                alignItems={"center"}
              >
                <Typography>
                  {" "}
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography>
                  {" "}
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Videos videos={videos} direction={"column"} />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
