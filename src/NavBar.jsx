import { Link } from 'react-router-dom';
import MenuBar from './MenuBar.jsx';
import './NavBar.css';

const NavBar = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'auto', // Optional: Adds smooth scrolling
        });
      };

    return (
        <div>
            <nav className="nav-bar">
                <div className="nav-left">
                    <MenuBar className="menu-bar"/>
                    <Link  to="/" onClick={scrollToTop}>
                        <img src="/src/assets/images/zephyra_logo.png" alt="Zephra Logo" className="logo" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/" onClick={scrollToTop} >Home</Link></li>
                    <li><Link to="/technology" onClick={scrollToTop} >Technology</Link></li>
                    <li><Link to="/about" onClick={scrollToTop} >About</Link></li>
                    <li><Link to="/careers" onClick={scrollToTop} >Careers</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;