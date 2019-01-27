import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  const regex = /src\s*=\s*"(.+?)"/m;
  const posts = data.allFeedMediumPub.edges.map(({ node }) => {
    const parts = regex.exec(node.content.encoded);
    let image = null;
    if (parts !== null) {
      image = parts[1];
    }
    return (
      <div>
        <img src={image} alt="" />
        {node.title}
      </div>
    );
  });

  return <Layout>{posts}</Layout>;
};

export const query = graphql`
  query {
    allFeedMediumPub {
      edges {
        node {
          title
          link
          categories
          pubDate
          content {
            encoded
          }
        }
      }
    }
  }
`;
