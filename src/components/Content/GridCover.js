import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.css';

const GridCover = ({ url, image, title }) => {
    let Tag = url ? 'a' : 'div';
    const props = url ? { href: url } : {};

    return (
        <Tag className={styles.cover} {...props}>
            <div className={styles.coverImage} style={{ backgroundImage: `url(${image})` }}>
                <img src={image} alt={title} className="sr-only" />
            </div>
        </Tag>
    );
};

GridCover.propTypes = {
    image: string.isRequired,
    url: string,
    title: string.isRequired
};

GridCover.defaultProps = {
    url: null
};

export default GridCover;
