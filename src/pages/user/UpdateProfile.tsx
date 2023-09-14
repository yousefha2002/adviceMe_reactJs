import React from 'react'
import backgroundImg from '../../images/lastQu.png'
import {styled,Box, Container, Paper} from '@mui/material'
import UpdateUserImage from '../../components/user/UpdateUserImage'
import UpdateUserInformation from '../../components/user/UpdateUserInformation'

const Wrapper = styled(Box)({
    backgroundImage:`url(${backgroundImg})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover",
})

export default function UpdateProfile() {
    return (
        <Wrapper>
            <Container sx={{paddingY:"40px"}}>
                <Paper sx={{padding:"20px 40px",width:{lg:"800px"},maxWidth:"100%",margin:"auto"}}>
                    <UpdateUserImage/>
                    <UpdateUserInformation/>
                </Paper>
            </Container>
        </Wrapper>
    )
}
