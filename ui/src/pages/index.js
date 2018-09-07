import React from 'react';
import {Blockquote} from '../components/Blockquote.js'
import styles from './index.module.css';

export default ({ data }) => {

    const images = data.markdownRemark.frontmatter.sliderImages[0].image
    const quote = data.markdownRemark.frontmatter.quote

    return (
        <div>
          <div className={styles.slider} style={{ backgroundImage: `url(${images})` }}></div>
          <Blockquote quote={quote}/>
        </div>
    );

};

export const indeQuery = graphql`
  query indeQuery ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        sliderImages{
          image
        }
        quote
      }
      html
    }
   }
`;
