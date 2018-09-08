import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './circleLinks.module.css'

export const CircleLinks = (props)=>(

  <div className={styles.imageNavWrapper}>
    {props.nav.map((n,i)=>(
      <a className={styles.wrapper} href={n.url}>
        <div className={styles.image} style={{ backgroundImage: `url(${n.image})` }}></div>
        <ReactMarkdown source={n.label}/>
      </a>
    ))}
  </div>

)
