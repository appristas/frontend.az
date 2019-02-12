const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type !== `MarkdownRemark`) {
        return;
    }

    const parent = getNode(node.parent);

    createNodeField({
        node,
        name: 'collection',
        value: parent.sourceInstanceName
    });
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve(`src/templates/page.js`);
    return graphql(`
        {
            allMarkdownRemark(limit: 1000, filter: { fields: { collection: { eq: "pages" } } }) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {}
            });
        });
    });
};
