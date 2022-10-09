import { Box, Stack } from '@mui/material'
import React from 'react'
import ChanelCard from './ChanelCard'
import VideoCard from './VideoCard'
interface Prop{
  videos:Array<any>,
  direction?:string
}
function Videos({videos,direction}:Prop) {
  let current_direction:any="row";
  if(direction){
    current_direction="column"
  }
  // if(!videos) return "Loading...";
  return (
    <Stack direction={current_direction} flexWrap={"wrap"} justifyContent="start" gap={2}>
      {videos?.map((item:any,idx:number)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard videos={item}/>}
          {item.id.channelId && <ChanelCard chanelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos