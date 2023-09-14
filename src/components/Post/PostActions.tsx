import { Box, Button, Stack, Typography } from '@mui/material'
import React , {useEffect, useState} from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CreateComment from './CreateComment';
import { Link } from 'react-router-dom';
import PostComments from './PostComments';

type Props = {
    page : 'all' | "singel"
  }

function PostActions({page}:Props) {
    const [openComment , setOpenComment] = useState<boolean>(false)
    useEffect(()=>{
        if(page==="all"){
            setOpenComment(false);
        }
        else{
            setOpenComment(true)
        }
    },[page]);
  return (
    <>
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Button sx={{color:"#000000"}}>
                <Box>
                    <ThumbUpOffAltIcon fontSize='small'/>
                    <Typography fontSize={"12px"} fontWeight={"bold"}>أعجبني</Typography>
                </Box>
            </Button>
            <Button sx={{color:"#000000"}} onClick={()=>setOpenComment(pre=>!pre)}>
                <Box>
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <Typography fontSize={"12px"} fontWeight={"bold"}>تعليق</Typography>
                </Box>
            </Button>
        </Stack>
        <Stack>
            <Button sx={{color:"#000000"}}>
                <StarOutlineIcon fontSize='medium'/>
            </Button>
        </Stack>
    </Stack>
    {
        page==="all"
        ?
        openComment && 
        <div style={{marginTop:"20px"}}>
            <Link to={'/questions/1'}>
                <Typography color={"secondary"} sx={{":hover":{textDecoration:"underline"}}}>عرض كافة التعليقات</Typography>
            </Link>
            <CreateComment/>
        </div>
        :
        <>
        {openComment && <PostComments/>}
        <CreateComment/>
        </>
    }
    </>
  )
}

export default PostActions