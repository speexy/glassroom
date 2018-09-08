import React from 'react';
import {Content} from '../components/Content.js';

export default ({ data }) => {

    return (
      <div>
          <h1>{data.simple.title}</h1>
          <Content content={data.simple.html}/>
      </div>
    );

};

export const simpleQuery = graphql`
  query simpleQuery ($path: String!) {
    simple: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
      }
      html
    }
   }
`;
