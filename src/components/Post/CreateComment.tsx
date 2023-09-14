import React , {useRef}from 'react'
import {Stack , Avatar , styled , Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


const Input = styled('input')({
    flex:1,
    outline:"none",
    padding:"4px",
    height:"42px",
    borderRadius:"8px",
    border:"1px solid #a0a0a059",
})

function CreateComment() {

  console.log("render create comment");
  
  return (
    <>
    <Stack marginTop={"10px"} direction={"row"} justifyContent={"space-between"} columnGap={"4px"} alignItems={"flex-start"}>
        <Avatar src="path here" alt="moh"/>
        <Input type='text' placeholder='أكتب تعليق'/>
        <Button variant='contained' color='secondary' sx={{minWidth:"10px"}}>
            <SendIcon/>
        </Button>
    </Stack>
    </>
  )
}

export default React.memo(CreateComment);