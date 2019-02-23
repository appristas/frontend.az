import React from 'react';

import styles from './style.module.css';
import { Meta, Tags, GridCover } from '../Content';
import { Col } from '../Grid';

const CourseItem = ({ data }) => (
    <Col as="article">
        <GridCover url={data.url} image={data.attachments[0].publicURL} title={data.title} />
        <div className={styles.content}>
            <h2>
                <a href={data.url}>{data.title}</a>
            </h2>
            <Meta data={[data.author, ...data.duration, data.provider, data.type]} />
            <Tags tags={data.tags} />
        </div>
        <div className={styles.price}>{data.price}</div>
    </Col>
);

export default CourseItem;
