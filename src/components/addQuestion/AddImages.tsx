import React from 'react'
import {Box,Button,Typography,Divider,styled} from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { useTranslation } from 'react-i18next'

const IconWrapper = styled('div')({
    borderRadius:"50%",
    backgroundColor:"#45bd62",
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    width:"40px",
    height:"40px"
})

const Label = styled('label')({
    display:"block",
    width:"100%",
    cursor:"pointer",
    padding:"6px"
})

type props = {
    onChange:(file:any)=>void
}

function AddImages({onChange}:props) {
    const {t} = useTranslation()
    return (
        <>
        <Box sx={{marginY:"10px"}}>
            <Button color="success" fullWidth>
                <Label htmlFor='images'>
                    <Box sx={{display:"flex",alignItems:"center",columnGap:"8px",justifyContent:"start",width:"100%"}}>
                        <IconWrapper><InsertPhotoIcon sx={{color:"white"}}/></IconWrapper>
                        <Typography sx={{fontSize:"15px",fontWeight:"600",textTransform:"capitalize"}}>{t('addImg')}</Typography>
                    </Box>
                </Label>
            </Button>
            <Divider/>
        </Box>
        <input onChange={(e)=>onChange(e.target.files ? e.target.files[0] : null)} hidden type='file' id="images"/>
        </>
    )
}

export default React.memo(AddImages)