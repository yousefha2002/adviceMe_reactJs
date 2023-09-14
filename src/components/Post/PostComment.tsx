import React from 'react'
import {Typography , Avatar , Stack , useTheme , styled} from '@mui/material'

const CommentText = styled('p')({
    padding:"12px 12px",
    borderRadius:"8px",
    width:"fit-content",
    marginTop:"4px",
    fontSize:"14px"
})

function PostComment() {
    const theme = useTheme();
  return (
    <div>
        <Stack direction={"row"} alignItems={"center"} columnGap={"4px"} marginTop={"6px"}>
            <Avatar src='sws' alt='s' sx={{width:"35px" , height:"35px"}}/>
            <Typography sx={{fontSize:"14px" , color:theme.palette.grey[600] , fontWeight:"500"}}>محمد</Typography>
        </Stack>
        <CommentText sx={{backgroundColor:theme.palette.ligtGray.main}}>
             هنا سوف يكون مكان ظهور التعليق 
        </CommentText>
    </div>
  )
}

export default PostComment