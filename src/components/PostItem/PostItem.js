import React from 'react';
import { shape, string } from 'prop-types';
import styles from './style.module.css';

import Tags from '../Tags/Tags';

const PostItem = ({ post }) => (
  <article className={styles.article}>
    <a
      className={styles.image}
      href={post.link}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <img src={post.image} alt={post.title} className="sr-only" />
    </a>
    <div className={styles.content}>
      <h2>
        <a href={post.link}>{post.title}</a>
      </h2>{' '}
      <span className={styles.source}>
        (
        <a
          href={post.source.url}
          target="_blank"
          rel="external noopener noreferrer"
        >
          {post.source.shortUrl}
        </a>
        )
      </span>
      <div className={styles.meta}>
        {post.creator} | {post.pubDate} | 5 min
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
    pubDate: string.isRequired
  })
};

export default PostItem;
