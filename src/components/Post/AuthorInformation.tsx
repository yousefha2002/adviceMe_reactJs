import React from 'react'
import {styled , Stack , Avatar , Box, Typography} from '@mui/material'

const Wrapper =styled('div')({
    position:"absolute",
    bottom:"100%",
    backgroundColor:"white",
    borderRadius:"6px",
    padding:"10px 15px",
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
});

const InformationTitle = styled('div')({
    display:"flex",
    alignItems:"center",
    columnGap:"8px",
    justifyContent:"flex-start",
    borderBottom:"1px solid #a0a0a059",
    paddingBottom:"6px",
    marginBottom:"6px"
})

const Name = styled('h5')({
    fontWeight:"600",
    fontSize:"16px",
    width: 'auto',
})

const Author = styled('h5')({
    fontWeight:"500",
    fontSize:"16px",
    width: 'auto',
});

const Description = styled('p')({
    maxWidth:"280px",
    fontSize:"14px",
    fontWeight:"400"
})

function AuthorInformation() {
  return (
    <Wrapper>
        <InformationTitle>
            <Avatar alt="Remy Sharp" src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'}
            sx={{width:"55px" , height:"55px"}}/>
            <Box sx={{width:"max-content"}}>
                <Name>إسم الناشر</Name>
                <Author>(وصف قصير هنا)</Author>
                <Description>وظني فيك يا سندي جميل فحقق يا الهي حسن ظني</Description>
            </Box>
        </InformationTitle>
        <Stack direction={"row"} justifyContent={"space-evenly"} columnGap={"12px"}>
            <Box sx={{textAlign:"center"}}>
                <Typography sx={{fontSize:"20px" , fontWeight:"400"}}>22</Typography>
                <Typography sx={{fontSize:"12px"}}>سؤال</Typography>
            </Box>
            <Box sx={{textAlign:"center"}}>
                <Typography sx={{fontSize:"20px" , fontWeight:"400"}}>22</Typography>
                <Typography sx={{fontSize:"12px"}}>إجابة</Typography>
            </Box>
        </Stack>
    </Wrapper>
  )
}

export default AuthorInformation