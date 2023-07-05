"use client";

import styles from '@/app/styles/Navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [hamburger, setHamburger] = useState('menu');
    const toggleNavbar = () => {
        setShowNavbar((prev => !prev));
        if (hamburger === 'menu') {
            setHamburger('x')
        }
        else {
            setHamburger('menu')
        }
    }
    return (
        <nav id={styles.navbar}>
            <Link href={'/'}><Image src="/logo.webp" alt="LOGO" width={140} height={50} /></Link>
            <ul className={!showNavbar ? styles.navbarList : styles.mobileList}>
                <li><Link href="#home" className={!showNavbar ? styles.navbarLink : styles.mobileLink}>Home</Link></li>
                <li><Link href="#market" className={!showNavbar ? styles.navbarLink : styles.mobileLink}>Market</Link></li>
                <li><Link href="#chooseus" className={!showNavbar ? styles.navbarLink : styles.mobileLink}>Choose Us</Link></li>
                <li><Link href="#join" className={!showNavbar ? styles.navbarLink : styles.mobileLink}>Join</Link></li>
            </ul>
            <ul className={!showNavbar ? styles.navbarList : styles.iconList}>
                <li><i className={`bx bxl-twitter ${!showNavbar ? styles.iconLinks : styles.mobileIconLinks}`}></i></li>
                <li><i className={`bx bxl-discord-alt ${!showNavbar ? styles.iconLinks : styles.mobileIconLinks}`}></i></li>
            </ul>
            <div className={styles.hamburgerContainer}>
                <i className={`bx bx-${hamburger} ${styles.hamburger}`} onClick={toggleNavbar}></i>
            </div>
        </nav>
    )
}
