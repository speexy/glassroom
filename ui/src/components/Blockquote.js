import React, {Component} from 'react';
import styles from './blockquote.module.css'


export const Blockquote = (props) =>(
  <div className={styles.blockquote}> {props.quote} </div>
)
