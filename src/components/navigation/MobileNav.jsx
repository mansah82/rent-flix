import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const openIcon = <AiOutlineMenu id='hamburger' size='40px' onClick={
        () => { setOpen(!open) }
    } />
    const closeIcon = <AiOutlineClose id='hamburger' size='40px' onClick={
        () => { setOpen(!open) }
    } />

    return (
        <div id='mobileLinkContainer'>
            {open ? closeIcon : openIcon}
            {open && <div id='mobileLinks'>
                <NavLink to="/" className="links">Home</NavLink>
                <NavLink to="/movies" className="links">Movies</NavLink>
                <NavLink to="/cart" className="links">Cart</NavLink>
            </div>}
        </div>
    )
};

export default MobileNav;