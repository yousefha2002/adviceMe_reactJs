import React from 'react'
import { styled } from '@mui/material'

type props = {
    title:string
}

const Title = styled('p')({
    textAlign:"center",
    fontSize:"28px",
    fontWeight:"700",
    color:"white",
    marginBottom:"12px"
})

export default function TitleHeader({title}:props) {
    return (
        <Title>{title}</Title>        
    )
}
