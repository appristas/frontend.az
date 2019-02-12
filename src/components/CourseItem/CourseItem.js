import React from 'react';

import styles from './style.module.css';
import Tags from '../Tags/Tags';

const CourseItem = ({ data }) => (
    <article className={styles.course}>
        <a className={styles.cover} href={data.url}>
            <div
                className={styles.coverImage}
                style={{ backgroundImage: `url(${data.attachments[0].publicURL})` }}
            >
                <img src={data.attachments[0].publicURL} alt={data.title} className="sr-only" />
            </div>
        </a>
        <div className={styles.content}>
            <h2>
                <a href={data.url}>{data.title}</a>
            </h2>
            <div className={styles.meta}>
                {data.author} |{' '}
                {data.duration.map((d, k) => (
                    <React.Fragment key={k}>{d} | </React.Fragment>
                ))}{' '}
                {data.provider} | {data.type}
            </div>
            <Tags tags={data.tags} />
        </div>
        <div className={styles.price}>{data.price}</div>
    </article>
);

export default CourseItem;
