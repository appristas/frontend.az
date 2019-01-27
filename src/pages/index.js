import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem/PostItem';

export default ({ data }) => {
  const regex = /src\s*=\s*"(.+?)"/m;
  const posts = data.allFeedMediumPub.edges.map(({ node }) => {
    const parts = regex.exec(node.content.encoded);
    let image = null;
    if (parts !== null) {
      image = parts[1];
    }
    return (
      <PostItem
        post={{
          ...node,
          image,
          source: { url: 'https://medium.com', shortUrl: 'medium.com' }
        }}
      />
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
          creator
        }
      }
    }
  }
`;
