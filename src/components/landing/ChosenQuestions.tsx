import { Box, Button, Container, Grid,useTheme } from '@mui/material'
import TitleHeader from './TitleHeader'
import ChosenQuestionBox from './ChosenQuestionBox'
import { useTranslation } from "react-i18next";

export default function ChosenQuestions() {
    const theme = useTheme()
    const {t} = useTranslation()
    return (
        <Box sx={{backgroundColor:theme.palette.primary.main,marginTop:"-10px"}}>
            <Container sx={{paddingBottom:"40px"}}>
                <TitleHeader title={t('chosenQuestions')}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                        <ChosenQuestionBox/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ChosenQuestionBox/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ChosenQuestionBox/>
                    </Grid>
                </Grid>
                <Box sx={{display:"flex",justifyContent:"center",marginY:"20px"}}>
                    <Button sx={{fontWeight:"700"}} variant='contained' color="warning">{t('loadQuestions')}</Button>
                </Box>
            </Container>
        </Box>
    )
}
