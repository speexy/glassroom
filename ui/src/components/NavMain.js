import React from 'react';
import Link from 'gatsby-link';
import styles from './navMain.module.css';

const NavMain = (props) => {

  const toggle = props.closeOverlay || undefined;
  const style = props.style === undefined ?  styles.navMain : props.style;

  return (
    <nav className={style}>
      <ul>
          <Link to={'/about'} className={styles.link} activeClassName={styles.active} onClick={toggle}>
              About
          </Link>
          <Link to={'/glassroom-experience'} className={styles.link} activeClassName={styles.active} onClick={toggle}>
              Experience
          </Link>
          <Link to={'/exhibit'} className={styles.link} activeClassName={styles.active} onClick={toggle}>
              Exhibit
          </Link>
          <Link to={'/program'} className={styles.link} activeClassName={styles.active} onClick={toggle}>
              Program
          </Link>
      </ul>
    </nav>
  )
};
export default NavMain;
