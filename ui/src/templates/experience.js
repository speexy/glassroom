import React from 'react';
import ReactMarkdown from 'react-markdown';
import {TopImage} from '../components/TopImage.js';
import {Blockquote} from '../components/Blockquote.js';
import {ImageRow} from '../components/ImageRow.js';
import {Content} from '../components/Content.js';
import styles from './experience.module.css';

export default ({ data }) => {

  const {title, topImage, blockquote, imageRow } = data.experience.frontmatter

    return (
        <div>
          <h1>{title}</h1>
          <TopImage image={topImage}/>
          <Blockquote quote={<ReactMarkdown source={blockquote}/>}/>
          <ImageRow images={imageRow}/>
          <Content content={data.experience.html}/>
        </div>
    );

};

export const experienceQuery = graphql`
  query experienceQuery ($path: String!) {
    experience: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        topImage
        blockquote
        imageRow
      }
      html
    }
   }
`;
