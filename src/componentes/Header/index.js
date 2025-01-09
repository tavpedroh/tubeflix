import './header.css';

const Header = () => {
    return(
        <header className='header'>
            <img src='/imagens/Logo.png' />
            <div>
                <button className='home'>HOME</button>
                <button className='novoVideo'>NOVO VIDEO</button>
            </div>
        </header>
    );
}

export default Header;