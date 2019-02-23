import React from 'react';
import { shape, string, objectOf } from 'prop-types';
import styles from './style.module.css';

import Tags from '../Tags/Tags';
import { Meta } from '../Content';

const postDateOptions = { month: 'long', day: '2-digit', year: 'numeric' };

const PostItem = ({ post }) => (
    <article className={styles.article}>
        <div className={styles.imageCol}>
            <a
                className={styles.image}
                href={post.link}
                style={{ backgroundImage: `url(${post.image})` }}
            >
                <img src={post.image} alt={post.title} className="sr-only" />
            </a>
        </div>
        <div className={styles.content}>
            <h2>
                <a href={post.link}>{post.title}</a>
            </h2>
            <span className={styles.source}>
                (
                <a href={post.source.url} target="_blank" rel="external noopener noreferrer">
                    {post.source.shortUrl}
                </a>
                )
            </span>
            <div className={styles.meta}>
                <Meta
                    data={[post.creator, post.date.toLocaleDateString('az-AZ', postDateOptions)]}
                />
            </div>
            <Tags tags={post.categories} />
        </div>
    </article>
);

PostItem.propTypes = {
    post: shape({
        image: string.isRequired,
        title: string.isRequired,
        creator: string.isRequired,
        date: objectOf(Date).isRequired
    })
};

export default PostItem;
