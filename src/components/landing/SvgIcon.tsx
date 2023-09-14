import {styled } from '@mui/material'
import React from 'react'
import image from '../../images/headingfoot.svg'

const BackgroundBox = styled('div')({
    backgroundImage:`url(${image})`,
    backgroundRepeat:"no-repeat",
    width:"100%",
    height:"100px",
})

export default function SvgIcon() {
    return (
        <BackgroundBox>
        </BackgroundBox>
    )
}
