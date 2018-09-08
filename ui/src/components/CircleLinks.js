import React from 'react';
import styles from './circleLinks.module.css'

export const CircleLinks = (props)=>(

  <div className={styles.imageNavWrapper}>
    {props.nav.map((n,i)=>(
      <a className={styles.wrapper} href={n.url}>
        <div className={styles.image} style={{ backgroundImage: `url(${n.image})` }}></div>
        <p>{n.label}</p>
      </a>
    ))}
  </div>

)
