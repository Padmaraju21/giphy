import React from 'react'
import "./_header.scss"
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'

const Header = ({ handleToggleSidebar }) => {

    return (
        <div className="border border-dark header">

        <FaBars
        className="header__menu" size={26}
        //To toggle the SideBar
        onClick={() => handleToggleSidebar()}
        />
        <img src="https://img.icons8.com/doodle/48/000000/puzzle--v1.png" alt="" className="header__logo"/>
        <form action=""><input type="text"  placeholder="Search Gifs"/><button type="submit">
            <AiOutlineSearch size={22}/></button>
            </form>
        <div className="header__icons">
        <img src="https://img.icons8.com/doodle/48/000000/anonymous-mask.png " alt="" />
        </div>
        </div>
    )
}

export default Header