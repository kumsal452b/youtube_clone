import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromUrl } from "../utils/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const {searchTerm}= useParams();
  useEffect(() => {
    fetchFromUrl(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((er) => {
        console.log(er);
      });
  }, [searchTerm]);
  return (
    <Box
      p={2}
      sx={{
        overflowX: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        Search Result For:{" "}
        <span
          style={{
            color: "#f31503",
          }}
        >
         {searchTerm}
        </span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
