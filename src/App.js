import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChanelDetail from './Components/ChanelDetail'
import SearchFeed from './Components/SearchFeed'
import VideoDetail from './Components/VideoDetail'
import Feed from './Components/Feed'
import NavBar from './Components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:"#000"}}>
        <NavBar/>
        <Routes>  
          <Route path='/' element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/chanel/:id' element={<ChanelDetail/>}/>
          <Route path='/search/:id' element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App