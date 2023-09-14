import { Paper ,Typography,styled,Box} from '@mui/material'
import unknow from '../../images/man-avatar.png'
import { useTranslation } from "react-i18next";

const Image = styled('img')({
    width:"64px",
    height:"64px",
    borderRadius:"50%",
})

export default function NotLogin() {
    const {t} = useTranslation()
    return (
        <Paper sx={{padding:"20px 10px",display:"flex",alignItens:"center",columnGap:"12px"}}>
            <Image src={unknow}/>
            <Box>
                <Typography sx={{fontSize:"16px",marginBottom:"6px",color:"#000",fontWeight:"600"}}>{t('notLogged')}</Typography>
                <Typography sx={{color:"#808289",fontSize:"14px"}}>{t('tapToLog')}</Typography>
            </Box>
        </Paper>
    )
}