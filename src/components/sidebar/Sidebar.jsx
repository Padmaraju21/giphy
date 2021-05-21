import React from 'react';
import "./_sidebar.scss";
import {MdExitToApp} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { log_out } from '../../redux/actions/auth.action';

function Sidebar({ sidebar ,handleToggleSidebar }) {

    const dispatch = useDispatch()
   const logOutHandler = () => {
      dispatch(log_out())
   }
    return (
        <nav className={sidebar? "sidebar open" : "sidebar"}
        //to toggle the sidebar in a smaller screen
        onClick={() => handleToggleSidebar(false)}>

            
            <li onClick={logOutHandler}>
            <MdExitToApp size={23}/><span>LogOut</span>
            </li>
           
        </nav>
    )
}

export default Sidebar
