import { Paper ,Avatar, Box,styled, Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const MemberText = styled('p')({
    textAlign:"center",
    marginTop:"6px",
    fontSize:"20px",
    fontWeight:"600",
    color:"#898989",
    marginBottom:"6px"
})

export default function MemberBox() {
    const navigate = useNavigate()
    return (
        <Paper sx={{padding:"20px"}}>
            <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                <Avatar src='https://mui.com/static/images/avatar/2.jpg' alt='person' 
                sx={{width:"65px",height:"65px"}}/>
                <MemberText>يوسف</MemberText>
                <Typography sx={{fontSize:"15px",marginBottom:"10px",color:"#898989",fontWeight:"600",minHeight:"40px"}}>
                    سافرت كتير وشفت ناس كتير
                </Typography>
                <Button color="secondary" sx={{fontWeight:"600"}}
                onClick={()=>navigate('/profile/1')}>عرض الملف الشخصي</Button>
            </Box>
        </Paper>
    )
}
