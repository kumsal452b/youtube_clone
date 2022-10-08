import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/contstants";
interface Props {
  selectedCategories: string;
  setSelectedCategories: (name: string) => void;
}

const SideBar = ({ selectedCategories, setSelectedCategories }: Props) => {
  return (
    <Stack
      // direction={{ xs: "column", sm: "row" }}
      sx={{
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%",
        },
        // display:"flex",
        // flexDirection:{ xs: "column", sm: "row" }
      }}
    >
      {categories.map((el) => {
        return (
          <button
            className="category-btn"
            onClick={() => setSelectedCategories(el.name)}
            style={{
              backgroundColor: el.name === selectedCategories && "#FC1503",
              color: "white",
            }}
            key={el.name}
          >
            <span
              style={{
                color: el.name === selectedCategories ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {el.icon}
            </span>
            <span
              style={{
                opacity: el.name === selectedCategories ? "1" : "0.8",
              }}
            >
              {el.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
