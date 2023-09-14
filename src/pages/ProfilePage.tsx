import React from 'react'
import {Box , Container , Typography , styled} from '@mui/material' 
import ProfileTop from '../components/profile/ProfileTop'
import Post from '../components/Post/Post';


const Title = styled(Typography)({
  fontSize:"20px",
  fontWeight:"700",
  marginBottom:"28px",
  marginTop:"28px"
});

function ProfilePage() {
  return (
    <Box sx={{maxWidth:"900px" , margin:"0 auto"}}>
      <Container sx={{paddingY:"50px"}}>
        <ProfileTop/>
        <Title variant='h2'> الأسئلة</Title>
        <Box>
          <Post page='all'/>
          <Post page='all'/>
        </Box>
      </Container>
    </Box>
  )
}

export default ProfilePage