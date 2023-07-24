import React, { useEffect } from 'react'
import { useState } from 'react'
import { Box,Stack,Typography } from '@mui/material'
import SideBar from './SideBar'
import Vedios from './Vedios'
import { fetchfromApi } from '../utils/fetchfromApi'

const Feed = () => {
  const [selectedCategory,setselectedCategory]=useState("New");
  const [vedios,setVedios]=useState([]);

  useEffect(()=>{
  fetchfromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVedios(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:"auto",md:'92vh' },borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:"#fff"}}>Copyright 2022 JSM Media</Typography>
      </Box>
      <Box  p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
         {selectedCategory} <span style={{color:'#f31503'}}>videos</span>
        </Typography>
        <Vedios vedio={vedios}/>

      </Box>

    </Stack>
  )
}

export default Feed