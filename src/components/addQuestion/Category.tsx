import React, { useState } from 'react'
import {Button,Box} from '@mui/material'
import Cookies from 'js-cookie'

type props = {
    item:{
        titleAr:string,
        titleEn:string,
        id:number
    }
}

export default function Category({item}:props) {
    const lang = Cookies.get('i18next') || "en";
    const [isChose,setIsChose] = useState(false)
    return (
        <Box>
            <Button sx={{borderRadius:"50px",textTransform:"capitalize"}} onClick={()=>setIsChose(back=>!back)}
            disableElevation color={!isChose?"warning":"secondary"} variant='contained' size="small">
                {lang==="ar"?item.titleAr:item.titleEn}
            </Button>
        </Box>
    )
}
