import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material';
import ChangeLanguage from './ChangeLanuage';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

type props = {
    onClick:()=>void
}

export default function Navbar({onClick}:props) {
    const theme = useTheme()
    const {t} = useTranslation()

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:"#fff",color:"#000"}}>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={onClick}
                sx={{ml:'2px',mr:'2px'}}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" 
            sx={{ flexGrow: 1,color:theme.palette.secondary.main,fontWeight:"700",fontSize:"20px"}}>
                
                <Link to={'/'}>نصيحة</Link>
            </Typography>
            <Box sx={{display:"flex",alignItems:"center",columnGap:"12px"}}>
                <Button size="medium" color="secondary" variant='contained' 
                sx={{textTransform:"capitalize",fontSize:"15px",fontWeight:"600"}}>{t('login')}</Button>
            </Box>
            <ChangeLanguage/>
            </Toolbar>
        </AppBar>
        </Box>
    );
}