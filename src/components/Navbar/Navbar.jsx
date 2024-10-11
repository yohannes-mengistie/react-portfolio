import React, {useState} from "react"
import styles from './Navbar.module.css';
import getImageUrl from "../../utl";



export default function Navbar(){
    const [menu,setMenu] = useState(false);
    function toggle(){
        setMenu(prevData => !prevData)
    }
    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Yohannes</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menu ? getImageUrl("nav/close-menu.jpg"): getImageUrl("nav/menuIcon.jpg")} onClick={toggle} />
            <ul className={`${styles.menuItems} ${menu && styles.menuOpen}`} onClick={toggle}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experiance">Experiance</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
)}