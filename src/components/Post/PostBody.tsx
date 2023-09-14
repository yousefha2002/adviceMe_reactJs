import { Box, Stack, styled , Typography , useTheme} from '@mui/material'
import React from 'react'
import PostAuthor from './PostAuthor'
import { Link } from 'react-router-dom';

const Wrapper = styled('div')({
  margin:"7px 0",
  borderTop:"1px solid #a0a0a059",
  borderBottom:"1px solid #a0a0a059",
  padding:"10px 0"
});

const Category = styled('div')({
  padding:"8px 20px",
  borderRadius:"32px",
  fontSize:"14px"
})

function PostBody() {
  const theme = useTheme();
  return (
    <Wrapper>
      <PostAuthor known={Math.random() < 0.5}/>
      <Typography sx={{textAlign:"justify",fontSize:"18px" , padding:"8px 4px"}}>
      لو انا كنت في امتحان وحليت سوال مثلا ب وانا براجع عرفت ان ب غلط ومثلا د هي اللي صح وانا عزمت النيه اني اختار د جه الشخص اللي ورايا قال الاجابه الصح اللي هي د فا هل ده يعتبر غش بس انا مطلبتش منو يقولي عليها ولا اي حاجه هو من نفسو كده جه قايلها
      </Typography>
      <Stack direction={"row"} gap={"10px"} flexWrap={"wrap"}>
        <Link to={`/questions/category/${"فلسفة"}`}>
            <Category sx={{backgroundColor:theme.palette.ligtGray.main}}>فلسفة</Category>
        </Link>
        <Link to={`/questions/category/${"اقتصادية"}`}>
            <Category sx={{backgroundColor:theme.palette.ligtGray.main}}>اقتصادية</Category>
        </Link>
        <Link to={`/questions/category/${"تاريخ"}`}>
            <Category sx={{backgroundColor:theme.palette.ligtGray.main}}>تاريخ</Category>
        </Link>
        <Link to={`/questions/category/${"سفر"}`}>
            <Category sx={{backgroundColor:theme.palette.ligtGray.main}}>سفر</Category>
        </Link>
        <Link to={`/questions/category/${"سفر"}`}>
            <Category sx={{backgroundColor:theme.palette.ligtGray.main}}>سفر</Category>
        </Link>
        <Link to={`/questions/category/${"علمية"}`}>
            <Category sx={{backgroundColor:theme.palette.ligtGray.main}}>علمية</Category>
        </Link>
      </Stack>
    </Wrapper>
  )
}

export default PostBody