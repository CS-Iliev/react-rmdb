import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

import { Wrapper } from './Navbarmenu.styles';

const Navbarmenu = (props) =>
{
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () =>
    {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };
    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu)
    {
        boxClass.push('menuq2');
    } else
    {
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () =>
    {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu)
    {
        boxClassSubMenu.push('sub__menus__Active');
    } else
    {
        boxClassSubMenu.push('');
    }
    return (
        <Wrapper>
            <header className="header__middle">
                <div className="container">
                    <div className="row">
                        <div className="header__middle__menus">
                            <nav className="main-nav " >
                                {/* Responsive Menu Button */}
                                {isResponsiveclose === true ? <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                                </> : <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                                </>}
                                <ul className={boxClass.join(' ')}>
                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Welcome {props.user} <FiChevronDown /> </Link>
                                        <ul className={boxClassSubMenu.join(' ')} >
                                            <li> <NavLink activeClassName='is-active' to={`/#`}> Profile </NavLink> </li>
                                            <li><NavLink activeClassName='is-active' to={`/#`}> Watchlist </NavLink> </li>
                                            <li><NavLink activeClassName='is-active' to={`/#`}> Logout</NavLink> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </Wrapper>
    )
}
export default Navbarmenu