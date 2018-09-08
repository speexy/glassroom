import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './speaker.module.css'


export const Speaker = (props) => (
  <div className={styles.speaker}>
      <div className={styles.speakerImage} style={{ backgroundImage: `url(${props.image})` }}></div>
      <div>
        <h2>{props.title}</h2>
        <ReactMarkdown source={props.text}/>
      </div>
  </div>
)
