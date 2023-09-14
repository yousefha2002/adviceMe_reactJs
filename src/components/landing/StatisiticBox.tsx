import React from 'react'
import {Box,Typography} from '@mui/material'

type props = {
    item :{
        title:string,
        answer:string,
        icon:any
    }
}

export default function StatisiticBox({item}:props) {
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Typography sx={{fontSize:"24px",color:"white",fontWeight:"600"}}>{item.answer}</Typography>
            <Box sx={{display:"flex",alignItem:"center",columnGap:"8px",marginTop:"12px",color:"#d3d3d3"}}>
                <item.icon sx={{fontSize:"22px"}}/>
                <Typography sx={{fontSize:"15px",fontWeight:"600"}}>{item.title}</Typography>
            </Box>
        </Box>
    ) 
}
