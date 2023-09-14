import { Box, Typography } from '@mui/material'
import React from 'react'
import categories from '../../util/categories'
import Category from './Category'
import { useTranslation } from 'react-i18next'

function Categories() {
    const {t}  = useTranslation()
    return ( 
        <Box sx={{marginY:"20px"}}>
            <Typography sx={{fontSize:"15px",marginBottom:"6px",fontWeight:"600"}}>{t('categories')}</Typography>
            <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",columnGap:"6px",marginTop:"8px"}}>
                {
                    categories.map(item=><Category item={item}/>)
                }
            </Box>
        </Box>
    )
}

export default React.memo(Categories)