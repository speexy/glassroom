import React from 'react';
import {Content} from '../components/Content.js';

export default ({ data }) => {

    return (
          <Content content={data.simple.html}/>
    );

};

export const simpleQuery = graphql`
  query simpleQuery ($path: String!) {
    simple: markdownRemark(fields: { slug: { eq: $path } }) {
      html
    }
   }
`;
