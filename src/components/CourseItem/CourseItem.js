import React from 'react';

import styles from './style.module.css';
import Tags from '../Tags/Tags';

const CourseItem = ({ data }) => (
    <article className={styles.course}>
        <div
            className={styles.cover}
            style={{ backgroundImage: `url(${data.attachments[0].publicURL})` }}
        >
            <img src={data.attachments[0].publicURL} alt={data.title} className="sr-only" />
        </div>
        <div className={styles.content}>
            <h2>{data.title}</h2>
            <div className={styles.meta}>
                {data.author} |{' '}
                {data.duration.map((d, k) => (
                    <React.Fragment key={k}>{d} | </React.Fragment>
                ))}{' '}
                | {data.provider} | {data.type}
            </div>

            <Tags tags={data.tags} />
        </div>
    </article>
);

export default CourseItem;
