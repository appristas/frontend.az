import React from 'react';

import styles from './styles.module.css';

const Meta = ({ data }) => (
    <ul className={styles.meta}>
        {data.map(d => (
            <li key={d}>{d}</li>
        ))}
    </ul>
);

export default Meta;
