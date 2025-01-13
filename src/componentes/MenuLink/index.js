import { Link, useLocation } from 'react-router-dom';
import './menulink.css';

const MenuLink = ({ children, to }) => {
    

    return (
        <Link to={to}>
            {children}
        </Link>
    )
}

export default MenuLink;