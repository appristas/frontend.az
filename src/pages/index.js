import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import PostItem from '../components/PostItem/PostItem';

import SEO from '../components/seo';

export default ({ data }) => {
    const regex = /src\s*=\s*"(.+?)"/m;
    const posts = data.allFeedMediumPub.edges.map((item, key) => {
        const { content, pubDate, ...post } = item.node;
        const parts = regex.exec(content.encoded);
        let image = null;
        if (parts !== null) {
            image = parts[1];
        }
        const date = new Date(pubDate);

        return (
            <PostItem
                key={key}
                post={{
                    ...post,
                    date,
                    image,
                    source: { url: 'https://medium.com', shortUrl: 'medium.com' }
                }}
            />
        );
    });

    return (
        <>
            <SEO title="Feed" />
            <Layout>{posts}</Layout>
        </>
    );
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
