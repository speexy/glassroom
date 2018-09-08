import React from 'react';
import ReactMarkdown from 'react-markdown';
import {TopImage} from '../components/TopImage.js';
import {Blockquote} from '../components/Blockquote.js';
import {CircleLinks} from '../components/CircleLinks.js';
import styles from './exhibit.module.css';

export default ({ data }) => {

  const {title, topImage, blockquote } = data.program.frontmatter
  const nav = data.nav.frontmatter.imageNavProgram
  const speaker = data.speaker.frontmatter.speaker

    return (
        <div>
          <h1>{title}</h1>
          <TopImage image={topImage}/>
          <Blockquote quote={<ReactMarkdown source={blockquote}/>}/>
          <CircleLinks nav={nav}/>

          {/*
          <div className={styles.greyBackground}>

            {exhibits.map((n,i)=>(
              <ExhibitItem key={i} image={n.image} title={n.title} text={n.text}/>
            ))}
          </div>
          */}

        </div>
    );

};

export const programQuery = graphql`
  query programQuery ($path: String!) {
    program: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        topImage
        blockquote
      }
      html
    }
    nav:   markdownRemark(fileAbsolutePath: {regex: "/content/navigation/"}) {
      frontmatter {
        imageNavProgram{
          image
          label
          url
        }
      }
    }
    speaker: markdownRemark(fileAbsolutePath: {regex: "/content/speaker/"}) {
      frontmatter {
        speaker{
          image
          title
          text
        }
      }
    }
   }
`;
