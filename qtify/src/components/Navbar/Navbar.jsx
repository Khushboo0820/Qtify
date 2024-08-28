import React from 'react';
import styles from './Navbar.module.css';
import Logo from "../Logo/Logo";  // Corrected import
import Button from "../Button1/Button1";
import Search from '../Search/Search';

const Navbar = ({data}) => {
    return(
        <nav className={styles.navbar}>
            <Logo />
            <Search placeholder="Search an album"/>
            <Button text="Feedback"/>
        </nav>
    )
}

export default Navbar;