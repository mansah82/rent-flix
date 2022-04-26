import { NavLink } from 'react-router-dom';
import './navigation.css';

const NormalNav = () => {
    return (
        <div id='normalLinks'>
            <NavLink to="/" className="links">Home</NavLink>
            <NavLink to="/movies" className="links">Movies</NavLink>
            <NavLink to="/cart" className="links">Cart</NavLink>
        </div>
    )
};

export default NormalNav;