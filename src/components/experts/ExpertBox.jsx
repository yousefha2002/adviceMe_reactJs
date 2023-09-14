import { Paper, styled , Avatar, Stack, Typography, useTheme} from '@mui/material'
import {  grey , yellow} from '@mui/material/colors';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Link } from 'react-router-dom';

const Wrapper = styled(Paper)({
    backgroundColor:"#fff",
    padding:"40px 16px",
    borderRadius:"6px",
    textAlign:"center"
})

function ExpertBox() {
    return (
    <Link to="/profile/1">
        <Wrapper>
            <Avatar
                sx={{ bgcolor: grey[900], margin:"0 auto" , width:60 , height:60}}
                alt="محمد"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Stack direction={"row"} justifyContent={"center"} spacing={1} marginTop={2} alignItems={"center"}>
                <Typography sx={{fontWeight:"700"}}>محمد</Typography>
                <Stack direction={"row"} justifyContent={"center"} spacing={"2px"} >
                    <WorkspacePremiumIcon fontSize='small' sx={{color:yellow[800]}}/>
                    <Typography sx={{color:grey[500] , fontSize:14}}>22.2k</Typography>
                </Stack>
            </Stack>
        </Wrapper>
    </Link>
)
}

export default ExpertBox