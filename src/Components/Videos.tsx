import { Box, Stack } from '@mui/material'
import React from 'react'
import ChanelDetail from './ChanelDetail'
import VideoCard from './VideoCard'
interface Prop{
  videos:Array<any>
}
function Videos({videos}:Prop) {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent="start" gap={2}>
      {videos.map((item:any,idx:number)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard videos={item}/>}
          {/* {item.id.channelId && <ChanelDetail chanelDetail={item}/>} */}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos