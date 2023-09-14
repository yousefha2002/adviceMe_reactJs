import React from 'react'
import {Paper , Stack, Typography, styled} from '@mui/material'
import ProfileTopInformation from './ProfileTopInformation'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReactCountryFlag from "react-country-flag"



const Wrapper = styled(Paper)({
    backgroundColor:"#fff",
    padding:"12px 16px",
    margin:"10px 0",
    borderRadius:"6px",
    overflow:"hidden"
})

function ProfileTop() {
  return (
    <Wrapper>
        <ProfileTopInformation/>
        <Stack marginTop={"20px"} direction={"row"} justifyContent={"center"} gap={"24px"}>
            <Stack direction={"row"} justifyContent={"center"} gap={"5px"}>
                <AccessTimeIcon fontSize='small'/>
                <Typography fontSize={"13px"}>منذ ساعة</Typography>
            </Stack>
            <Stack  direction={"row"} justifyContent={"center"} gap={"5px"}>
                <CalendarMonthIcon fontSize='small'/>
                <Typography fontSize={"13px"}> عضو منذ: 9 يونيو 2023</Typography>
            </Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={"5px"} marginTop={"10px"}>
        <ReactCountryFlag countryCode="PS" svg
            style={{
            width: '1em',
            height: '1em',
        }} 
        />
        <Typography fontSize={"13px"}>فلسطين</Typography>
        </Stack>
    </Wrapper>
  )
}

export default ProfileTop