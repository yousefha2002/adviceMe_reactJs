import { Box, Switch, Typography,Button, Divider } from '@mui/material'
import React ,{Dispatch,SetStateAction} from 'react'
import { useTranslation } from 'react-i18next'

type props = {
    isHide:boolean,
    setIsHide:Dispatch<SetStateAction<boolean>>,
}

function HideAnonymity({isHide,setIsHide}:props) {
    const {t} = useTranslation()
    return (
        <Box sx={{marginY:"10px"}}>
            <Button color="success" onClick={()=>setIsHide(back=>!back)} fullWidth sx={{paddingY:"12px"}}>
                <Box sx={{display:"flex",alignItems:"center",columnGap:"8px",justifyContent:"start",width:"100%"}}>
                    <Switch checked={isHide}/>
                    <Typography sx={{fontSize:"15px",fontWeight:"600",textTransform:"capitalize"}}>{t('hideAn')}</Typography>
                </Box>
            </Button>
            <Divider/>
        </Box>
    )
}

export default React.memo(HideAnonymity)