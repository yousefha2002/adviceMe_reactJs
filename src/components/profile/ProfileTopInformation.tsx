import React from 'react'
import { styled , Avatar, Typography} from '@mui/material'


const BackgroundDiv = styled('div')({
    borderTopLeftRadius:"6px",
    borderTopRightRadius:"6px",
    backgroundColor:"#ffd166",
    backgroundImage:"url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600)",
    backgroundPosition:"top center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    filter:"blur(36px)",
    height:"70%",
    width:"100%",
    position:"absolute",
    left:"0",
    top:"0"
});

const Wrapper = styled('div')({
    position:"relative",
    padding:"36px 22px 22px",
    textAlign:"center"
})

function ProfileTopInformation() {
  return (
    <Wrapper>
        <BackgroundDiv/>
        <Avatar
        sx={{width:"100px" , height:"100px" , margin:"0 auto 10px",position:"relative"}}
        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Typography sx={{position:"relative",fontWeight:"500",fontSize:"22px" , marginBottom:"6px"}}>Mohammed Husam</Typography>
        <Typography sx={{position:"relative",fontWeight:"500",fontSize:"16px"}}>مهندس</Typography>
    </Wrapper>      
  )
}

export default ProfileTopInformation