import React from 'react';
import styles from './topImage.module.css';

export const TopImage = (props)=>(
  <div className={styles.topImage} style={{ backgroundImage: `url(${props.image})` }}></div>
)
