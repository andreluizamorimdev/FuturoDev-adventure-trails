import menu from './menu.js';
import './style.css';
function Header() {

    return (
        <header className='header'>
            <h1 className='logo-header'>{menu.titulo}</h1>
            <nav className='menu-navbar'>
                <ul className='menu-navbar-list'>
                    {menu.links.map((link, index) => (
                        <li className='menu-navbar-list-item' key={index}>
                            <a href="#">{link.texto}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;