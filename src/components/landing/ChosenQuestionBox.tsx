import { Box, Button, Divider, Paper, Typography,styled ,useTheme} from '@mui/material'
import unKnown from '../../images/man-avatar.png'
import {Link, useNavigate} from 'react-router-dom'

const Image = styled('img')({
    width:"35px",
    height:"35x",
    borderRadius:"50%"
})

const Question = styled('p')({
    justifyContent:"center",
    fontSize:"14px"
})

export default function ChosenQuestionBox() {
    const theme = useTheme()
    const navigate = useNavigate()

    const BoxUser = styled('div')({
        backgroundColor:theme.palette?.ligtGray.main,
        padding:"8px",
        marginBottom:"18px",
        display:"flex",
        alignItems:"center",
        columnGap:"8px",
        width:"fit-content",
        borderRadius:"8px",
        marginTop:"8px",
    })

    const BoxTitle = styled('div')({
        backgroundColor:theme.palette?.groundBlue.main,
        color:theme.palette.secondary.main,
        borderRadius:"8px",
        padding:"8px",
        marginBottom:"8px",
        fontSize:"16px",
        fontWeight:"800"
    })
    return (
        <Paper sx={{padding:"20px"}}>
            <Box>
                <Link to={`/questions/1`}>
                    <BoxTitle>ما الحل مع الطفل العصبي ؟</BoxTitle>
                </Link>
                <Divider/>
                <BoxUser>
                    <Image src={unKnown} alt="unknown"/>
                    <Box>
                        <Typography sx={{fontSize:"15px",fontWeight:"700"}}>مجهول</Typography>
                        <Typography sx={{fontSize:"13px",fontWeight:"500"}}>منذ 13 يوم</Typography>
                    </Box>
                </BoxUser>
                <Question>

                السلام عليكم

لو سمحتم عايزه طريقة تحببني في القراءة والكتب تنصحوني بإيه عشان احبها ومملش منها بسرعه

وإيه الكتاب اللي تقترحوا عليا أبدأ في قراءته؟                </Question>
            </Box>
            <Button color="secondary" sx={{fontWeight:"700"}} onClick={()=>navigate('questions/1')}>عرض الإجابة</Button>
        </Paper>
    )
}
