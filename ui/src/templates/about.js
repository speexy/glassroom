import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Blockquote} from '../components/Blockquote.js';
import {ImageRow} from '../components/ImageRow.js';
import {Content} from '../components/Content.js';
import styles from './about.module.css';

export default ({ data }) => {

  const {blockquote, imageRow, curators, partners, contact } = data.about.frontmatter

    return (
        <div>
          <div className={styles.videoWrapper}>
            <iframe className={styles.video} src="https://player.vimeo.com/video/237822352" width="1170" height="658" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
          <Blockquote quote={blockquote}/>
          <ImageRow images={imageRow}/>
          <Content content={data.about.html }/>

          <div className={styles.greyBackground}>

            <div className={styles.card}>
              <h2>Curators</h2>
              <div className={styles.flexWrapper}>
                <div className={styles.curatorImage} style={{ backgroundImage: `url(${curators.image})` }}></div>
                <ReactMarkdown source={curators.text}/>
              </div>
            </div>

            <div className={styles.card}>
              <h2>Partners</h2>
              <div className={styles.flexWrapper}>

              { partners.map((n,i)=>(

                <div key={i} className={styles.partnerWrapper}>
                  <img src={n.image}/>
                  <ReactMarkdown source={n.text}/>
                </div>

              ))}

              </div>
            </div>

            <div className={styles.card}>
              <h2>Contact</h2>
                <Blockquote quote={<ReactMarkdown source={contact}/>} />
            </div>

          </div>
        </div>
    );

};

export const aboutQuery = graphql`
  query aboutQuery ($path: String!) {
    about: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        blockquote
        imageRow
        curators {
          image
          text
        }
        partners {
          image
          text
          facebook
          twitter
        }
        contact
      }
      html
    }
   }
`;
