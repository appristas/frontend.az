import React from 'react';
import { string, number, object, node } from 'prop-types';

import styles from './styles.module.css';

const Col = ({ col, children, style, className }) => {
    return (
        <div className={`${styles[`col-${col}`]} ${className}`} style={style}>
            {children}
        </div>
    );
};

Col.defaultProps = {
    className: '',
    style: null,
    col: 1
};

Col.propTypes = {
    className: string,
    style: object,
    col: number,
    children: node.isRequired
};

export default Col;
