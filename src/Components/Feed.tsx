import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchFromUrl } from "../utils/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromUrl(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((er) => {
        console.log(er);
      });
  }, [selectedCategory]);
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        md: "row",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategories={selectedCategory}
          setSelectedCategories={setSelectedCategory.bind(this)}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ my: 1.5, color: "#fff" }}
        >
          Lorem ipsum dolor
        </Typography>
      </Box>
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
          {selectedCategory}{" "}
          <span
            style={{
              color: "#f31503",
            }}
          >
            Videos
          </span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
}

export default Feed;
