import React from 'react';
import styles from './index.module.css';

export default ({ data }) => {

    const images = data.markdownRemark.frontmatter.sliderImages[0].image

    return (
        <div>
          <div className={styles.slider} style={{ backgroundImage: `url(${images})` }}></div>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
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
      }
      html
    }
   }
`;
