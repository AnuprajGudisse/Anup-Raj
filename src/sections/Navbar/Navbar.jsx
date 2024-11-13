import hamMenuIconDark from '../../assets/ham_menu_dark.svg';
import hamMenuIconLight from '../../assets/ham_menu_light1.svg';
import menuCloseLight from '../../assets/menu_close_light.svg';
import menuCloseDark from '../../assets/menu_close_dark.svg';
import Styles from './NavbarStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import { useState } from 'react';

function Navbar() {
  const { theme } = useTheme();
  const hamMenuIcon = theme === 'light' ? hamMenuIconLight : hamMenuIconDark;
  const menuCloseIcon = theme === 'light' ? menuCloseLight : menuCloseDark;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={Styles.container}>
      <a href='/' className={Styles.title}>
        <h2>Portfolio</h2>
      </a>
      <div className={Styles.menu}>
        <img
          className={Styles.menuBtn}
          src={menuOpen ? menuCloseIcon : hamMenuIcon}
          alt={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${Styles.menuItems} ${menuOpen ? Styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href='#about'>
              <p>About</p>
            </a>
          </li>
          <li>
            <a href='#projects'>
              <p>Projects</p>
            </a>
          </li>
          <li>
            <a href='#skills'>
              <p>Skills</p>
            </a>
          </li>
          <li>
            <a href='#experience'>
              <p>Experience</p>
            </a>
          </li>
          <li>
            <a href='#education'>
              <p>Education</p>
            </a>
          </li>
          <li>
            <a href='#contact'>
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
