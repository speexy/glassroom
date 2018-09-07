import React from 'react';
import styles from './content.module.css';

export const Content = (props) => (

  <div  className={styles.content} dangerouslySetInnerHTML={{ __html: props.content }}  ></div>
)
