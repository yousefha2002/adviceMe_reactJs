import { Container, Typography ,styled , Box} from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Post from '../components/Post/Post';
import Bg from '../images/lastQu.png'

const Title = styled(Typography)({
    fontSize:"20px",
    fontWeight:"700",
    marginBottom:"28px"
});

const Wrapper = styled('div')({
    marginTop:"20px"
});

const LastQuestionsWrapper =styled('div')({
    backgroundImage:`url(${Bg})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover",
})

function LastQustions() {
    const {t} = useTranslation();
return (
    <LastQuestionsWrapper>
        <Box sx={{maxWidth:"900px" , margin:"0 auto"}}>
            <Container sx={{paddingY:"50px"}}>
            <Title variant='h2'>{t("lastquestions")}</Title>
            <Wrapper>
                <Post page='all'/>
                <Post page='all'/>
            </Wrapper>
            </Container>
        </Box>
    </LastQuestionsWrapper>
  )
}

export default LastQustions