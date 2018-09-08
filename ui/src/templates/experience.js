import React from 'react';
import ReactMarkdown from 'react-markdown';
import {TopImage} from '../components/TopImage.js';
import {Blockquote} from '../components/Blockquote.js';
import {ImageRow} from '../components/ImageRow.js';
import {Content} from '../components/Content.js';
import styles from './experience.module.css';

export default ({ data }) => {

  const {title, topImage, blockquote, imageRow1, imageRow2, imageRow3, imageRow4, imageRow5, } = data.experience.frontmatter

    return (
        <div>
          <h1>{title}</h1>
          <TopImage image={topImage}/>
          <Blockquote quote={<ReactMarkdown source={blockquote}/>}/>

          <p>What is personal data in an age when our data is everything but personal? Our websites, apps, social media and 'smart' devices all thrive on the same thing that makes tech companies billions – data. Not just any data, but our data.</p>

          <p>The Glass Room Experience is pop-up exhibition anyone can host that explores the companies and mechanisms that make our everyday technologies, as well as connect the Internet of Things (IoT).  You can opply to host your own exhibition <a href="https://lime.ttc.io/index.php/827633?lang=en" target="_blank">here</a>.</p>

          <ImageRow images={imageRow1}/>

          <p>Play Fake or Real to see how smart you are in the world of smart devices. Find out more about what's really happening behind the screen in The Internet You Don't See.</p>

          <p>Pick up a free Data Detox Kit, our easy, 8-day digital privacy guide that gives you simple steps to take control of your online life, not to mention your smart devices.</p>

          <p>The Glass Room Experience is being exhibited at events, libraries, schools, organisations and companies around the world. The Glass Room Experience has been to over 40 events around the world reaching over 30,000 people.</p>

          <p>You can opply to host your own exhibition <a href="https://lime.ttc.io/index.php/827633?lang=en" target="_blank">here</a> and start your own conversation on data and privacy wherever you are.</p>

          <p><strong>What's in The Glass Room Experience IoT Edition?</strong></p>

          <p>The Glass Room installation consists of:</p>

          <ImageRow images={imageRow2}/>

          <p>Two new tablet apps – the Fake or Real game and The Internet you Don’t See - displayed on three tablets with their own table surround.</p>

          <p>Visualisations on large laminated card based on Glass Room objects: The Alphabet Empire and The Zuckerberg House</p>

          <p>A new giant visualisation explaining facial recognition – The Real Life of Your Selfie.</p>

          <ImageRow images={imageRow3}/>

          <p>The Glass Room Experience also includes:</p>

          <p>Video Loops of our animations and  The Glass Room trailer, that can be displayed on TV monitors The Data Day poster showing the terms and conditions of online services we use throughout the day - this can also be printed out at a smaller size for visitors to take away A Data Detox Bar, where visitors can take away a Data Detox Kit: www.myshadow.,org/datadetox</p>

          <p><em>Data Detox Kit</em></p>

          <p>An essential part of The Glass Room Experience is the Data Detox Kit. Most hosts of The Glass Room Experience will be able to print their own copies of the Data Detox Kit from a normal printer or a print shop from a PDF we can send to you.</p>

          <ImageRow images={imageRow4}/>

          <p><strong>Host your own Glass Room Experience</strong></p>

          <p>Hosting your own Glass Room Experience is very easy. We’ve found it works best in busy places with plenty of free space, or as part of a bigger event. It can be set up for anytime from 2 -3 days to a longer period. It can also be set up as a longer term exhibition in libraries and other public buildings.</p>

          <p>The exhibit is visually striking and can adapt to most spaces. Generally, visitors browse the exhibits for between 5 to 15 minutes. It works as a stand-alone installation – all the exhibits have simple explanations. But it works even better if there is one or more people on hand as  “Data Detox Baristas” to explain the exhibit or give tips and advice on online privacy. </p>

          <ImageRow images={imageRow5}/>

          <p>We’ll send you The Glass Room Experience set, including:
          A set of Glass Room posters
          Pens, a magnifying glass, and a dome, and sticker strips
          A USB stick with our videoa and animations
          Full instructions on setting up The Glass Room Experience. And handling gloves!</p>

          <p>You’ll need to provide:
          3 tablets for the apps (although we can lend a set, if available)
          A space with walls space and/or tables – ideally around 20sqm or 200 sq ft
          2 people to set it up – it normally takes between 1 and 2 hours
          2 large TVs for the animations (although not essential)
          Data Detox Kits – we’ll send you the PDFs to print yourself</p>

          <p>If you’re interested, you can find out more and fill out our application form <a href="https://lime.ttc.io/index.php/827633?lang=en" target="_blank">here</a></p>

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
        imageRow1
        imageRow2
        imageRow3
        imageRow4
        imageRow5
      }
      html
    }
   }
`;
