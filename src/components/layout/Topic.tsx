import { Paper, styled, Typography } from '@mui/material'

type props = {
    item:{
        title:string,
        link:string,
        icon:any
    }
}

const Wrapper = styled(Paper)({
    display:"flex",
    alignItems:"center",
    columnGap:"12px",
    padding:"12px 20px",
    marginBottom:"8px",
})

export default function Topic({item}:props) {
    return (
            <Wrapper>
                {item.icon}
                <Typography sx={{fontWeight:"700",fontSize:"14px"}}>{item.title}</Typography>
            </Wrapper>
    )
}
