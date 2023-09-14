import { Container, Typography ,styled , Box, Grid} from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Post from '../components/Post/Post';
import Bg from '../images/lastQu.png'
import ExpertBox from '../components/experts/ExpertBox';
const Title = styled(Typography)({
    fontSize:"20px",
    fontWeight:"700",
    marginBottom:"28px"
});

const Wrapper = styled(Grid)({
    marginTop:"20px"
});

const ExpertsWrapper =styled('div')({
    backgroundImage:`url(${Bg})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover",
})

function Experts() {
  return (
    <ExpertsWrapper>
        <Box sx={{maxWidth:"900px" , margin:"0 auto"}}>
            <Container sx={{paddingY:"50px"}}>
            <Title variant='h2'>خبراء انصحني</Title>
            <Grid container  spacing={2}>
                <Grid item xs={12} md={6}>
                    <ExpertBox/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ExpertBox/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ExpertBox/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ExpertBox/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ExpertBox/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ExpertBox/>
                </Grid>
            </Grid>
            </Container>
        </Box>
    </ExpertsWrapper>
  )
}

export default Experts