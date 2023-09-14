import React from 'react'
import PersonImg from '../../images/man-avatar.png'
import {Avatar , Box, Typography, styled, useTheme} from '@mui/material'
import { Link } from 'react-router-dom'
import AuthorInformation from './AuthorInformation'


type Props = {
    known:boolean
}

const AuthorWrapper = styled('div')({
    width:"fit-content",
    borderRadius:"8px",
    padding:"10px 12px",
    display:"flex",
    alignItems:"center",
    columnGap:"8px",
    position:"relative"
});


function PostAuthor({known}:Props) {
    const theme = useTheme();
    const [isHovered, setIsHovered] = React.useState(false);


return (
    <Link to={known?"/profile/1":""}>
        {
            known
            ?
            <AuthorWrapper sx={{backgroundColor:theme.palette.ligtGray.main}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <Avatar alt="Remy Sharp" src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'}/>
                <Box>
                    <Typography fontWeight={"600"} variant='h4' fontSize={"16px"} marginBottom={"4px"} 
                    sx={{":hover":{textDecoration:"underline"}}}>
                        <Link to="/profile/1">اسم الناشر</Link>
                    </Typography>
                    <Typography fontWeight={"400"}  fontSize={"14px"}>منذ 21 ساعة</Typography>
                </Box>
                {isHovered && <AuthorInformation />}
            </AuthorWrapper>
            :
            <AuthorWrapper sx={{backgroundColor:theme.palette.ligtGray.main}}>
                <Avatar alt="Remy Sharp" src={PersonImg}/>
                <Box>
                    <Typography fontWeight={"600"} variant='h4' fontSize={"16px"} marginBottom={"4px"}>مجهول</Typography>
                    <Typography fontWeight={"400"}  fontSize={"14px"}>منذ 21 ساعة</Typography>
                </Box>
            </AuthorWrapper>
        }
    </Link>
  )
}

export default PostAuthor