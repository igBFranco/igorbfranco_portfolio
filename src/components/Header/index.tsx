import React, { useState } from 'react';
import styles from './Header.module.scss';
import LogoDark from '../../assets/LogoDark.svg';
import MenuIcon from '../../assets/Menu.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={styles.container}>
        <img src={LogoDark} alt="Logo" />
        {/* <div className={styles.menuIcon} onClick={handleMenuOpen}>
          <img src={MenuIcon} alt="" />
        </div> */}
        <div className={styles.navbar}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                {/* <li><a href="#projects">Projetos</a></li> */}
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    </div>
  );
}