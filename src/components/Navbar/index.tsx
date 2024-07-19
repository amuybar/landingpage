'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>KQAirline</div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? '❌' : '☰'}
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/destinations">Destinations</a></li>
        <li><a href="/carrier">Carrier</a></li>
        <li><a href="/book">Book Flight</a></li>
        <li><a href="#signup">Signup</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
