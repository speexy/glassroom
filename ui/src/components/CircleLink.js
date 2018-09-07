import React from 'react';
import styles from './circleLink.module.css'

export const CircleLink = (props)=>(
  <a className={styles.wrapper} href={props.url}>
    <div className={styles.image} style={{ backgroundImage: `url(${props.image})` }}></div>
    <p>{props.label}</p>
  </a>
)
