import { Container, Typography ,styled , Box} from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Post from '../components/Post/Post';
import Bg from '../images/lastQu.png'

const LastQuestionsWrapper =styled('div')({
    backgroundImage:`url(${Bg})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover",
    minHeight:"92vh"
})

function SingelQustion() {
    const {t} = useTranslation();
  return (
    <LastQuestionsWrapper>
        <Box sx={{maxWidth:"900px" , margin:"0 auto"}}>
            <Container sx={{paddingY:"50px"}}>
                <Post page='singel'/>
            </Container>
        </Box>
    </LastQuestionsWrapper>
  )
}

export default SingelQustion