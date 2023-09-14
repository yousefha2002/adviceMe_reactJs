import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import NotLogin from './NotLogin'
import {styled} from '@mui/material'
import MainTopics from './MainTopics'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Categories from './Categories'

type props = {
    isOpen:boolean,
    onClick:()=>void
}

const DrawerBox = styled(Drawer)({
    padding:"60px 20px",
})

export default function SideBar({isOpen,onClick}:props) {
    const {lang} = useSelector((state:RootState)=>state.lang);
  
    const [openCategories , setOpenCategries] = useState(false);

    return (
        <div>
            <DrawerBox
                size={270}
                open={isOpen}
                onClose={onClick}
                direction={lang==='ar'?'right':'left'}
                className='bla bla bla'
                style={{backgroundColor:"#f4f5f8"}}
            >
                <NotLogin/>
                {
                    openCategories
                    ?
                    <Categories setOpenCategries={setOpenCategries}/>
                    :
                    <MainTopics setOpenCategries={setOpenCategries}/>
                }
            </DrawerBox>
        </div>
    )
}