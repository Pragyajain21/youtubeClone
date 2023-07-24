import React from 'react'
import { Stack ,Box} from '@mui/material';
import VedioCard from './VedioCard';
import ChannelCard from './ChannelCard';


const Vedios = ({vedio}) => {
    console.log(vedio);
  return (
   <Stack  direction="row" flexWrap="wrap" justifyContent="start"gap={2}>
    {vedio.map((item,idx)=>(
        <Box key={idx}>
          {  item.id.videoId && <VedioCard vedio={item}/>}
          {  item.id.channelId && <ChannelCard channelDetail={item}/>}

        </Box>
    ))}
   
   </Stack>
  )
}

export default Vedios