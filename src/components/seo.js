import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, withPrefix } from 'gatsby';

function SEO({ description, lang, keywords, title }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description;
                return (
                    <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`}>
                        <html lang={lang} />
                        <title>{title}</title>
                        <meta name="description" content={metaDescription} />
                        <meta name="keywords" content={keywords.join(',')} />
                        <meta property="og:title" content={title} />
                        <meta property="og:description" content={metaDescription} />
                        <meta property="og:type" content="website" />
                        <meta property="twitter:card" content="summary" />
                        <meta property="twitter:author" content={data.site.siteMetadata.author} />
                        <meta property="twitter:title" content={title} />
                        <meta property="twitter:description" content={metaDescription} />
                        <link rel="shortcut icon" href={withPrefix('/favicon/favicon.ico')} />
                        <link
                            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700&amp;subset=latin-ext"
                            rel="stylesheet"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="180x180"
                            href={withPrefix('/favicon/apple-touch-icon.png')}
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="32x32"
                            href={withPrefix('/favicon/favicon-32x32.png')}
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="16x16"
                            href={withPrefix('/favicon/favicon-16x16.png')}
                        />
                        <link
                            rel="mask-icon"
                            href={withPrefix('/favicon/safari-pinned-tab.svg')}
                            color="#31c6e8"
                        />
                    </Helmet>
                );
            }}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: []
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
