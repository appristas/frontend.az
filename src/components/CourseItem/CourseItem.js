import React from 'react';

import styles from './style.module.css';

const CourseItem = ({ data }) => (
    <article className={styles.course}>
        <h2>{data.title}</h2>
    </article>
);

export default CourseItem;
