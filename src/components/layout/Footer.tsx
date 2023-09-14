import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from "react-i18next";

export default function Footer() {
    const {t} = useTranslation()
    return (
        <Box sx={{backgroundColor:"#f3f3f3"}}>
            <Container sx={{paddingY:"40px"}}>
                <Typography sx={{color:"#808289",fontWeight:"700",fontSize:"17px",marginBottom:"4px"}}>نصيحة</Typography>
                <Typography sx={{color:"#808289",fontWeight:"400",fontSize:"14px",marginBottom:"18px"}}>{t('copyright')} {new Date().getFullYear()}</Typography>
            </Container>
        </Box>
    )
}
