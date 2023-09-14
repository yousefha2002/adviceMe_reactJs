import { Divider, ListItemButton, ListItemIcon, ListItemText, Paper, Stack,styled, useTheme } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import categories from '../../util/categories';
import Cookies from 'js-cookie';

const Category = styled('div')({
    padding:"8px 20px",
    borderRadius:"32px",
    fontSize:"14px"
})

type Props ={
    setOpenCategries : React.Dispatch<React.SetStateAction<boolean>>
}

function Categories({setOpenCategries}:Props) {
    const lang = Cookies.get('i18next') || "en";
    const {t} = useTranslation()
    const theme = useTheme();
    return (
        <Paper sx={{marginY:"40px", padding:"7px"}}>
            <ListItemButton onClick={()=>setOpenCategries(false)}>
                <ListItemIcon>
                    <CloseIcon />
                </ListItemIcon>
                <ListItemText primary={t('close')} />
            </ListItemButton>
            <Divider/>
            <Stack direction={"row"} gap={"6px"} paddingY={"5px"} flexWrap={"wrap"}>
                {
                    categories.map(item=>
                        {
                            return(
                                <Link key={item.id} to={`/questions/category/${item.titleAr}`}>
                                    <Category sx={{backgroundColor:theme.palette.ligtGray.main}}>
                                        {
                                            lang==="ar"?item.titleAr:item.titleEn
                                        }
                                    </Category>
                                </Link>
                            )
                        })
                }
            </Stack>
        </Paper>
    )
}

export default Categories