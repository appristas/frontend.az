import React from 'react';

import styles from './style.module.css';
import Tags from '../Tags/Tags';
import { Meta } from '../Content';

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
            <Meta data={[data.author, ...data.duration, data.provider, data.type]} />
            <Tags tags={data.tags} />
        </div>
        <div className={styles.price}>{data.price}</div>
    </article>
);

export default CourseItem;
