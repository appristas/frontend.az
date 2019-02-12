import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';

import CourseItem from '../components/CourseItem/CourseItem';

import SEO from '../components/seo';

export default ({ data }) => {
    const courses = data.allMarkdownRemark.edges.map(({ node }) => (
        <CourseItem key={node.id} data={node.frontmatter} />
    ));

    return (
        <>
            <SEO title="Kurslar" />
            <Layout>{courses}</Layout>
        </>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(filter: { fields: { collection: { eq: "courses" } } }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        price
                        author
                        tags
                        type
                        provider
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
