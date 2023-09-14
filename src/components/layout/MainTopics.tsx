import React from 'react'
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Box } from '@mui/material';
import Topic from './Topic';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

type Props ={
    setOpenCategries : React.Dispatch<React.SetStateAction<boolean>>
}

export default function MainTopics({setOpenCategries}:Props) {
    const {t} = useTranslation()
    const topics = [
        {
            title:t('askquestion'),
            icon:<PostAddOutlinedIcon/>,
            link:"add-question"
        },
        {
            title:t('home'),
            icon:<HomeOutlinedIcon/>,
            link:""
        },
        {
            title:t('lastquestions'),
            icon:<QuestionAnswerOutlinedIcon/>,
            link:"last-questions"
        },
        {
            title:t('experts'),
            icon:<TravelExploreOutlinedIcon/>,
            link:"experts"
        },
    ]

    function handelShowCategories(){
        setOpenCategries(true);
    }

    const userTopics = [
        {
            title:t('updateprofile'),
            icon:<AccountCircleOutlinedIcon/>,
            link:"update-profile"
        },
        {
            title:t('logout'),
            icon:<LoginOutlinedIcon/>,
            link:"add-question"
        }
    ]

    return (
        <Box sx={{marginY:"20px"}}>
            <Box>
            {
                topics.map((topic)=>
                {
                    return(
                        <Link to={`/${topic.link}`} key={topic.title}>
                            <Topic item={topic}/>
                        </Link>
                    )
                })
            }
            </Box>
            <Box>
                <Box sx={{cursor:"pointer"}} onClick={handelShowCategories}>
                    <Topic item={{title:t('tags') , icon:<TurnedInNotOutlinedIcon/> , link:""}}/>
                </Box>
            </Box>
            <Box sx={{marginTop:"40px"}}>
            {
                userTopics.map((topic)=>
                {
                    return(
                        <Link to={`/${topic.link}`} key={topic.title}>
                            <Topic item={topic}/>
                        </Link>
                    )
                })
            }
            </Box>
        </Box>
    )
}