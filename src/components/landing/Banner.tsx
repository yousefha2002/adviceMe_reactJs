import {Container,Typography,styled,Button,Box} from '@mui/material'
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import bannerImg from '../../images/headillustration.svg'
import {useNavigate} from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Title = styled(Typography)({
    fontWeight:"700",
    marginBottom:"28px",
    textAlign:"center"
})

const ButtonDesign = styled(Button)({
    display:"flex",columnGap:"6px",alignItems:"center",padding:"8px 16px"
})

const BackGorundImage = styled('div')({
    backgroundImage:`url(${bannerImg})`,
    backgroundRepeat:"no-repeat",
    height:"72vh",
    maxWidth:"1000px",
    backgroundPosition:"bottom",
    backgroundSize:"cover",
    margin:"auto"
})

export default function Banner() {
    const navigate = useNavigate()
    const {t} = useTranslation()
    return (
        <BackGorundImage>
            <Container sx={{marginY:"50px",display:"flex",justifyContent:"center"}}>
                <Box>
                    <Title sx={{fontSize:{md:"36px",xs:"28px"}}}>{t('bannerTitle')}</Title>
                    <Box sx={{marginTop:"12px",display:"flex",justifyContent:"center"}}>
                        <ButtonDesign variant='contained' color="info" onClick={()=>navigate('add-question')}>
                            <AssignmentLateOutlinedIcon/>
                            <Typography sx={{fontWeight:"700",fontSize:"15px"}}>{t('banner_btn')}</Typography>
                        </ButtonDesign>
                    </Box>
                </Box>
            </Container>
        </BackGorundImage>
    )
}
