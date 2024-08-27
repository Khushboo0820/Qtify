import React from "react";
import { Link } from "react-router-dom";
//import Button from "../Button/Button";
import Logo from "F:\qtify project\Qtify\qtify\src\components\Logo\Logo.jsx"
import Search from "../Search/Search";
import styles from "../Navbar/Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <button>Give Feedback</button>
    </nav>
  );
}

export default Navbar;
