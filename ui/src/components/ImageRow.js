import React from 'react';
import styles from './imageRow.module.css';


export const ImageRow = (props) => (
  <div className={styles.imageRow}>
    {props.images.map((n,i)=>(
        <div className={styles.imageWrapper}><div key={i} className={styles.rowImage} style={{ backgroundImage: `url(${n})` }}></div></div>
    ))}
  </div>
)
