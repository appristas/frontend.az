import React from 'react';
import { node } from 'prop-types';

import styles from './styles.module.css';

const Row = ({ children }) => {
    return <div className={`${styles.row}`}>{children}</div>;
};

Row.propTypes = {
    children: node.isRequired
};

export default Row;
