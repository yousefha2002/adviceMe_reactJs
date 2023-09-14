import { Box, Button, Menu, MenuItem ,Fade,Typography,styled} from '@mui/material'
import React from 'react'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ReactCountryFlag from "react-country-flag"
import { useDispatch } from 'react-redux';
import { changeLang } from '../../redux/langSlice';
import i18n from "i18next";

const MenuWrapper = styled(MenuItem)({
    display:"flex",alignItems:"center",columnGap:"16px"
})

const Text = styled(Typography)({
    fontSize:"14px",fontWeight:"600"
})

export default function ChangeLanuage() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleChangeLang = (lang:string) => {
        i18n.changeLanguage(lang);
        dispatch(changeLang({lang:lang}));
        if(lang==="ar"){
            document.body.dir="rtl"
        }
        else{
            document.body.dir="ltr"
        }
        setAnchorEl(null);
    };

    const handelClose = () =>{
        setAnchorEl(null);
    }

    return (
        <>
            <Button onClick={handleClick} sx={{minWidth:"16px",color:"#000"}}>
                <PublicOutlinedIcon sx={{fontSize:"28px"}}/>
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handelClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            PaperProps={{  
                style: {  
                    width: 180,  
                },  
            }}
        >
            <MenuWrapper onClick={()=>handleChangeLang('en')}>
                <ReactCountryFlag countryCode="US" svg
                style={{
                    width: '2em',
                    height: '2em',
                }} />
                <Text>Englsih</Text>
            </MenuWrapper>
            <MenuWrapper onClick={()=>handleChangeLang('ar')}>
                <ReactCountryFlag countryCode="PS" svg
                style={{
                    width: '2em',
                    height: '2em',
                }} />
                <Text>العربية</Text>
            </MenuWrapper>
            </Menu>
        </>
    )
}
