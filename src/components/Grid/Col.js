import React from 'react';
import { string, number, oneOfType, object, node } from 'prop-types';

import styles from './styles.module.css';

const Col = ({ as, col, children, style, className }) => {
    return React.createElement(as, {
        style,
        className: `${styles.col} ${styles[col]} ${className}`,
        children
    });
};

Col.defaultProps = {
    className: '',
    style: null,
    col: 'default',
    as: 'div'
};

Col.propTypes = {
    className: string,
    style: object,
    as: string,
    col: oneOfType([number, string]),
    children: node.isRequired
};

export default Col;
