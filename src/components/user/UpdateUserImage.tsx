import React from 'react'
import {Avatar, Box, Button, Typography} from '@mui/material'

export default function UpdateUserImage() {
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Avatar sx={{width:"85px",height:"85px",marginBottom:"8px"}} src="https://mui.com/static/images/avatar/1.jpg"/>
            <Typography sx={{color:"#363636",fontSize:"20px",fontWeight:"600"}}>Yousef Abohani</Typography>
            <Typography sx={{fontSize:"14px",color:"#737373",marginTop:"16px",marginBottom:"12px"}}>abohanyyousef@gmail.com</Typography>
            <Button color="info" size="small" variant="contained">عرض ملفك الشخصي</Button>
        </Box>
    )
}
