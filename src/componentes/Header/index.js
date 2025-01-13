import './header.css';
import MenuLink from '../MenuLink';

const Header = () => {
    return(
        <header className='header'>
            <img src='/imagens/Logo.png' />
            <nav>
                <MenuLink to="/">
                    <button className='home'>HOME</button>
                </MenuLink>
                <MenuLink to="/novovideo">
                    <button className='novoVideo'>NOVO VIDEO</button>
                </MenuLink>
            </nav>
        </header>
    );
}

export default Header;