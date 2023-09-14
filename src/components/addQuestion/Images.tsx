import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import ImageAdded from './ImageAdded'
import { useTranslation } from 'react-i18next'

type props = {
    images : any[],
    handleDeleteImage:(index:number)=>void
}

function Images({images,handleDeleteImage}:props) {
    const {t} = useTranslation()
    return (
        <>
        {
        images.length>0&&
        <Box sx={{marginY:"10px",paddingY:"16px"}}>
            <Typography sx={{fontSize:"15px",fontWeight:"600",marginBottom:"8px"}}>{t('images')}</Typography>
            <Divider sx={{marginBottom:"6px"}}/>
            <Grid container spacing={1}>
            {
                images.map((image,index)=><Grid item key={image.name+'aa'} xs={2}><ImageAdded index={index} handleDeleteImage={handleDeleteImage} image={image}/></Grid>)
            }
            </Grid>
            <Divider sx={{marginTop:"6px"}}/>
        </Box>}
        </>
    )
}

export default React.memo(Images)