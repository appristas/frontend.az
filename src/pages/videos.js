import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';

import VideoItem from '../components/VideoItem/VideoItem';

import SEO from '../components/seo';
import { Row } from '../components/Grid';

export default ({ data }) => {
    const videos = data.allMarkdownRemark.edges.map(({ node }) => (
        <VideoItem key={node.id} data={node.frontmatter} />
    ));

    return (
        <>
            <SEO title="Kurslar" />
            <Layout>
                <Row>{videos}</Row>
            </Layout>
        </>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(filter: { fields: { collection: { eq: "videos" } } }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        author
                        tags
                        duration
                        url
                        attachments {
                            publicURL
                        }
                    }
                }
            }
        }
    }
`;
