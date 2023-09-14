import React from 'react'
import {Box , useTheme , Typography , styled} from '@mui/material' 
import { Link } from 'react-router-dom'


type PropsTitle = {
    text:string
}

const StyledLink = styled(Link)({
  ":hover":{
    textDecoration:"underline",
  }
})

function PostTitle({text}:PropsTitle) {
  const theme = useTheme()

  return (
    <Box sx={{backgroundColor:theme.palette.groundBlue.main,padding:"14px 10px", borderRadius:"6px"}}>
      <Typography variant='h3' fontSize={"22px"} fontWeight={"700"} sx={{color:theme.palette.secondary.main}}>
        <StyledLink to={"/questions/1"}>
          {text}
        </StyledLink>
      </Typography>
    </Box>
  )
}

export default PostTitle