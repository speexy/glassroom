import React from 'react';
import {Blockquote} from '../components/Blockquote.js';
import {CircleLink} from '../components/CircleLink';
import styles from './index.module.css';

export default ({ data }) => {


    const images = data.page.frontmatter.sliderImages[0].image
    const quote = data.page.frontmatter.quote
    const imageNav = data.nav.frontmatter.imageNav

      console.log(imageNav)

    return (
        <div>
          <div className={styles.slider} style={{ backgroundImage: `url(${images})` }}></div>
          <Blockquote quote={quote}/>
          <div className={styles.imageNavWrapper}>
            {imageNav.map((n,i)=>(
              <CircleLink key={i} image={n.image} label={n.label} url={n.url}/>
            ))}
          </div>
        </div>
    );

};

export const indexQuery = graphql`
  query indexQuery ($path: String!) {
    page: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        sliderImages{
          image
        }
        quote
      }
      html
    }
    nav:   markdownRemark(fileAbsolutePath: {regex: "/content/navigation/"}) {
      frontmatter {
        imageNav{
          image
          label
          url
        }
      }
    }
   }
`;
