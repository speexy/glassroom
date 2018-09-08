import React from 'react';
import ReactMarkdown from 'react-markdown';
import {TopImage} from '../components/TopImage.js';
import {Blockquote} from '../components/Blockquote.js';
import {Content} from '../components/Content.js';
import {ExhibitItem} from '../components/ExhibitItem.js';
import styles from './exhibit.module.css';

export default ({ data }) => {

  const {topImage, blockquote } = data.exhibit.frontmatter
  const exhibits = data.exhibitItems.frontmatter.exhibits

    return (
        <div>
          <TopImage image={topImage}/>
          <Blockquote quote={<ReactMarkdown source={blockquote}/>}/>
          <Content content={data.exhibit.html}/>

          {exhibits.map((n,i)=>(
            <ExhibitItem key={i} image={n.image} title={n.title} text={n.text}/>
          ))}

        </div>
    );

};

export const ehibitQuery = graphql`
  query exhiitQuery ($path: String!) {
    exhibit: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        topImage
        blockquote
      }
      html
    }
    exhibitItems: markdownRemark(fileAbsolutePath: {regex: "/content/exhibits/"}) {
      frontmatter {
        exhibits{
          image
          title
          text
          url
        }
      }
    }
   }
`;
