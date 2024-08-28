import React from "react";
import styles from './Button1.module.css';

const Button1 = ({text}) => {
    return(
        <button className={styles.button}>{text}</button>
    )
}

export default Button1;