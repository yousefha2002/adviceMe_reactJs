import React from 'react'
import {Paper , styled} from '@mui/material' 
import PostTitle from './PostTitle'
import PostBody from './PostBody'
import PostActions from './PostActions'

type Props = {
  page : 'all' | "singel"
}

const Wrapper = styled(Paper)({
    backgroundColor:"#fff",
    padding:"12px 16px",
    margin:"10px 0",
    borderRadius:"6px"
})

function Post({page}:Props) {
  return (
    <Wrapper elevation={3}>
        <PostTitle text='عنوان السؤال هنا'/>
        <PostBody/>
        <PostActions page={page}/>
    </Wrapper>
  )
}

export default Post