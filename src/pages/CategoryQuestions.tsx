import { Container, Typography ,styled , Box} from '@mui/material'
import React ,{useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'
import Post from '../components/Post/Post';
import Bg from '../images/lastQu.png'
import { useParams } from 'react-router-dom';

const Title = styled(Typography)({
    fontSize:"20px",
    fontWeight:"700",
    marginBottom:"28px"
});

const Wrapper = styled('div')({
    marginTop:"20px"
});

const QuestionsWrapper =styled('div')({
    backgroundImage:`url(${Bg})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover",
})

function CategoryQustions() {
    const {t} = useTranslation();
    const {categoryId} = useParams();
    



    useEffect(()=>{
        window.scrollTo({
            top:0 , behavior:"smooth"
        })
    })
  return (
    <QuestionsWrapper>
        <Box sx={{maxWidth:"900px" , margin:"0 auto"}}>
            <Container sx={{paddingY:"50px"}}>
            <Title variant='h2'>جميع الأسئلة المتعلقة بـ : {categoryId}</Title>
            <Wrapper>
                <Post page='all'/>
                <Post page='all'/>
            </Wrapper>
            </Container>
        </Box>
    </QuestionsWrapper>
  )
}

export default CategoryQustions