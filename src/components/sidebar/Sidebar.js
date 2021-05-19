import React from 'react';
import "./_sidebar.scss";
import {MdExitToApp,MdHome} from 'react-icons/md'

function sidebar({ sidebar ,handleToggleSidebar }) {
    return (
        <nav className={sidebar? "sidebar open" : "sidebar"}
        //to toggle the sidebar in a smaller screen
        onClick={() => handleToggleSidebar(false)}>

            <li>
            <MdHome size={23}/><span>Home</span>
            </li>
            <li>
            <MdExitToApp size={23}/><span>LogOut</span>
            </li>
           
        </nav>
    )
}

export default sidebar
