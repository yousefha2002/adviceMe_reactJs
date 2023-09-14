import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

export default function Layout() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div>
            <Navbar onClick={toggleDrawer}/>
            <SideBar isOpen={isOpen} onClick={toggleDrawer}/>
        </div>
    )
}