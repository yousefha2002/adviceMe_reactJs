import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import PostComment from './PostComment';

function PostComments() {

    return (
    <Box sx={{borderTop:"1px solid #a0a0a059", marginTop:"5px"}}>
    <Accordion sx={{backgroundColor:"transparent"}} elevation={0} defaultExpanded>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography>التعليقات</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <PostComment/>
                <PostComment/>
                <PostComment/>
            </AccordionDetails>
    </Accordion>
    </Box>
  );
}

export default React.memo(PostComments)