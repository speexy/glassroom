import React from 'react';
import ReactMarkdown from 'react-markdown';
import {TopImage} from '../components/TopImage.js';
import {Blockquote} from '../components/Blockquote.js';
import {CircleLinks} from '../components/CircleLinks.js';
import {Speaker} from '../components/Speaker.js';
import {ExhibitItem} from '../components/ExhibitItem.js';
import styles from './program.module.css';

export default ({ data }) => {

  const {title, topImage, blockquote } = data.program.frontmatter
  const nav = data.nav.frontmatter.imageNavProgram
  const speaker = data.speaker.frontmatter.speaker
  const workshops = data.workshops.frontmatter.workshops

    return (
        <div>
          <h1>{title}</h1>
          <TopImage image={topImage}/>
          <Blockquote quote={<ReactMarkdown source={blockquote}/>}/>
          <CircleLinks nav={nav}/>

          <div className={styles.greyBackground}>

            <h1 id="speaker">Speaker</h1>
            <p>How does our data create the biggest and most influential companies in the world? Does our data make us better, smarter, stronger? Is data revolutionising our political participation?</p>
            {speaker.map((n,i)=>(
              <Speaker key={i} image={n.image} title={n.title} text={n.text}/>
            ))}

            <h1 id="workshops">Ingenious Workshops</h1>
            <p>Throughout The Glass Room, Tactical Tech trained Ingeniuses ran introductory level one-hour workshops that offered practical tools and resources to empower more control of your data.</p>
            {workshops.map((n,i)=>(
              <ExhibitItem key={i} image={n.image} title={n.title} text={n.text}/>
            ))}

          </div>

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
    nav: markdownRemark(fileAbsolutePath: {regex: "/content/navigation/"}) {
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
    workshops: markdownRemark(fileAbsolutePath: {regex: "/content/workshops/"}) {
      frontmatter {
        workshops{
          image
          title
          text
        }
      }
    }
   }
`;
