import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate=useNavigate();
  const handlingSubmit=(e:InputEvent)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm("");
    }
  }
  return (
    <Paper
      component={"form"}
      onSubmit={handlingSubmit.bind(this)}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e:any) =>setSearchTerm(e.target.value)}
      />
      <IconButton type={"submit"} sx={{p:"10px",color:"red"}}>
        <Search/>
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
