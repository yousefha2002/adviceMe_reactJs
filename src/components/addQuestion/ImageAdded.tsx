import { Box,Button,styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const Image = styled('img')({
    width:"120px",
    height:"80px",
})

type props = {
    image:any,
    index:number,
    handleDeleteImage:(index:number)=>void,
}

export default function ImageAdded({image,index,handleDeleteImage}:props) {
    return (
        <Box sx={{display:"flex",alignItems:"center",columnGap:"6px"}}>
            <Image src={URL.createObjectURL(image)}/>
            <Button onClick={()=>handleDeleteImage(index)}
            size="small" sx={{minWidth:"6px"}} color="success"><CloseIcon sx={{fontSize:"20px"}}/></Button>
        </Box>
    )
}
