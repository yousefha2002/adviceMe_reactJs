import {Container,Box,useTheme,Grid} from '@mui/material'
import TitleHeader from './TitleHeader'
import PeopleIcon from '@mui/icons-material/People';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuizIcon from '@mui/icons-material/Quiz';
import StatisiticBox from './StatisiticBox';
import { useTranslation } from "react-i18next";

export default function Statistics() {
    const theme = useTheme()
    const {t} = useTranslation()

    const data = [
        {
            title:t('numQuestions'),
            answer: "1000",
            icon:QuizIcon
        },
        {
            title:t('numMemebrs'),
            answer: "1000",
            icon:PeopleIcon
        },
        {
            title:t('numAnswers'),
            answer: "1000",
            icon:QuestionAnswerIcon
        },
        {
            title:t('numCatgs'),
            answer: "1000",
            icon:GroupWorkIcon
        }
    ]

    return (
        <Box sx={{backgroundColor:theme.palette.primary.main,marginTop:"-20px"}}>
            <Container sx={{paddingBottom:"40px"}}>
                <TitleHeader title={t('statistics')}/>
                <Grid container spacing={2} sx={{backgroundColor:"#00796c",marginTop:"8px",padding:"20px",borderRadius:"6px"}}>
                {
                    data.map(item=><Grid item xs={6} md={4} lg={3}><StatisiticBox item={item}/></Grid>)
                }
                </Grid>
            </Container>
        </Box>
    )
}
