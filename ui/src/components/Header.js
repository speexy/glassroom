import React, { Component } from 'react';
import Link from 'gatsby-link';
import logo from '../assets/glassroom-logo-header.svg'
import NavMain from './NavMain';
import Hamburger from './Hamburger';
import styles from './header.module.css';


export const Header = ( props ) => (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={'/'}>
          <img src={logo} alt="My logo" className={styles.logo} />
        </Link>
        <NavMain/>
        <Hamburger/>
      </div>
    </header>
);
