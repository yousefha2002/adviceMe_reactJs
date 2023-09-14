import { Container,useTheme,Box, Grid } from '@mui/material'
import React from 'react'
import TitleHeader from './TitleHeader'
import MemberBox from './MemberBox'
import { useTranslation } from "react-i18next";

export default function PremiumMembers() {
    const theme = useTheme()
    const {t} = useTranslation()
    return (
        <Box sx={{backgroundColor:theme.palette.primary.main,marginTop:"-30px"}}>
            <Container sx={{paddingBottom:"40px"}}>
                <TitleHeader title={t('expertsUsers')}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} xl={3}><MemberBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} xl={3}><MemberBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} xl={3}><MemberBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} xl={3}><MemberBox/></Grid>
                </Grid>
            </Container>
        </Box>
    )
}
