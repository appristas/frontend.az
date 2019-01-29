import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import SEO from '../components/seo';

import styles from './page.module.css';

export default ({ data }) => {
    const { markdownRemark: post } = data;
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <article className={styles.article}>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
        </Layout>
    );
};

export const pageQuery = graphql`
    query pageByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`;
