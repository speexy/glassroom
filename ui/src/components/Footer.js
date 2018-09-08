import React from 'react';
import Link from 'gatsby-link';
import logoMozilla from '../assets/mozilla-footer-logo.svg';
import logoTTC from '../assets/ttc_white_logo.svg';
import FacebookIcon from '../assets/icons/Facebook.js';
import TwitterIcon from '../assets/icons/Twitter.js';
import styles from './footer.module.css';

const Footer = () => (
    <div className={styles.footer}>
      <div className={styles.logoWrapper}>

        <div className={styles.flexItem}>
          <a href="https://www.mozilla.org/en-US/foundation/" target="_blank">
            <img src={logoMozilla} alt="Mozilla Logo" className={styles.logo} />
          </a>
          <div className={styles.social}>
            <a href="https://www.facebook.com/mozilla" target="_blank"><FacebookIcon/> facebook</a>
            <a href="https://twitter.com/mozilla" target="_blank"><TwitterIcon/> twitter</a>
          </div>
        </div>

        <div className={styles.flexItem}>
          <a href="https://tacticaltech.org/" target="_blank">
            <img src={logoTTC} alt="TTC Logo" className={styles.logo} />
          </a>
          <div className={styles.social}>
            <a href="https://www.facebook.com/Tactical.Tech/" target="_blank"><FacebookIcon/> facebook</a>
            <a href="https://twitter.com/info_activism" target="_blank"><TwitterIcon/> twitter</a>
          </div>
        </div>

      </div>
      <div className={styles.legal}>
        <Link to={'/privacy'}>Privacy Policy</Link>
      </div>
    </div>
);

export default Footer;
