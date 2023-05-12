import React from "react";
import s from './Header.module.css'
const Header = () => {
    return (
        <div className={s.header}>
            <a href="#" className={s.logo}>WORKOUT</a>
            <div className={s.nav}>
                <a href="#" className={s.navItem}>EXERCISES</a>
                <a href="#" className={s.navItem}>TRAINERS</a>
                <a href="#" className={s.navItem}>PRICING</a>
                <a href="#" className={s.navItem}>LOGIN</a>
            </div>

        </div>
    )
}

export default Header